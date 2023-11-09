"use client";
import { apiClient } from "@/lib/interceptor/apiClient";
import { obfuscateToken } from "@/utils/encryptToken";
import { successStyles } from "@/utils/notificationTheme";
import { getSubdomain, normalizePhoneNumber } from "@/utils/publicFunctions";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

const useEmergencyContact = () => {
  const subdomain = getSubdomain();
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState("");
  const form = useForm({
    initialValues: {
      firstName: "",
      lastName: "",
      relationship: "",
      homeAddress: "",
      phoneNumber: "",
      email: "",
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
      relationship: (value) =>
        !value.length ? "Relationship is required" : null,
      homeAddress: (value) =>
        !value.length ? "Home Address is required" : null,
      phoneNumber: (value) =>
        !value.length ? "Phone Number is required" : null,
      email: (value) =>
        /^\S+@\S+$/.test(value) ? null : "Enter a valid email",
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
    const normalizedPhoneNumber = normalizePhoneNumber(data.phoneNumber);
    try {
      if (userId.length !== 0) {
        const modifiedValues = {
          ...data,
          type: "Emergency",
          phoneNumber: normalizedPhoneNumber,
        };
        await apiClient.put(
          `/employees/${userId}/next-of-kins`,
          modifiedValues,
          headerSettings
        );
        notifications.show({
          color: "white",
          title: "Success",
          message: "Emergency contact added successfully. ",
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
      setUserId(parsedData.id);
    }
  }, []);

  return {
    form,
    handleSubmit,
    loading,
  };
};

export default useEmergencyContact;
