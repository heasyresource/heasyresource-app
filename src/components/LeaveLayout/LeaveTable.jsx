"use client";

import { leaveList } from "@/utils/publicFunctions";
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
  MenuDivider,
} from "@mantine/core";
import { IconCheck, IconX, IconDotsVertical } from "@tabler/icons-react";

const PAGE_SIZE = 10;
const LeaveTable = () => {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [records, setRecords] = useState(leaveList.slice(0, PAGE_SIZE));

  useEffect(() => {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE;
    setRecords(leaveList.slice(from, to));
  }, [page]);

  return (
    <DataTable
      style={{ background: "none", marginTop: "3rem" }}
      height={"auto"}
      withRowBorders={false}
      records={records}
      columns={[
        {
          accessor: "date",
          textAlign: "center",
          textTransform: "capitalize",
          noWrap: true,
        },
        {
          accessor: "employeeName",
          textAlign: "center",
          textTransform: "capitalize",
          noWrap: true,
        },
        {
          accessor: "leaveType",
          textAlign: "center",
          textTransform: "capitalize",
          noWrap: true,
        },
        {
          accessor: "numberOfDays",
          textAlign: "center",
          textTransform: "capitalize",
          noWrap: true,
        },
        {
          accessor: "status",
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
              <ActionIcon variant="filled" color="#84ADFF" radius="lg">
                <IconCheck
                  style={{ width: "70%", height: "70%" }}
                  stroke={1.5}
                />
              </ActionIcon>
              <ActionIcon
                variant="filled"
                color="#FF7A00"
                radius="lg"
                style={{ marginLeft: "10px" }}
              >
                <IconX style={{ width: "70%", height: "70%" }} stroke={1.5} />
              </ActionIcon>
              <Menu shadow="md" width={200}>
                <MenuTarget>
                  <ActionIcon variant="transparent" color="#838383">
                    <IconDotsVertical
                      style={{ width: "70%", height: "70%" }}
                      stroke={1.5}
                    />
                  </ActionIcon>
                </MenuTarget>
                <MenuDropdown>
                  <MenuItem
                    fz="xs"
                    onClick={() =>
                      router.push("/dashboard/employee/personal-detail")
                    }
                  >
                    Employee Details
                  </MenuItem>

                  <MenuItem fz="xs">Leave Details</MenuItem>
                </MenuDropdown>
              </Menu>
            </Flex>
          ),
        },
      ]}
      totalRecords={leaveList.length}
      recordsPerPage={PAGE_SIZE}
      page={page}
      onPageChange={(p) => setPage(p)}
    />
  );
};
export default LeaveTable;
