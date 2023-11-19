"use client";
import { ActionIcon, Group, ScrollArea, Table, Badge } from "@mantine/core";
import classes from "../dashboard.module.css";
import cx from "clsx";
import { useState } from "react";
import { IconPrinter } from "@tabler/icons-react";
import { DataTable } from "mantine-datatable";

const elements = [
  {
    grossSalary: "N6,345",
    amountPaid: "N80,456",
    date: "May 19, 2023",
    status: "successful",
  },
  {
    grossSalary: "N906,345",
    amountPaid: "N806,456",
    date: "May 19, 2023",
    status: "successful",
  },
  {
    grossSalary: "N906,345",
    amountPaid: "N806,456",
    date: "May 1, 2023",
    status: "successful",
  },
  {
    grossSalary: "N90645",
    amountPaid: "N806,456",
    date: "May 19, 2023",
    status: "successful",
  },
  {
    grossSalary: "N96,345",
    amountPaid: "N806,456",
    date: "May 9, 2023",
    status: "successful",
  },
];

export default function PaymentTable() {
  return (
    <DataTable
      style={{ background: "none", marginTop: "1rem" }}
      minHeight={"250px"}
      loaderType="dots"
      loaderColor="#3377FF"
      withRowBorders={false}
      records={elements}
      columns={[
        {
          accessor: "index",
          title: "S/N",
          textAlign: "center",

          render: (record) => elements.indexOf(record) + 1,
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
          render: ({ status }) => <Badge color="#14cf14">{status}</Badge>,
        },
        {
          accessor: "print",
          render: () => (
            <ActionIcon size="lg" color="#84ADFF" variant="transparent">
              <IconPrinter
                style={{ width: "70%", height: "70%" }}
                stroke={1.5}
              />
            </ActionIcon>
          ),
        },
      ]}
    />
  );
}
