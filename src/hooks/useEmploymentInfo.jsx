"use client";
import { apiClient } from "@/lib/interceptor/apiClient";
import { errorStyles, successStyles } from "@/utils/notificationTheme";
import { convertDateFormat, getSubdomain } from "@/utils/publicFunctions";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { useSession } from "next-auth/react";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const useEmploymentInfo = () => {
  const param = useParams();
  const { id } = param;
  const router = useRouter();
  const subdomain = getSubdomain();
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const [isChanged, setIsChanged] = useState(null);
  const [departments, setDepartments] = useState(null);
  const [employmentTypes, setEmploymentTypes] = useState(null);
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
        !value.length ? "Employment Type is required" : null,
      workMode: (value) => (!value.length ? "WOrk Mode is required" : null),
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
      if (err.statusCode === 500) {
        notifications.show({
          color: "white",
          title: "Failed",
          message: "Something went wrong, please try again.",
          styles: errorStyles,
          autoClose: 7000,
        });
      }
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
  const getEmployee = async () => {
    try {
      const response = await apiClient.get(
        `/employees/${session.user.company.id}/employee/${id}`,
        headerSettings
      );
      const results = response.results;
      setFirstName(results.firstName);
      setLastName(results.lastName);
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
      });
    } catch (err) {}
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

  return { form, handleSubmit, loading, employmentTypes, departments, router };
};

export default useEmploymentInfo;
