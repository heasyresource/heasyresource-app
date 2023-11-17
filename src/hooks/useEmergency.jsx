"use client";
import { apiClient } from "@/lib/interceptor/apiClient";
import { errorStyles, successStyles } from "@/utils/notificationTheme";
import { getSubdomain, normalizePhoneNumber } from "@/utils/publicFunctions";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { useSession } from "next-auth/react";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const useEmergency = () => {
  const param = useParams();
  const { id } = param;
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const subdomain = getSubdomain();
  const { data: session } = useSession();
  const [isChanged, setIsChanged] = useState(null);
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
      const modifiedValues = {
        ...data,
        type: "Emergency",
        phoneNumber: normalizedPhoneNumber,
      };
      const response = await apiClient.put(
        `/employees/${id}/next-of-kins`,
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

      setLoading(false);
      setIsChanged(response);
    } catch (err) {
      if (err.errors) {
        err.errors.forEach((error) => {
          const { field, message } = error;

          form.setFieldError(field, message);
        });
      }
      if (err.statusCode >= 400) {
        notifications.show({
          color: "white",
          message: "Something went wrong, please try again.",
          styles: errorStyles,
          autoClose: 7000,
        });
      }
      setLoading(false);
    }
  };
  const getEmployee = async () => {
    try {
      const response = await apiClient.get(
        `/employees/${session.user.company.id}/employee/${id}`,
        headerSettings
      );
      const results = response.results;

      form.setValues({
        firstName: results.nextOfKin[0].firstName,
        lastName: results.nextOfKin[0].lastName,
        relationship: results.nextOfKin[0].relationship,
        homeAddress: results.nextOfKin[0].homeAddress,
        phoneNumber: results.nextOfKin[0].phoneNumber.replace(/\+234/g, ""),
        email: results.nextOfKin[0].email,
      });
    } catch (err) {}
  };
  useEffect(() => {
    if (isChanged !== null) {
      getEmployee();
    }
  }, [isChanged]);

  useEffect(() => {
    getEmployee();
    //eslint-disable-next-line
  }, []);

  return { form, loading, handleSubmit, router };
};

export default useEmergency;
