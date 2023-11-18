"use client";
import React, { useEffect, useState } from "react";
import { useDashboard, useUploadImage } from ".";
import { signOut, useSession } from "next-auth/react";
import { getSubdomain } from "@/utils/publicFunctions";
import { apiClient } from "@/lib/interceptor/apiClient";
import { errorStyles, successStyles } from "@/utils/notificationTheme";
import { notifications } from "@mantine/notifications";
import { useRouter } from "next/navigation";

const useSetEmployee = () => {
  const { data: session } = useSession();
  const subdomain = getSubdomain();
  const [logo, setLogo] = useState("");
  const [uploading, setUploading] = useState(false);
  const [isChanged, setIsChanged] = useState(null);
  const router = useRouter();
  const [employeeInfo, setEmployeeInfo] = useState(null);
  const { handleUpload, response, loading, error } = useUploadImage();
  const [gettingInfo, setGettingInfo] = useState(true);

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
    setUploading(true);
    try {
      await handleUpload(data);
    } catch (err) {
      setUploading(false);
    }
  };
  const getEmployee = async () => {
    try {
      const response = await apiClient.get(
        `/employees/${session.user.company.id}/employee/${session.user.id}`,
        headerSettings
      );
      setGettingInfo(false);
      const results = response.results;
      setEmployeeInfo({
        name: `${results.firstName} ${results.lastName}`,
        email: results.email,
        position: results.employmentInfo.position,
        phoneNumber: results.phoneNumber,
        logo: results.logoUrl,
      });
      const infos = {
        name: results.company.name,
        position: results.employmentInfo.position,
        companyLogo: results.company.name,
        logoUrl: results.logoUrl,
        employeeName: `${results.firstName} ${results.lastName}`,
        email: results.email,
        phoneNumber: results.phoneNumber,
      };
      sessionStorage.setItem(
        "employeeInfo",
        obfuscateToken(true, JSON.stringify(infos))
      );
    } catch (err) {
      if (
        err.message === "Authorization is required to access this resource."
      ) {
        handleSignOut();
      }
    }
  };
  const handleComplete = async () => {
    try {
      const resp = await apiClient.put(
        `/employees/${session.user.id}/set-profile-picture`,
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
      setIsChanged(resp);
    } catch (err) {
      setUploading(false);
      notifications.show({
        color: "red",
        message: "Something went wrong. Pleaseddddd try again!",
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
  useEffect(() => {
    if (isChanged !== null) {
      getEmployee();
    }
  }, [isChanged]);

  useEffect(() => {
    getEmployee();
    //eslint-disable-next-line
  }, []);

  return {
    logo,
    setLogo,
    handleSubmit,
    employeeInfo,
    gettingInfo,
    uploading,
  };
};

export default useSetEmployee;
