"use client";
import { apiClient } from "@/lib/interceptor/apiClient";
import { successStyles } from "@/utils/notificationTheme";
import {
  convertDateFormat,
  getSubdomain,
  normalizePhoneNumber,
} from "@/utils/publicFunctions";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { notifications } from "@mantine/notifications";
import { useSession } from "next-auth/react";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const useSingleEmployee = () => {
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
  const subdomain = getSubdomain();
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);
  const [countries, setCountries] = useState(null);
  const [states, setStates] = useState(null);
  const [LGA, setLGA] = useState(null);
  const [employmentType, setEmploymentType] = useState(null);
  const [departments, setDepartments] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [position, setPosition] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(null);
  const [logoUrl, setLogoUrl] = useState(null);
  const [workExp, setWorkExp] = useState(null);
  const [educations, setEducations] = useState(null);
  const [licenses, setLicenses] = useState(null);
  const [expId, setExpId] = useState("");

  const personalForm = useForm({
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
        value.length === 0 ? "Date of Birth is required" : null,
      gender: (value) => (!value.length ? "Gender is required" : null),
    },
  });
  const contactForm = useForm({
    initialValues: {
      street: "",
      lgaId: "",
      stateId: "",
      zipCode: "",
      countryId: "",
      homePhoneNumber: "",
      mobilePhoneNumber: "",
      workPhoneNumber: "",
      workEmail: "",
      personalEmail: "",
    },
    validate: {
      street: (value) => (!value.length ? "Home Address is required" : null),
      lgaId: (value) => (!value.length ? "LGA is required" : null),
      stateId: (value) => (!value.length ? "State is required" : null),
      zipCode: (value) => (!value.length ? "Zip Code is required" : null),
      countryId: (value) => (!value.length ? "Country is required" : null),
      mobilePhoneNumber: (value) =>
        value.length < 10 ? "Enter a valid  mobiile phone number" : null,
      personalEmail: (val) =>
        /^\S+@\S+$/.test(val) ? null : "Enter a valid personal email",
    },
  });
  const emergencyForm = useForm({
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
  const employmentInfoForm = useForm({
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
      isPresent: false,
    },
    validate: {
      companyName: (value) =>
        !value.length ? "Company Name is required" : null,
      position: (val) => (!val.length ? "Position is required" : null),

      startDate: (val) => (val.length === 0 ? "Start Date is required" : null),

      endDate: (val, values) =>
        values.isPresent
          ? null
          : val.length === 0
          ? "End Date is required"
          : null,
      location: (val) => (!val.length ? "Company Location is required" : null),
      workMode: (val) => (!val.length ? "Job Mode is required" : null),
      employmentTypeId: (val) => (!val.length ? "Job Type is required" : null),
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
        /^(https?:\/\/)?(www\.)?([\da-z.-]+)\.([a-z.]{2,6})([/\w.-]+)\/?$/.test(
          val
        )
          ? null
          : "Enter a valid url",
      credentialId: (val) => (!val.length ? "Field is required" : null),
      issueDate: (val) => (val.length === 0 ? "Field is required" : null),
      expirationDate: (val) => (val.length === 0 ? "Field is required" : null),
    },
  });

  const headerSettings = {
    headers: {
      Authorization: `Bearer ${session?.user.token}`,
      "x-subdomain-name": subdomain,
    },
  };
  const handlePersonalSubmit = async (data) => {
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
      setIsSubmitted(response);
    } catch (err) {
      if (err.errors) {
        err.errors.forEach((error) => {
          const { field, message } = error;

          personalForm.setFieldError(field, message);
        });
      }
      setLoading(false);
    }
  };
  const handleContactSubmit = async (data, type) => {
    setLoading(true);
    const normalizedHomeNumber = normalizePhoneNumber(data.homePhoneNumber);
    const normalizedWorkNumber = normalizePhoneNumber(data.workPhoneNumber);
    const normalizedMobileNumber = normalizePhoneNumber(data.mobilePhoneNumber);
    try {
      if (type === "contact") {
        const modifiedValues = {
          ...data,
          homePhoneNumber: !data.homePhoneNumber.length
            ? ""
            : normalizedHomeNumber,
          workPhoneNumber: !data.workPhoneNumber.length
            ? ""
            : normalizedWorkNumber,
          mobilePhoneNumber: normalizedMobileNumber,
        };
        const response = await apiClient.put(
          `/employees/${id}/contact-details`,
          modifiedValues,
          headerSettings
        );
        notifications.show({
          color: "white",
          title: "Success",
          message: "Contact details added successfully. ",
          styles: successStyles,
          autoClose: 7000,
        });
        setLoading(false);
        setIsSubmitted(response);
      }
    } catch (err) {
      setLoading(false);
      if (err.errors) {
        err.errors.forEach((error) => {
          const { field, message } = error;

          contactForm.setFieldError(field, message);
        });
      }
    }
  };
  const handleEmergencySubmit = async (data) => {
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
      setIsSubmitted(response);
    } catch (err) {
      if (err.errors) {
        err.errors.forEach((error) => {
          const { field, message } = error;

          emergencyForm.setFieldError(field, message);
        });
      }
      setLoading(false);
    }
  };
  const handleInfoSubmit = async (data) => {
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
      setIsSubmitted(response);
    } catch (err) {
      setLoading(false);
      if (err.errors) {
        err.errors.forEach((error) => {
          const { field, message } = error;

          employmentInfoForm.setFieldError(field, message);
        });
      }
    }
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
        `/employees/${id}/work-experiences`,
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
      setIsSubmitted(response);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      if (err.errors) {
        err.errors.forEach((error) => {
          const { field, message } = error;

          experienceForm.setFieldError(field, message);
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
        `/employees/${id}/educations`,
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
      setIsSubmitted(response);
    } catch (err) {
      setLoading(false);
      if (err.errors) {
        err.errors.forEach((error) => {
          const { field, message } = error;

          educationForm.setFieldError(field, message);
        });
      }
    }
  };
  const handleLicenseSubmit = async (data) => {
    setLoading(true);
    const modifiedValues = {
      ...data,
      issueDate: convertDateFormat(data.issueDate),
      expirationDate: convertDateFormat(data.expirationDate),
    };
    try {
      const response = await apiClient.post(
        `/employees/${id}/license-or-certifications`,
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
      setIsSubmitted(response);
    } catch (err) {
      setLoading(false);
      if (err.errors) {
        err.errors.forEach((error) => {
          const { field, message } = error;

          licenseForm.setFieldError(field, message);
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
        `/employees/${id}/work-experiences/${expId}`,
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
      setIsSubmitted(response);
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
        `/employees/${id}/educations/${expId}`,
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
      setIsSubmitted(response);
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
    }
  };
  const handleEditLicense = async (data) => {
    setLoading(true);
    const modifiedValues = {
      ...data,
      issueDate: convertDateFormat(data.issueDate),
      expirationDate: convertDateFormat(data.expirationDate),
    };
    try {
      const response = await apiClient.put(
        `/employees/${id}/license-or-certifications/${expId}`,
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
      setIsSubmitted(response);
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
    }
  };
  const getMetadata = async () => {
    try {
      const res = await apiClient.get("/metadata");

      const country = res.results.countries.map((option) => ({
        value: option.id,
        label: option.name,
      }));
      const state = res.results.states.map((option) => ({
        value: option.id,
        label: option.name,
      }));
      const lga = res.results.lgas.map((option) => ({
        value: option.id,
        label: option.name,
        stateId: option.stateId,
      }));
      const type = res.results.employmentType.map((option) => ({
        value: option.id,
        label: option.name,
      }));
      setEmploymentType(type);

      setCountries(country);
      setLGA(lga);
      setStates(state);
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
      setPosition(results.employmentInfo.position);
      setLogoUrl(results.logoUrl);
      setWorkExp(results.workExperiences);
      setEducations(results.educations);
      setLicenses(results.licenseOrCertifications);
      contactForm.setFieldValue("workEmail", results.email);
      personalForm.setValues({
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
      contactForm.setValues({
        street:
          results.contactDetail.street === null
            ? ""
            : results.contactDetail.street,
        mobilePhoneNumber: results.phoneNumber.replace(/\+234/g, ""),
        homePhoneNumber:
          results.contactDetail.homePhoneNumber === null
            ? ""
            : results.contactDetail.homePhoneNumber.replace(/\+234/g, ""),
        workPhoneNumber:
          results.contactDetail.workPhoneNumber === null
            ? ""
            : results.contactDetail.workPhoneNumber.replace(/\+234/g, ""),
        zipCode: results.contactDetail.zipCode,
        personalEmail:
          results.contactDetail.personalEmail === null
            ? ""
            : results.contactDetail.personalEmail,
      });
      emergencyForm.setValues({
        firstName: results.nextOfKin[0].firstName,
        lastName: results.nextOfKin[0].lastName,
        relationship: results.nextOfKin[0].relationship,
        email: results.nextOfKin[0].email,
        homeAddress: results.nextOfKin[0].homeAddress,
        phoneNumber: results.nextOfKin[0].phoneNumber.replace(/\+234/g, ""),
      });
      employmentInfoForm.setValues({
        position: results.employmentInfo.position,
        workMode: results.employmentInfo.workMode,
        employmentTypeId: results.employmentInfo.employmentType,
        resumptionDate:
          results.employmentInfo.resumptionDate === null
            ? ""
            : new Date(results.employmentInfo.resumptionDate),
        departmentId: results.employmentInfo.department.name,
      });
    } catch (err) {}
  };

  useEffect(() => {
    if (contactForm.values.stateId.length !== 0) {
      setIsEmpty(false);
      const filteredItems = LGA.filter(
        (item) => item.stateId === contactForm.values.stateId
      );
      setLGA(filteredItems);
    }
  }, [contactForm.values.stateId]);
  useEffect(() => {
    if (isSubmitted !== null) {
      getEmployee();
    }
  }, [isSubmitted]);

  useEffect(() => {
    getMetadata();
    getEmployee();
    getDepartments();
  }, []);
  return {
    loading,
    handlePersonalSubmit,
    personalForm,
    countries,
    firstName,
    lastName,
    position,
    id,
    LGA,
    states,
    contactForm,
    handleContactSubmit,
    isEmpty,
    handleEmergencySubmit,
    emergencyForm,
    employmentInfoForm,
    handleInfoSubmit,
    employmentType,
    departments,
    logoUrl,
    openedExp,
    openExp,
    closeExp,
    openEdu,
    closeEdu,
    openedEdu,
    educationForm,
    experienceForm,
    handleExpSubmit,
    handleEduSubmit,
    openLcs,
    openedLcs,
    closeLcs,
    licenseForm,
    handleLicenseSubmit,
    workExp,
    openEditExp,
    closeEditExp,
    openedEditExp,
    setExpId,
    handleEditExp,
    educations,
    handleEditEdu,
    openEditEdu,
    closeEditEdu,
    openedEditEdu,
    openEditLcs,
    closeEditLcs,
    openedEditLcs,
    licenses,
    handleEditLicense,
  };
};

export default useSingleEmployee;
