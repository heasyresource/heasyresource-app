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

const useQualification = () => {
  const [openedExp, { open: openExp, close: closeExp }] = useDisclosure(false);
  const [openedEditExp, { open: openEditExp, close: closeEditExp }] =
    useDisclosure(false);
  const [openedEdu, { open: openEdu, close: closeEdu }] = useDisclosure(false);
  const [openedEditEdu, { open: openEditEdu, close: closeEditEdu }] =
    useDisclosure(false);
  const [openedLcs, { open: openLcs, close: closeLcs }] = useDisclosure(false);
  const [openedEditLcs, { open: openEditLcs, close: closeEditLcs }] =
    useDisclosure(false);
  const param = useParams();
  const { id } = param;
  const router = useRouter();
  const subdomain = getSubdomain();
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const [expId, setExpId] = useState("");
  const [workExp, setWorkExp] = useState(null);
  const [educations, setEducations] = useState(null);
  const [licenses, setLicenses] = useState(null);
  const [isChanged, setIsChanged] = useState(null);
  const [employmentTypes, setEmploymentTypes] = useState(null);
  const experienceForm = useForm({
    initialValues: {
      companyName: "",
      position: "",
      location: "",
      employmentTypeId: "",
      workMode: "",
      description: "",
      startDate: "",
      endDate: "",
      isPresent: true,
    },
    validate: {
      companyName: (value) =>
        !value.length ? "Company Name is required" : null,
      position: (val) => (!val.length ? "Position is required" : null),

      startDate: (val) => (val?.length === 0 ? "Start Date is required" : null),

      endDate: (val, values) =>
        values.isPresent
          ? null
          : val?.length === 0
          ? "End Date is required"
          : null,
      location: (val) => (!val.length ? "Company Location is required" : null),
      workMode: (val) => (!val.length ? "Work Mode is required" : null),
      employmentTypeId: (val) =>
        !val.length ? "Employment Type is required" : null,
    },
  });
  const educationForm = useForm({
    initialValues: {
      institution: "",
      degree: "",
      fieldOfStudy: "",
      grade: "",
      startDate: "",
      endDate: "",
      description: "",
    },
    validate: {
      institution: (val) =>
        !val.length ? "Institution Name is required" : null,
      degree: (val) => (!val.length ? "Degree is required" : null),
      fieldOfStudy: (val) =>
        !val.length ? "Field of study is required" : null,
      grade: (val) => (!val.length ? "Grade is required" : null),
      startDate: (val) => (val.length === 0 ? "Start date is required" : null),
      endDate: (val) => (val.length === 0 ? "End date is required" : null),
    },
  });
  const licenseForm = useForm({
    initialValues: {
      name: "",
      issuingOrganization: "",
      issueDate: "",
      expirationDate: "",
      credentialId: "",
      credentialUrl: "",
    },
    validate: {
      name: (val) => (!val.length ? "Field is required" : null),
      issuingOrganization: (val) => (!val.length ? "Field is required" : null),
      credentialUrl: (val) =>
        !val.length
          ? null
          : /^(https?:\/\/)?(www\.)?([\da-z.-]+)\.([a-z.]{2,6})([/\w.-]+)\/?$/.test(
              val
            )
          ? null
          : "Enter a valid url",

      issueDate: (val) => (val.length === 0 ? "Field is required" : null),
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
  const handleExpSubmit = async (data) => {
    setLoading(true);
    const modifiedValues = {
      ...data,
      endDate: convertDateFormat(data.endDate),
      startDate: convertDateFormat(data.startDate),
    };
    if (data.isPresent) {
      delete modifiedValues.endDate;
    }
    try {
      const response = await apiClient.post(
        `/employees/${id || session.user.id}/work-experiences`,
        modifiedValues,
        headerSettings
      );
      notifications.show({
        color: "white",
        title: "Success",
        message: "Work Exprience added successfully. ",
        styles: successStyles,
        autoClose: 7000,
      });
      closeExp();
      setIsChanged(response);
      setLoading(false);
      experienceForm.reset();
    } catch (err) {
      setLoading(false);
      if (err.errors) {
        err.errors.forEach((error) => {
          const { field, message } = error;

          experienceForm.setFieldError(field, message);
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
  const handleEduSubmit = async (data) => {
    setLoading(true);
    const modifiedValues = {
      ...data,
      endDate: convertDateFormat(data.endDate),
      startDate: convertDateFormat(data.startDate),
    };
    try {
      const response = await apiClient.post(
        `/employees/${id || session.user.id}/educations`,
        modifiedValues,
        headerSettings
      );
      notifications.show({
        color: "white",
        title: "Success",
        message: "Education added successfully. ",
        styles: successStyles,
        autoClose: 7000,
      });
      closeEdu();
      setLoading(false);
      setIsChanged(response);
      educationForm.reset();
    } catch (err) {
      setLoading(false);
      if (err.errors) {
        err.errors.forEach((error) => {
          const { field, message } = error;

          educationForm.setFieldError(field, message);
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
  const handleLicenseSubmit = async (data) => {
    setLoading(true);
    const modifiedValues = {
      ...data,
      issueDate: convertDateFormat(data.issueDate),
      expirationDate:
        data.expirationDate.length !== 0
          ? convertDateFormat(data.expirationDate)
          : "",
    };
    try {
      const response = await apiClient.post(
        `/employees/${id || session.user.id}/license-or-certifications`,
        modifiedValues,
        headerSettings
      );
      notifications.show({
        color: "white",
        title: "Success",
        message: "License or Certication added successfully. ",
        styles: successStyles,
        autoClose: 7000,
      });
      closeLcs();
      setLoading(false);
      setIsChanged(response);
      licenseForm.reset();
    } catch (err) {
      setLoading(false);
      if (err.errors) {
        err.errors.forEach((error) => {
          const { field, message } = error;

          licenseForm.setFieldError(field, message);
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
  const handleEditExp = async (data) => {
    setLoading(true);
    const modifiedValues = {
      ...data,
      endDate: convertDateFormat(data.endDate),
      startDate: convertDateFormat(data.startDate),
    };
    if (data.isPresent) {
      delete modifiedValues.endDate;
    }
    try {
      const response = await apiClient.put(
        `/employees/${id || session.user.id}/work-experiences/${expId}`,
        modifiedValues,
        headerSettings
      );
      notifications.show({
        color: "white",
        title: "Success",
        message: "Work Exprience updated successfully. ",
        styles: successStyles,
        autoClose: 7000,
      });
      closeEditExp();
      setIsChanged(response);
      setLoading(false);
      setExpId("");
      experienceForm.reset();
    } catch (err) {
      setLoading(false);
      if (err.errors) {
        err.errors.forEach((error) => {
          const { field, message } = error;

          experienceForm.setFieldError(field, message);
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
  const handleEditEdu = async (data) => {
    setLoading(true);
    const modifiedValues = {
      ...data,
      endDate: convertDateFormat(data.endDate),
      startDate: convertDateFormat(data.startDate),
    };
    try {
      const response = await apiClient.put(
        `/employees/${id || session.user.id}/educations/${expId}`,
        modifiedValues,
        headerSettings
      );
      notifications.show({
        color: "white",
        title: "Success",
        message: "Education updated successfully. ",
        styles: successStyles,
        autoClose: 7000,
      });
      closeEditEdu();
      setLoading(false);
      setIsChanged(response);
      setExpId("");
      educationForm.reset();
    } catch (err) {
      setLoading(false);
      if (err.errors) {
        err.errors.forEach((error) => {
          const { field, message } = error;

          educationForm.setFieldError(field, message);
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
  const handleEditLicense = async (data) => {
    setLoading(true);
    const modifiedValues = {
      ...data,
      issueDate: convertDateFormat(data.issueDate),
      expirationDate:
        data.expirationDate.length !== 0
          ? convertDateFormat(data.expirationDate)
          : "",
    };
    try {
      const response = await apiClient.put(
        `/employees/${
          id || session.user.id
        }/license-or-certifications/${expId}`,
        modifiedValues,
        headerSettings
      );
      notifications.show({
        color: "white",
        title: "Success",
        message: "License or Certication updated successfully. ",
        styles: successStyles,
        autoClose: 7000,
      });
      closeEditLcs();
      setLoading(false);
      setIsChanged(response);
      setExpId("");
      licenseForm.reset();
    } catch (err) {
      setLoading(false);
      if (err.errors) {
        err.errors.forEach((error) => {
          const { field, message } = error;

          licenseForm.setFieldError(field, message);
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
  const getEmployee = async () => {
    try {
      const response = await apiClient.get(
        `/employees/${session.user.company.id}/employee/${
          id || session.user.id
        }`,
        headerSettings
      );
      const results = response.results;

      setWorkExp(results.workExperiences);
      setEducations(results.educations);
      setLicenses(results.licenseOrCertifications);
    } catch (err) {
      if (
        err.message === "Authorization is required to access this resource."
      ) {
        handleSignOut();
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
  useEffect(() => {
    if (isChanged !== null) {
      getEmployee();
    }
    //eslint-disable-next-line
  }, [isChanged]);

  useEffect(() => {
    getEmployee();
    getMetadata();
    //eslint-disable-next-line
  }, []);

  return {
    educationForm,
    experienceForm,
    licenseForm,
    handleEduSubmit,
    handleExpSubmit,
    handleLicenseSubmit,
    workExp,
    licenses,
    loading,
    openedExp,
    openExp,
    closeExp,
    openedEditExp,
    openEditExp,
    closeEditExp,
    openedEdu,
    openEdu,
    closeEdu,
    openedEditEdu,
    openEditEdu,
    closeEditEdu,
    openedLcs,
    openLcs,
    closeLcs,
    openedEditLcs,
    openEditLcs,
    closeEditLcs,
    handleEditEdu,
    handleEditExp,
    handleEditLicense,
    setExpId,
    employmentTypes,
    educations,
  };
};

export default useQualification;
