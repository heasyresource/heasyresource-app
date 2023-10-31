"use client";
import { Box, Button, Stack, Text, Title } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useMediaQuery } from "@mantine/hooks";
import { modals } from "@mantine/modals";
import { IconUserPlus } from "@tabler/icons-react";
import React, { useState } from "react";

const useSearch = () => {
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
  return {
    form,
    handleSubmit,
    loading,
  };
};

export default useSearch;
