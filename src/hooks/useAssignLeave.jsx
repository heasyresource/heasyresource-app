import { useForm } from "@mantine/form";
import React, { useEffect, useState } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { apiClient } from "@/lib/interceptor/apiClient";
import { convertDateFormat, getSubdomain } from "@/utils/publicFunctions";
import { useSession } from "next-auth/react";
import { notifications } from "@mantine/notifications";
import { errorStyles, successStyles } from "@/utils/notificationTheme";

const useAssignLeave = () => {
  const searchParams = useSearchParams();
  const firstName = searchParams.get("firstName");
  const lastName = searchParams.get("lastName");
  const router = useRouter();
  const { data: session } = useSession();
  const subdomain = getSubdomain();
  const [leaveTypes, setLeaveTypes] = useState(null);
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const { id } = params;

  const form = useForm({
    initialValues: {
      leaveTypeId: "",
      startDate: "",
      endDate: "",
      comments: "",
    },
    validate: {
      leaveTypeId: (value) => (!value.length ? "Leave Type is required" : null),
      startDate: (value) =>
        value.length === 0 ? "Start Date is required" : null,
      endDate: (value) => (value.length === 0 ? "End Date is required" : null),
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
    const modifiedValues = {
      ...data,
      startDate: convertDateFormat(data.startDate),
      endDate: convertDateFormat(data.endDate),
    };
    try {
      await apiClient.post(
        `/employee/${id}/leaves/assign`,
        modifiedValues,
        headerSettings
      );
      notifications.show({
        color: "white",
        title: "Success",
        message: "Leave assign successfully.",
        styles: successStyles,
        autoClose: 7000,
      });
      setLoading(false);
      router.push("/dashboard/leave");
    } catch (err) {
      setLoading(false);
      if (err.errors) {
        err.errors.forEach((error) => {
          const { field, message } = error;

          form.setFieldError(field, message);
        });
      }
      if (err.statusCode === 500) {
        notifications.show({
          color: "white",
          title: "Failed",
          message: "Something went wrong, please try again.",
          styles: errorStyles,
          autoClose: 7000,
        });
      }
    }
  };
  const getLeaveTypes = async () => {
    try {
      const response = await apiClient.get(`/leave-types`, headerSettings);
      const modifiedOptions = response.results.data.map((l) => ({
        value: l.id,
        label: l.name,
      }));
      setLeaveTypes(modifiedOptions);
    } catch (err) {
      // notifications.show({
      //   color: "red",
      //   message: "Something went wrong, please try again.",
      //   styles: errorStyles,
      //   autoClose: 7000,
      // });
    }
  };
  useEffect(() => {
    getLeaveTypes();
    //eslint-disable-next-line
  }, []);

  return {
    handleSubmit,
    form,
    leaveTypes,
    loading,
    router,
    firstName,
    lastName,
  };
};

export default useAssignLeave;
