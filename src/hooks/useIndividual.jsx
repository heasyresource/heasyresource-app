"use client";
import { apiClient } from "@/lib/interceptor/apiClient";
import { errorStyles, successStyles } from "@/utils/notificationTheme";
import { getSubdomain } from "@/utils/publicFunctions";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useUploadImage } from ".";

const useIndividual = () => {
  const { handleUpload, response, loading: uploading } = useUploadImage();
  const router = useRouter();
  const subdomain = getSubdomain();
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const [fields, setFields] = useState(null);
  const [logo, setLogo] = useState("");
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
    try {
      if (!logo.length) {
        notifications.show({
          color: "red",
          message: "Please add the employee image to continue!",
          styles: errorStyles,
          autoClose: 7000,
        });
      } else {
        setLoading(true);
        await handleUpload(logo);
      }
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
    if (response?.status === 200 || response?.status === 201) {
      const handleEmployee = async () => {
        try {
          await apiClient.post(
            "employees",
            { ...form.values, logoUrl: response?.data.secure_url },
            headerSettings
          );
          notifications.show({
            color: "white",
            title: "Success",
            message: "Employee added successfully. ",
            styles: successStyles,
            autoClose: 7000,
          });
          router.push("/dashboard/employee");
        } catch (err) {
          if (err.errors) {
            err.errors.forEach((error) => {
              const { field, message } = error;

              form.setFieldError(field, message);
            });
          }
          if (
            err.message === "Could not add employee with this email domain."
          ) {
            form.setFieldError(
              "email",
              "Could not add employee with this email domain"
            );
          }
          setLoading(false);
        }
      };
      handleEmployee();
    }
    //eslint-disable-next-line
  }, [response]);

  useEffect(() => {
    getDepartments();
    //eslint-disable-next-line
  }, []);
  return {
    form,
    handleSubmit,
    fields,
    loading,
    setLogo,
    logo,
    uploading,
  };
};

export default useIndividual;
