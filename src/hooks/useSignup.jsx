"use client"
import { errorStyles, successStyles } from "@/utils/notificationTheme";
import { useForm } from "@mantine/form";
import { useMediaQuery } from "@mantine/hooks";
import { notifications } from "@mantine/notifications";
import React, { useState } from "react";

const useSignup = () => {
  const isMobile = useMediaQuery(`(max-width: 768px)`);
  const [loadingCompanyInfo, setLoadingCompanyInfo] = useState(false);
  const [loadingCompanyRep, setLoadingCompanyRep] = useState(false);
  const [popoverOpened, setPopoverOpened] = useState(false);
  const [step, setStep] = useState(1);
  const companyInfoForm = useForm({
    initialValues: {
      name: "",
      email: "",
      website: "",
      field: "",
      phoneNumber: "",
    },
    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Enter a valid email"),
      name: (val) => (val.length < 1 ? "Enter a valid name" : null),
      website: (val) =>
        /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w.-]*)*\/?$/.test(val)
          ? null
          : "Enter a valid url",
      phoneNumber: (val) =>
        val.length >= 10 ? null : "Enter a valid phone number",
      field: (val) => (!val.length ? "Select a field/industry" : null),
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
        value.length < 1
          ? "First Name is required"
          : /^[A-Za-z]+$/.test(value)
          ? null
          : "First Name must contain only alphabets.",
      lastName: (value) =>
        value.length < 1
          ? "Last Name is required"
          : /^[A-Za-z]+$/.test(value)
          ? null
          : "Last Name must contain only alphabets.",
      email: (value) =>
        /^\S+@\S+$/.test(value) ? null : "Enter a valid email address",
      confirmPassword: (value, values) =>
        value !== values.password ? "Password did not match" : null,
      phoneNumber: (val) =>
        val.length === 10 ? null : "Enter a valid phone number",
      position: (val) => (!val.length ? "Enter a valid position" : null),
    },
  });
  const handleCompanyInfoSubmit = async (data) => {
    setLoadingCompanyInfo(true);
    try {
      notifications.show({
        color: "white",
        title: "Success",
        message: "Step one successful",
        styles: successStyles,
        autoClose: 2000
      });
      setStep(() => step +1)
     
      console.log(data, "company info");
        console.log(step, "inside");

    } catch (err) {
      setLoadingCompanyInfo(false);
      console.log(err);
      notifications.show({
        color: "red",
        title: "Error",
        message: "Step one unsuccessful",
        styles: errorStyles,
        autoClose: 2000
      });
    }
  };

  const handleCompanyRepSubmit = async (data) => {
    setLoadingCompanyRep(true);
    try {

      console.log(data, "company info");
      notifications.show({
        color: "white",
        title: "Success",
        message: "Registration successful",
        styles: successStyles,
        autoClose: 2000
      });

      console.log(step);
    } catch (err) {
      setLoadingCompanyRep(false);
      console.log(err);
      notifications.show({
        color: "red",
        title: "Error",
        message: "Registration unsuccessful",
        styles: errorStyles,
        autoClose: 2000
      });
    }
  };
  console.log(step, "outside");
  return {
    companyInfoForm,
    companyRepForm,
    handleCompanyInfoSubmit,
    handleCompanyRepSubmit,
    popoverOpened,
    loadingCompanyInfo,
    loadingCompanyRep,
    setPopoverOpened,
    isMobile,
    step,
  };
};

export default useSignup;
