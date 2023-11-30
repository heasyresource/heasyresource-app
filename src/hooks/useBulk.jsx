"use client";
import { apiClient } from "@/lib/interceptor/apiClient";
import { errorStyles, successStyles } from "@/utils/notificationTheme";
import { getSubdomain } from "@/utils/publicFunctions";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { obfuscateToken } from "@/utils/encryptToken";
import React, { useState, useEffect } from "react";

const useBulk = () => {
  const [loading, setLoading] = useState(false);
  const { data: session } = useSession();
  const subdomain = getSubdomain();
  const [hideFile, setHideFile] = useState(false);
  const [fields, setFields] = useState(null);
  const router = useRouter();
  const form = useForm({
    initialValues: {
      employees: "",
    },
  });
  const retryForm = useForm({
    initialValues: {
      employees: [],
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
    const formData = new FormData();
    formData.append("employees", data.employees);
    try {
      const response = await apiClient.post(
        "/employees/bulk",
        formData,
        headerSettings
      );
      if (response?.failedRecords.length > 0) {
        notifications.show({
          color: "red",
          message: "Something went wrong, Please try again",
          styles: errorStyles,
          autoClose: 7000,
        });
        setHideFile(true);
        retryForm.setFieldValue("employees", response?.failedRecords);
      } else {
        notifications.show({
          color: "white",
          title: "Success",
          message: "Employees added successfully.",
          styles: successStyles,
          autoClose: 7000,
        });
        retryForm.reset();
        form.reset();
        setHideFile(false);
      }
      setLoading(false);
    } catch (err) {
      setLoading(false);

      notifications.show({
        color: "red",
        message: "Something went wrong, Please try again",
        styles: errorStyles,
        autoClose: 7000,
      });
    }
  };
  const handleRetry = async (data) => {
    setLoading(true);
    const newArray = data.employees.map((item) => {
      const { validation, ...rest } = item;
      return rest;
    });
    const convertedArray = newArray.map((item) => item.employee);

    try {
      const response = await apiClient.post(
        "/employees/bulk/retry",
        { employees: convertedArray },
        headerSettings
      );
      if (response?.failedRecords.length > 0) {
        notifications.show({
          color: "red",
          message: "Something went wrong, Please try again",
          styles: errorStyles,
          autoClose: 7000,
        });
        setHideFile(true);
        retryForm.setFieldValue("employees", response?.failedRecords);
      } else {
        retryForm.reset();
        form.reset();
        notifications.show({
          color: "white",
          title: "Success",
          message: "Employees added successfully.",
          styles: successStyles,
          autoClose: 7000,
        });
        setHideFile(false);
      }
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };
  const getDepartments = async () => {
    try {
      const response = await apiClient.get(
        `/departments?paginate=false`,
        headerSettings
      );
      const modifiedOptions = response?.results.map((option) => option.name);
      setFields(modifiedOptions);
    } catch (err) {}
  };

  useEffect(() => {
    getDepartments();

    //eslint-disable-next-line
  }, []);

  return {
    handleSubmit,
    form,
    router,
    loading,
    retryForm,
    hideFile,
    fields,
    handleRetry,
  };
};

export default useBulk;
