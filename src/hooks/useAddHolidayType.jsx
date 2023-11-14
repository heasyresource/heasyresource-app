"use client";
import { apiClient } from "@/lib/interceptor/apiClient";
import { errorStyles, successStyles } from "@/utils/notificationTheme";
import { convertDateFormat, getSubdomain } from "@/utils/publicFunctions";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { notifications } from "@mantine/notifications";
import { useSession } from "next-auth/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const useAddHolidayType = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const subdomain = getSubdomain();
  const { data: session } = useSession();
  const [holidays, setHolidays] = useState(null);
  const [pagination, setPagination] = useState(null);
  const [loading, setLoading] = useState(false);
  const [openedAdd, { open: openAdd, close: closeAdd }] = useDisclosure(false);
  const [openedEdit, { open: openEdit, close: closeEdit }] =
    useDisclosure(false);
  const [gettingDatas, setGettingDatas] = useState(false);
  const [isChanged, setIsChanged] = useState(null);
  const [itemID, setItemID] = useState("");
  const form = useForm({
    initialValues: {
      name: "",
      isFullDay: "",
      date: "",
      availability: "",
      isPaid: "",
      comments: "",
    },
    validate: {
      name: (value) => (!value.length ? "Leave Type Name is required" : null),
      availability: (value) =>
        !value.length ? "Avalability is required" : null,
      isFullDay: (value) => (!value.length ? "Field is required" : null),
      date: (value) => (value?.length === 0 ? "Date is required" : null),
      isPaid: (value) => (!value.length ? "Field is required" : null),
    },
  });
  const headerSettings = {
    headers: {
      Authorization: `Bearer ${session?.user.token}`,
      "x-subdomain-name": subdomain,
    },
  };
  const handleSubmit = async (data, type) => {
    setLoading(true);
    if (type === "add") {
      try {
        const modifiedValues = {
          ...data,
          isPaid: data.isPaid === "Paid",
          isFullDay: data.isFullDay === "Full Day",
          date: convertDateFormat(data.date),
        };
        const response = await apiClient.post(
          "/holiday-types",
          modifiedValues,
          headerSettings
        );
        notifications.show({
          color: "white",
          title: "Success",
          message: "Holiday added successfully. ",
          styles: successStyles,
          autoClose: 7000,
        });
        form.reset();
        setLoading(false);
        setIsChanged(response);
        closeAdd();
        form.reset();
      } catch (err) {
        if (err.errors) {
          err.errors.forEach((error) => {
            const { field, message } = error;

            form.setFieldError(field, message);
          });
        }

        setLoading(false);
      }
    }
  };
  const handleDelete = async () => {
    setLoading(true);
    try {
      if (itemID.length !== 0) {
        const response = await apiClient.delete(
          `/holiday-types/${itemID}`,
          headerSettings
        );
        notifications.show({
          color: "white",
          title: "Success",
          message: "Holiday deleted successfully. ",
          styles: successStyles,
          autoClose: 7000,
        });
        setLoading(false);
        setItemID("");
        setIsChanged(response);
      }
    } catch (err) {
      notifications.show({
        color: "red",
        message: "Something went wrong, please try again.",
        styles: errorStyles,
        autoClose: 7000,
      });
      setLoading(false);
    }
  };
  const handleEdit = async (data, type) => {
    setLoading(true);
    if (type === "edit") {
      try {
        if (itemID.length !== 0) {
          const modifiedValues = {
            ...data,
            isPaid: data.isPaid === "Paid",
            isFullDay: data.isFullDay === "Full Day",
            date: convertDateFormat(data.date),
          };

          const response = await apiClient.put(
            `/holiday-types/${itemID}`,
            modifiedValues,
            headerSettings
          );
          notifications.show({
            color: "white",
            title: "Success",
            message: "Holiday updated successfully. ",
            styles: successStyles,
            autoClose: 7000,
          });
          closeEdit();
          setLoading(false);
          setItemID("");
          setIsChanged(response);
          form.reset();
        }
      } catch (err) {
        if (err.errors) {
          err.errors.forEach((error) => {
            const { field, message } = error;
            form.setFieldError(field, message);
          });
        }

        setLoading(false);
      }
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
  const getHolidays = async (params = "") => {
    setGettingDatas(true);
    if (searchParams.get("page")) {
      params = searchParams.get("page");
    }

    try {
      const response = await apiClient.get(
        `/holiday-types?page=${params || "1"}`,
        headerSettings
      );
      setHolidays(response?.results.data);
      setPagination(response?.results.meta);
      setGettingDatas(false);
    } catch (err) {
      setGettingDatas(false);
      notifications.show({
        color: "red",
        message: "Something went wrong, please try again.",
        styles: errorStyles,
        autoClose: 7000,
      });
    }
  };

  useEffect(() => {
    getHolidays();
  }, [searchParams.get("page")]);
  useEffect(() => {
    if (isChanged !== null) {
      getHolidays();
    }
  }, [isChanged]);
  return {
    form,
    handleSubmit,
    holidays,
    openAdd,
    openedAdd,
    closeAdd,
    loading,
    openEdit,
    openedEdit,
    closeEdit,
    gettingDatas,
    setItemID,
    handleDelete,
    handleEdit,
    paginate,
    pagination,
  };
};

export default useAddHolidayType;
