"use client"
import { useForm } from "@mantine/form";
import React, { useState } from "react";

const useForgotPassword = () => {
    const [loading, setLoading] = useState(false)
  const form = useForm({
    initialValues: {
      email: "",
    },
    validate: {
      email: (value) =>
        /^\S+@\S+$/.test(value) ? null : "Enter a valid email address",
    },
  });
const handleSubmit = async (data) => {
    setLoading(true)
    try{
        console.log(data, "forgot password data");
    }catch(err){
        console.log(err, "forgot password error");
    }
}
  return {
    form,
    loading,
    handleSubmit
  }
};

export default useForgotPassword;
