"use client";
import React, { useEffect, useState } from "react";
import { useUploadImage } from ".";
import { useSession } from "next-auth/react";
import { getSubdomain } from "@/utils/publicFunctions";
import { apiClient } from "@/lib/interceptor/apiClient";
import { errorStyles, successStyles } from "@/utils/notificationTheme";
import { notifications } from "@mantine/notifications";
import { useParams } from "next/navigation";

const useProfileNav = () => {
  const { data: session } = useSession();
  const param = useParams();
  const { id } = param;
  const subdomain = getSubdomain();
  const [uploading, setUploading] = useState(false);
  const { handleUpload, response, loading, error } = useUploadImage();

  const headerSettings = {
    headers: {
      Authorization: `Bearer ${session?.user.token}`,
      "x-subdomain-name": subdomain,
    },
  };

  const handleSubmit = async (data) => {
    setUploading(true);
    try {
      await handleUpload(data);
    } catch (err) {
      setUploading(false);
    }
  };

  const handleComplete = async () => {
    try {
      await apiClient.put(
        `/employees/${id || session.user.id}/set-profile-picture`,
        {
          url: response?.data.secure_url,
        },
        headerSettings
      );
      notifications.show({
        color: "white",
        title: "Success",
        message: "Profile image updated successfully",
        styles: successStyles,
        autoClose: 7000,
      });
      setUploading(false);
    } catch (err) {
      setUploading(false);
      notifications.show({
        color: "red",
        message: "Something went wrong. Please try again!",
        styles: errorStyles,
        autoClose: 7000,
      });
    }
  };
  useEffect(() => {
    if (response?.status === 200 || response?.status === 201) {
      handleComplete();
    }
    //eslint-disable-next-line
  }, [response]);

  return {
    handleSubmit,
    uploading,
  };
};

export default useProfileNav;
