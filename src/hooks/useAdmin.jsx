"use client";
import { apiClient } from "@/lib/interceptor/apiClient";
import { errorStyles, successStyles } from "@/utils/notificationTheme";
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

const useAdmin = () => {
  const [isChanged, setIsChanged] = useState(null);
  const [openedAccept, { open: openAccept, close: closeAccept }] =
    useDisclosure(false);
  const [openedReject, { open: openReject, close: closeReject }] =
    useDisclosure(false);
  const [openedSuspend, { open: openSuspend, close: closeSuspend }] =
    useDisclosure(false);
  const { replace, back, push } = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const params = useParams();
  const { slug } = params;
  const { data: session } = useSession();
  const [gettingData, setGettingData] = useState(true);
  const [companies, setCompanies] = useState(null);
  const [pagination, setPagination] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fields, setFields] = useState(null);
  const [countries, setCountries] = useState(null);
  const [companySize, setCompanySize] = useState(null);
  const [update, setUpdate] = useState(false);
  const [gettingInfo, setGettingInfo] = useState(true);
  const [companyInfo, setCompanyInfo] = useState({
    name: "",
    location: "",
    size: "",
    industry: "",
    logoUrl: "",
    status: "",
  });
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
  const headerSettings = {
    headers: {
      Authorization: `Bearer ${session?.user.token}`,
    },
  };

  const handleSignOut = async () => {
    const result = await signOut({ redirect: false, callbackUrl: "/signin" });
    push(result.url);
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
  const handleAccept = async () => {
    setLoading(true);
    try {
      const response = await apiClient.put(
        `/companies/${slug}/status`,
        {
          status: "Approved",
        },
        headerSettings
      );
      notifications.show({
        color: "white",
        title: "Success",
        message: "Company approved successfully",
        styles: successStyles,
        autoClose: 7000,
      });
      setLoading(false);
      closeAccept();
      setIsChanged(response);
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
  const handleReject = async () => {
    setLoading(true);
    try {
      const response = await apiClient.put(
        `/companies/${slug}/status`,
        {
          status: "Rejected",
        },
        headerSettings
      );
      notifications.show({
        color: "white",
        title: "Success",
        message: "Company rejected successfully",
        styles: successStyles,
        autoClose: 7000,
      });
      setLoading(false);
      closeReject();
      setIsChanged(response);
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
  const handleSuspend = async () => {
    setLoading(true);
    try {
      const response = await apiClient.put(
        `/companies/${slug}/status`,
        {
          status: "Suspended",
        },
        headerSettings
      );
      notifications.show({
        color: "white",
        title: "Success",
        message: "Company suspended successfully",
        styles: successStyles,
        autoClose: 7000,
      });
      setLoading(false);
      closeSuspend();
      setIsChanged(response);
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
  const getCompanies = async (params = "") => {
    setGettingData(true);
    if (searchParams.get("page")) {
      params = searchParams.get("page");
    }
    try {
      if (!slug) {
        const response = await apiClient.get(
          `/companies?page=${params || "1"}`,
          headerSettings
        );
        setCompanies(response.results.data);
        setPagination(response.results.meta);
        setGettingData(false);
      }
    } catch (err) {
      setGettingData(false);
      notifications.show({
        color: "red",
        message: "Something went wrong, please try again",
        styles: errorStyles,
        autoClose: 7000,
      });
      if (
        err.message === "Authorization is required to access this resource."
      ) {
        handleSignOut();
      }
    }
  };
  const getSingleCompany = async () => {
    try {
      if (slug) {
        const response = await apiClient.get(
          `/companies/${slug}`,
          headerSettings
        );
        const results = response.results;
        setCompanyInfo({
          name: results.name,
          location: results.address !== null ? results.address : "N/A",
          logoUrl: results.logoUrl,
          size: results.companySize !== null ? results.companySize.size : "N/A",
          industry: results.industry !== null ? results.industry.name : "N/A",
          status: results.status,
        });

        form.setValues({
          name: results.name,
          email: results.email,
          subdomain: results.subdomain !== null ? results.subdomain : "",
          emailDomain: results.emailDomain !== null ? results.emailDomain : "",
          address: results.address !== null ? results.address : "",
          industryId: results.industry !== null ? results.industry.id : null,
          countryId: results.country !== null ? results.country.id : "",
          companySizeId:
            results.companySize !== null ? results.companySize.id : "",
          phoneNumber: results.phoneNumber.replace(/\+234/g, ""),
          website: results.website,
        });
        setGettingInfo(false);
      }
    } catch (err) {
      if (
        err.message === "Authorization is required to access this resource."
      ) {
        handleSignOut();
      }
      setGettingInfo(true);
      notifications.show({
        color: "red",
        message: "Something went wrong, please try again",
        styles: errorStyles,
        autoClose: 7000,
      });
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

      setFields(industry);
      setCompanySize(size);
      setCountries(country);
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
      getSingleCompany();
    }
    //eslint-disable-next-line
  }, [isChanged]);
  useEffect(() => {
    getCompanies();

    //eslint-disable-next-line
  }, [searchParams.get("page")]);

  useEffect(() => {
    getMetadata();
    //eslint-disable-next-line
  }, []);
  useEffect(() => {
    if (slug) {
      getSingleCompany();
    }
    //eslint-disable-next-line
  }, [slug]);

  return {
    companies,
    paginate,
    pagination,
    gettingData,
    companyInfo,
    closeAccept,
    closeReject,
    openAccept,
    openReject,
    openedAccept,
    openedReject,
    handleAccept,
    handleReject,
    loading,
    openedSuspend,
    openSuspend,
    closeSuspend,
    handleSuspend,
    fields,
    countries,
    companySize,
    form,
    back,
    gettingInfo,
  };
};

export default useAdmin;
