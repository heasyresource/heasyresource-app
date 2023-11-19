"use client";

import { LeaveDetailsList, convertStringDate } from "@/utils/publicFunctions";
import { DataTable } from "mantine-datatable";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import classes from "../leave/leave.module.css";
import {
  ActionIcon,
  Badge,
  Box,
  Button,
  Center,
  Grid,
  GridCol,
  Group,
  Image,
  Stack,
  Text,
} from "@mantine/core";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import RequestLeaveModal from "./RequestLeaveModal";
import dynamic from "next/dynamic";
import { closeAllModals, modals, openModal } from "@mantine/modals";
import { IconEdit } from "@tabler/icons-react";
import { IconEye } from "@tabler/icons-react";

const ReqLeave = dynamic(() => import("./RequestLeaveModal"), { ssr: false });
const LeaveDetailsTable = ({
  form,
  loading,
  openReq,
  openedReq,
  closeReq,
  gettingLeaves,
  leaves,
  paginate,
  pagination,
  handleSubmit,
  types,
}) => {
  const getDaysDifference = (start, end) => {
    const date1 = new Date(start);
    const date2 = new Date(end);

    const timeDifference = date2 - date1;

    const daysDifference = timeDifference / (1000 * 60 * 60 * 24);

    return Math.round(daysDifference);
  };
  const openModal = (record) => {
    modals.open({
      title: "Leave Details",
      closeOnClickOutside: false,
      size: "lg",
      overlayProps: {
        backgroundOpacity: 0.55,
        blur: 3,
      },
      children: (
        <Box py={"20px"}>
          <Stack justify="flex-start">
            <Box>
              <Text style={{ color: "#7EA6F4", marginBottom: "10px" }}>
                Leave Type:
              </Text>
              <Text
                style={{
                  textTransform: "capitalize",
                  fontSize: "18px",
                }}
              >
                {record.leaveType.name}
              </Text>
            </Box>

            <Box>
              <Text style={{ color: "#7EA6F4", marginBottom: "10px" }}>
                Start Date:
              </Text>
              <Text
                style={{
                  textTransform: "capitalize",
                  fontSize: "18px",
                }}
              >
                {convertStringDate(record.startDate)}
              </Text>
            </Box>

            <Box>
              <Text style={{ color: "#7EA6F4", marginBottom: "10px" }}>
                End Date:
              </Text>
              <Text
                style={{
                  textTransform: "capitalize",
                  fontSize: "18px",
                }}
              >
                {convertStringDate(record.endDate)}
              </Text>
            </Box>
            <Box>
              <Text style={{ color: "#7EA6F4", marginBottom: "10px" }}>
                Number of Days:
              </Text>
              <Text
                style={{
                  textTransform: "capitalize",
                  fontSize: "18px",
                }}
              >
                {`${getDaysDifference(record.startDate, record.endDate)} ${
                  getDaysDifference(record.startDate, record.endDate) > 1
                    ? "days"
                    : "day"
                }`}
              </Text>
            </Box>

            {record.rejectedByDetails !== null && (
              <Box>
                <Text style={{ color: "#7EA6F4", marginBottom: "10px" }}>
                  Rejected By:
                </Text>
                <Text
                  style={{
                    textTransform: "capitalize",
                    fontSize: "18px",
                  }}
                >
                  {`${record.rejectedByDetails.firstName} ${record.rejectedByDetails.lastName}`}
                </Text>
              </Box>
            )}
            {record.approvedByDetails !== null && (
              <Box>
                <Text style={{ color: "#7EA6F4", marginBottom: "10px" }}>
                  Approved By:
                </Text>
                <Text
                  style={{
                    textTransform: "capitalize",
                    fontSize: "18px",
                  }}
                >
                  {`${record.approvedByDetails.firstName} ${record.approvedByDetails.lastName}`}
                </Text>
              </Box>
            )}

            <Box mt="lg">
              <Text style={{ color: "#7EA6F4", marginBottom: "10px" }}>
                Leave Description:
              </Text>
              <Text
                style={{
                  textTransform: "capitalize",
                  fontSize: "18px",
                }}
              >
                {record.comments !== null && record.comments}
              </Text>
            </Box>
            {record.status === "Rejected" && (
              <Box mt="lg">
                <Text style={{ color: "#7EA6F4", marginBottom: "10px" }}>
                  Reason for rejection:
                </Text>
                <Text
                  style={{
                    textTransform: "capitalize",
                    fontSize: "18px",
                  }}
                >
                  {record.reasonForRejection !== null &&
                    record.reasonForRejection}
                </Text>
              </Box>
            )}
          </Stack>
        </Box>
      ),
    });
  };
  return (
    <>
      <ReqLeave
        opened={openedReq}
        close={closeReq}
        loading={loading}
        form={form}
        handleSubmit={handleSubmit}
        types={types}
      />
      <Group justify="flex-start" align="center">
        <Text c={"#4D4D4D"} fz={25} fw={700}>
          Leave List
        </Text>
        <Button
          component="a"
          variant="filled"
          onClick={openReq}
          tt={"capitalize"}
          style={{
            backgroundColor: "#e7f7ff",
            color: "#000000",
          }}
        >
          Request Leave +
        </Button>
      </Group>
      {leaves?.length !== 0 ? (
        <DataTable
          style={{ background: "none", marginTop: "1rem" }}
          minHeight={"250px"}
          loaderType="dots"
          loaderColor="#3377FF"
          fetching={gettingLeaves}
          withRowBorders={false}
          records={leaves}
          columns={[
            {
              accessor: "index",
              title: "S/N",
              textAlign: "center",

              render: (record) => leaves.indexOf(record) + 1,
            },
            {
              accessor: "leaveType",
              textAlign: "center",
              textTransform: "capitalize",
              noWrap: true,
              render: ({ leaveType }) => (
                <Text style={{ fontSize: "15px" }}>{leaveType.name}</Text>
              ),
            },
            {
              accessor: "createdAt",
              title: "Number of days",
              textAlign: "center",
              textTransform: "capitalize",
              noWrap: true,
              render: (leaves) => (
                <Text tt="capitalize" style={{ fontSize: "15px" }}>
                  {`${getDaysDifference(leaves.startDate, leaves.endDate)} ${
                    getDaysDifference(leaves.startDate, leaves.endDate) > 1
                      ? "days"
                      : "day"
                  }`}
                </Text>
              ),
            },
            {
              accessor: "startDate",
              textAlign: "center",
              textTransform: "capitalize",
              noWrap: true,
              render: ({ startDate }) => (
                <Text style={{ fontSize: "15px" }}>
                  {convertStringDate(startDate)}
                </Text>
              ),
            },
            {
              accessor: "endDate",
              textAlign: "center",
              textTransform: "capitalize",
              noWrap: true,
              render: ({ endDate }) => (
                <Text style={{ fontSize: "15px" }}>
                  {convertStringDate(endDate)}
                </Text>
              ),
            },
            {
              accessor: "status",
              textAlign: "center",
              render: ({ status }) => (
                <>
                  {status === "Pending" && <Badge color="grey">{status}</Badge>}
                  {status === "Rejected" && <Badge color="red">{status}</Badge>}
                  {status === "Approved" && (
                    <Badge color="#14cf14">{status}</Badge>
                  )}
                </>
              ),
            },
            {
              accessor: "view",
              render: (leaves) => (
                <ActionIcon
                  size="lg"
                  color="#3377FF"
                  variant="transparent"
                  onClick={() => openModal(leaves)}
                >
                  <IconEye
                    style={{ width: "70%", height: "70%" }}
                    stroke={1.5}
                  />
                </ActionIcon>
              ),
            },
          ]}
          totalRecords={pagination?.total}
          recordsPerPage={pagination?.perPage}
          page={pagination?.currentPage}
          onPageChange={(page) => paginate(page)}
        />
      ) : (
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            margin: "6rem 0",
          }}
        >
          <Stack justify="center" align="center">
            <Box style={{ width: "10rem", height: "auto" }}>
              <Image src={"/assets/svgs/empty.svg"} alt="empty" />
            </Box>
            <Text style={{ fontSize: "16px", color: "#616161" }}>
              No leaves yet!
            </Text>
          </Stack>
        </Box>
      )}
    </>
  );
};
export default LeaveDetailsTable;
