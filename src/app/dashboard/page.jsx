 import React from "react";
import {
  Box,
  Container,
  Grid,
  GridCol,
  Paper,
  ScrollArea,
  SimpleGrid,
  Space,
  Text,
} from "@mantine/core";
import MiniCard from "@/components/MiniCard";
import Messages from "@/components/Messages";
import Notifications from "@/components/Notifications";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { DatePicker } from "@mantine/dates";

const Dashboard = async () => {
  const session = await getServerSession(authOptions);
  return (
    <Box style={{ height: "50%", borderRadius: "15px" }}>
      <Grid justify="space-around" align="stretch">
        <GridCol
          bg="#"
          span={{ lg: 8.5, md: 12, sm: 12 }}
          style={{ minHeight: "80px" }}
        >
          <Container p="0px">
            <div>
              <Text c="#9C9C9C" fz="20px">
                Hi {session && session?.user?.firstName},
              </Text>
              <Space h="2px" />
              <Text fz={{ lg: "32px", md: "30px", sm: "25px" }} fw={700}>
                Welcome to your Dashboard
              </Text>
            </div>
            <Container mt="39">
              <Grid gutter={"lg"}>
                <MiniCard />
              </Grid>
            </Container>
            <Container>
              <Grid mt="30px">
                <GridCol span={{ lg: 8, md: 12, sm: 12 }}>
                  <Paper p="20px"></Paper>
                </GridCol>
                <GridCol span={{ lg: 4, md: 12, sm: 12 }}>
                  <Paper radius={"md"} p={"20px"}>
                    <DatePicker type="multiple" />
                  </Paper>
                </GridCol>
              </Grid>
            </Container>
          </Container>
        </GridCol>
        <GridCol pr="xs" span={{ lg: 3.5, md: 12, sm: 12 }}>
          <Space h="45px" />
          <SimpleGrid style={{ borderRadius: "15px" }} bg="#ffff" cols={1}>
            <ScrollArea scrollbarSize={4} type="never">
              <Notifications />
            </ScrollArea>
            <div style={{ borderTop: "3px solid #EFEFEF" }}>
              <ScrollArea scrollbarSize={4} type="never">
                <Messages />
              </ScrollArea>
            </div>
          </SimpleGrid>
        </GridCol>
      </Grid>
    </Box>
  );
};

export default Dashboard;
