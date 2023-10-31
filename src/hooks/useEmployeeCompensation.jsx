import { useForm } from "@mantine/form";
import React from "react";

const useEmployeeCompensation = () => {
  const form = useForm({
    initialValues: {
      title: "",
      pay: "",
      currency: "",
      amount: "",
      comment: "",
    },
    validate: {
      title: (value) => (!value.length ? "Salary Component is required" : null),
      pay: (value) => (!value.length ? "Pay Frequency is required" : null),
      currency: (value) => (!value.length ? "Currency is required" : null),
      amount: (value) => (!value.length ? "Amount is required" : null),
    },
  });
  const handleSubmit = async (data) => {
    try {
      console.log(data, "value");
    } catch (err) {
      console.log(err, "Error");
    }
  };
  return {
    handleSubmit,
    form,
  };
};

export default useEmployeeCompensation;
