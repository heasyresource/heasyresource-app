"use client";

import { Box } from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconCheck } from "@tabler/icons-react";
import { IconX } from "@tabler/icons-react";
import React, { useState } from "react";

const useCustomAuthHook = () => {
    const [popoverOpened, setPopoverOpened] = useState(false);
  const [step, setStep] = useState(1);
  const signInForm = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      password: (val) =>
        val.length <= 6
          ? "Password should include at least 6 characters"
          : null,
    },
  });
  const companyInfoForm = useForm({
    initialValues: {
      name: "",
      email: "",
      website: "",
      field: "",
      phoneNumber: "",
    },
    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
    },
  });
  const companyRepForm = useForm({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      position: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    },
    validate: {
      firstName: (value) =>
        /^[A-Za-z]+$/.test(value) ? null : "No special characters or number",
      lastName: (value) =>
        /^[A-Za-z]+$/.test(value) ? null : "No special characters or number",
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      confirmPassword: (value, values) =>
        value !== values.password ? "Passwords did not match" : null,
    },
  });
  const handleSignInSubmit = async (data) => {
    try {
      console.log(data, "signin");
    } catch (err) {
      console.log(err);
    }
  };
  const handleCompanyInfoSubmit = async (data) => {
    try {
      console.log(data, "company info");
      setStep(2);
      console.log(step);
    } catch (err) {
      console.log(err);
    }
  };
  const handleCompanyRepSubmit = async (data) => {
    try {
      console.log(data, "company info");
      setStep(2);
      console.log(step);
    } catch (err) {
      console.log(err);
    }
  };

  return {
    companyInfoForm,
    signInForm,
    handleCompanyInfoSubmit,
    handleSignInSubmit,
    companyRepForm,
    handleCompanyRepSubmit,
    step,
    popoverOpened,
    setPopoverOpened,
  };
};

export default useCustomAuthHook;
