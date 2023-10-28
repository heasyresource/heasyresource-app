"use client";
import React, { useState } from "react";
import { apiClient } from "@/lib/interceptor/apiClient";
import { errorStyles, successStyles } from "@/utils/notificationTheme";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { obfuscateToken } from "@/utils/encryptToken";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const useSignin = () => {
  const router = useRouter();
  const [loadingSignIn, setLoadingSignIn] = useState(false);

  // Sign in Form
  const signInForm = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Enter a valid email address"),
      password: (val) => (val.length <= 1 ? "Password is required" : null),
    },
  });
  // Resend Verification Function
  const handleResend = async (data) => {
    try {
      const value = {
        email: data.email,
      };
      const res = await apiClient.post("/account/resend-code", value);
      if (res.statusCode === 200) {
        sessionStorage.setItem("mailAdress", obfuscateToken(true, data.email));
        router.push("/verification");
      }
    } catch (err) {
      console.log(err);
    }
  };
  // Form Submit Function
  const handleSignInSubmit = async (data) => {
    setLoadingSignIn(true);
    const result = await signIn("credentials", { redirect: false, ...data, callbackUrl: "/dashboard" });
    console.log({ result });
    if (result.status === 200) {
      notifications.show({
        color: "white",
        title: "Success",
        message: "Logged In Successfully.",
        styles: successStyles,
        autoClose: 2000,
      });
      setLoadingSignIn(false);
      router.push(result.url);
    } else {
      setLoadingSignIn(false);
      notifications.show({
        color: "red",
        title: "Failed",
        message: result.error,
        styles: errorStyles,
        autoClose: 2000,
      });
      if (result.error === "Your account have not been verified, please verify your account.") {
        handleResend(data);
      }
    }
  };

  return {
    signInForm,
    handleSignInSubmit,
    loadingSignIn,
  };
};

export default useSignin;
