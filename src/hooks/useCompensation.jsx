"use client";
import { apiClient } from "@/lib/interceptor/apiClient";
import { errorStyles, successStyles } from "@/utils/notificationTheme";
import { getSubdomain } from "@/utils/publicFunctions";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { signOut, useSession } from "next-auth/react";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const useCompensation = () => {
  const param = useParams();
  const { id } = param;
  const subdomain = getSubdomain();
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const [componentLoading, setComponentLoading] = useState(false);
  const router = useRouter();
  const [earnings, setEarnings] = useState(null);
  const [deductions, setDeductions] = useState(null);
  const form = useForm({
    initialValues: {
      grossSalary: "",
      frequency: "",
      currency: "",
    },
    validate: {
      grossSalary: (v) => (!v.length ? "Gross Salary" : null),
      frequency: (v) => (!v.length ? " Frequency is required " : null),
      currency: (v) => (!v.length ? " Currency is required " : null),
    },
  });
  const componentForm = useForm({
    initialValues: {
      earns: [],
      deduct: [],
    },
    validate: {
      earns: (val) => (val.length !== 0 ? null : "Field is required"),
      deduct: (val) => (val.length !== 0 ? null : "Field is required"),
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
    router.push(result.url);
  };
  const handleSubmit = async (data) => {
    setLoading(true);
    try {
      await apiClient.put(
        `/employees/${id}/salary`,
        { ...data, grossSalary: convertToDecimalFormat(data.grossSalary) },
        headerSettings
      );
      notifications.show({
        color: "white",
        title: "Success",
        message: "Salary added successfully. ",
        styles: successStyles,
        autoClose: 7000,
      });
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
        message: "Something went wrong, please try again.",
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
  const handleComponentSubmit = async (data) => {
    setComponentLoading(true);

    try {
      await apiClient.post(
        `/components/user/${id}`,
        {
          componentIds: [...data.earns, ...data.deduct],
        },
        headerSettings
      );
      notifications.show({
        color: "white",
        title: "Success",
        message: "Components added successfully. ",
        styles: successStyles,
        autoClose: 7000,
      });
      setComponentLoading(false);
    } catch (err) {
      setComponentLoading(false);
      notifications.show({
        color: "red",
        message: "Something went wrong, please try again.",
        styles: errorStyles,
        autoClose: 7000,
      });
    }
  };
  const getEmployee = async () => {
    try {
      const response = await apiClient.get(
        `/employees/${session.user.company.id}/employee/${
          id || session.user.id
        }`,
        headerSettings
      );
      const results = response.results.salary;
      const components = response.results.components;
      const earn = components.filter(
        (item) => item.component && item.component.type === "Earnings"
      );
      const deduct = components.filter(
        (item) => item.component && item.component.type === "Deductions"
      );
      const modifiedEarns = earn.map((item) => item.component.id);
      const modifiedDeduct = deduct.map((item) => item.component.id);
      componentForm.setValues({
        earns: modifiedEarns,
        deduct: modifiedDeduct,
      });

      console.log({ modifiedDeduct, modifiedEarns });
      form.setValues({
        grossSalary: convertToDecimalFormat(results.grossSalary),
        frequency: results.frequency,
        currency: results.currency,
      });
    } catch (err) {
      if (err.statusCode >= 400) {
        notifications.show({
          color: "white",
          message: "Something went wrong, please try again.",
          styles: errorStyles,
          autoClose: 7000,
        });
      }
      if (
        err.message === "Authorization is required to access this resource."
      ) {
        handleSignOut();
      }
    }
  };

  const convertToDecimalFormat = (inputString) => {
    const parsedNumber = parseFloat(inputString);

    if (!isNaN(parsedNumber)) {
      const decimalString = parsedNumber.toFixed(2);
      return decimalString.toString();
    }
  };
  const getEarnings = async () => {
    try {
      const response = await apiClient.get(
        `/components?paginate=false`,
        headerSettings
      );
      const earn = response.results.filter((i) => i.type === "Earnings");
      const modifiedEarns = earn.map((item) => ({
        value: item.id,
        label: item.name,
      }));
      const deduct = response.results.filter((i) => i.type === "Deductions");
      const modifiedDeduct = deduct.map((item) => ({
        value: item.id,
        label: item.name,
      }));
      setEarnings(modifiedEarns);
      setDeductions(modifiedDeduct);
    } catch (err) {
      if (
        err.message === "Authorization is required to access this resource."
      ) {
        handleSignOut();
      }
    }
  };

  useEffect(() => {
    getEmployee();
    getEarnings();
    //eslint-disable-next-line
  }, []);

  return {
    form,
    router,
    loading,
    handleSubmit,
    earnings,
    deductions,
    componentForm,
    handleComponentSubmit,
    componentLoading,
  };
};

export default useCompensation;
