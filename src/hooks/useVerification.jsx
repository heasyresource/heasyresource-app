"use client";
import { apiClient } from "@/lib/interceptor/apiClient";
import { obfuscateToken } from "@/utils/encryptToken";
import { errorStyles, successStyles } from "@/utils/notificationTheme";
import { Box, Button, Image, Stack, Text, Title } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useMediaQuery } from "@mantine/hooks";
import { modals } from "@mantine/modals";
import { notifications } from "@mantine/notifications";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const useVerification = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false);
  const isMobile = useMediaQuery("(max-width: 500px)");
  const [email, setEmail] = useState("");
  
  const form = useForm({
    initialValues: {
      verificationCode: "",
    },
    validate: {
      verificationCode: (val) => (val.length < 6 ? "Enter code" : null),
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
              Verification Successful
            </Title>
            <Text c="#1E1E1E" size="13px" mt="5px">
              Your aacount has been verified successfully
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

  const handleSubmit = async (data) => {
    setLoading(true);
    try {
      const values = {
        ...data,
        email: email,
      };
      await apiClient.post("/account/verify", values);
      setLoading(false);
      openModal();
    } catch (err) {
      setLoading(false);

      notifications.show({
        color: "red",
        title: "Unsuccessful",
        message: err.message,
        styles: errorStyles,
        autoClose: 2000,
      });
    }
  };

  const handleResend = async () => {
    setLoading(true);
    try {
      const value = {
        email: email,
      };
      await apiClient.post("/account/resend-code", value);
      notifications.show({
        color: "white",
        title: "Success",
        message: "Check your mail for code",
        styles: successStyles,
        autoClose: 2000,
      });
      setLoading(false);
    } catch (err) {
      setLoading(false);
      notifications.show({
        color: "red",
        title: "Error",
        message: err.message,
        styles: errorStyles,
        autoClose: 2000,
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
    handleResend
  };
};

export default useVerification;
