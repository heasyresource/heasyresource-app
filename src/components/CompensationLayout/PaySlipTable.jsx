"use client";

import { PaySlipList, employeePaySlipList } from "@/utils/publicFunctions";
import { DataTable } from "mantine-datatable";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Text, Box } from "@mantine/core";

const PaySLipTable = ({ openEditModal }) => {
  return (
    <DataTable
      style={{ background: "none", marginTop: "1rem" }}
      horizontalSpacing="xl"
      height={"auto"}
      withRowBorders={false}
      records={employeePaySlipList}
      columns={[
        {
          accessor: "name",
          textAlign: "start",
          textTransform: "capitalize",
          noWrap: true,
          footer: (
            <Text
              style={{
                textAlign: "start",
                color: "#3377FF",
                fontSize: "20px",
                fontWeight: 600,
              }}
            >
              Gross Total
            </Text>
          ),
        },
        {
          accessor: "earnings",
          textAlign: "center",
          textTransform: "capitalize",
          noWrap: true,
          footer: (
            <Text
              style={{
                textAlign: "center",
                color: "#3377FF",
                fontSize: "20px",
                fontWeight: 600,
              }}
            >
              #180,000
            </Text>
          ),
        },
        {
          accessor: "deductions",
          textAlign: "center",
          textTransform: "capitalize",
          noWrap: true,
          footer: (
            <Text
              style={{
                textAlign: "center",
                color: "#3377FF",
                fontSize: "20px",
                fontWeight: 600,
              }}
            >
              #45, 532
            </Text>
          ),
        },
        {
          accessor: "unitAmount",
          textAlign: "center",
          textTransform: "capitalize",
          noWrap: true,
          render: ({ unitAmount }) => (
            <Text style={{ fontSize: "15px", fontWeight: 600 }}>
              {unitAmount}
            </Text>
          ),
          footer: (
            <Text
              style={{
                textAlign: "center",
                color: "#3377FF",
                fontSize: "20px",
                fontWeight: 600,
              }}
            >
              #240,000
            </Text>
          ),
        },
      ]}
    />
  );
};
export default PaySLipTable;
