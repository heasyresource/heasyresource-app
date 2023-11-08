"use client";
import { apiClient } from "@/lib/interceptor/apiClient";
import { obfuscateToken } from "@/utils/encryptToken";
import { successStyles } from "@/utils/notificationTheme";
import { convertDateFormat, getSubdomain } from "@/utils/publicFunctions";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

const usePersonalDetail = () => {
  const subdomain = getSubdomain();
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const [countries, setCountries] = useState(null);
  const [userId, setUserId] = useState("");
  const form = useForm({
    initialValues: {
      firstName: "",
      middleName: "",
      lastName: "",
      employeeId: "",
      nationality: "",
      maritalStatus: "",
      dateOfBirth: "",
      gender: "",
    },
    validate: {
      firstName: (value) =>
        !value.length
          ? "First Name is required"
          : /^[A-Za-z]+$/.test(value)
          ? null
          : "First Name must contain only alphabets.",
      lastName: (value) =>
        !value.length
          ? "Last Name is required"
          : /^[A-Za-z]+$/.test(value)
          ? null
          : "Last Name must contain only alphabets.",
      middleName: (value) =>
        !value.length
          ? "Middle Name is required"
          : /^[A-Za-z]+$/.test(value)
          ? null
          : "Middle Name must contain only alphabets.",
      nationality: (value) =>
        !value.length ? "Nationality is required" : null,
      maritalStatus: (value) =>
        !value.length ? "Marital Status is required" : null,
      dateOfBirth: (value) =>
        value.length === 0 ? "Date of Birth is required" : null,
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
      if (userId.length !== 0) {
        const modifiedValues = {
          ...data,
          dateOfBirth: convertDateFormat(data.dateOfBirth),
        };
        await apiClient.put(
          `/employees/${userId}/personal-details`,
          modifiedValues,
          headerSettings
        );
        notifications.show({
          color: "white",
          title: "Success",
          message: "Personal details added successfully. ",
          styles: successStyles,
          autoClose: 7000,
        });
      }
      setLoading(false);
    } catch (err) {
      if (err.errors) {
        err.errors.forEach((error) => {
          const { field, message } = error;

          form.setFieldError(field, message);
        });
      }
      setLoading(false);
    }
  };
  useEffect(() => {
    const user =
      localStorage.getItem("employee") &&
      obfuscateToken(false, localStorage.getItem("employee") ?? "");
    if (user) {
      const parsedData = JSON.parse(user);
      form.setFieldValue("firstName", parsedData.firstName);
      form.setFieldValue("lastName", parsedData.lastName);
      form.setFieldValue("middleName", parsedData.middleName);
      setUserId(parsedData.id);
    }
    const getMetadata = async () => {
      try {
        const res = await apiClient.get("/metadata");

        const modifiedOptions = res.results.countries.map((option) => ({
          value: option.name,
          label: option.name,
        }));

        setCountries(modifiedOptions);
      } catch (err) {
        console.log(err, "Error getting the metadata");
      }
    };
    getMetadata();
  }, []);

  return {
    form,
    handleSubmit,
    loading,
    countries,
  };
};

export default usePersonalDetail;
