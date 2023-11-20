"use client";
import { apiClient } from "@/lib/interceptor/apiClient";
import { errorStyles, successStyles } from "@/utils/notificationTheme";
import { convertDateFormat, getSubdomain } from "@/utils/publicFunctions";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { notifications } from "@mantine/notifications";
import { signOut, useSession } from "next-auth/react";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const useEmploymentInfo = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const param = useParams();
  const { id } = param;
  const router = useRouter();
  const subdomain = getSubdomain();
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const [isChanged, setIsChanged] = useState(null);
  const [departments, setDepartments] = useState(null);
  const [employmentTypes, setEmploymentTypes] = useState(null);
  const [terminate, setTerminate] = useState(false);
  const form = useForm({
    initialValues: {
      position: "",
      resumptionDate: "",
      departmentId: "",
      employmentTypeId: "",
      workMode: "",
      status: "",
    },
    validate: {
      position: (value) => (!value.length ? "Position is required" : null),
      departmentId: (value) =>
        !value.length ? "Department is required" : null,
      resumptionDate: (value) =>
        value.length === 0 ? "Joined Date is required" : null,
      employmentTypeId: (value) =>
        !value.length ? "Employment Type is required" : null,
      workMode: (value) => (!value.length ? "Work Mode is required" : null),
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
      const modifiedValues = {
        ...data,
        resumptionDate: convertDateFormat(data.resumptionDate),
      };
      const response = await apiClient.put(
        `/employees/${id}/employment-infos`,
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

      setLoading(false);
      setIsChanged(response);
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
        title: "Failed",
        message: "Something went wrong, please try again.",
        styles: errorStyles,
        autoClose: 7000,
      });
    }
  };
  const handleTerminate = async () => {
    setTerminate(true);
    try {
      const response = await apiClient.put(
        `/employees/${id}/employment-status`,
        { status: "Terminated" },
        headerSettings
      );
      notifications.show({
        color: "white",
        title: "Success",
        message: "Employee terminated successfully. ",
        styles: successStyles,
        autoClose: 7000,
      });
      close();
      setTerminate(false);
      setIsChanged(response);
    } catch (err) {
      setTerminate(false);
      notifications.show({
        color: "white",
        message: "Something went wrong, please try again.",
        styles: errorStyles,
        autoClose: 7000,
      });
    }
  };
  const getMetadata = async () => {
    try {
      const res = await apiClient.get("/metadata");

      const type = res.results.employmentType.map((option) => ({
        value: option.id,
        label: option.name,
      }));
      setEmploymentTypes(type);
    } catch (err) {}
  };
  const getDepartments = async () => {
    try {
      const response = await apiClient.get(`/departments`, headerSettings);
      const department = response?.results.data.map((option) => ({
        value: option.id,
        label: option.name,
      }));
      setDepartments(department);
    } catch (err) {}
  };
  const getEmployee = async () => {
    try {
      const response = await apiClient.get(
        `/employees/${session.user.company.id}/employee/${
          id || session.user.id
        }`,
        headerSettings
      );
      const results = response.results;

      form.setValues({
        position: results.employmentInfo?.position,
        workMode: results.employmentInfo?.workMode,
        employmentTypeId:
          results.employmentInfo?.employmentType?.id === null
            ? ""
            : results.employmentInfo?.employmentType?.id,
        resumptionDate:
          results.employmentInfo?.resumptionDate === null
            ? ""
            : new Date(results.employmentInfo?.resumptionDate),
        departmentId:
          results.employmentInfo?.department?.id === null
            ? ""
            : results.employmentInfo?.department?.id,
        status: results.employmentInfo?.status,
      });
    } catch (err) {
      if (
        err.message === "Authorization is required to access this resource."
      ) {
        handleSignOut();
      }
    }
  };
  useEffect(() => {
    if (isChanged !== null) {
      getEmployee();
    }
    //eslint-disable-next-line
  }, [isChanged]);

  useEffect(() => {
    getMetadata();
    getDepartments();
    getEmployee();
    //eslint-disable-next-line
  }, []);

  return {
    form,
    handleSubmit,
    loading,
    employmentTypes,
    departments,
    router,
    handleTerminate,
    terminate,
    open,
    close,
    opened,
  };
};

export default useEmploymentInfo;
