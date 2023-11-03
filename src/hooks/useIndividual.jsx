"use client";
import { useForm } from "@mantine/form";
import React from "react";

const useIndividual = () => {
  const form = useForm({
    initialValues: {
      firstName: "",
      middleName: "",
      lastName: "",
      employeeId: "",
      jobTitle: "",
      department: "",
      workEmail: "",
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
      jobTitle: (value) => (!value.length ? "Job Title is required" : null),
      employeeId: (value) => (!value.length ? "Employee ID is required" : null),
      department: (value) => (!value.length ? "Department is required" : null),
      workEmail: (value) =>
        /^\S+@\S+$/.test(value) ? null : "Enter a valid email",
      gender: (value) => (!value.length ? "Gender is required" : null),
    },
  });
  const handleSubmit = async (data) => {
    try {
      console.log(data, "value data");
    } catch (err) {
      console.log(err, "value");
    }
  };
  return {
    form,
    handleSubmit,
  };
};

export default useIndividual;
