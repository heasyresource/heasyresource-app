"use client";
import MiniCard from "@/components/MiniCard";
import {
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  Flex,
  Grid,
  GridCol,
  Group,
  Paper,
  Space,
  Text,
} from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { DataTable } from "mantine-datatable";
import Link from "next/link";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import classes from "./dashboard.module.css";
import { IconUsers } from "@tabler/icons-react";
import { IconBriefcase } from "@tabler/icons-react";
import { IconWallet } from "@tabler/icons-react";
import { IconCalendarQuestion } from "@tabler/icons-react";

ChartJS.register(ArcElement, Tooltip, Legend);
const PageWrap = ({ currentDate, session, leaves, employees, analytics }) => {
  const data = {
    labels: [
      "Full Time",
      "Part Time",
      "Contract",
      "Freelancer",
      "Internship",
      "Temporary",
    ],
    datasets: [
      {
        label: "No. of Employee",
        data: [
          analytics && analytics.fullTimeEmployeeCount,
          analytics && analytics.partTimeEmployeeCount,
          analytics && analytics.contractEmployeeCount,
          analytics && analytics.freelanceEmployeeCount,
          analytics && analytics.intershipEmployeeCount,
          analytics && analytics.temporaryEmploymentCount,
        ],
        backgroundColor: [
          "#525FE1",
          "#F86F03",
          "#FFA41B",
          "#3377FF",
          "#14cf14",
          "#1B9C85",
        ],
        hoverOffset: 4,
      },
    ],
  };
  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "right",
        align: "center",
      },
    },
  };

  return (
    <Box style={{ height: "50%", borderRadius: "15px" }}>
      <div>
        <Text c="#9C9C9C" fz="20px">
          Hi {session && session?.user?.firstName},
        </Text>
        <Space h="2px" />
        <Text fz={{ lg: "32px", md: "30px", sm: "25px" }} fw={700}>
          Welcome to your Dashboard
        </Text>
      </div>
      <Grid justify="space-around" align="stretch" gutter={"xl"}>
        <GridCol
          bg="#"
          span={{ lg: leaves && leaves.length !== 0 ? 8 : 12, md: 12, sm: 12 }}
        >
          <Box p="0px">
            <Box mt="39">
              <Grid gutter={"lg"}>
                <GridCol span={{ lg: 3, md: 3, sm: 6 }}>
                  <Card
                    className={classes.card}
                    style={{ width: "100%", borderRadius: "15px" }}
                    px="28"
                    py="20"
                    padding="xl"
                    bg="var(--mantine-color-body)"
                  >
                    <Text style={{ color: "#7EA6F4" }} fz="sm" fw={700}>
                      Total Employees
                    </Text>
                    <Group mt={8} align="center" justify="space-between">
                      <Text style={{ fontSize: "24px" }} fw={700}>
                        {analytics && analytics.employeeCount}
                      </Text>
                      <IconUsers style={{ color: "#7EA6F4" }} />
                    </Group>
                  </Card>
                </GridCol>
                <GridCol span={{ lg: 3, md: 3, sm: 6 }}>
                  <Card
                    className={classes.card}
                    style={{ width: "100%", borderRadius: "15px" }}
                    px="28"
                    py="20"
                    padding="xl"
                    bg="var(--mantine-color-body)"
                  >
                    <Text style={{ color: "#7EA6F4" }} fz="sm" fw={700}>
                      New Employees
                    </Text>
                    <Group mt={8} align="center" justify="space-between">
                      <Text style={{ fontSize: "24px" }} fw={700}>
                        {analytics && analytics.newEmployeeCount}
                      </Text>
                      <IconUsers style={{ color: "#7EA6F4" }} />
                    </Group>
                  </Card>
                </GridCol>
                <GridCol span={{ lg: 3, md: 3, sm: 6 }}>
                  <Card
                    className={classes.card}
                    style={{ width: "100%", borderRadius: "15px" }}
                    px="28"
                    py="20"
                    padding="xl"
                    bg="var(--mantine-color-body)"
                  >
                    <Text style={{ color: "#7EA6F4" }} fz="sm" fw={700}>
                      Total Vacancy
                    </Text>
                    <Group mt={8} align="center" justify="space-between">
                      <Text style={{ fontSize: "24px" }} fw={700}>
                        {analytics && analytics.vacancyCount}
                      </Text>
                      <IconBriefcase style={{ color: "#7EA6F4" }} />
                    </Group>
                  </Card>
                </GridCol>
                <GridCol span={{ lg: 3, md: 3, sm: 6 }}>
                  <Card
                    className={classes.card}
                    style={{ width: "100%", borderRadius: "15px" }}
                    px="28"
                    py="20"
                    padding="xl"
                    bg="var(--mantine-color-body)"
                  >
                    <Text style={{ color: "#7EA6F4" }} fz="sm" fw={700}>
                      Total Request
                    </Text>
                    <Group mt={8} align="center" justify="space-between">
                      <Text style={{ fontSize: "24px" }} fw={700}>
                        {analytics && analytics.leaveRequestCount}
                      </Text>
                      <IconCalendarQuestion style={{ color: "#7EA6F4" }} />
                    </Group>
                  </Card>
                </GridCol>
              </Grid>
            </Box>
            <Box>
              <Grid mt="30px">
                <GridCol span={{ lg: 8, md: 8, sm: 12 }}>
                  <Paper
                    p="20px"
                    style={{
                      height: "100%",
                      position: "relative",
                      textAlign: "center",
                    }}
                  >
                    <Pie data={data} options={options} />
                  </Paper>
                </GridCol>
                <GridCol span={{ lg: 4, md: 4, sm: 12 }}>
                  <Paper radius={"md"} p={"20px"}>
                    <DatePicker defaultValue={currentDate} />
                  </Paper>
                </GridCol>
              </Grid>
            </Box>
            {employees && employees.length !== 0 && (
              <Box mt="lg">
                <Group justify={"space-between"} align="center">
                  <Text style={{ fontSize: "18px", fontWeight: 500 }}>
                    Employees
                  </Text>
                  <Link href={"/dashboard/employee"}>
                    <Button size="sm" variant="subtle" color="#3377FF">
                      View all
                    </Button>
                  </Link>
                </Group>
                <DataTable
                  style={{ background: "none" }}
                  minHeight={"auto"}
                  withRowBorders={false}
                  records={employees && employees}
                  columns={[
                    {
                      accessor: "index",
                      title: "S/N",
                      textAlign: "center",
                      render: (record) => employees.indexOf(record) + 1,
                    },
                    {
                      accessor: "avatar",
                      title: "",

                      width: "80px",
                      render: ({ logoUrl }) => (
                        <Flex justify="center" align="center">
                          <Avatar
                            size={26}
                            src={logoUrl || "/assets/images/avata2.png"}
                            radius={26}
                          />
                        </Flex>
                      ),
                    },
                    {
                      accessor: "firstName",
                      noWrap: true,
                      render: ({ firstName }) => (
                        <Text tt="capitalize" style={{ fontSize: "15px" }}>
                          {firstName}
                        </Text>
                      ),
                    },
                    {
                      accessor: "lastName",
                      noWrap: true,
                      render: ({ lastName }) => (
                        <Text tt="capitalize" style={{ fontSize: "15px" }}>
                          {lastName}
                        </Text>
                      ),
                    },

                    {
                      accessor: "department",
                      noWrap: true,
                      render: ({ employmentInfo }) => (
                        <Text tt="capitalize" style={{ fontSize: "15px" }}>
                          {employmentInfo.department.name}
                        </Text>
                      ),
                    },
                    {
                      accessor: "moreDetails",

                      render: (employees) => (
                        <Link
                          href={`/dashboard/employee/${employees.id}/personal-detail`}
                        >
                          <Badge
                            radius="xs"
                            variant="light"
                            color="#3377FF"
                            size="lg"
                            style={{
                              color: "#3377FF",

                              textTransform: "capitalize",
                              cursor: "pointer",
                            }}
                          >
                            more details
                          </Badge>
                        </Link>
                      ),
                    },
                  ]}
                />
              </Box>
            )}
          </Box>
        </GridCol>
        {leaves && leaves.length !== 0 && (
          <GridCol span={{ lg: 4, md: 12, sm: 12 }}>
            <Box
              style={{
                background: "#fff",
                height: "100%",
                padding: "15px 0",
                borderRadius: "15px",
              }}
            >
              <Group
                justify={"space-between"}
                align="center"
                mb={"md"}
                px={"sm"}
              >
                <Text style={{ fontSize: "18px", fontWeight: 500 }}>
                  Pending Requests
                </Text>
                <Link href={"/dashboard/leave"}>
                  <Button size="sm" variant="subtle" color="#3377FF">
                    View all
                  </Button>
                </Link>
              </Group>
              <DataTable
                height={"100%"}
                style={{ background: "none" }}
                withRowBorders={false}
                records={leaves && leaves}
                columns={[
                  {
                    accessor: "user",
                    title: "Employee Name",
                    textAlign: "center",
                    textTransform: "capitalize",
                    noWrap: true,
                    render: ({ user }) => (
                      <Text tt="capitalize" style={{ fontSize: "15px" }}>
                        {`${user.firstName} ${user.lastName}`}
                      </Text>
                    ),
                  },

                  {
                    accessor: "leaveType",
                    textAlign: "center",
                    textTransform: "capitalize",
                    noWrap: true,
                    render: ({ leaveType }) => (
                      <Text tt="capitalize" style={{ fontSize: "15px" }}>
                        {leaveType.name}
                      </Text>
                    ),
                  },

                  {
                    accessor: "status",
                    textAlign: "center",
                    textTransform: "capitalize",
                    noWrap: true,
                    render: ({ status }) => (
                      <>
                        {status === "Approved" && (
                          <Badge color="#14cf14">{status}</Badge>
                        )}
                        {status === "Pending" && (
                          <Badge color="grey">{status}</Badge>
                        )}
                        {status === "Rejected" && (
                          <Badge color="red">{status}</Badge>
                        )}
                      </>
                    ),
                  },
                ]}
              />
            </Box>
          </GridCol>
        )}
      </Grid>
    </Box>
  );
};

export default PageWrap;
