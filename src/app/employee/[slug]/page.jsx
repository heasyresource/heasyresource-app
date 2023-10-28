import { AddEmployee, EmployeeLayout } from "@/components";
import Layout from "@/components/Layout";
import { Box, Text } from "@mantine/core";
import React from "react";
import SlugCheck from "./slugCheck";

const pages = () => {
  return (
    <Layout>
      <Box bg={"white"} mt="2rem" h={"auto"}>
        <AddEmployee />
        <EmployeeLayout>
          <SlugCheck />
        </EmployeeLayout>
      </Box>
    </Layout>
  );
};

export default pages;
