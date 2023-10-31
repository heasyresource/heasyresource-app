"use client";
import { useForm } from "@mantine/form";
import React, { useState } from "react";

const usePersonalDetail = () => {
  const [loading, setLoading] = useState();
  const form = useForm({
    initialValues: {
      firstName: "",
      middleName: "",
      lastName: "",
      employeeId: "",
      nationality: "",
      maritalStatus: "",
      dob: "",
      gender: "",
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
      middleName: (value) =>
        value.length < 1
          ? "Middle Name is required"
          : /^[A-Za-z]+$/.test(value)
          ? null
          : "Middle Name must contain only alphabets.",
      employeeId: (value) => (!value.length ? "Employee ID is required" : null),
      nationality: (value) =>
        !value.length ? "Nationality is required" : null,
      maritalStatus: (value) =>
        !value.length ? "Marital Status is required" : null,
      dob: (value) => (!value.length ? "Dob is required" : null),
      gender: (value) => (!value.length ? "Gender is required" : null),
    },
  });
  const handleSubmit = async (data) => {
    setLoading(true);
    try {
      console.log(data, "values");
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err, "values error");
    }
  };
  return {
    form,
    handleSubmit,
    loading,
  };
};

export default usePersonalDetail;
