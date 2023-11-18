"use client";
import AdminMiniCards from "@/components/AdminLayout/AdminMiniCards";
import CompanyTable from "@/components/AdminLayout/CompanyTable";
import Profile from "@/components/Profile";
import { Box, Grid, Group, Space, Text, Container } from "@mantine/core";
import React from "react";
import classes from "../../components/AdminLayout/admin.module.css";
import useAdmin from "@/hooks/useAdmin";

const PageWrap = () => {
  const { companies, paginate, pagination, gettingData } = useAdmin();
  return (
    <Box style={{ backgroundColor: "#f8f9fa" }}>
      <div className={classes.inner}>
        <div className={classes.content}>
          <Group justify="space-between">
            <Box>
              <Text c="#9C9C9C" fz="20px">
                Hi Elizabeth,
              </Text>
              <Space h="2px" />
              <Text fz={{ lg: "32px", md: "30px", sm: "25px" }} fw={700}>
                Admin Dashboard
              </Text>
            </Box>
            <Profile />
          </Group>
          <Grid justify="space-between" py={"2rem"} gutter={"lg"}>
            <AdminMiniCards />
          </Grid>
          <CompanyTable
            paginate={paginate}
            pagination={pagination}
            gettingData={gettingData}
            companies={companies}
          />
        </div>
      </div>
    </Box>
  );
};

export default PageWrap;
