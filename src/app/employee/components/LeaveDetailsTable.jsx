"use client";

import { LeaveDetailsList } from "@/utils/publicFunctions";
import { DataTable } from "mantine-datatable";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import classes from "../leave/leave.module.css";
import { Badge, Button, Group, Text } from "@mantine/core";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import RequestLeaveModal from "./RequestLeaveModal";

const PAGE_SIZE = 10;
const LeaveDetailsTable = () => {
  // Modal open and close state
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Open and Close function for Add Earning Modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const pathname = usePathname();
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [records, setRecords] = useState(LeaveDetailsList.slice(0, PAGE_SIZE));

  useEffect(() => {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE;
    setRecords(LeaveDetailsList.slice(from, to));
  }, [page]);

  return (
    <>
      <RequestLeaveModal isOpen={isModalOpen} onClose={closeModal} />
      <Group justify="space-between" align="center">
        <Text c={"#4D4D4D"} fz={25} fw={700}>
          Leave List
        </Text>
        <Button
          component="a"
          variant="filled"
          onClick={openModal}
          tt={"capitalize"}
          style={{
            backgroundColor: "#e7f7ff",
            color: "#000000",
          }}
        >
          Request Leave +
        </Button>
      </Group>
      <DataTable
        style={{ background: "none", marginTop: "1rem" }}
        height={"auto"}
        withRowBorders={false}
        records={records}
        columns={[
          {
            accessor: "index",
            title: "S/N",
            textAlign: "center",

            render: (record) => records.indexOf(record) + 1,
          },
          {
            accessor: "leaveType",
            textAlign: "center",
            textTransform: "capitalize",
            noWrap: true,
          },
          {
            accessor: "entitledDays",
            textAlign: "center",
            textTransform: "capitalize",
            noWrap: true,
          },
          {
            accessor: "startDate",
            textAlign: "center",
            textTransform: "capitalize",
            noWrap: true,
          },
          {
            accessor: "endDate",
            textAlign: "center",
            textTransform: "capitalize",
            noWrap: true,
          },
          {
            accessor: "moreDetails",
            render: () => (
              <Badge
                radius="xs"
                variant="light"
                color="#3377FF"
                size="md"
                component="a"
                href="/employee/leave/leave-details"
                style={{
                  color: "#3377FF",
                  textTransform: "capitalize",
                  cursor: "pointer",
                }}
              >
                more details
              </Badge>
            ),
          },
        ]}
        totalRecords={LeaveDetailsList.length}
        recordsPerPage={PAGE_SIZE}
        page={page}
        onPageChange={(p) => setPage(p)}
      />
    </>
  );
};
export default LeaveDetailsTable;
