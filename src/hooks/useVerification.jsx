"use client";
import { apiClient } from "@/lib/interceptor/apiClient";
import { obfuscateToken } from "@/utils/encryptToken";
import { errorStyles, successStyles } from "@/utils/notificationTheme";
import { getSubdomain } from "@/utils/publicFunctions";
import { Box, Button, Image, Stack, Text, Title, Loader } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useMediaQuery } from "@mantine/hooks";
import { modals } from "@mantine/modals";
import { notifications } from "@mantine/notifications";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const useVerification = () => {
  const subdomain = getSubdomain();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const isMobile = useMediaQuery("(max-width: 500px)");
  const [email, setEmail] = useState("");
  const [routeLoading, setRouteLoading] = useState(false);

  const form = useForm({
    initialValues: {
      verificationCode: "",
    },
    validate: {
      verificationCode: (val) => (val.length < 6 ? "Enter code" : null),
    },
  });
  const handleRouteChange = async (payload) => {
    setRouteLoading(true);
    modals.closeAll();
    console.log({ payload });
    const result = await signIn("user-token", {
      redirect: true,
      ...payload,
      callbackUrl: "/complete-registration",
    });

    // router.push(result.url);
  };
  const openModal = (payload) =>
    modals.open({
      radius: "md",
      centered: true,
      closeOnClickOutside: false,
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
            <Image src="/assets/svgs/verified.svg" alt="verified" />
          </Box>
          <Box ta={"center"}>
            <Title order={isMobile ? 4 : 3} c="#000000">
              Verification Successful
            </Title>
            <Text c="#1E1E1E" size="13px" mt="5px">
              Your account has been verified successfully
            </Text>
          </Box>
          <Button
            fullWidth
            onClick={() => handleRouteChange(payload)}
            tt="capitalize"
            bg="#3377FF"
            size="md"
          >
            {routeLoading ? (
              <Loader size="md" color="white" type="dots" />
            ) : (
              "continue"
            )}
          </Button>
        </Stack>
      ),
    });

  const handleSubmit = async (data) => {
    setLoading(true);
    const type =
      sessionStorage.getItem("verificationType") &&
      obfuscateToken(false, sessionStorage.getItem("verificationType") ?? "");
    try {
      if (type === "registration") {
        const result = await apiClient.post("/account/verify", {
          ...data,
          email: email,
        });
        if (result.statusCode === 200) {
          const { token, user } = result.results;
          const payload = {
            token: JSON.stringify(token),
            user: JSON.stringify(user),
          };
          console.log({ payload });
          setLoading(false);
          openModal(payload);
        }
      }
      if (type === "forgotPassword") {
        await apiClient.post(
          "/password/verify-code",
          {
            email: email,
            resetPasswordCode: data.verificationCode,
          },
          {
            headers: { "x-subdomain-name": subdomain },
          }
        );
        const values = {
          email: email,
          resetPasswordCode: data.verificationCode,
        };
        obfuscateToken(
          true,
          sessionStorage.setItem("resetPasswordCode", JSON.stringify(values))
        );
        router.push("/new-password");
      }
    } catch (err) {
      form.reset();
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

  const handleResend = async () => {
    setLoading(true);
    const type =
      sessionStorage.getItem("verificationType") &&
      obfuscateToken(false, sessionStorage.getItem("verificationType") ?? "");
    try {
      const value = {
        email: email,
      };
      if (type === "registration") {
        await apiClient.post("/account/resend-code", value);
      }
      if (type === "forgotPassword") {
        await apiClient.post("/password/forgot", value, {
          headers: { "x-subdomain-name": subdomain },
        });
      }
      notifications.show({
        color: "white",
        title: "Success",
        message: "Check your mail for code",
        styles: successStyles,
        autoClose: 7000,
      });
      setLoading(false);
    } catch (err) {
      setLoading(false);
      notifications.show({
        color: "red",
        title: "Error",
        message: err.message,
        styles: errorStyles,
        autoClose: 7000,
      });
    }
  };
  useEffect(() => {
    const address =
      sessionStorage.getItem("mailAdress") &&
      obfuscateToken(false, sessionStorage.getItem("mailAdress") ?? "");
    setEmail(address);
  }, []);

  return {
    form,
    loading,
    handleSubmit,
    isMobile,
    email,
    handleResend,
  };
};

export default useVerification;
