"use client";

import CompanyTable from "@/components/AdminLayout/CompanyTable";
import Profile from "@/components/Profile";
import { Box, Grid, Group, Space, Text, GridCol, Card } from "@mantine/core";
import React from "react";
import classes from "../../components/AdminLayout/admin.module.css";
import useAdmin from "@/hooks/useAdmin";
import { IconBuildingSkyscraper } from "@tabler/icons-react";

const PageWrap = ({ analytics }) => {
  const { companies, paginate, pagination, gettingData } = useAdmin();
  return (
    <Box style={{ backgroundColor: "#f8f9fa" }}>
      <div className={classes.inner}>
        <div className={classes.content}>
          <Group justify="space-between" align="flex-start">
            <Box>
              <Text c="#9C9C9C" fz="20px">
                Welcome back,
              </Text>
              <Space h="2px" />
              <Text fz={{ lg: "32px", md: "30px", sm: "25px" }} fw={700}>
                Admin Dashboard
              </Text>
            </Box>
            <Profile />
          </Group>
          <Grid justify="space-between" py={"2rem"} gutter={"lg"}>
            <GridCol span={{ lg: "content", md: 3, sm: 6 }}>
              <Card
                className={classes.card}
                style={{
                  width: "250px",
                  height: "120px",
                  borderRadius: "15px",
                }}
                px="28"
                py="20"
                bg="var(--mantine-color-body)"
              >
                <Text style={{ color: "#7EA6F4" }} fz="sm" fw={700}>
                  Total Companies
                </Text>
                <Group mt={30} align="center" justify="space-between">
                  <Text style={{ fontSize: "24px" }} fw={700}>
                    {analytics && analytics.allCompanyCount}
                  </Text>
                  <IconBuildingSkyscraper style={{ color: "#7EA6F4" }} />,
                </Group>
              </Card>
            </GridCol>
            <GridCol span={{ lg: "content", md: 3, sm: 6 }}>
              <Card
                className={classes.card}
                style={{
                  width: "250px",
                  height: "120px",
                  borderRadius: "15px",
                }}
                px="28"
                py="20"
                bg="var(--mantine-color-body)"
              >
                <Text style={{ color: "#7EA6F4" }} fz="sm" fw={700}>
                  Total Active Companies
                </Text>
                <Group mt={30} align="center" justify="space-between">
                  <Text style={{ fontSize: "24px" }} fw={700}>
                    {analytics && analytics.activeCompanyCount}
                  </Text>
                  <IconBuildingSkyscraper style={{ color: "#7EA6F4" }} />,
                </Group>
              </Card>
            </GridCol>
            <GridCol span={{ lg: "content", md: 3, sm: 6 }}>
              <Card
                className={classes.card}
                style={{
                  width: "250px",
                  height: "120px",
                  borderRadius: "15px",
                }}
                px="28"
                py="20"
                bg="var(--mantine-color-body)"
              >
                <Text style={{ color: "#7EA6F4" }} fz="sm" fw={700}>
                  Total Inactive Companies
                </Text>
                <Group mt={30} align="center" justify="space-between">
                  <Text style={{ fontSize: "24px" }} fw={700}>
                    {analytics && analytics.inActiveCompanyCount}
                  </Text>
                  <IconBuildingSkyscraper style={{ color: "#7EA6F4" }} />,
                </Group>
              </Card>
            </GridCol>
            <GridCol span={{ lg: "content", md: 3, sm: 6 }}>
              <Card
                className={classes.card}
                style={{
                  width: "250px",
                  height: "120px",
                  borderRadius: "15px",
                }}
                px="28"
                py="20"
                bg="var(--mantine-color-body)"
              >
                <Text style={{ color: "#7EA6F4" }} fz="sm" fw={700}>
                  Total Rejected Companies
                </Text>
                <Group mt={30} align="center" justify="space-between">
                  <Text style={{ fontSize: "24px" }} fw={700}>
                    {analytics && analytics.rejectedCompanyCount}
                  </Text>
                  <IconBuildingSkyscraper style={{ color: "#7EA6F4" }} />,
                </Group>
              </Card>
            </GridCol>
            <GridCol span={{ lg: "content", md: 3, sm: 6 }}>
              <Card
                className={classes.card}
                style={{
                  width: "250px",
                  height: "120px",
                  borderRadius: "15px",
                }}
                px="28"
                py="20"
                bg="var(--mantine-color-body)"
              >
                <Text style={{ color: "#7EA6F4" }} fz="sm" fw={700}>
                  Total Suspended Companies
                </Text>
                <Group mt={30} align="center" justify="space-between">
                  <Text style={{ fontSize: "24px" }} fw={700}>
                    {analytics && analytics.suspendedCompanyCount}
                  </Text>
                  <IconBuildingSkyscraper style={{ color: "#7EA6F4" }} />,
                </Group>
              </Card>
            </GridCol>
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
