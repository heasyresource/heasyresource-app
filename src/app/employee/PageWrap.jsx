"use client";
import React from "react";
import {
  Badge,
  Box,
  Card,
  Divider,
  Grid,
  GridCol,
  Group,
  Paper,
  Space,
  Text,
  Button,
} from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import AddEmployeeImg from "./components/AddEmployeeImg";
import classes from "./dashboard.module.css";
import Link from "next/link";
import PaymentTable from "./components/PaymentTable";
import { convertStringDate } from "@/utils/publicFunctions";

const PageWrap = ({ employeeInfo, leavesInfo }) => {
  const currentDate = new Date();
  const getNewestApprovedLeave = (list) => {
    const approvedLeaveRequests =
      list && list.filter((request) => request.status === "Approved");

    const newestApprovedLeave = approvedLeaveRequests?.reduce(
      (latestLeave, currentLeave) => {
        const latestTimestamp = new Date(latestLeave.updatedAt).getTime();
        const currentTimestamp = new Date(currentLeave.updatedAt).getTime();

        return latestTimestamp > currentTimestamp ? latestLeave : currentLeave;
      },
      approvedLeaveRequests[0]
    );

    return newestApprovedLeave;
  };
  const getDaysDifference = (start, end) => {
    const date1 = new Date(start);
    const date2 = new Date(end);

    const timeDifference = date2 - date1;

    const daysDifference = timeDifference / (1000 * 60 * 60 * 24);

    return Math.round(daysDifference);
  };
  const newestApprovedLeave = getNewestApprovedLeave(leavesInfo);

  return (
    <Box style={{ height: "50%", borderRadius: "15px" }}>
      <Grid justify="flex-start" align="stretch">
        <GridCol bg="#" span={12} style={{ minHeight: "80px" }}>
          <Box p="0px">
            <div>
              <Text
                c="#9C9C9C"
                fz="20px"
                style={{ textTransform: "capitalize" }}
              >
                {`Hi ${employeeInfo && employeeInfo.firstName}`}
              </Text>
              <Space h="2px" />
              <Text fz={{ lg: "32px", md: "30px", sm: "25px" }} fw={700}>
                Welcome to your Dashboard
              </Text>
            </div>
            <Box p={0} mt="39">
              <Grid gutter={"xl"}>
                <GridCol
                  style={{ borderRadius: "15px" }}
                  span={{ lg: 8, md: 12, sm: 12 }}
                >
                  <Paper
                    h={"auto"}
                    bg={"#ffff"}
                    style={{ borderRadius: "15px" }}
                    p="lg"
                  >
                    <Group my={"auto"} align="center" justify="flex-start">
                      <AddEmployeeImg
                        logo={employeeInfo && employeeInfo.logoUrl}
                      />
                      <div>
                        <Text
                          fz={24}
                          fw={500}
                          style={{ textTransform: "capitalize" }}
                        >
                          {employeeInfo &&
                            `${employeeInfo.firstName} ${employeeInfo.lastName}`}
                        </Text>
                        <Badge
                          tt={"capitalize"}
                          variant="light"
                          color="#3377FF"
                        >
                          {employeeInfo && employeeInfo.employmentInfo.position}
                        </Badge>
                        <Space h={10} />

                        <Group wrap="nowrap" gap={10} mt={5}>
                          <Text fw={700} fz="sm" c={"#686868"}>
                            Email:
                          </Text>
                          <Text fz="sm" c="dimmed">
                            {employeeInfo && employeeInfo.email}
                          </Text>
                        </Group>
                      </div>
                    </Group>
                  </Paper>
                </GridCol>
                <GridCol span={{ lg: 4, md: 12, sm: 12 }}>
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
                        {convertStringDate(newestApprovedLeave?.startDate)}
                      </Text>
                    </Card>
                  </Paper>
                </GridCol>
                <GridCol span={{ lg: 8, md: 12, sm: 12 }}>
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
                      {`${getDaysDifference(
                        newestApprovedLeave?.startDate,
                        newestApprovedLeave?.endDate
                      )} ${
                        getDaysDifference(
                          newestApprovedLeave?.startDate,
                          newestApprovedLeave?.endDate
                        ) > 1
                          ? "days"
                          : "day"
                      }`}
                    </Text>
                  </Paper>
                </GridCol>
                <GridCol span={{ lg: 4, md: 12, sm: 12 }}>
                  <Paper radius={"md"} p={"20px"}>
                    <DatePicker defaultValue={currentDate} />
                  </Paper>
                </GridCol>
                <GridCol span={{ base: 12, xs: 12 }}>
                  <Group mb="10px" justify="space-between">
                    <Text>Payment History</Text>

                    <Link
                      className={classes.detailsLink}
                      href={"/employee/compensation"}
                    >
                      <Button size="sm" color="#3377FF" bg="#3377FF">
                        View all
                      </Button>
                    </Link>
                  </Group>
                  <PaymentTable />
                </GridCol>
              </Grid>
            </Box>
          </Box>
        </GridCol>
      </Grid>
    </Box>
  );
};

export default PageWrap;
