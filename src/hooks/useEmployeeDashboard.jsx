"use client";
import { apiClient } from "@/lib/interceptor/apiClient";
import { getSubdomain } from "@/utils/publicFunctions";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const useEmployeeDashboard = () => {
  const { data: session } = useSession();
  const subdomain = getSubdomain();
  const router = useRouter();
  const [employee, setEmployee] = useState({
    position: "",
    logoUrl: "",
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
  const getEmployee = async () => {
    try {
      const response = await apiClient.get(
        `/employees/${session.user.company.id}/employee/${session.user.id}`,
        headerSettings
      );

      setEmployee({
        position: response.results.employmentInfo.position,
      });
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
    //eslint-disable-next-line
  }, []);

  return { employee };
};

export default useEmployeeDashboard;
