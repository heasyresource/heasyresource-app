"use client";
import { apiClient } from "@/lib/interceptor/apiClient";
import { errorStyles, successStyles } from "@/utils/notificationTheme";
import { getSubdomain, normalizePhoneNumber } from "@/utils/publicFunctions";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { notifications } from "@mantine/notifications";
import { useSession } from "next-auth/react";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import React, { useEffect, useState } from "react";
import useUploadDoc from "./useUploadDoc";

const useAddApplicant = () => {
  const {
    handleUpload: upload1,
    response: response1,
    error: error1,
  } = useUploadDoc();
  const {
    handleUpload: upload2,
    response: response2,
    error: error2,
  } = useUploadDoc();
  const [openedShortlist, { open: openShortlist, close: closeShortlist }] =
    useDisclosure(false);
  const [openedReject, { open: openReject, close: closeReject }] =
    useDisclosure(false);
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const [loading, setLoading] = useState(false);
  const params = useParams();
  const router = useRouter();
  const { data: session } = useSession();
  const subdomain = getSubdomain();
  const { slug } = params;
  const [states, setStates] = useState(null);
  const [countries, setCountries] = useState(null);
  const [applicants, setApplicants] = useState(null);
  const [applicantsPagination, setApplicantsPagination] = useState(null);
  const [gettingApplicants, setGettingApplicants] = useState(true);
  const [isChanged, setIsChanged] = useState(null);
  const [applicantId, setApplicantId] = useState("");
  const [status, seStatus] = useState("");
  const [vacancy, setVacancy] = useState(null);
  const [jobTitle, setJobTitle] = useState(null);

  const form = useForm({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      address: "",
      city: "",
      stateId: "",
      countryId: "",
      resumeUrl: null,
    },
    validate: {
      firstName: (val) => (!val.length ? "First Name is required" : null),
      lastName: (val) => (!val.length ? "Last Name is required" : null),
      email: (val) => (!val.length ? "Email is required" : null),
      phoneNumber: (val) => (!val.length ? "Phone Number is required" : null),
      address: (val) => (!val.length ? "Address is required" : null),
      city: (val) => (!val.length ? "City is required" : null),
      stateId: (val) => (!val.length ? "State is required" : null),
      countryId: (val) => (!val.length ? "Country is required" : null),
      resumeUrl: (val) => (val === null ? "Resume  is required" : null),
    },
  });
  const filterForm = useForm({
    initialValues: {
      search: "",
      status: "",
      vacancyId: "",
    },
  });
  const reasonForm = useForm({
    initialValues: {
      reason: "",
    },
    validate: {
      reason: (val) => (!val.length ? "Reason is required" : null),
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
      await upload1(data.resumeUrl);
    } catch (err) {
      setLoading(false);
      notifications.show({
        color: "red",

        message: "Something went wrong, please try again",
        styles: errorStyles,
        autoClose: 7000,
      });
    }
  };
  useEffect(() => {
    if (response1?.status === 200 || response1?.status === 201) {
      const handleSubmit = async () => {
        const modifiedValue = {
          ...form.values,
          phoneNumber: normalizePhoneNumber(form.values.phoneNumber),
          resumeUrl: response1.data.secure_url,
        };
        try {
          await apiClient.post(
            `/vacancies/${slug}/applicants`,
            modifiedValue,
            headerSettings
          );
          notifications.show({
            color: "white",
            title: "Success",
            message: "Applicant created successfully",
            styles: successStyles,
            autoClose: 7000,
          });
          setLoading(false);
          router.push("/dashboard/hiring");
        } catch (err) {
          if (err.errors) {
            err.errors.forEach((error) => {
              const { field, message } = error;
              console.log(field, message, "message");
              form.setFieldError(field, message);
            });
          }
          setLoading(false);
        }
      };
      handleSubmit();
    }

    //eslint-disable-next-line
  }, [response1]);

  const handleEdit = async (data) => {
    setLoading(true);
    try {
      await upload2(data.resumeUrl);
    } catch (err) {
      setLoading(false);
      notifications.show({
        color: "red",

        message: "Something went wrong, please try again",
        styles: errorStyles,
        autoClose: 7000,
      });
    }
  };
  useEffect(() => {
    if (response2?.status === 200 || response2?.status === 201) {
      const handleComplete = async () => {
        try {
          const response = await apiClient.put(
            `/applicants/${slug}`,
            { ...form.values, resumeUrl: response2.data.secure_url },
            headerSettings
          );
          notifications.show({
            color: "white",
            title: "Success",
            message: "Applicant updated successfully",
            styles: successStyles,
            autoClose: 7000,
          });
          closeEdit();
          setIsChanged(response);
          setLoading(false);
        } catch (err) {
          setLoading(false);
          if (err.errors) {
            err.errors.forEach((error) => {
              const { field, message } = error;
              console.log(field, message, "message");
              form.setFieldError(field, message);
            });
          }
        }
      };
      handleComplete();
    }
    //eslint-disable-next-line
  }, [response2]);

  const handleDelete = async (id) => {
    try {
      const response = await apiClient.delete(
        `/applicants/${id}`,
        headerSettings
      );
      notifications.show({
        color: "white",
        title: "Success",
        message: "Applicant deleted successfully",
        styles: successStyles,
        autoClose: 7000,
      });
      setIsChanged(response);
    } catch (err) {
      notifications.show({
        color: "red",

        message: "Something went wrong, please try again",
        styles: errorStyles,
        autoClose: 7000,
      });
    }
  };
  const handleShortlist = async (data) => {
    setLoading(true);
    try {
      const response = await apiClient.put(
        `/applicants/${slug}/shortlist`,
        data,
        headerSettings
      );
      setIsChanged(response);
      setLoading(false);
      closeShortlist();
      reasonForm.reset();
    } catch (err) {
      setLoading(false);
      notifications.show({
        color: "red",
        message: "Something went wrong, please try again",
        styles: errorStyles,
        autoClose: 7000,
      });
    }
  };
  const handleReject = async (data) => {
    setLoading(true);
    try {
      const response = await apiClient.put(
        `/applicants/${slug}/reject`,
        data,
        headerSettings
      );
      setIsChanged(response);
      setLoading(false);
      reasonForm.reset();
      closeReject();
    } catch (err) {
      setLoading(false);
      notifications.show({
        color: "red",
        message: "Something went wrong, please try again",
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
    router.replace(`${pathname}?${params.toString()}`);
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
    } catch (err) {
      if (err.statusCode >= 400) {
        notifications.show({
          color: "red",

          message: "Something went wrong, please try again",
          styles: errorStyles,
          autoClose: 7000,
        });
      }
    }
  };
  const getApplicants = async (params = "") => {
    if (searchParams.get("page")) {
      params = searchParams.get("page");
    }
    const qParams = {
      page: params || "1",
    };
    if (!!filterForm.values.search?.length) {
      qParams.search = filterForm.values.search;
    }
    if (!!filterForm.values.status?.length) {
      qParams.status = filterForm.values.status;
    }
    if (!!filterForm.values?.vacancyId) {
      qParams.vacancyId = filterForm.values.vacancyId;
    }
    try {
      const response = await apiClient.get(`/applicants`, {
        params: qParams,
        ...headerSettings,
      });
      setApplicants(response.results.data);
      setApplicantsPagination(response.results.meta);
      setGettingApplicants(false);
    } catch (err) {
      setGettingApplicants(false);
      if (err.statusCode >= 400) {
        notifications.show({
          color: "red",

          message: "Something went wrong, please try again",
          styles: errorStyles,
          autoClose: 7000,
        });
      }
    }
  };
  const getSingleApplicant = async () => {
    try {
      if (slug) {
        const response = await apiClient.get(
          `/applicants/${slug}`,
          headerSettings
        );
        const result = response.result;
        seStatus(result.status);
        setVacancy(result.vacancy);
        form.setValues({
          lastName: result.lastName,
          firstName: result.firstName,
          email: result.email,
          phoneNumber: result.phoneNumber.replace(/\+234/g, ""),
          address: result.address,
          city: result.city,
          stateId: result.stateId,
          countryId: result.countryId,
          resumeUrl: result.resumeUrl,
        });
      }
    } catch (err) {
      console.log(err, "error getting applicant");
    }
  };

  useEffect(() => {
    if (isChanged !== null) {
      getApplicants();
      getSingleApplicant();
    }
    //eslint-disable-next-line
  }, [isChanged]);
  useEffect(() => {
    getApplicants();

    //eslint-disable-next-line
  }, [searchParams.get("page")]);

  useEffect(() => {
    const getApplicants = async () => {
      try {
        const response = await apiClient.get(
          `/vacancies?paginate=false`,
          headerSettings
        );
        console.log(response, "response");
        const types = response.results.map((option) => ({
          value: option.id,
          label: option.name,
        }));
        setJobTitle(types);
      } catch (err) {
        setGettingApplicants(false);
        if (err.statusCode >= 400) {
          notifications.show({
            color: "red",

            message: "Something went wrong, please try again",
            styles: errorStyles,
            autoClose: 7000,
          });
        }
      }
    };
    getSingleApplicant();

    getMetadata();
    getApplicants();
    //eslint-disable-next-line
  }, []);

  return {
    form,
    loading,
    handleSubmit,
    states,
    countries,
    router,
    gettingApplicants,
    applicants,
    applicantsPagination,
    paginate,
    handleDelete,
    handleEdit,
    setApplicantId,
    handleReject,
    handleShortlist,
    reasonForm,
    status,
    openedShortlist,
    openShortlist,
    closeShortlist,
    openedReject,
    openReject,
    closeReject,
    vacancy,
    jobTitle,
    filterForm,
    getApplicants,
  };
};

export default useAddApplicant;
