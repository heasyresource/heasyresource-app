"use client";
import {
  Avatar,
  ActionIcon,
  Flex,
  Text,
  Menu,
  MenuItem,
  MenuTarget,
  MenuDropdown,
} from "@mantine/core";
import { DataTable } from "mantine-datatable";
import Link from "next/link";
import { IconDotsVertical } from "@tabler/icons-react";

export function TableSelection({
  paginate,
  employees,
  gettingData,
  pagination,
}) {
  return (
    <>
      {employees?.length !== 0 && (
        <DataTable
          style={{ background: "none", marginTop: "3rem" }}
          minHeight={"250px"}
          loaderType="dots"
          loaderColor="#3377FF"
          fetching={gettingData}
          withRowBorders={false}
          records={employees}
          columns={[
            {
              accessor: "index",
              title: "S/N",
              textAlign: "center",
              render: (record) => employees.indexOf(record) + 1,
            },
            {
              accessor: "avatar",
              title: "",
              textAlign: "center",
              width: "80px",
              render: ({ logoUrl }) => (
                <Flex justify="center" align="center">
                  <Avatar
                    size={26}
                    src={logoUrl || "/assets/images/avata2.png"}
                    radius={26}
                  />
                </Flex>
              ),
            },
            {
              accessor: "firstName",
              noWrap: true,
              render: ({ firstName }) => (
                <Text tt="capitalize" style={{ fontSize: "15px" }}>
                  {firstName}
                </Text>
              ),
            },
            {
              accessor: "lastName",
              noWrap: true,
              render: ({ lastName }) => (
                <Text tt="capitalize" style={{ fontSize: "15px" }}>
                  {lastName}
                </Text>
              ),
            },
            {
              accessor: "email",
              noWrap: true,
            },
            {
              accessor: "department",
              noWrap: true,
              render: ({ employmentInfo }) => (
                <Text tt="capitalize" style={{ fontSize: "15px" }}>
                  {employmentInfo.department.name}
                </Text>
              ),
            },

            {
              accessor: "",
              title: "Actions",
              width: "10%",
              render: (employees) => (
                <>
                  <Menu shadow="md" width={200} withArrow>
                    <MenuTarget>
                      <ActionIcon variant="transparent" color="#838383">
                        <IconDotsVertical
                          style={{ width: "70%", height: "70%" }}
                          stroke={1.5}
                        />
                      </ActionIcon>
                    </MenuTarget>
                    <MenuDropdown>
                      <MenuItem>
                        <Link
                          style={{ textDecoration: "none", color: "inherit" }}
                          href={`/dashboard/employee/${employees.id}/personal-detail`}
                        >
                          Employee Details
                        </Link>
                      </MenuItem>
                      <MenuItem>
                        <Link
                          style={{ textDecoration: "none", color: "inherit" }}
                          href={`/dashboard/leave/${employees.id}?firstName=${employees.firstName}&lastName=${employees.lastName}`}
                        >
                          Assign Leave
                        </Link>
                      </MenuItem>
                    </MenuDropdown>
                  </Menu>
                </>
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
}
