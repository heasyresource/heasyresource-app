"use client";
import { useForm } from "@mantine/form";
import React, { useState } from "react";

const useContactDetail = () => {
  const [loading, setLoading] = useState();
  const form = useForm({
    initialValues: {
      fullName: "",
      lga: "",
      state: "",
      code: "",
      country: "",
      homeTel: "",
      mobileTel: "",
      workTel: "",
      workEmail: "",
      personalEmail: "",
    },
    validate: {
      fullName: (value) =>
        value.length < 1
          ? "Full Name is required"
          : /^[A-Za-z]+$/.test(value)
          ? null
          : "Full Name must contain only alphabets.",
      lga: (value) => (!value.length ? "LGA is required" : null),
      state: (value) => (!value.length ? "State is required" : null),
      code: (value) => (!value.length ? "Zip Code is required" : null),
      country: (value) => (!value.length ? "Country is required" : null),
      homeTel: (value) =>
        value.length < 10 ? "Enter a valid  home phone number" : null,
      workTel: (value) =>
        value.length < 10 ? "Enter a valid  work phone number" : null,
      mobileTel: (value) =>
        value.length < 10 ? "Enter a valid  mobiile phone number" : null,
      workEmail: (val) =>
        /^\S+@\S+$/.test(val) ? null : "Enter a valid work email",
      personalEmail: (val) =>
        /^\S+@\S+$/.test(val) ? null : "Enter a valid personal email",
    },
  });
  const handleSubmit = async (data) => {
    setLoading(true);
    try {
      consolelog(data, "value");
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err, "value error");
    }
  };
  return {
    handleSubmit,
    form,
    loading,
  };
};

export default useContactDetail;
