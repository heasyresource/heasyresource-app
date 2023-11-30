"use client";

import { employeeCompensationList } from "@/utils/publicFunctions";
import { DataTable } from "mantine-datatable";

import { ActionIcon, Group, Text } from "@mantine/core";
import Link from "next/link";

import { IconPrinter } from "@tabler/icons-react";

const EmployeeCompensationTable = () => {
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
        records={employeeCompensationList}
        columns={[
          {
            accessor: "index",
            title: "S/N",
            textAlign: "center",

            render: (record) => employeeCompensationList.indexOf(record) + 1,
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
            textAlign: "center",
            render: () => (
              <Group justify="center" align="center">
                <Link href="/employee/compensation/print-payslip">
                  <ActionIcon variant="transparent">
                    <IconPrinter color="#84ADFF" />
                  </ActionIcon>
                </Link>
              </Group>
            ),
          },
        ]}
      />
    </>
  );
};
export default EmployeeCompensationTable;
