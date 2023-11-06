"use client";
import { apiClient } from "@/lib/interceptor/apiClient";
import { errorStyles } from "@/utils/notificationTheme";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import useUploadImage from "./useUploadImage";

const useCompleteReg = () => {
  const { data: session } = useSession();
  const { handleUpload, response, loading } = useUploadImage();
  const [logo, setLogo] = useState("");
  const [cmpSize, setCmpSize] = useState(null);
  const [countries, setCountries] = useState(null);
  const [fields, setFields] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isRadioChecked, setIsRadioChecked] = useState(false);
  const [validationError, setValidationError] = useState(null);
  const allOptions = ["Department Code", "Random Numbers", "Company Initials"];
  const allSelectedString = selectedOptions.join("");
  const [departmentTable, setDepartmentTable] = useState([]);
  const [isDptTableEmpty, setIsDptTableEmpty] = useState(false);
  const [IDError, setIDError] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const form = useForm({
    initialValues: {
      address: "",
      companySizeId: "",
      countryId: "",
      emailDomain: "",
      subdomain: "",
      autoGenerateEmployeeId: "",
      employeeIdFormat: "",
    },
    validate: {
      address: (val) => (val.length < 1 ? "Company Address is required" : null),
      companySizeId: (val) => (!val.length ? "Select company size" : null),
      countryId: (val) => (!val.length ? "Select country" : null),
      emailDomain: (val) =>
        !val.length
          ? null
          : /^@[a-zA-Z0-9][a-zA-Z0-9\.-]+[a-zA-Z0-9]\.[a-zA-Z]{2,}(,@[a-zA-Z0-9][a-zA-Z0-9\.-]+[a-zA-Z0-9]\.[a-zA-Z]{2,})*$/.test(
              val
            )
          ? null
          : "Enter valid email domain",
      subdomain: (val) => (!val.length ? "Sub domain is required" : null),
      autoGenerateEmployeeId: (val) =>
        !val.length ? "     Employee Configuration is required" : null,
    },
  });

  const optionCodeMap = {
    "Company Initials": "VT",
    "Department Code": "001",
    "Random Numbers": "569509",
  };
  const handleMultiSelectChange = (selected) => {
    setSelectedOptions(selected);
    const error = validateMultiSelect(selected, allOptions);
    setValidationError(error);
  };
  const validateMultiSelect = (selectedOptions, allOptions) => {
    if (selectedOptions.length === 0) {
      return "Please generate the employee ID"; // No option selected
    } else if (selectedOptions.length === allOptions.length) {
      return null; // Validation passed, all options are selected
    } else {
      return "Please select all options"; // Not all options are selected
    }
  };
  const handleSubmit = async (values) => {
    try {
      if (!logo.length) {
        notifications.show({
          color: "red",
          message: "Please add the company logo to continue!",
          styles: errorStyles,
          autoClose: 7000,
        });
      } else if (
        form.values.autoGenerateEmployeeId === "true" &&
        selectedOptions.length !== allOptions.length
      ) {
        setIDError(true);
      } else if (!departmentTable.length) {
        setIsDptTableEmpty(true);
      } else {
        setUploading(true);
        await handleUpload(logo);
      }
    } catch (err) {
      setUploading(false);
      console.log(err, "Error submitting");
    }
  };
  const handleCompletion = async (values) => {
    try {
      const result = await apiClient.post("/complete-registration", values, {
        headers: {
          Authorization: `Bearer ${session?.user.token}`,
        },
      });
      if (result.statusCode === 200 || result.statusCode === 201) {
        const modifiedArray = {
          departments: departmentTable,
        };
        const res = await apiClient.post(
          "/departments/multiple",
          modifiedArray,
          {
            headers: {
              Authorization: `Bearer ${session.user.token}`,
              "x-subdomain-name": form.values.subdomain,
            },
          }
        );
        setIsSubmitted(true);
      }
      setUploading(false);
      console.log(result, "complete registration");
    } catch (err) {
      setUploading(false);
      notifications.show({
        color: "red",
        message: "Something went wrong. Please try again!",
        styles: errorStyles,
        autoClose: 7000,
      });
      console.log(err, "Error submitting completion data");
    }
  };
  useEffect(() => {
    if (response?.status === 200 || response?.status === 201) {
      const updatedData = {
        ...form.values,
        autoGenerateEmployeeId: form.values.autoGenerateEmployeeId === "true",
        employeeIdFormat:
          form.values.autoGenerateEmployeeId === "true"
            ? ["Company Initials", "Department Code", "Random Numbers"]
            : null,
        logoUrl: response?.data.url,
      };
      handleCompletion(updatedData);
    }
  }, [response]);

  useEffect(() => {
    if (selectedOptions.length === allOptions.length) {
      setIDError(false);
    }
  }, [selectedOptions]);
  useEffect(() => {
    if (departmentTable.length !== 0) {
      setIsDptTableEmpty(false);
    }
  }, [departmentTable]);

  useEffect(() => {
    setSelectedOptions([]);
  }, [form.values.autoGenerateEmployeeId]);

  useEffect(() => {
    const getMetadata = async () => {
      try {
        const res = await apiClient.get("/metadata");
        const modifiedOptions = res.results.companySizes.map((option) => ({
          value: option.id,
          label: option.size,
        }));
        const modifiedOptions2 = res.results.countries.map((option) => ({
          value: option.id,
          label: option.name,
        }));
        const modifiedOptions3 = res.results.industries.map((option) => ({
          value: option.id,
          label: option.name,
        }));
        setCmpSize(modifiedOptions);
        setCountries(modifiedOptions2);
        setFields(modifiedOptions3);
      } catch (err) {
        console.log(err, "Error getting the metadata");
      }
    };
    getMetadata();
  }, []);
  return {
    form,
    isRadioChecked,
    validationError,
    selectedOptions,
    allOptions,
    handleMultiSelectChange,
    cmpSize,
    countries,
    fields,
    setIsRadioChecked,
    optionCodeMap,
    allSelectedString,
    handleSubmit,
    setDepartmentTable,
    departmentTable,
    setLogo,
    isDptTableEmpty,
    loading,
    IDError,
    uploading,
    isSubmitted,
  };
};

export default useCompleteReg;
