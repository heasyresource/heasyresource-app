"use client";
import { apiClient } from "@/lib/interceptor/apiClient";
import { obfuscateToken } from "@/utils/encryptToken";
import { errorStyles, successStyles } from "@/utils/notificationTheme";
import { useForm } from "@mantine/form";
import { useMediaQuery } from "@mantine/hooks";
import { notifications } from "@mantine/notifications";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const useSignup = () => {
  const router = useRouter();
  const isMobile = useMediaQuery(`(max-width: 768px)`);
  const [loadingCompanyInfo, setLoadingCompanyInfo] = useState(false);
  const [loadingCompanyRep, setLoadingCompanyRep] = useState(false);
  const [popoverOpened, setPopoverOpened] = useState(false);
  const [step, setStep] = useState(1);

  // Step 1: Form
  const companyInfoForm = useForm({
    initialValues: {
      companyName: "",
      companyEmail: "",
      companyWebsite: "",
      industryId: "",
      companyPhoneNumber: "",
    },
    validate: {
      companyEmail: (val) =>
        /^\S+@\S+$/.test(val) ? null : "Enter a valid email",
      companyName: (val) => (val.length < 1 ? "Enter a valid name" : null),
      companyWebsite: (val) =>
        /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w.-]*)*\/?$/.test(val)
          ? null
          : "Enter a valid url",
      companyPhoneNumber: (val) =>
        val.length >= 10 ? null : "Enter a valid phone number",
      industryId: (val) => (!val.length ? "Select a field/industry" : null),
    },
  });

  // Step 2: Form
  const companyRepForm = useForm({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      position: "",
      password: "",
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
      position: (val) => (val.length < 1 ? "Enter a valid position" : null),
      password: (val) => (val.length === 8 ? null : "Password should be 8 characters")
    },
  });

  //Step 1: Function
  const handleCompanyInfoSubmit = async (data) => {
    setLoadingCompanyInfo(true);
    const values = {
      ...data,
      companyPhoneNumber: `+234${data.companyPhoneNumber}`,
    };
    try {
      const res = await apiClient.post("validate/company-info", values);

      if (res.statusCode === 201 || res.statusCode === 200) {
        sessionStorage.setItem(
          "stepOne",
          obfuscateToken(true, JSON.stringify(values))
        );
        notifications.show({
          color: "white",
          title: "Success",
          message: "Step one successful",
          styles: successStyles,
          autoClose: 2000,
        });
        setStep(() => step + 1);
      }
    } catch (err) {
      if (err.errors) {
        err.errors.forEach((error) => {
          const { field, message } = error;
          console.log(field, message, "message");
          companyInfoForm.setFieldError(field, message);
        });
      }
      setLoadingCompanyInfo(false);
      console.log(err);
      notifications.show({
        color: "red",
        title: "Error",
        message: "Step one unsuccessful",
        styles: errorStyles,
        autoClose: 2000,
      });
    }
  };
  //Resend Verification
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

  //Step 2: Function
  const handleCompanyRepSubmit = async (data) => {
    const stepOneData =
      sessionStorage.getItem("stepOne") &&
      obfuscateToken(false, sessionStorage.getItem("stepOne") ?? "");
    const parsedData = JSON.parse(stepOneData);
    setLoadingCompanyRep(true);
    try {
      const values = {
        ...data,
        ...parsedData,
      };
      const res = await apiClient.post("/register", values);
      if (res.statusCode === 200 || res.statusCode === 201) {
        sessionStorage.removeItem("stepOne");
        notifications.show({
          color: "white",
          title: "Registration successful",
          message: "Check your mail for verification",
          styles: successStyles,
          autoClose: 2000,
        });
        handleResend(data);
        router.push("/verification");
      }
    } catch (err) {
      setLoadingCompanyRep(false);
      console.log(err);
      notifications.show({
        color: "red",
        title: "Registration unsuccessful",
        message: err.errors[0].message,
        styles: errorStyles,
        autoClose: 2000,
      });
    }
  };
  useEffect(() => {
    const stepOneData =
      sessionStorage.getItem("stepOne") && sessionStorage.getItem("stepOne");
    if (stepOneData) {
      setStep(2);
    }
  }, []);

  const fields = [
    {
      value: uuidv4(),
      label: "Information Technology",
    },
    {
      value: uuidv4(),
      label: "Graphic Designer",
    },
    {
      value: uuidv4(),
      label: "Cyber Security",
    },
    {
      value: uuidv4(),
      label: "Software Engineer",
    },
    {
      value: uuidv4(),
      label: "Data Analysis",
    },
  ];
  return {
    companyInfoForm,
    companyRepForm,
    handleCompanyInfoSubmit,
    handleCompanyRepSubmit,
    popoverOpened,
    loadingCompanyInfo,
    loadingCompanyRep,
    setPopoverOpened,
    fields,
    isMobile,
    step,
  };
};

export default useSignup;
