"use client";
import { DataTable } from "mantine-datatable";
import { useRouter } from "next/navigation";

import {
  ActionIcon,
  Flex,
  Menu,
  MenuTarget,
  MenuDropdown,
  MenuItem,
} from "@mantine/core";
import { IconCheck, IconX, IconDotsVertical } from "@tabler/icons-react";

const LeaveTable = ({ leaves, paginate, pagination, gettingData }) => {
  const router = useRouter();
  return (
    <>
      {leaves?.length !== 0 && (
        <DataTable
          style={{ background: "none", marginTop: "3rem" }}
          minHeight={"250px"}
          loaderType="dots"
          loaderColor="#3377FF"
          fetching={gettingData}
          withRowBorders={false}
          records={leaves}
          columns={[
            {
              accessor: "index",
              title: "S/N",
              textAlign: "center",

              render: (record) => leaves.indexOf(record) + 1,
            },
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
                    <IconX
                      style={{ width: "70%", height: "70%" }}
                      stroke={1.5}
                    />
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
          totalRecords={pagination?.total}
          recordsPerPage={pagination?.perPage}
          page={pagination?.currentPage}
          onPageChange={(page) => paginate(page)}
        />
      )}
    </>
  );
};
export default LeaveTable;
