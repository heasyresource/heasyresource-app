import { useForm } from "@mantine/form";
import React from "react";

const useAddLeaveType = () => {
  const form = useForm({
    initialValues: {
      name: "",
      avalability: "",
      paid: "",
      notes: "",
    },
    validate: {
      name: (value) => (!value.length ? "Leave Type Name is required" : null),
      avalability: (value) =>
        !value.length ? "Availability is required" : null,
      paid: (value) => (!value.length ? "Field is required" : null),
    },
  });
  const handleSubmit = async (data) => {
    try {
      console.log(data, "Submit");
    } catch (err) {
      console.log(err, "Error submitting");
    }
  };
  return { form, handleSubmit };
};

export default useAddLeaveType;
