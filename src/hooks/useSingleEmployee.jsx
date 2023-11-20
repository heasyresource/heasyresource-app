"use client";
import { apiClient } from "@/lib/interceptor/apiClient";

import { getSubdomain } from "@/utils/publicFunctions";
import { useSession } from "next-auth/react";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const useSingleEmployee = () => {
  const param = useParams();
  const { id } = param;
  const subdomain = getSubdomain();
  const { data: session } = useSession();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [position, setPosition] = useState("");
  const [logoUrl, setLogoUrl] = useState(null);
  const [gettingInfo, setGettingInfo] = useState(true);

  const headerSettings = {
    headers: {
      Authorization: `Bearer ${session?.user.token}`,
      "x-subdomain-name": subdomain,
    },
  };

  const getEmployee = async () => {
    try {
      const response = await apiClient.get(
        `/employees/${session.user.company.id}/employee/${id}`,
        headerSettings
      );
      const results = response.results;
      setFirstName(results.firstName);
      setLastName(results.lastName);
      setPosition(results.employmentInfo.position);
      setLogoUrl(results.logoUrl);
      setGettingInfo(false);
    } catch (err) {}
  };

  useEffect(() => {
    getEmployee();

    //eslint-disable-next-line
  }, []);
  return {
    firstName,
    lastName,
    position,
    id,
    gettingInfo,
    logoUrl,
  };
};

export default useSingleEmployee;
