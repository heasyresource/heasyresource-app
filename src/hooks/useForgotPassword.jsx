"use client";
import { apiClient } from "@/lib/interceptor/apiClient";
import { obfuscateToken } from "@/utils/encryptToken";
import { errorStyles, successStyles } from "@/utils/notificationTheme";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { getSubdomain } from "@/utils/publicFunctions";

const useForgotPassword = () => {
  const router = useRouter();
  const subdomain = getSubdomain();
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
      const res = await apiClient.post("/password/forgot", data, {
        headers: { "x-subdomain-name": subdomain },
      });
      notifications.show({
        color: "white",
        title: "Success",
        message: res?.message,
        styles: successStyles,
        autoClose: 7000,
      });
      setLoading(false);
      sessionStorage.setItem("mailAdress", obfuscateToken(true, data.email));
      sessionStorage.setItem(
        "verificationType",
        obfuscateToken(true, "forgotPassword")
      );
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
