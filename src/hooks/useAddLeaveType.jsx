"use client";
import { apiClient } from "@/lib/interceptor/apiClient";
import { errorStyles, successStyles } from "@/utils/notificationTheme";
import { getSubdomain } from "@/utils/publicFunctions";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { notifications } from "@mantine/notifications";
import { useSession } from "next-auth/react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const useAddLeaveType = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const subdomain = getSubdomain();
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const [isChanged, setIsChanged] = useState(null);
  const [openedAdd, { open: openAdd, close: closeAdd }] = useDisclosure(false);
  const [openedEdit, { open: openEdit, close: closeEdit }] =
    useDisclosure(false);
  const [leaves, setLeaves] = useState(null);
  const [pagination, setPagination] = useState(null);
  const [gettingData, setGettingData] = useState(false);
  const [itemID, setItemID] = useState("");
  const form = useForm({
    initialValues: {
      name: "",
      availability: "",
      isPaid: "",
      comments: "",
    },
    validate: {
      name: (val) => (!val.length ? "Leave Type is required" : null),
      availability: (val) => (!val.length ? "Availability is required" : null),
      isPaid: (val) => (!val.length ? "Select option" : null),
    },
  });

  const headerSettings = {
    headers: {
      Authorization: `Bearer ${session?.user.token}`,
      "x-subdomain-name": subdomain,
    },
  };
  const handleSubmit = async (data, type) => {
    if (type === "add") {
      setLoading(true);
      try {
        const modifiedValues = {
          ...data,
          isPaid: data.isPaid === "Paid",
        };
        const response = await apiClient.post(
          "/leave-types",
          modifiedValues,
          headerSettings
        );
        notifications.show({
          color: "white",
          title: "Success",
          message: "Leave added successfully. ",
          styles: successStyles,
          autoClose: 7000,
        });
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
          `/leave-types/${itemID}`,
          headerSettings
        );
        notifications.show({
          color: "white",
          title: "Success",
          message: "Leave deleted successfully. ",
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
          };
          const response = await apiClient.put(
            `/leave-types/${itemID}`,
            modifiedValues,
            headerSettings
          );
          notifications.show({
            color: "white",
            title: "Success",
            message: "Leave updated successfully. ",
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
  const getLeaves = async (params = "") => {
    setGettingData(true);
    if (searchParams.get("page")) {
      params = searchParams.get("page");
    }
    try {
      const response = await apiClient.get(
        `/leave-types?page=${params || "1"}`,
        headerSettings
      );
      setLeaves(response.results.data);
      setPagination(response.results.meta);
      setGettingData(false);
    } catch (err) {
      setGettingData(false);
      notifications.show({
        color: "red",
        message: "Something went wrong, please try again.",
        styles: errorStyles,
        autoClose: 7000,
      });
    }
  };
  useEffect(() => {
    getLeaves();
  }, []);
  useEffect(() => {
    if (isChanged) {
      getLeaves();
    }
  }, [isChanged]);
  return {
    form,
    gettingData,
    handleSubmit,
    openAdd,
    openedAdd,
    closeAdd,
    loading,
    leaves,
    setItemID,
    openEdit,
    closeEdit,
    openedEdit,
    handleDelete,
    handleEdit,
    pagination,
    paginate,
  };
};

export default useAddLeaveType;
