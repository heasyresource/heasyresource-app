"use client";
import { apiClient } from "@/lib/interceptor/apiClient";
import { errorStyles, successStyles } from "@/utils/notificationTheme";
import { convertDateFormat, getSubdomain } from "@/utils/publicFunctions";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { useSession } from "next-auth/react";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const usePersonal = () => {
  const param = useParams();
  const { id } = param;
  const subdomain = getSubdomain();
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const [isChanged, setIsChanged] = useState(null);
  const router = useRouter();
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
      nationality: (value) =>
        !value.length ? "Nationality is required" : null,
      maritalStatus: (value) =>
        !value.length ? "Marital Status is required" : null,
      dateOfBirth: (value) =>
        value?.length === 0 ? "Date of Birth is required" : null,
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
      const modifiedValues = {
        ...data,
        dateOfBirth: convertDateFormat(data.dateOfBirth),
      };
      const response = await apiClient.put(
        `/employees/${id}/personal-details`,
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
        firstName: results.firstName,
        lastName: results.lastName,
        middleName: results.middleName === null ? "" : results.middleName,
        gender: results.gender,
        dateOfBirth:
          results.dateOfBirth === null ? "" : new Date(results.dateOfBirth),
        nationality: results.nationality === null ? "" : results.nationality,
        maritalStatus:
          results.maritalStatus === null ? "" : results.maritalStatus,
        employeeId:
          results.employmentInfo.employeeId === null
            ? ""
            : results.employmentInfo.employeeId,
      });
    } catch (err) {
      if (err.statusCode >= 400) {
        notifications.show({
          color: "white",
          message: "Something went wrong, please try again.",
          styles: errorStyles,
          autoClose: 7000,
        });
      }
    }
  };
  useEffect(() => {
    if (isChanged !== null) {
      getEmployee();
    }
    //esliint-disable-next-line
  }, [isChanged]);

  useEffect(() => {
    getEmployee();
    //eslint-disable-next-line
  }, []);

  return { form, handleSubmit, loading, router };
};

export default usePersonal;
