"use client";
import { apiClient } from "@/lib/interceptor/apiClient";
import { obfuscateToken } from "@/utils/encryptToken";
import { getSubdomain } from "@/utils/publicFunctions";
import { signOut, useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const useDashboard = () => {
  const pathname = usePathname();
  const { data: session } = useSession();
  const subdomain = getSubdomain();
  const router = useRouter();
  const [logo, setLogo] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyRep, setCompanyRep] = useState("");
  const [loading, setLoading] = useState(true);
  const [companyEmployee, setCompanyEmployee] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    position: "",
    logo: "",
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

        const results = response.results;
        setCompanyEmployee({
          employeeName: `${results.firstName} ${results.lastName}`,
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
        setCompanyRep(response.results.employmentInfo.position);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        if (
          err.message === "Authorization is required to access this resource."
        ) {
          handleSignOut();
        }
      }
    };
    if (!pathname.startsWith("/employee")) {
      getCompany();
    }
    getEmployee();

    //eslint-disable-next-line
  }, []);

  return {
    logo,
    companyName,
    companyRep,
    companyEmployee,
    loading,
  };
};

export default useDashboard;
