"use client";

import { employeeList } from "@/utils/publicFunctions";
import { Avatar, Badge } from "@mantine/core";
import { DataTable } from "mantine-datatable";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const PAGE_SIZE = 10;
export function TableSelection() {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [records, setRecords] = useState(employeeList.slice(0, PAGE_SIZE));

  useEffect(() => {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE;
    setRecords(employeeList.slice(from, to));
  }, [page]);

  return (
    <DataTable
      style={{ background: "none", marginTop: "3rem" }}
      height={"auto"}
      withRowBorders={false}
      records={records}
      columns={[
        {
          accessor: "avatar",
          title: "",
          textAlign: "center",
          width: "50px",
          render: ({ avatar }) => <Avatar size={26} src={avatar} radius={26} />,
        },
        {
          accessor: "firstName",
        },
        {
          accessor: "lastName",
        },
        {
          accessor: "employeeEmail",
        },
        {
          accessor: "department",
        },
        {
          accessor: "role",
        },
        {
          accessor: "moreDetails",
          render: ({ moreDetails }) => (
            <Badge
              variant="light"
              color="#3377FF"
              size="lg"
              style={{
                color: "#3377FF",

                textTransform: "capitalize",
                cursor: "pointer",
              }}
              onClick={() => router.push("/dashboard/employee/personal-detail")}
            >
              {moreDetails}
            </Badge>
          ),
        },
      ]}
      totalRecords={employeeList.length}
      recordsPerPage={PAGE_SIZE}
      page={page}
      onPageChange={(p) => setPage(p)}
    />
  );
}
