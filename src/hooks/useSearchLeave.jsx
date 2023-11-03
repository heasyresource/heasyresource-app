import { useForm } from "@mantine/form";
import React from "react";

const useSearchLeave = () => {
  const form = useForm({
    initialValues: {
      name: "",
      from: "",
      to: "",
      type: "",
    },
  });
  const handleSubmit = async (data) => {
    try {
      console.log(data, "Value");
    } catch (err) {
      console.log(err, "Error submitting");
    }
  };
  return {
    handleSubmit,
    form,
  };
};

export default useSearchLeave;
