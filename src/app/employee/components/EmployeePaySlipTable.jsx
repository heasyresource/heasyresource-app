"use client";

import { employeePaySlipList } from "@/utils/publicFunctions";
import { DataTable } from "mantine-datatable";

const EmployeePaySlipTable = ({ openEditModal }) => {
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
        },
        {
          accessor: "earnings",
          textAlign: "center",
          textTransform: "capitalize",
          noWrap: true,
        },
        {
          accessor: "deductions",
          textAlign: "center",
          textTransform: "capitalize",
          noWrap: true,
        },
        {
          accessor: "unitAmount",
          textAlign: "center",
          textTransform: "capitalize",
          noWrap: true,
        },
      ]}
    />
  );
};
export default EmployeePaySlipTable;
