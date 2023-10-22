"use client";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import React, { useState } from "react";

const useSignin = () => {
  const [loadingSignIn, setLoadingSignIn] = useState(false);
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
  const handleSignInSubmit = async (data) => {
    setLoadingSignIn(true);
    try {
      console.log(data, "signin");
      notifications.show({
        title: 'Success',
        message: 'Signin successful',
      })
    } catch (err) {
      setLoadingSignIn(false);
      console.log(err);
      notifications.show({
        color: "red",
        title: 'Error',
        message: 'Signin unsuccessful',
      })
    }
  };
  return {
    signInForm,
    handleSignInSubmit,
    loadingSignIn,
  };
};

export default useSignin;
