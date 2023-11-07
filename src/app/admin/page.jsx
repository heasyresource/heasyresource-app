import { Box, Container, Grid, Group, Space, Text } from "@mantine/core";
import React from "react";
import classes from "../../components/AdminLayout/admin.module.css";
import Profile from "@/components/Profile";
import MiniCard from "@/components/MiniCard";
import AdminMiniCards from "@/components/AdminLayout/AdminMiniCards";
import CompanyTable from "@/components/AdminLayout/CompanyTable";

const Admin = () => {
  return (
    <Container className={classes.container} size="100%">
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
          <Grid justify="space-between" py={'2rem'} gutter={"lg"}>
            <AdminMiniCards />
          </Grid>
          <CompanyTable />
        </div>
      </div>
    </Container>
  );
};

export default Admin;
