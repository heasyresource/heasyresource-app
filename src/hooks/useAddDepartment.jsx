"use client";
import { apiClient } from "@/lib/interceptor/apiClient";
import { errorStyles, successStyles } from "@/utils/notificationTheme";
import { getSubdomain } from "@/utils/publicFunctions";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { notifications } from "@mantine/notifications";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

const useAddDepartment = () => {
  const subdomain = getSubdomain();
  const { data: session } = useSession();
  const [departments, setDepartments] = useState(null);
  const [pagination, setPagination] = useState(null);
  const [loading, setLoading] = useState(false);
  const [openedAdd, { open: openAdd, close: closeAdd }] = useDisclosure(false);
  const [openedEdit, { open: openEdit, close: closeEdit }] =
    useDisclosure(false);
  const [getttingDatas, setGettingDatas] = useState(false);
  const [isChanged, setIsChanged] = useState(null);
  const [itemID, setItemID] = useState("");
  const form = useForm({
    initialValues: {
      name: "",
      code: "",
    },
    validate: {
      name: (val) => (!val.length ? "Department name is required" : null),
      code: (val) => (!val.length ? "Department code is required" : null),
    },
  });
  const editForm = useForm({
    initialValues: {
      name: "",
      code: "",
    },
    validate: {
      name: (val) => (!val.length ? "Department name is required" : null),
      code: (val) => (!val.length ? "Department code is required" : null),
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
        const response = await apiClient.post(
          "/departments",
          data,
          headerSettings
        );
        notifications.show({
          color: "white",
          title: "Success",
          message: "Department added successfully. ",
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

        console.log(err, "Error Adding department");
      }
    }
  };
  const handleDelete = async () => {
    setLoading(true);
    try {
      if (itemID.length !== 0) {
        const response = await apiClient.delete(
          `/departments/${itemID}`,
          headerSettings
        );
        notifications.show({
          color: "white",
          title: "Success",
          message: "Department deleted successfully. ",
          styles: successStyles,
          autoClose: 7000,
        });
        console.log(response, "deleted department");
        setLoading(false);
        setItemID("");
        setIsChanged(response);
      }
    } catch (err) {
      console.log(err, "Error deleting department");
      notifications.show({
        color: "red",
        message: "Something went wrong, please try again.",
        styles: errorStyles,
        autoClose: 7000,
      });
      setLoading(false);

      console.log(err, "Error deleting department");
    }
  };
  const handleEdit = async (data, type) => {
    setLoading(true);
    if (type === "edit") {
      try {
        if (itemID.length !== 0) {
          const response = await apiClient.put(
            `/departments/${itemID}`,
            data,
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

        console.log(err, "Error Edit department");
      }
    }
  };
  const getDepartments = async () => {
    setGettingDatas(true);
    try {
      const response = await apiClient.get("/departments", headerSettings);
      setDepartments(response?.results.data);
      setPagination(response?.results.meta);
      console.log(response, "getting department");
      setGettingDatas(false);
    } catch (err) {
      setGettingDatas(false);
      notifications.show({
        color: "red",
        message: "Something went wrong, please try again.",
        styles: errorStyles,
        autoClose: 2000,
      });
      console.log(err, "Error getting departments");
    }
  };
  useEffect(() => {
    getDepartments();
  }, []);
  useEffect(() => {
    if (isChanged) {
      getDepartments();
    }
  }, [isChanged]);
  return {
    loading,
    form,
    departments,
    handleSubmit,
    handleDelete,
    handleEdit,
    getttingDatas,
    editForm,
    setItemID,
    openedAdd,
    closeAdd,
    openAdd,
    openedEdit,
    closeEdit,
    openEdit,
    pagination,
  };
};

export default useAddDepartment;
