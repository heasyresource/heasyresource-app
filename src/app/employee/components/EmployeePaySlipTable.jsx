"use client";

import { employeePaySlipList } from "@/utils/publicFunctions";
import { DataTable } from "mantine-datatable";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const PAGE_SIZE = 10;
const EmployeePaySlipTable = ({ openEditModal }) => {
  const [page, setPage] = useState(1);
  const [records, setRecords] = useState(
    employeePaySlipList.slice(0, PAGE_SIZE)
  );

  useEffect(() => {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE;
    setRecords(employeePaySlipList.slice(from, to));
  }, [page]);

  return (
    <>
      <DataTable
        style={{ background: "none", marginTop: "1rem" }}
        horizontalSpacing="xl"
        height={"auto"}
        withRowBorders={false}
        records={records}
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
        totalRecords={employeePaySlipList.length}
        recordsPerPage={PAGE_SIZE}
        page={page}
        onPageChange={(p) => setPage(p)}
      />
    </>
  );
};
export default EmployeePaySlipTable;
