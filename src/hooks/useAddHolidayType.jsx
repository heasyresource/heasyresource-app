import { useForm } from "@mantine/form";
import React from "react";

const useAddHolidayType = () => {
  const form = useForm({
    initialValues: {
      name: "",
      day: "",
      date: "",
      avalability: "",
      paid: "",
      notes: "",
    },
    validate: {
      name: (value) => (!value.length ? "Leave Type Name is required" : null),
      avalability: (value) =>
        !value.length ? "Avalability is required" : null,
      day: (value) => (!value.length ? "Field is required" : null),
      date: (value) => (!value.length ? "Date is required" : null),
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

export default useAddHolidayType;
