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
  Image,
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
      emptyPie: {
        color: "rgba(255, 128, 0, 0.5)",
        width: 2,
      },
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
        <GridCol bg="#" span={{ lg: 8, md: 12, sm: 12 }}>
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
                    {analytics?.fullTimeEmployeeCount === 0 &&
                    analytics?.partTimeEmployeeCount === 0 &&
                    analytics?.contractEmployeeCount === 0 &&
                    analytics?.freelanceEmployeeCount === 0 &&
                    analytics?.intershipEmployeeCount === 0 &&
                    analytics?.temporaryEmploymentCount === 0 ? (
                      <Box
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          flexDirection: "column",
                          height: "100%",
                          gap: "13px",
                        }}
                      >
                        <Image
                          src={"/assets/svgs/chart.svg"}
                          alt="empty"
                          style={{ width: "100px" }}
                        />
                        <Text>No data available</Text>
                      </Box>
                    ) : (
                      <Pie data={data} options={options} />
                    )}
                  </Paper>
                </GridCol>
                <GridCol span={{ lg: 4, md: 4, sm: 12 }}>
                  <Paper radius={"md"} p={"20px"}>
                    <DatePicker defaultValue={currentDate} />
                  </Paper>
                </GridCol>
              </Grid>
            </Box>
          </Box>
        </GridCol>

        <GridCol span={{ lg: 4, md: 12, sm: 12 }}>
          <Box
            style={{
              background: "#fff",
              height: "100%",
              padding: "15px 0",
              borderRadius: "15px",
            }}
          >
            <Group justify={"space-between"} align="center" mb={"md"} px={"sm"}>
              <Text style={{ fontSize: "18px", fontWeight: 500 }}>
                Pending Requests
              </Text>
              <Link href={"/dashboard/leave"}>
                <Button
                  aria-label="view-all"
                  size="sm"
                  variant="subtle"
                  color="#3377FF"
                >
                  View all
                </Button>
              </Link>
            </Group>
            {leaves && leaves.length !== 0 ? (
              <DataTable
                height={400}
                style={{ background: "none" }}
                withRowBorders
                records={leaves && leaves}
                columns={[
                  {
                    accessor: "user",
                    title: "Employee Name",
                    width: "110px",
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

                    textTransform: "capitalize",
                    noWrap: true,
                    width: "120px",
                    render: ({ leaveType }) => (
                      <Text
                        tt="capitalize"
                        style={{ fontSize: "15px" }}
                        truncate="end"
                      >
                        {leaveType.name}
                      </Text>
                    ),
                  },

                  {
                    accessor: "status",
                    textAlign: "center",
                    textTransform: "capitalize",
                    noWrap: true,
                    width: "80px",
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
            ) : (
              <Box
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  height: "100%",
                  marginTop: "100px",
                  flexDirection: "column",
                  gap: "13px",
                }}
              >
                <Image
                  src={"/assets/svgs/empty.svg"}
                  alt="empty"
                  style={{ width: "100px" }}
                />
                <Text>No pending request yet</Text>
              </Box>
            )}
          </Box>
        </GridCol>
      </Grid>
      {employees && employees.length !== 0 && (
        <Box mt="lg">
          <Group justify={"space-between"} align="center">
            <Text style={{ fontSize: "18px", fontWeight: 500 }}>Employees</Text>
            <Link href={"/dashboard/employee"}>
              <Button
                aria-label="view-all"
                size="sm"
                variant="subtle"
                color="#3377FF"
              >
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
                accessor: "id",
                title: "Employee ID",
                noWrap: true,
                render: (employees) => (
                  <Text tt="capitalize" style={{ fontSize: "15px" }}>
                    {employees.employmentInfo.employeeId}
                  </Text>
                ),
              },
              {
                accessor: "department",
                noWrap: true,
                render: (employees) => (
                  <Text tt="capitalize" style={{ fontSize: "15px" }}>
                    {employees.employmentInfo.department.name}
                  </Text>
                ),
              },
              {
                accessor: "position",
                title: "Position",
                noWrap: true,
                render: (employees) => (
                  <Text tt="capitalize" style={{ fontSize: "15px" }}>
                    {employees.employmentInfo.position}
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
  );
};

export default PageWrap;
