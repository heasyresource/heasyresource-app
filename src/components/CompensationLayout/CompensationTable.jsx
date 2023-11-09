"use client";

import { CompensationList } from "@/utils/publicFunctions";
import { ActionIcon, Avatar, Badge, Flex } from "@mantine/core";
import { IconPrinter, IconTrash, IconWallet, IconX } from "@tabler/icons-react";
import { IconCheck } from "@tabler/icons-react";
import { DataTable } from "mantine-datatable";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const PAGE_SIZE = 10;
export function CompensationTable() {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [records, setRecords] = useState(CompensationList.slice(0, PAGE_SIZE));

  useEffect(() => {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE;
    setRecords(CompensationList.slice(from, to));
  }, [page]);

  return (
    <DataTable
      style={{ background: "none", marginTop: "3rem" }}
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
          accessor: "avatar",
          title: "",
          textAlign: "center",
          width: "80px",
          render: ({ avatar }) => (
            <Flex justify="center" align="center">
              <Avatar size={26} src={avatar} radius={26} />
            </Flex>
          ),
        },
        {
          accessor: "firstName",
          textAlign: "center",
          textTransform: "capitalize",
          noWrap: true,
        },
        {
          accessor: "lastName",
          textAlign: "center",
          textTransform: "capitalize",
          noWrap: true,
        },
        {
          accessor: "employeeEmail",
          textAlign: "center",
          textTransform: "capitalize",
          noWrap: true,
        },
        {
          accessor: "department",
          textAlign: "center",
          textTransform: "capitalize",
          noWrap: true,
        },
        {
          accessor: "salary",
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
              <ActionIcon variant="transparent" radius="lg">
                <IconWallet
                  style={{ width: "70%", height: "70%" }}
                  stroke={1.5}
                />
              </ActionIcon>
              <ActionIcon
                variant="transparent"
                // color="#FF7A00"
                radius="lg"
                style={{ marginLeft: "10px" }}
              >
                <IconPrinter style={{ width: "70%", height: "70%" }} stroke={1.5} />
              </ActionIcon>
              <ActionIcon variant="transparent"  radius="lg">
                <IconTrash
                  style={{ width: "70%", height: "70%" }}
                  stroke={1.5}
                />
              </ActionIcon>
              {/* <Menu shadow="md" width={200}>
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
              </Menu> */}
            </Flex>
          ),
        },
      ]}
      totalRecords={CompensationList.length}
      recordsPerPage={PAGE_SIZE}
      page={page}
      onPageChange={(p) => setPage(p)}
    />
  );
}
