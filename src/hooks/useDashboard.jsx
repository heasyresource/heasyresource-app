"use client";
import { apiClient } from "@/lib/interceptor/apiClient";
import { getSubdomain } from "@/utils/publicFunctions";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const useDashboard = () => {
  const { data: session } = useSession();
  const subdomain = getSubdomain();
  const router = useRouter();
  const [logo, setLogo] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyRep, setCompanyRep] = useState("");
  const headerSettings = {
    headers: {
      Authorization: `Bearer ${session?.user.token}`,
      "x-subdomain-name": subdomain,
    },
  };
  useEffect(() => {
    const getCompany = async () => {
      try {
        const response = await apiClient.get(
          `/companies/${session?.user.company.id}`,
          headerSettings
        );
        const results = response?.results;
        setLogo(results.logoUrl);
        setCompanyName(results.name);
      } catch (err) {
        console.log(err);
      }
    };
    const getEmployee = async () => {
      try {
        const response = await apiClient.get(
          `/employees/${session.user.company.id}/employee/${session.user.id}`,
          headerSettings
        );
        setCompanyRep(response.results.employmentInfo.position);
      } catch (err) {
        console.log(err, "Error getting employee");
      }
    };
    getCompany();
    getEmployee();

    //eslint-disable-next-line
  }, []);

  return {
    logo,
    companyName,
    companyRep,
  };
};

export default useDashboard;
