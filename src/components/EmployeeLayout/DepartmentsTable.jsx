"use client";
import { departmentType } from "@/utils/publicFunctions";
import { ActionIcon, Flex } from "@mantine/core";
import { IconEdit, IconTrash } from "@tabler/icons-react";
import { DataTable } from "mantine-datatable";
import React, { useEffect, useState } from "react";
const PAGE_SIZE = 10;
const DepartmentsTable = () => {
  const [page, setPage] = useState(1);
  const [records, setRecords] = useState(departmentType.slice(0, PAGE_SIZE));

  useEffect(() => {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE;
    setRecords(departmentType.slice(from, to));
  }, [page]);
  return (
    <DataTable
      style={{ background: "none", marginTop: "3rem" }}
      height={"auto"}
      withRowBorders={false}
      records={records}
      columns={[
        {
          accessor: "",
          width: "5%",
        },
        {
          accessor: "name",
          title: "Department Name",
          noWrap: true,
        },
        {
          accessor: "deptCode",
          title: "Department Code",
          noWrap: true,
        },
        {
          accessor: "actions",
          title: "Actions",
          width: "135px",
          textAlign: "center",
          render: () => (
            <Flex justify="center" align="center">
              <ActionIcon variant="transparent">
                <IconEdit
                  style={{ width: "70%", height: "70%" }}
                  stroke={1.5}
                />
              </ActionIcon>
              <ActionIcon variant="transparent">
                <IconTrash
                  style={{ width: "70%", height: "70%", color: "#FF7A00" }}
                  stroke={1.5}
                />
              </ActionIcon>
            </Flex>
          ),
        },
      ]}
      totalRecords={departmentType.length}
      recordsPerPage={PAGE_SIZE}
      page={page}
      onPageChange={(p) => setPage(p)}
    />
  );
};

export default DepartmentsTable;
