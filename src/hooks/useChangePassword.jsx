"use client";
import { apiClient } from "@/lib/interceptor/apiClient";
import { errorStyles } from "@/utils/notificationTheme";
import { getSubdomain } from "@/utils/publicFunctions";
import { Box, Button, Image, Stack, Text, Title } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useSession } from "next-auth/react";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { modals } from "@mantine/modals";
import { notifications } from "@mantine/notifications";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const useChangePassword = () => {
  const router = useRouter();
  const subdomain = getSubdomain();
  const [loading, setLoading] = useState(false);
  const { data: session } = useSession();
  const [opened, { open, close }] = useDisclosure(false);
  const [popoverOpened, setPopoverOpened] = useState(false);
  const isMobile = useMediaQuery("(max-width: 500px)");
  const form = useForm({
    initialValues: {
      currentPassword: "",
      newPassword: "",
    },
    validate: {
      currentPassword: (value) =>
        !value.length
          ? "Enter your current password"
          : value.length >= 8
          ? null
          : "Password should be atleast 8 characters",
      newPassword: (value) =>
        !value.length
          ? "Enter your new password"
          : value.length >= 8
          ? null
          : "Password should be atleast 8 characters",
    },
  });
  const handleRouteChange = () => {
    modals.closeAll();
    router.push("/employee");
  };
  const openModal = () =>
    modals.open({
      radius: "md",
      centered: true,
      withCloseButton: false,
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
              Password Change Successful
            </Title>
            <Text c="#1E1E1E" size="13px" mt="5px">
              Your Password has been Successfully Changed!
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

  const handleFormSubmit = async (data) => {
    setLoading(true);

    try {
      await apiClient.put("/password/change", data, {
        headers: {
          Authorization: `Bearer ${session?.user.token}`, // Include the authorization header
          "x-subdomain-name": subdomain,
        },
      });
      openModal();
      setLoading(true);
    } catch (err) {
      if (err.errors) {
        err.errors.forEach((error) => {
          const { field, message } = error;

          form.setFieldError(field, message);
        });
      }
      setLoading(false);
      notifications.show({
        color: "red",
        title: "Failed",
        message: err.message,
        styles: errorStyles,
        autoClose: 7000,
      });
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

export default useChangePassword;
