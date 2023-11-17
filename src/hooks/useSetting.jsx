"use client";
import { apiClient } from "@/lib/interceptor/apiClient";
import { errorStyles, successStyles } from "@/utils/notificationTheme";
import { getSubdomain } from "@/utils/publicFunctions";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { notifications } from "@mantine/notifications";
import { useSession } from "next-auth/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import useUploadImage from "./useUploadImage";

const useSetting = () => {
  const { handleUpload, response, loading: imgLoading } = useUploadImage();
  const [openedAdd, { open: openAdd, close: closeAdd }] = useDisclosure(false);
  const [openedEdit, { open: openEdit, close: closeEdit }] =
    useDisclosure(false);
  const subdomain = getSubdomain();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const { data: session } = useSession();
  const [fields, setFields] = useState(null);
  const [companySize, setCompanySize] = useState(null);
  const [countries, setCountries] = useState(null);
  const [gettingCategory, setGettingCategory] = useState(true);
  const [categories, setCategories] = useState(null);
  const [pagination, setPagination] = useState(null);
  const [isChanged, setIsChanged] = useState(null);
  const [loading, setLoading] = useState(false);
  const [categoryId, setCategoryId] = useState("");
  const [uploading, setUploading] = useState(false);

  const [logoUrl, setLogoUrl] = useState("");
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      website: "",
      industryId: "",
      phoneNumber: "",
      address: "",
      companySizeId: "",
      countryId: "",
      emailDomain: "",
      subdomain: "",
    },
    validate: {
      address: (val) => (val.length < 1 ? "Company Address is required" : null),
      name: (val) => (!val.length ? "Company Name is required" : null),
      emailDomain: (val) =>
        !val.length
          ? null
          : /^@[a-zA-Z0-9][a-zA-Z0-9\.-]+[a-zA-Z0-9]\.[a-zA-Z]{2,}(,@[a-zA-Z0-9][a-zA-Z0-9\.-]+[a-zA-Z0-9]\.[a-zA-Z]{2,})*$/.test(
              val
            )
          ? null
          : "Enter valid email domain",
      subdomain: (val) => (!val.length ? "Sub domain is required" : null),
      companySizeId: (val) => (!val.length ? "Select company size" : null),
      countryId: (val) => (!val.length ? "Select country" : null),
      website: (val) =>
        /^(https?:\/\/)?(www\.)?([\da-z.-]+)\.([a-z.]{2,6})([/\w.-]+)\/?$/.test(
          val
        )
          ? null
          : "Enter a valid url",
    },
  });
  const categoryForm = useForm({
    initialValues: {
      name: "",
    },
    validate: {
      name: (val) => (!val.length ? "Category Name is required" : null),
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
      await handleUpload(logo);
    } catch (err) {
      if (err.errors) {
        err.errors.forEach((error) => {
          const { field, message } = error;
          form.setFieldError(field, message);
        });
      }
      notifications.show({
        color: "red",
        message: "Something went wrong, please try again!",
        styles: errorStyles,
        autoClose: 7000,
      });
      setLoading(false);
    }
  };
  const handleCategoryAdd = async (data) => {
    setLoading(true);
    try {
      const response = await apiClient.post(
        "/job-categories",
        data,
        headerSettings
      );
      notifications.show({
        color: "white",
        title: "Success",
        message: "Job Category added successfully!",
        styles: successStyles,
        autoClose: 7000,
      });
      categoryForm.reset();
      closeAdd();
      setIsChanged(response);
      setLoading(false);
    } catch (err) {
      if (err.errors) {
        err.errors.forEach((error) => {
          const { field, message } = error;
          categoryForm.setFieldError(field, message);
        });
      }
      notifications.show({
        color: "red",
        message: "Something went wrong, please try again!",
        styles: errorStyles,
        autoClose: 7000,
      });
      setLoading(false);
    }
  };
  const handleEditCategory = async (data) => {
    setLoading(true);
    try {
      if (categoryId.length !== 0) {
        const response = await apiClient.put(
          `/job-categories/${categoryId}`,
          data,
          headerSettings
        );
        notifications.show({
          color: "white",
          title: "Success",
          message: "Job Category updated successfully!",
          styles: successStyles,
          autoClose: 7000,
        });
        categoryForm.reset();
        closeEdit();
        setIsChanged(response);
        setLoading(false);
      }
    } catch (err) {
      if (err.errors) {
        err.errors.forEach((error) => {
          const { field, message } = error;
          categoryForm.setFieldError(field, message);
        });
      }
      notifications.show({
        color: "red",
        message: "Something went wrong, please try again!",
        styles: errorStyles,
        autoClose: 7000,
      });
      setLoading(false);
    }
  };
  const handleDeleteCategory = async (id) => {
    try {
      const response = await apiClient.delete(
        `/job-categories/${id}`,
        headerSettings
      );
      notifications.show({
        color: "white",
        title: "Success",
        message: "Job Category deleted successfully!",
        styles: successStyles,
        autoClose: 7000,
      });
      setIsChanged(response);
    } catch (err) {
      notifications.show({
        color: "red",
        message: "Something went wrong, please try again!",
        styles: errorStyles,
        autoClose: 7000,
      });
    }
  };
  const paginate = (page) => {
    const params = new URLSearchParams(searchParams);
    if (page) {
      params.set("page", page);
    } else {
      params.delete("page");
    }
    replace(`${pathname}?${params.toString()}`);
  };
  const getCompany = async () => {
    try {
      const response = await apiClient.get(
        `/companies/${session.user.companyId}`,
        {
          headers: {
            Authorization: `Bearer ${session?.user.token}`,
          },
        }
      );
      const results = response.results;
      setLogoUrl(results.logoUrl);
      form.setValues({
        name: results.name,
        email: results.email,
        subdomain: results.subdomain,
        emailDomain: results.emailDomain !== null ? results.emailDomain : "",
        address: results.address,
        industryId: results.industry.id,
        countryId: results.country.id,
        companySizeId: results.companySize.id,
        phoneNumber: results.phoneNumber.replace(/\+234/g, ""),
        website: results.website,
      });
    } catch (err) {
      if (err.statusCode >= 400) {
        notifications.show({
          color: "red",
          message: "Something went wrong. Please try again!",
          styles: errorStyles,
          autoClose: 7000,
        });
      }
    }
  };
  const getMetadata = async () => {
    try {
      const response = await apiClient.get("/metadata");
      const industry = response.results.industries.map((option) => ({
        value: option.id,
        label: option.name,
      }));
      const size = response.results.companySizes.map((option) => ({
        value: option.id,
        label: option.size,
      }));
      const country = response.results.countries.map((option) => ({
        value: option.id,
        label: option.name,
      }));
      console.log(country, "hook");
      setFields(industry);
      setCompanySize(size);
      setCountries(country);
    } catch (err) {}
  };
  const getJobCategories = async (params = "") => {
    if (searchParams.get("page")) {
      params = searchParams.get("page");
    }
    try {
      const response = await apiClient.get(
        `/job-categories?page=${params || "1"}`,
        headerSettings
      );

      setCategories(response.results.data);
      setPagination(response.results.meta);
      setGettingCategory(false);
    } catch (err) {
      setGettingCategory(false);
    }
  };
  useEffect(() => {
    getJobCategories();
    //eslint-disable-next-line
  }, [searchParams.get("page")]);
  useEffect(() => {
    if (isChanged !== null) {
      getJobCategories();
    }
    //eslint-disable-next-line
  }, [isChanged]);

  useEffect(() => {
    getMetadata();
    getCompany();
    //eslint-disable-next-line
  }, []);

  return {
    form,
    fields,
    companySize,
    logoUrl,
    countries,
    paginate,
    pagination,
    categories,
    handleCategoryAdd,
    handleEditCategory,
    handleDeleteCategory,
    categoryForm,
    openAdd,
    openedAdd,
    closeAdd,
    openedEdit,
    openEdit,
    closeEdit,
    loading,
    gettingCategory,
    setCategoryId,
    setLogoUrl,
    handleSubmit,
  };
};

export default useSetting;
