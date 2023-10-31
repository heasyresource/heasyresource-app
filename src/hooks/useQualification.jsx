"use client";
import { useForm } from "@mantine/form";
import React from "react";

const useQualification = () => {
  const form = useForm({
    initialValues: {
      companyName: "",
      jobTitle: "",
      startDate: "",
      endDate: "",
      comment: "",
      instituteName: "",
      specialization: "",
      eduStart: "",
      eduEnd: "",
      level: "",
    },
    validate: {
      companyName: (value) =>
        !value.length ? "Company Name is required" : null,
      jobTitle: (value) => (!value.length ? "Job Title is required" : null),
      startDate: (value) => (!value.length ? "Start Date is required" : null),
      endDate: (value) => (!value.length ? "End Date is required" : null),
      instituteName: (value) =>
        !value.length ? "Institute Name is required" : null,
      specialization: (value) =>
        !value.length ? " Specialization is required" : null,
      eduEnd: (value) => (!value.length ? "End Date is required" : null),
      eduStart: (value) => (!value.length ? "Start Date is required" : null),
      level: (value) => (!value.length ? "Level is required" : null),
    },
  });
  const handleSubmit = async (data) => {
    try {
      console.log(data, "value");
    } catch (err) {
      console.log(err, "Error submitting");
    }
  };
  return {
    form,
    handleSubmit,
  };
};

export default useQualification;
