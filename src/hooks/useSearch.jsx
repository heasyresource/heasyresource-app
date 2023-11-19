"use client";
import { apiClient } from "@/lib/interceptor/apiClient";
import { Box, Button, Stack, Text, Title } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useMediaQuery } from "@mantine/hooks";
import { modals } from "@mantine/modals";
import { IconUserPlus } from "@tabler/icons-react";
import { getSubdomain } from "@/utils/publicFunctions";
import { useSession } from "next-auth/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useState, useEffect } from "react";

const useSearch = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const subdomain = getSubdomain();
  const { data: session } = useSession();
  const [employees, setEmployees] = useState(null);
  const [pagination, setPagination] = useState(null);
  const [gettingData, setGettingData] = useState(true);
  const [loading, setLoading] = useState(false);
  const [departments, setDepartments] = useState(null);
  const isMobile = useMediaQuery("(max-width: 500px)");
  const form = useForm({
    initialValues: {
      employeeName: "",
      employeeId: "",
      status: "",
      departmentId: "",
    },
  });

  const headerSettings = {
    headers: {
      Authorization: `Bearer ${session?.user.token}`,
      "x-subdomain-name": subdomain,
    },
  };

  const paginate = (page) => {
    const params = new URLSearchParams(searchParams);
    if (page) {
      params.set("page", page);
    } else {
      params.delete("page");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  const getEmployees = async (params = "") => {
    setGettingData(true);
    if (searchParams.get("page")) {
      params = searchParams.get("page");
    }
    const qParams = {
      page: params || "1",
    };
    if (!!form.values.departmentId?.length) {
      qParams.departmentId = form.values.departmentId;
    }
    if (!!form.values.employeeId?.length) {
      qParams.employeeId = form.values.employeeId;
    }
    if (!!form.values.employeeName?.length) {
      qParams.search = form.values.employeeName;
    }
    if (!!form.values.status?.length) {
      qParams.status = form.values.status;
    }
    try {
      const response = await apiClient.get(
        `/employees/${session?.user.company.id}`,
        { params: qParams, ...headerSettings }
      );
      setEmployees(response?.results?.data);
      setPagination(response?.results?.meta);
      setGettingData(false);
    } catch (err) {
      setGettingData(false);
      console.log(err, "Error getting employees");
    }
  };
  const getDepartments = async () => {
    try {
      const response = await apiClient.get(
        `/departments?paginate=false`,
        headerSettings
      );
      const department = response.results.map((option) => ({
        value: option.id,
        label: option.name,
      }));
      setDepartments(department);
    } catch (err) {}
  };
  useEffect(() => {
    getEmployees();
    //eslint-disable-next-line
  }, [searchParams.get("page")]);
  useEffect(() => {
    getDepartments();
    //eslint-disable-next-line
  }, []);

  return {
    form,
    loading,
    paginate,
    employees,
    gettingData,
    pagination,
    departments,
    getEmployees,
  };
};

export default useSearch;
