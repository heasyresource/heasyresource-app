"use client";
import React, { useEffect, useState } from "react";
import { apiClient } from "@/lib/interceptor/apiClient";
import { errorStyles, successStyles } from "@/utils/notificationTheme";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { obfuscateToken } from "@/utils/encryptToken";
import { useRouter } from "next/navigation";

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
      email: (val) =>
        /^\S+@\S+$/.test(val) ? null : "Enter a valid email address",
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
        sessionStorage.setItem("mailAdress", obfuscateToken(true, data.email))
        router.push("/verification");
      }
    } catch (err) {
      console.log(err);
    }
  };
  // Form Submit Function
  const handleSignInSubmit = async (data) => {
    setLoadingSignIn(true);
    try {
      const res = await apiClient.post(`/login`, data);
      if (res.statusCode === 200) {
        localStorage.setItem(
          "access_token",
          obfuscateToken(true, res.token.token)
        );
        localStorage.setItem(
          "refresh_token",
          obfuscateToken(true, res.token.refreshToken)
        );
        localStorage.setItem("user", obfuscateToken(true, res.user));
        notifications.show({
          color: "white",
          title: "Success",
          message: "Signin successful",
          styles: successStyles,
          autoClose: 15000,
        });
        setLoadingSignIn(false);
        router.push("/");
      }
    } catch (err) {
      setLoadingSignIn(false);
      console.log(err, "error signing in");
      notifications.show({
        color: "red",
        title: "Unsuccessful",
        message: err.message,
        styles: errorStyles,
        autoClose: 15000,
      });
      if (
        err.message ===
        "Your account have not been verified, please verify your account."
      ) {
        handleResend(data);
      }
    }
  };
  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      router.push("/");
    }
  
  }, []);

  return {
    signInForm,
    handleSignInSubmit,
    loadingSignIn,
  };
};

export default useSignin;
