"use client";

import { employeeCompensationList } from "@/utils/publicFunctions";
import { DataTable } from "mantine-datatable";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import classes from "../leave/leave.module.css";
import { ActionIcon, Badge, Button, Group, Text } from "@mantine/core";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { IconPrinter } from "@tabler/icons-react";

const PAGE_SIZE = 10;
const EmployeeCompensationTable = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [records, setRecords] = useState(
    employeeCompensationList.slice(0, PAGE_SIZE)
  );

  useEffect(() => {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE;
    setRecords(employeeCompensationList.slice(from, to));
  }, [page]);

  return (
    <>
      <Group justify="flex-start" align="center">
        <Text c={"#4D4D4D"} fz={25} fw={700}>
          Compensation
        </Text>
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
            accessor: "grossSalary",
            textAlign: "center",
            textTransform: "capitalize",
            noWrap: true,
          },
          {
            accessor: "amountPaid",
            textAlign: "center",
            textTransform: "capitalize",
            noWrap: true,
          },
          {
            accessor: "date",
            textAlign: "center",
            textTransform: "capitalize",
            noWrap: true,
          },
          {
            accessor: "status",
            textAlign: "center",
            textTransform: "capitalize",
            cellsStyle: () => (theme) => ({
              color: "#43D72B",
            }),
            noWrap: true,
          },
          {
            accessor: "moreDetails",
            render: () => (
              <Group justify="flex-start">
                <ActionIcon
                  component="a"
                  href="/employee/compensation/print-payslip"
                  variant="transparent"
                >
                  <IconPrinter color="#84ADFF" />
                </ActionIcon>
              </Group>
            ),
          },
        ]}
        totalRecords={employeeCompensationList.length}
        recordsPerPage={PAGE_SIZE}
        page={page}
        onPageChange={(p) => setPage(p)}
      />
    </>
  );
};
export default EmployeeCompensationTable;
