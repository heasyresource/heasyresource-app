import React from "react";
import { Box, Grid, GridCol, Paper, Space, Text } from "@mantine/core";
import MiniCard from "@/components/MiniCard";

import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { DatePicker } from "@mantine/dates";

const Dashboard = async () => {
  const session = await getServerSession(authOptions);
  return (
    <Box style={{ height: "50%", borderRadius: "15px" }}>
      <Grid justify="space-around" align="stretch">
        <GridCol bg="#" span={12} style={{ minHeight: "80px" }}>
          <Box p="0px">
            <div>
              <Text c="#9C9C9C" fz="20px">
                Hi {session && session?.user?.firstName},
              </Text>
              <Space h="2px" />
              <Text fz={{ lg: "32px", md: "30px", sm: "25px" }} fw={700}>
                Welcome to your Dashboard
              </Text>
            </div>
            <Box mt="39">
              <Grid gutter={"lg"}>
                <MiniCard />
              </Grid>
            </Box>
            <Box>
              <Grid mt="30px">
                <GridCol span={{ lg: 9, md: 12, sm: 12 }}>
                  <Paper p="20px"></Paper>
                </GridCol>
                <GridCol span={{ lg: 3, md: 12, sm: 12 }}>
                  <Paper radius={"md"} p={"20px"}>
                    <DatePicker type="multiple" />
                  </Paper>
                </GridCol>
              </Grid>
            </Box>
          </Box>
        </GridCol>
      </Grid>
    </Box>
  );
};

export default Dashboard;
