"use client";
import { apiClient } from "@/lib/interceptor/apiClient";
import { obfuscateToken } from "@/utils/encryptToken";
import { successStyles } from "@/utils/notificationTheme";
import { convertDateFormat, getSubdomain } from "@/utils/publicFunctions";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

const useEmploymentInfo = () => {
  const subdomain = getSubdomain();
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState("");
  const [departments, setDepartments] = useState(null);
  const [employmentType, setEmploymentType] = useState(null);
  const form = useForm({
    initialValues: {
      position: "",
      resumptionDate: "",
      departmentId: "",
      employmentTypeId: "",
      workMode: "",
    },
    validate: {
      position: (value) => (!value.length ? "Position is required" : null),
      departmentId: (value) =>
        !value.length ? "Department is required" : null,
      resumptionDate: (value) =>
        value.length === 0 ? "Joined Date is required" : null,
      employmentTypeId: (value) =>
        !value.length ? "Job Type is required" : null,
      workMode: (value) => (!value.length ? "Job Mode is required" : null),
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
          resumptionDate: convertDateFormat(data.resumptionDate),
        };
        await apiClient.put(
          `/employees/${userId}/employment-infos`,
          modifiedValues,
          headerSettings
        );
        notifications.show({
          color: "white",
          title: "Success",
          message: "Employment Info added successfully. ",
          styles: successStyles,
          autoClose: 7000,
        });
      }
      setLoading(false);
    } catch (err) {
      setLoading(false);
      if (err.errors) {
        err.errors.forEach((error) => {
          const { field, message } = error;

          form.setFieldError(field, message);
        });
      }
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
    const getMetadata = async () => {
      try {
        const res = await apiClient.get("/metadata");

        const type = res.results.employmentType.map((option) => ({
          value: option.id,
          label: option.name,
        }));
        setEmploymentType(type);
      } catch (err) {
        console.log(err, "Error getting the metadata");
      }
    };
    const getDepartments = async () => {
      try {
        const response = await apiClient.get(`/departments`, headerSettings);
        const department = response?.results.data.map((option) => ({
          value: option.id,
          label: option.name,
        }));
        setDepartments(department);
      } catch (err) {
        console.log(err, "Error getting the department field");
      }
    };
    getMetadata();
    getDepartments();
  }, []);
  return {
    form,
    handleSubmit,
    employmentType,
    departments,
    loading,
  };
};

export default useEmploymentInfo;
