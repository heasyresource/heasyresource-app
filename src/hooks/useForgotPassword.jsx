"use client";
import { apiClient } from "@/lib/interceptor/apiClient";
import { obfuscateToken } from "@/utils/encryptToken";
import { errorStyles, successStyles } from "@/utils/notificationTheme";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const useForgotPassword = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const form = useForm({
    initialValues: {
      email: "",
    },
    validate: {
      email: (value) =>
        /^\S+@\S+$/.test(value) ? null : "Enter a valid email address",
    },
  });
  const handleSubmit = async (data) => {
    setLoading(true);
    try {
      const res = await apiClient.post("/account/resend-code", data);
      console.log(res, "forgot password data");
      notifications.show({
        color: "white",
        title: "Success",
        message: "Password reset successfully",
        styles: successStyles,
        autoClose: 15000,
      });
      setLoading(false);
      sessionStorage.setItem("mailAdress", obfuscateToken(true, data.email));
      router.push("/verification");
    } catch (err) {
      console.log(err, "forgot password error");
      notifications.show({
        color: "red",
        title: "Error",
        message: err.message,
        styles: errorStyles,
        autoClose: 15000,
      });
      setLoading(false);
    }
  };
  return {
    form,
    loading,
    handleSubmit,
  };
};

export default useForgotPassword;
