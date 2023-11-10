"use client";
import { apiClient } from "@/lib/interceptor/apiClient";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const useDashboard = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [logo, setLogo] = useState("");
  const [companyName, setCompanyName] = useState("");
  useEffect(() => {
    const getCompany = async () => {
      try {
        const response = await apiClient.get(
          `/companies/${session?.user.company.id}`,
          {
            headers: {
              Authorization: `Bearer ${session?.user.token}`,
            },
          }
        );
        const results = response?.results;
        setLogo(results.logoUrl);
        setCompanyName(results.name);
        if (results.isActive !== 1) {
          router.push("/complete-registration");
        }
      } catch (err) {}
    };
    getCompany();
  }, []);

  return {
    logo,
    companyName,
  };
};

export default useDashboard;
