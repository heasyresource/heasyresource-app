"use client";
import { useForm } from "@mantine/form";
import React from "react";

const useEmergencyContact = () => {
  const form = useForm({
    initialValues: {
      firstName: "",
      lastName: "",
      relationship: "",
      homeAddress: "",
      phoneNumber: "",
      email: "",
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
      relationship: (value) =>
        !value.length ? "Relationship is required" : null,
      homeAddress: (value) =>
        !value.length ? "Home Address is required" : null,
      phoneNumber: (value) =>
        !value.length ? "Phone Number is required" : null,
      email: (value) =>
        /^\S+@\S+$/.test(value) ? null : "Enter a valid email",
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

export default useEmergencyContact;
