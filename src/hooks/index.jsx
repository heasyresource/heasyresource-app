"use client";

import { useForm } from "@mantine/form";
import React, { useState } from "react";

const useCustomAuthHook = () => {
  const [loadingSignIn, setLoadingSignIn] = useState(false)
  const [loadingCompanyInfo, setLoadingCompanyInfo] = useState(false)
  const [loadingCompanyRep, setLoadingCompanyRep] = useState(false)
    const [popoverOpened, setPopoverOpened] = useState(false);
  const [step, setStep] = useState(2);
  const signInForm = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      password: (val) =>
        val.length <= 8
          ? "Password should include at least 8 characters"
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
      name: (val) => val.length < 1 ? "Enter valid name" : null,
      website: (val) => (/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w.-]*)*\/?$/.test(val) ? null : "Enter a  valid url"),
      phoneNumber: (val) => val.length === 10 ? null : "Enter a valid phone number",
      field: (val) => !val.length ? "Select a field" : null
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
        value !== values.password ? "Password did not match" : null,
        phoneNumber: (val) => val.length === 10 ? null : "Enter a valid phone number",
        position: (val) => !val.length ? "Enter a valid position" : null,
    },
  });
  const handleSignInSubmit = async (data) => {
    setLoadingSignIn(true)
    try {
      console.log(data, "signin");
    } catch (err) {
      setLoadingSignIn(false)
      console.log(err);
    }
  };
  const handleCompanyInfoSubmit = async (data) => {
    setLoadingCompanyInfo(true)
    try {
      console.log(data, "company info");
      setStep(2);
      console.log(step);
    } catch (err) {
      setLoadingCompanyInfo(false)
      console.log(err);
    }
  };
  const handleCompanyRepSubmit = async (data) => {
    setLoadingCompanyRep(true)
    try {
      console.log(data, "company info");
      setStep(2);
      console.log(step);
    } catch (err) {
      setLoadingCompanyRep(false)
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
    loadingCompanyInfo,
    loadingCompanyRep,
    loadingSignIn
  };
};

export default useCustomAuthHook;
