"use client";
import { apiClient } from "@/lib/interceptor/apiClient";
import { obfuscateToken } from "@/utils/encryptToken";
import { errorStyles } from "@/utils/notificationTheme";
import { getSubdomain } from "@/utils/publicFunctions";
import { Box, Button, Image, Stack, Text, Title } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { modals } from "@mantine/modals";
import { notifications } from "@mantine/notifications";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const useResetPassword = () => {
  const router = useRouter();
  const subdomain = getSubdomain();
  const [loading, setLoading] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);
  const [popoverOpened, setPopoverOpened] = useState(false);
  const isMobile = useMediaQuery("(max-width: 500px)");
  const form = useForm({
    initialValues: {
      newPassword: "",
      confirmPassword: "",
    },
    validate: {
      newPassword: (value) =>
        value.length >= 8 ? null : "Include at least 8 characters",
      confirmPassword: (value, values) =>
        !value.length
          ? "Confirm Password is required"
          : value !== values.newPassword
          ? "Password did not match"
          : null,
    },
  });
  const handleRouteChange = () => {
    modals.closeAll();
    router.push("/signin");
  };
  const openModal = () =>
    modals.open({
      radius: "md",
      centered: true,
      children: (
        <Stack
          gap={"20px"}
          justify={"center"}
          align={"center"}
          pb={15}
          pt="2rem"
          px={isMobile ? 0 : 46}
        >
          <Box w={"50px"} h={"auto"}>
            <Image src={"/assets/svgs/verified.svg"} alt="verified" />
          </Box>
          <Box ta={"center"}>
            <Title order={isMobile ? 4 : 3} c="#000000">
              Password Reset Successful
            </Title>
            <Text c="#1E1E1E" size="13px" mt="5px">
              Your Password has been Successfully Updated!
            </Text>
          </Box>
          <Button
            fullWidth
            onClick={() => handleRouteChange()}
            tt="capitalize"
            bg="#3377FF"
            size="md"
          >
            continue
          </Button>
        </Stack>
      ),
    });

  const handleResend = async (data) => {
    try {
      const value = {
        email: data.email,
      };
      const res = await apiClient.post("/password/forgot", value, {
        headers: { "x-subdomain-name": subdomain },
      });
      if (res.statusCode === 200) {
        sessionStorage.setItem("mailAdress", obfuscateToken(true, data.email));
        router.push("/verification");
      }
    } catch (err) {}
  };
  const handleFormSubmit = async (data) => {
    setLoading(true);
    const resetStore =
      sessionStorage.getItem("resetPasswordCode") &&
      obfuscateToken(false, sessionStorage.getItem("resetPasswordCode") ?? "");
    const parsedData = JSON.parse(resetStore);
    const modifiedValues = {
      newPassword: data.newPassword,
      ...parsedData,
    };

    try {
      await apiClient.put("/password/reset", modifiedValues, {
        headers: { "x-subdomain-name": subdomain },
      });
      openModal();
      setLoading(true);
    } catch (err) {
      setLoading(false);
      if (err.message === "Reset password code expired.") {
        notifications.show({
          color: "red",
          title: "Failed",
          message: "Check for a new code!",
          styles: errorStyles,
          autoClose: 7000,
        });
        sessionStorage.setItem(
          "verificationType",
          obfuscateToken(true, "forgotPassword")
        );
        router.push("/verification");
        handleResend(modifiedValues);
      } else if (err.message === "Invalid reset password code.") {
        notifications.show({
          color: "red",
          title: "Failed",
          message: "Check for a new code!",
          styles: errorStyles,
          autoClose: 7000,
        });
        router.push("/verification");
        handleResend(modifiedValues);
      } else {
        if (err.errors) {
          err.errors.forEach((error) => {
            const { field, message } = error;

            form.setFieldError(field, message);
          });
        }
        notifications.show({
          color: "red",
          message: err.message,
          styles: errorStyles,
          autoClose: 7000,
        });
      }
    }
  };
  return {
    loading,
    form,
    handleFormSubmit,
    opened,
    open,
    close,
    popoverOpened,
    setPopoverOpened,
    isMobile,
  };
};

export default useResetPassword;
