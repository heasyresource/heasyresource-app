"use client";

import { SettingsList } from "@/utils/publicFunctions";
import { DataTable } from "mantine-datatable";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  ActionIcon,
  Flex,
  Menu,
  MenuTarget,
  MenuDropdown,
  MenuItem,
} from "@mantine/core";
import { IconEdit, IconEye, IconTrash } from "@tabler/icons-react";

const PAGE_SIZE = 10;
const SettingsTable = ({ openEditModal }) => {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [records, setRecords] = useState(SettingsList.slice(0, PAGE_SIZE));

  useEffect(() => {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE;
    setRecords(SettingsList.slice(from, to));
  }, [page]);

  return (
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
          accessor: "jobTitle",
          textAlign: "center",
          textTransform: "capitalize",
          noWrap: true,
        },
        {
          accessor: "jobStatus",
          textAlign: "center",
          textTransform: "capitalize",
          noWrap: true,
        },
        {
          accessor: "jobDescription",
          textAlign: "center",
          textTransform: "capitalize",
          noWrap: true,
        },
        {
          accessor: "actions",
          title: "Actions",
          width: "135px",
          textAlign: "center",
          render: () => (
            <Flex justify="center" align="center">
              <ActionIcon
                onClick={openEditModal}
                variant="transparent"
                color="#84ADFF"
                radius="lg"
              >
                <IconEdit
                  style={{ width: "70%", height: "70%" }}
                  stroke={1.5}
                />
              </ActionIcon>
              <ActionIcon
                variant="transparent"
                color="#FF7A00"
                radius="lg"
                style={{ marginLeft: "10px" }}
              >
                <IconTrash
                  style={{ width: "70%", height: "70%" }}
                  stroke={1.5}
                />
              </ActionIcon>
            </Flex>
          ),
        },
      ]}
      totalRecords={SettingsList.length}
      recordsPerPage={PAGE_SIZE}
      page={page}
      onPageChange={(p) => setPage(p)}
    />
  );
};
export default SettingsTable;
