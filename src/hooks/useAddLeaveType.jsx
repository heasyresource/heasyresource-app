"use client";
import { apiClient } from "@/lib/interceptor/apiClient";
import { errorStyles, successStyles } from "@/utils/notificationTheme";
import { getSubdomain } from "@/utils/publicFunctions";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { notifications } from "@mantine/notifications";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

const useAddLeaveType = () => {
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
  const editForm = useForm({
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
          isPaid: data.isPaid === "Yes",
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
      } catch (err) {
        if (err.errors) {
          err.errors.forEach((error) => {
            const { field, message } = error;
            console.log(field, message, "message");
            form.setFieldError(field, message);
          });
        }
        notifications.show({
          color: "red",
          message: "Something went wrong, please try again.",
          styles: errorStyles,
          autoClose: 7000,
        });
        setLoading(false);
        setIsChanged(false);
        console.log(err, "Error submitting");
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
        console.log(response, "deleted leave");
        setLoading(false);
        setItemID("");
        setIsChanged(response);
      }
    } catch (err) {
      console.log(err, "Error deleting leave");
      notifications.show({
        color: "red",
        message: "Something went wrong, please try again.",
        styles: errorStyles,
        autoClose: 7000,
      });
      setLoading(false);
      console.log(err, "Error deleting leave");
    }
  };
  const handleEdit = async (data, type) => {
    setLoading(true);
    if (type === "edit") {
      try {
        if (itemID.length !== 0) {
          const modifiedValues = {
            ...data,
            isPaid: data.isPaid === "Yes",
          };
          const response = await apiClient.put(
            `/leave-types/${itemID}`,
            modifiedValues,
            headerSettings
          );
          notifications.show({
            color: "white",
            title: "Success",
            message: "Department updated successfully. ",
            styles: successStyles,
            autoClose: 7000,
          });
          closeEdit();
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
        setIsChanged(false);
        console.log(err, "Error Edit department");
      }
    }
  };
  const getLeaves = async () => {
    setGettingData(true);
    try {
      const response = await apiClient.get("/leave-types", headerSettings);
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
      console.log(err, "Error getting departments");
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
  console.log(leaves, "leaves");
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
    editForm,
    handleDelete,
    handleEdit,
    pagination,
  };
};

export default useAddLeaveType;
