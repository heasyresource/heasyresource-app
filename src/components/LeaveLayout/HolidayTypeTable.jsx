"use client";

import { holidayTypes } from "@/utils/publicFunctions";
import { ActionIcon, Flex } from "@mantine/core";
import { IconEdit, IconTrash } from "@tabler/icons-react";
import { DataTable } from "mantine-datatable";
import { useEffect, useState } from "react";

const PAGE_SIZE = 10;
export default function HolidayTypeTable() {
  const [page, setPage] = useState(1);
  const [records, setRecords] = useState(holidayTypes.slice(0, PAGE_SIZE));

  useEffect(() => {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE;
    setRecords(holidayTypes.slice(from, to));
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
          noWrap: true,
        },
        {
          accessor: "date",
          noWrap: true,
        },
        {
          accessor: "day",
          title: "Full Day/Half Day",
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
                <IconTrash
                  style={{ width: "70%", height: "70%" }}
                  stroke={1.5}
                />
              </ActionIcon>
              <ActionIcon variant="transparent">
                <IconEdit
                  style={{ width: "70%", height: "70%" }}
                  stroke={1.5}
                />
              </ActionIcon>
            </Flex>
          ),
        },
      ]}
      totalRecords={holidayTypes.length}
      recordsPerPage={PAGE_SIZE}
      page={page}
      onPageChange={(p) => setPage(p)}
    />
  );
}