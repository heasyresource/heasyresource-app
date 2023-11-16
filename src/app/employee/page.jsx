"use client";
import React from "react";
import {
  ActionIcon,
  Badge,
  Box,
  Card,
  CardSection,
  Container,
  Divider,
  Flex,
  Grid,
  GridCol,
  Group,
  Paper,
  Progress,
  ScrollArea,
  SimpleGrid,
  Space,
  Text,
} from "@mantine/core";
import Messages from "@/components/Messages";
import Notifications from "@/components/Notifications";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { DatePicker } from "@mantine/dates";
import { useCompleteReg } from "@/hooks";
import AddEmployeeImg from "./components/AddEmployeeImg";
import {
  IconAt,
  IconBrandLinkedin,
  IconBrandTelegram,
  IconPhoneCall,
} from "@tabler/icons-react";
import classes from "./dashboard.module.css";
import { IconBrandDiscordFilled } from "@tabler/icons-react";
import Link from "next/link";
import PaymentTable from "./components/PaymentTable";

const Dashboard = async () => {
  const { setLogo, loading, uploading, isSubmitted } = useCompleteReg();
  // const session = await getServerSession(authOptions);
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
                {/* Hi {session && session?.user?.firstName}, */}
                Hi Elizabeth,
              </Text>
              <Space h="2px" />
              <Text fz={{ lg: "32px", md: "30px", sm: "25px" }} fw={700}>
                Welcome to your Dashboard
              </Text>
            </div>
            <Container p={0} mt="39">
              <Grid gutter={"xl"}>
                <GridCol
                  style={{ borderRadius: "15px" }}
                  span={{ base: 12, xs: 8 }}
                >
                  <Paper
                    h={240}
                    bg={"#ffff"}
                    style={{ borderRadius: "15px" }}
                    py={20}
                  >
                    <Group
                      my={"auto"}
                      align="center"
                      justify="center"
                      p={0}
                      gap={20}
                      wrap="nowrap"
                    >
                      <AddEmployeeImg
                        setLogo={setLogo}
                        loading={loading}
                        uploading={uploading}
                        isSubmitted={isSubmitted}
                      />
                      <div>
                        <Text fz={24} fw={500}>
                          Elizabeth Dorcas Funke
                        </Text>
                        <Badge tt={"capitalize"} variant="light" color="blue">
                          FullStack Developer
                        </Badge>
                        <Space h={10} />
                        <Group wrap="nowrap" gap={10} mt={3}>
                          <Text fw={700} fz="sm" c={"#686868"}>
                            Phone:
                          </Text>
                          <Text fz="sm" c="dimmed">
                            +234 000 000 0000
                          </Text>
                        </Group>

                        <Group wrap="nowrap" gap={10} mt={5}>
                          <Text fw={700} fz="sm" c={"#686868"}>
                            Email:
                          </Text>
                          <Text fz="sm" c="dimmed">
                            lizzydf@heasyresource.com
                          </Text>
                        </Group>
                        <Space h={10} />
                        <Group>
                          <ActionIcon variant="transparent" color="#84ADFF">
                            <IconBrandDiscordFilled />
                          </ActionIcon>
                          <ActionIcon variant="transparent" color="#84ADFF">
                            <IconBrandLinkedin />
                          </ActionIcon>
                          <ActionIcon variant="transparent" color="#84ADFF">
                            <IconBrandTelegram />
                          </ActionIcon>
                        </Group>
                      </div>
                    </Group>
                  </Paper>
                </GridCol>
                <GridCol span={{ base: 12, xs: 4 }}>
                  <Paper
                    h={240}
                    bg={"#ffff"}
                    p={20}
                    style={{ borderRadius: "15px" }}
                  >
                    <Card>
                      <Group p={0} justify="space-between">
                        <Text c={"#808080"} tt={"capitalize"}>
                          current salary
                        </Text>
                        <Link className={classes.detailsLink} href={"#"}>
                          more details
                        </Link>
                      </Group>
                      <Text c={"#3377FF"} fz={32} fw={700}>
                        # 458,890
                      </Text>
                      <Divider my="lg" />
                      <Text c={"#808080"} fz={"12px"} fw={400}>
                        Next Payment Date:
                      </Text>
                      <Space h={10} />
                      <Text c={"#2D2D2D"} fz={"15px"}>
                        19th of December, 2024
                      </Text>
                    </Card>
                  </Paper>
                </GridCol>
                <GridCol span={{ base: 12, xs: 'content' }}>
                  <Paper radius={"md"} p={"20px"}>
                    <DatePicker type="multiple" />
                  </Paper>
                </GridCol>
                <GridCol span={{ base: 12, xs: 'auto' }}>
                  <Paper style={{ borderRadius: "15px" }} p={20} h={280}>
                    <Text c={"#808080"}>Next Leave</Text>
                    <Space h={20} />
                    <Text c={"#6A6A6A"} fz={17} fw={700}>
                      Thursday, 22nd of December, 2023
                    </Text>
                    <Divider my={"xl"} size={"sm"} />
                    <Text c={"#808080"}>Leave Days Available</Text>
                    <Space h={20} />
                    <Text c={"#2D2D2D"} fz={15} fw={700}>
                      28 Days
                    </Text>
                  </Paper>
                </GridCol>
                <GridCol span={{ base: 12, xs: 12 }}>
                  <Paper
                    bg={"#ffff"}
                    style={{ borderRadius: "15px" }}
                    py={20}
                    h={280}
                  >
                    <Group px={20} pb={15} justify="space-between">
                      <Text>Payment History</Text>
                      <Link className={classes.detailsLink} href={"/employee/compensation"}>
                        more details
                      </Link>
                    </Group>
                    <PaymentTable />
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
