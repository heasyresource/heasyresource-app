"use client";
import { apiClient } from "@/lib/interceptor/apiClient";
import { successStyles } from "@/utils/notificationTheme";
import { getSubdomain } from "@/utils/publicFunctions";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const useIndividual = () => {
  const router = useRouter();
  const subdomain = getSubdomain();
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const [fields, setFields] = useState(null);
  const form = useForm({
    initialValues: {
      firstName: "",
      middleName: "",
      lastName: "",
      position: "",
      departmentId: "",
      email: "",
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
      position: (value) => (!value.length ? "Position is required" : null),
      departmentId: (value) =>
        !value.length ? "Department is required" : null,
      email: (value) =>
        /^\S+@\S+$/.test(value) ? null : "Enter a valid email",
      gender: (value) => (!value.length ? "Gender is required" : null),
    },
  });
  const headerSettings = {
    headers: {
      Authorization: `Bearer ${session?.user.token}`,
      "x-subdomain-name": subdomain,
    },
  };
  const handleSubmit = async (data) => {
    setLoading(true);
    try {
      await apiClient.post("employees", data, headerSettings);
      notifications.show({
        color: "white",
        title: "Success",
        message: "Employee added successfully. ",
        styles: successStyles,
        autoClose: 7000,
      });
      router.push("/dashboard/employee");
      setLoading(false);
    } catch (err) {
      if (err.errors) {
        err.errors.forEach((error) => {
          const { field, message } = error;

          form.setFieldError(field, message);
        });
      }
      if (err.message === "Could not add employee with this email domain.") {
        form.setFieldError(
          "email",
          "Could not add employee with this email domain"
        );
      }
      setLoading(false);
    }
  };
  const getDepartments = async () => {
    try {
      const response = await apiClient.get(
        `/departments?paginate=false`,
        headerSettings
      );
      const modifiedOptions = response?.results.map((option) => ({
        value: option.id,
        label: option.name,
      }));
      setFields(modifiedOptions);
    } catch (err) {
      console.log(err, "Error getting the department field");
    }
  };

  useEffect(() => {
    getDepartments();
  }, []);

  return {
    form,
    handleSubmit,
    fields,
    loading,
  };
};

export default useIndividual;
