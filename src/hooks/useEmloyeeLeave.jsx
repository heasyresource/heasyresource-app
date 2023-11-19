"use client";
import { apiClient } from "@/lib/interceptor/apiClient";
import { errorStyles, successStyles } from "@/utils/notificationTheme";
import { convertDateFormat, getSubdomain } from "@/utils/publicFunctions";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { notifications } from "@mantine/notifications";
import { signOut, useSession } from "next-auth/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const useEmloyeeLeave = () => {
  const { data: session } = useSession();
  const subdomain = getSubdomain();
  const [openedReq, { open: openReq, close: closeReq }] = useDisclosure(false);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace, push } = useRouter();
  const [loading, setLoading] = useState(false);
  const [leaves, setLeaves] = useState(null);
  const [pagination, setPagination] = useState(null);
  const [isChanged, setIsChanged] = useState(null);
  const [gettingLeaves, setGettingLeaves] = useState(true);
  const [types, setTypes] = useState(null);
  const form = useForm({
    initialValues: {
      leaveTypeId: "",
      startDate: "",
      endDate: "",
      comments: "",
    },
    validate: {
      leaveTypeId: (val) => (!val.length ? "Leave Type is required" : null),
      startDate: (val) => (val.length === 0 ? "Start Date is required" : null),
      endDate: (val) => (val.length === 0 ? "End Date is required" : null),
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
    push(result.url);
  };

  const handleSubmit = async (data) => {
    setLoading(true);
    const modifiedValues = {
      ...data,
      startDate: convertDateFormat(data.startDate),
      endDate: convertDateFormat(data.endDate),
    };
    try {
      const response = await apiClient.post(
        "/employee/leaves/request",
        modifiedValues,
        headerSettings
      );
      notifications.show({
        color: "white",
        title: "Success",
        message: "Leave requested successfully.",
        styles: successStyles,
        autoClose: 3000,
      });
      form.reset();
      closeReq();
      setIsChanged(response);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      if (err.errors) {
        err.errors.forEach((error) => {
          const { field, message } = error;

          form.setFieldError(field, message);
        });
      }
      notifications.show({
        color: "red",
        message: "Something went wrong, please try again",
        styles: errorStyles,
        autoClose: 4000,
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
  const getLeaves = async (params = "") => {
    if (searchParams.get("page")) {
      params = searchParams.get("page");
    }
    try {
      const response = await apiClient.get(
        `/employee/leaves/me?page=${params || "1"}`,
        headerSettings
      );
      setLeaves(response.results.data);
      setPagination(response.results.meta);
      setGettingLeaves(false);
    } catch (err) {
      setGettingLeaves(false);
    }
  };
  const getLeaveTypes = async () => {
    try {
      const response = await apiClient.get(
        `/leave-types?paginate=false`,
        headerSettings
      );
      const type = response.results.map((t) => ({
        value: t.id,
        label: t.name,
      }));
      setTypes(type);
    } catch (err) {
      if (
        err.message === "Authorization is required to access this resource."
      ) {
        handleSignOut();
      }
    }
  };
  useEffect(() => {
    getLeaves();

    //eslint-disable-next-line
  }, [searchParams.get("page")]);
  useEffect(() => {
    if (isChanged !== null) {
      getLeaves();
    }
    //eslint-disable-next-line
  }, [isChanged]);
  useEffect(() => {
    getLeaveTypes();

    //eslint-disable-next-line
  }, []);

  return {
    form,
    handleSubmit,
    leaves,
    paginate,
    pagination,
    gettingLeaves,
    loading,
    openedReq,
    openReq,
    closeReq,
    types,
  };
};

export default useEmloyeeLeave;
