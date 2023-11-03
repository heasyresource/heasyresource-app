import { useForm } from "@mantine/form";
import React from "react";

const useAssignLeave = () => {
  const form = useForm({
    initialValues: {
      name: "",
      type: "",
      from: "",
      to: "",
      notes: "",
    },
    validate: {
      name: (value) => (!value.length ? "Employee Name is required" : null),
      type: (value) => (!value.length ? "Leave Type is required" : null),
      from: (value) => (!value.length ? "From Date is required" : null),
      to: (value) => (!value.length ? "To Date is required" : null),
    },
  });
  const handleSubmit = async (data) => {
    try {
      console.log(data, "Submit");
    } catch (err) {
      console.log(err, "Error");
    }
  };
  return {
    handleSubmit,
    form,
  };
};

export default useAssignLeave;
