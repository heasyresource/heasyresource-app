import { useForm } from "@mantine/form";
import React from "react";

const useEmployementInfo = () => {
  const form = useForm({
    initialValues: {
      title: "",
      specification: "",
      joinedDate: "",
      category: "",
      status: "",
      supervisor: "",
      method: "",
    },
    validate: {
      title: (value) => (!value.length ? "Job Title is required" : null),
      specification: (value) =>
        !value.length ? "Job specification is required" : null,
      joinedDate: (value) => (!value.length ? "Joined Date is required" : null),
      category: (value) => (!value.length ? "Job category is required" : null),
      status: (value) =>
        !value.length ? "Employement status is required" : null,
      supervisor: (value) => (!value.length ? " Supervisor is required" : null),
      method: (value) => (!value.length ? "Report method is required" : null),
    },
  });
  const handleSubmit = async (data) => {
    try {
      console.log(data);
    } catch (err) {
      console.log(err, "Error");
    }
  };
  return {
    form,
    handleSubmit,
  };
};

export default useEmployementInfo;
