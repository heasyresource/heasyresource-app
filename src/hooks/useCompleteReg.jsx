"use client";
import { apiClient } from "@/lib/interceptor/apiClient";
import { errorStyles } from "@/utils/notificationTheme";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import useUploadImage from "./useUploadImage";
import { ActionIcon, Button, Group, Stack, Text } from "@mantine/core";
import { IconChecks } from "@tabler/icons-react";
import { modals } from "@mantine/modals";

const useCompleteReg = () => {
  const { data: session } = useSession();
  const { handleUpload, response, loading } = useUploadImage();
  const [logo, setLogo] = useState("");
  const [cmpSize, setCmpSize] = useState(null);
  const [countries, setCountries] = useState(null);
  const [fields, setFields] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isRadioChecked, setIsRadioChecked] = useState(false);
  const [validationError] = useState(null);
  const allOptions = ["Company Initials", "Department Code", "Random Numbers"];
  const allSelectedString = selectedOptions?.join("");
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
      employeeIdFormat: [],
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
        !val.length ? "Employee Configuration is required" : null,
      employeeIdFormat: (val, value) =>
        value.autoGenerateEmployeeId === "true" && val.length === 0
          ? "Please generate the employee ID"
          : value.autoGenerateEmployeeId === "true" &&
            val.length !== allOptions.length
          ? "Please select all options"
          : null,
    },
  });

  const optionCodeMap = {
    "Company Initials": "VT",
    "Department Code": "001",
    "Random Numbers": "569509",
  };
  const openModal = () =>
    modals.open({
      radius: "md",
      centered: true,
      withCloseButton: false,
      closeOnClickOutside: false,
      children: (
        <Stack py={"3rem"} gap={"15px"} justify="center" align="center">
          <ActionIcon variant="transparent" size="xl">
            <IconChecks
              style={{
                color: "#3377ff",
                fontSize: "20px",
                width: "100%",
                height: "100%",
              }}
              stroke={1.5}
            />
          </ActionIcon>
          <Text fw={600} style={{ fontSize: "25px", color: "#000000" }}>
            Submission Successful
          </Text>

          <Text
            style={{ fontSize: "16px", color: "#1E1E1E", textAlign: "center" }}
          >
            Congratulations! your submission will be processed within 24 hours.
          </Text>
          <Group mt="1rem" justify="center" align="center">
            <Button
              variant="contained"
              size="md"
              style={{ backgroundColor: "#3377ff" }}
              tt="capitalize"
              onClick={() => modals.closeAll()}
            >
              ok
            </Button>
          </Group>
        </Stack>
      ),
    });
  const handleSubmit = async (values) => {
    try {
      if (!logo.length) {
        notifications.show({
          color: "red",
          message: "Please add the company logo to continue!",
          styles: errorStyles,
          autoClose: 7000,
        });
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

        openModal();
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
        logoUrl: response?.data.secure_url,
      };
      handleCompletion(updatedData);
    }
    //eslint-disable-next-line
  }, [response]);

  useEffect(() => {
    if (selectedOptions?.length === allOptions.length) {
      setIDError(false);
    }
    //eslint-disable-next-line
  }, [selectedOptions]);
  useEffect(() => {
    if (departmentTable.length !== 0) {
      setIsDptTableEmpty(false);
    }
  }, [departmentTable]);

  useEffect(() => {
    setSelectedOptions([]);
  }, [form.values.autoGenerateEmployeeId]);

  const getDepartments = async (subdomain) => {
    try {
      const response = await apiClient.get(`/departments?page=1`, {
        headers: {
          Authorization: `Bearer ${session?.user.token}`,
          "x-subdomain-name": subdomain,
        },
      });
      setDepartmentTable(response?.results.data);
    } catch (err) {
      console.log(err, "Error getting department");
    }
  };
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
    const getCompany = async () => {
      try {
        const response = await apiClient.get(
          `/companies/${session?.user.company.id}`,
          {
            headers: {
              Authorization: `Bearer ${session?.user.token}`,
            },
          }
        );
        const results = response?.results;
        if (results.subdomain !== null) {
          // setIsSubmitted(true);
          setLogo(results.logoUrl);
          setIsRadioChecked(results.autoGenerateEmployeeId === 1);
          getDepartments(results.subdomain);
          form.setValues({
            address: results.address,
            emailDomain: results.emailDomain || "",
            subdomain: results.subdomain,
            autoGenerateEmployeeId:
              results.autoGenerateEmployeeId === 1 ? "true" : "false",
            countryId: results.country.id,
            companySizeId: results.companySize.id,
            employeeIdFormat: results.employeeIdFormat,
          });
        }
      } catch (err) {}
    };
    getMetadata();
    getCompany();
    //eslint-disable-next-line
  }, []);
  return {
    form,
    isRadioChecked,
    selectedOptions,
    allOptions,
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
    logo,
  };
};

export default useCompleteReg;
