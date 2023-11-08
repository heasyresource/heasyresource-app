"use client";
import { apiClient } from "@/lib/interceptor/apiClient";
import { getSubdomain } from "@/utils/publicFunctions";
import { Box, Button, Stack, Text, Title } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useMediaQuery } from "@mantine/hooks";
import { modals } from "@mantine/modals";
import { IconUserPlus } from "@tabler/icons-react";
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
  const [gettingData, setGettingData] = useState(false);
  const [loading, setLoading] = useState(false);
  const isMobile = useMediaQuery("(max-width: 500px)");
  const form = useForm({
    initialValues: {
      employeeName: "",
      employeeId: "",
      employeeStatus: "",
      employeeDepartment: "",
    },
  });

  const headerSettings = {
    headers: {
      Authorization: `Bearer ${session?.user.token}`,
      "x-subdomain-name": subdomain,
    },
  };
  const openModal = () =>
    modals.open({
      radius: "md",
      centered: true,
      children: (
        <Stack
          gap={"20px"}
          justify={"center"}
          align={"center"}
          pb={15}
          pt="2rem"
          px={isMobile ? 0 : 46}
        >
          <Box>
            <IconUserPlus
              style={{ color: "#3377FF", width: "50px", height: "50px" }}
            />
          </Box>
          <Box ta={"center"}>
            <Title order={isMobile ? 4 : 3} c="#000000">
              No Employee Found
            </Title>
            <Text c="#1E1E1E" size="13px" mt="5px">
              Start adding new employees, either individually or in bulk
            </Text>
          </Box>
          <Button fullWidth tt="capitalize" bg="#3377FF" size="md">
            add employees
          </Button>
        </Stack>
      ),
    });
  const handleSubmit = async (data) => {
    openModal();
    setLoading(true);
    try {
      console.log(data, "values");
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err, "values error");
    }
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
    try {
      const response = await apiClient.get(
        `/employees/${session?.user.company.id}?page=${params || "1"}`,
        headerSettings
      );
      setEmployees(response?.results.data);
      setPagination(response?.results.meta);
      setGettingData(false);
    } catch (err) {
      setGettingData(false);
      console.log(err, "Error getting employees");
    }
  };
  useEffect(() => {
    getEmployees();
  }, []);

  return {
    form,
    handleSubmit,
    loading,
    paginate,
    employees,
    gettingData,
    pagination,
  };
};

export default useSearch;
