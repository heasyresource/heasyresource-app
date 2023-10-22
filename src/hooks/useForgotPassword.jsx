"use client";
import { successStyles } from "@/utils/notificationTheme";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import React, { useState } from "react";

const useForgotPassword = () => {
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
      console.log(data, "forgot password data");
      notifications.show({
        color: "white",
        title: "Success",
        message: "Submission successful",
        styles: successStyles,
        autoClose: 2000
      });
    } catch (err) {
      console.log(err, "forgot password error");
      notifications.show({
        color: "red",
        title: "Error",
        message: "Submission unsuccessful",
        styles: errorStyles,
        autoClose: 2000
      });
    }
  };
  return {
    form,
    loading,
    handleSubmit,
  };
};

export default useForgotPassword;
