import React, { useEffect, useState } from "react";
import { useForm } from "@mantine/form";
import useUploadDoc from "./useUploadDoc";
import { apiClient } from "@/lib/interceptor/apiClient";
import { getSubdomain, normalizePhoneNumber } from "@/utils/publicFunctions";
import { useParams, useRouter } from "next/navigation";
import { successStyles } from "@/utils/notificationTheme";
import { notifications } from "@mantine/notifications";

const useJobApply = () => {
  const router = useRouter();
  const subdomain = getSubdomain();
  const { handleUpload, response } = useUploadDoc();
  const [loading, setLoading] = useState(false);
  const [jobData, setJobData] = useState([]);
  const [countries, setCountries] = useState(null);
  const [states, setStates] = useState(null);
  const { slug } = useParams();
  const [gettingData, setGettingData] = useState(true);

  const form = useForm({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      address: "",
      city: "",
      countryId: "",
      resumeUrl: "",
      countryId: "",
      stateId: "",
    },
    validate: {
      firstName: (val) => (!val.length ? "FirstName is required" : null),
      lastName: (val) => (!val.length ? "LastName is required" : null),
      countryId: (val) => (!val.length ? "Country is required" : null),
      email: (val) => (!val.length ? "Email is required" : null),
      stateId: (val) => (!val.length ? "State is required" : null),
      address: (val) => (!val.length ? "Address is required" : null),
      city: (val) => (!val.length ? "City is required" : null),
      phoneNumber: (val) => (!val.length ? "Phone Number is required" : null),
      resumeUrl: (val) => (val.length !== 0 ? null : "Resume is required"),
    },
  });

  const handleSubmit = async (data) => {
    setLoading(true);
    try {
      await handleUpload(data.resumeUrl);
    } catch (err) {
      setLoading(false);
    }
  };
  const handleContinue = async (data) => {
    try {
      await apiClient.post(`/vacancies/${jobData?.id}/apply`, data, {
        headers: {
          "x-subdomain-name": subdomain,
        },
      });
      notifications.show({
        color: "white",
        title: "Success",
        message: "Applied  successfully",
        styles: successStyles,
        autoClose: 7000,
      });
      setLoading(false);
      router.push("/careers");
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
  const getMetadata = async () => {
    try {
      const res = await apiClient.get("/metadata");
      const state = res.results.states.map((option) => ({
        value: option.id,
        label: option.name,
      }));
      const country = res.results.countries.map((option) => ({
        value: option.id,
        label: option.name,
      }));
      setStates(state);
      setCountries(country);
    } catch (err) {}
  };
  useEffect(() => {
    if (response?.status === 200 || response?.status === 201) {
      const modifiedValues = {
        ...form.values,
        resumeUrl: response?.data.secure_url,
        phoneNumber: normalizePhoneNumber(form.values.phoneNumber),
      };
      handleContinue(modifiedValues);
    }
  }, [response]);
  useEffect(() => {
    const fetchJobDetail = async () => {
      try {
        const response = await apiClient.get(`vacancies/slug/${slug}`, {
          headers: {
            "x-subdomain-name": subdomain,
          },
        });
        const jobDetail = response.result;
        setJobData(jobDetail);
        setGettingData(false);
      } catch (error) {
        setGettingData(false);
      }
    };
    getMetadata();
    fetchJobDetail();
  }, []);

  return {
    gettingData,
    form,
    handleSubmit,
    jobData,
    loading,
    router,
    countries,
    states,
  };
};

export default useJobApply;
