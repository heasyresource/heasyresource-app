"use client";
import { apiClient } from "@/lib/interceptor/apiClient";
import { errorStyles, successStyles } from "@/utils/notificationTheme";
import { getSubdomain } from "@/utils/publicFunctions";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { signOut, useSession } from "next-auth/react";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const useCompensation = () => {
  const param = useParams();
  const { id } = param;
  const subdomain = getSubdomain();
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const [isChanged, setIsChanged] = useState(null);
  const router = useRouter();
  const form = useForm({
    initialValues: {
      grossSalary: "",
      frequency: "",
      currency: "",
    },
    validate: {
      grossSalary: (v) => (!v.length ? "Gross Salary" : null),
      frequency: (v) => (!v.length ? " Frequency is required " : null),
      currency: (v) => (!v.length ? " Currency is required " : null),
    },
  });
  const headerSettings = {
    headers: {
      Authorization: `Bearer ${session?.user.token}`,
      "x-subdomain-name": subdomain,
    },
  };
  const handleSignOut = async () => {
    const result = await signOut({ redirect: false, callbackUrl: "/signin" });
    router.push(result.url);
  };
  const handleSubmit = async (data) => {
    setLoading(true);
    try {
      await apiClient.put(
        `/employees/${id}/salary`,
        { ...data, grossSalary: convertToDecimalFormat(data.grossSalary) },
        headerSettings
      );
      notifications.show({
        color: "white",
        title: "Success",
        message: "Salary added successfully. ",
        styles: successStyles,
        autoClose: 7000,
      });
      setLoading(false);
    } catch (err) {
      setLoading(false);
      if (err.errors) {
        err.errors.forEach((error) => {
          const { field, message } = error;
          form.setFieldError(field, message);
        });
      }

      notifications.show({
        color: "white",
        message: "Something went wrong, please try again.",
        styles: errorStyles,
        autoClose: 7000,
      });

      if (
        err.message === "Authorization is required to access this resource."
      ) {
        handleSignOut();
      }
    }
  };
  const getEmployee = async () => {
    try {
      const response = await apiClient.get(
        `/employees/${session.user.company.id}/employee/${
          id || session.user.id
        }`,
        headerSettings
      );
      const results = response.results.salary;

      form.setValues({
        grossSalary: convertToDecimalFormat(results.grossSalary),
        frequency: results.frequency,
        currency: results.currency,
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
      if (
        err.message === "Authorization is required to access this resource."
      ) {
        handleSignOut();
      }
    }
  };

  const convertToDecimalFormat = (inputString) => {
    if (!isNaN(inputString)) {
      if (inputString.includes(".")) {
        return inputString;
      }

      return inputString + ".00";
    }
  };
  useEffect(() => {
    getEmployee();
    //eslint-disable-next-line
  }, []);

  return {
    form,
    router,
    loading,
    handleSubmit,
  };
};

export default useCompensation;
