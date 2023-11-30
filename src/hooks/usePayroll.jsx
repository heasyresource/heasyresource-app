"use client";
import { apiClient } from "@/lib/interceptor/apiClient";
import { errorStyles, successStyles } from "@/utils/notificationTheme";
import { getSubdomain } from "@/utils/publicFunctions";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { notifications } from "@mantine/notifications";
import { signOut, useSession } from "next-auth/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const usePayroll = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace, push } = useRouter();

  const { data: session } = useSession();
  const subdomain = getSubdomain();
  const [openedAddEarn, { open: openAddEarn, close: closeAddEarn }] =
    useDisclosure(false);
  const [openedEditEarn, { open: openEditEarn, close: closeEditEarn }] =
    useDisclosure(false);
  const [openedDeduct, { open: openDeduct, close: closeDeduct }] =
    useDisclosure(false);
  const [openedDeductEdit, { open: openDeductEdit, close: closeDeductEdit }] =
    useDisclosure(false);
  const [loading, setLoading] = useState(false);
  const [isChanged, setIsChanged] = useState(null);
  const [earnings, setEarnings] = useState(null);
  const [deductions, setDeductions] = useState(null);
  const [gettingData, setGettingData] = useState(true);
  const [componentId, setComponentId] = useState(null);
  const form = useForm({
    initialValues: {
      name: "",
      isFixed: true,
      rate: "",
      amount: "",
      frequency: "",
      comments: "",
      rate: "",
    },
    validate: {
      name: (val) => (!val.length ? "Name is required" : null),
      frequency: (val) => (!val.length ? "Frequency is required" : null),
      amount: (val) =>
        !val.length
          ? "Field is required"
          : /^\d*\.?\d*$/.test(val)
          ? null
          : "Enter a valid value",
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
  const handleSubmit = async (data, type) => {
    setLoading(true);
    const modifiedValues = {
      ...data,
      rate: !data.isFixed ? data.amount : "",
      amount: !data.isFixed ? "" : data.amount,
      type: type,
    };
    try {
      if (type === "Earnings") {
        const response = await apiClient.post(
          `/components`,
          modifiedValues,
          headerSettings
        );
        closeAddEarn();
        form.reset();
        setLoading(false);
        setIsChanged(response);
        notifications.show({
          color: "white",
          title: "Success",
          message: "Earning added successfully. ",
          styles: successStyles,
          autoClose: 7000,
        });
      }
      if (type === "Deductions") {
        const response = await apiClient.post(
          `/components`,
          modifiedValues,
          headerSettings
        );
        closeDeduct();
        form.reset();
        setLoading(false);
        setIsChanged(response);
        notifications.show({
          color: "white",
          title: "Success",
          message: "Deduction added successfully. ",
          styles: successStyles,
          autoClose: 7000,
        });
      }
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
        message: "Something went wrong, please try again. ",
        styles: errorStyles,
        autoClose: 7000,
      });
    }
  };
  const handleEdit = async (data, type) => {
    setLoading(true);
    const modifiedValues = {
      ...data,
      rate: !data.isFixed ? data.amount : "",
      amount: !data.isFixed ? "" : data.amount,
      type: type,
    };
    try {
      if (componentId.length !== 0) {
        if (type === "Earnings") {
          const response = await apiClient.put(
            `/components/${componentId}`,
            modifiedValues,
            headerSettings
          );
          closeEditEarn();
          form.reset();
          setLoading(false);
          setIsChanged(response);
          notifications.show({
            color: "white",
            title: "Success",
            message: "Earning updated successfully. ",
            styles: successStyles,
            autoClose: 7000,
          });
        }
        if (type === "Deductions") {
          const response = await apiClient.put(
            `/components/${componentId}`,
            modifiedValues,
            headerSettings
          );
          closeDeductEdit();
          form.reset();
          setLoading(false);
          setIsChanged(response);
          notifications.show({
            color: "white",
            title: "Success",
            message: "Deduction updated successfully. ",
            styles: successStyles,
            autoClose: 7000,
          });
        }
      }
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
        message: "Something went wrong, please try again. ",
        styles: errorStyles,
        autoClose: 7000,
      });
    }
  };
  const handleDelete = async (id) => {
    try {
      const response = await apiClient.delete(
        `/components/${id}`,
        headerSettings
      );
      notifications.show({
        color: "white",
        title: "Success",
        message: "Deleted successfully. ",
        styles: successStyles,
        autoClose: 7000,
      });

      setIsChanged(response);
    } catch (err) {
      notifications.show({
        color: "red",
        message: "Something went wrong, please try again.",
        styles: errorStyles,
        autoClose: 7000,
      });
    }
  };

  const getEarnings = async () => {
    try {
      const response = await apiClient.get(
        `/components?paginate=false`,
        headerSettings
      );
      const earn = response.results.filter((i) => i.type === "Earnings");
      const deduct = response.results.filter((i) => i.type === "Deductions");

      setEarnings(earn);
      setDeductions(deduct);
      setGettingData(false);
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
      getEarnings();
    }
    //eslint-disable-next-line
  }, [isChanged]);

  useEffect(() => {
    getEarnings();
    //eslint-disable-next-line
  }, []);

  return {
    form,
    loading,
    handleSubmit,
    openAddEarn,
    closeAddEarn,
    openedAddEarn,
    earnings,
    gettingData,
    openedDeduct,
    openDeduct,
    closeDeduct,
    deductions,
    openedEditEarn,
    openEditEarn,
    closeEditEarn,
    handleEdit,
    setComponentId,
    handleDelete,
    openedDeductEdit,
    openDeductEdit,
    closeDeductEdit,
  };
};

export default usePayroll;
