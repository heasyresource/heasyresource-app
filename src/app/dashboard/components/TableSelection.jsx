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
  Box,
  Stack,
  Image,
} from "@mantine/core";
import { DataTable } from "mantine-datatable";
import { IconDotsVertical } from "@tabler/icons-react";

export function TableSelection({
  paginate,
  employees,
  gettingData,
  pagination,
}) {
  return (
    <>
      {employees?.length !== 0 ? (
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
              accessor: "id",
              title: "Employee ID",
              noWrap: true,
              render: (employees) => (
                <Text tt="capitalize" style={{ fontSize: "15px" }}>
                  {employees.employmentInfo.employeeId}
                </Text>
              ),
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
              accessor: "position",
              title: "Position",
              noWrap: true,
              render: (employees) => (
                <Text tt="capitalize" style={{ fontSize: "15px" }}>
                  {employees.employmentInfo.position}
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
                      <MenuItem
                        component="a"
                        href={`/dashboard/employee/${employees.id}/personal-detail`}
                      >
                        Employee Details
                      </MenuItem>
                      <MenuItem
                        component="a"
                        href={`/dashboard/leave/${employees.id}?firstName=${employees.firstName}&lastName=${employees.lastName}`}
                      >
                        Assign Leave
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
      ) : (
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            margin: "6rem 0",
          }}
        >
          <Stack justify="center" align="center">
            <Box style={{ width: "10rem", height: "auto" }}>
              <Image src={"/assets/svgs/empty.svg"} alt="empty" />
            </Box>
            <Text style={{ fontSize: "16px", color: "#616161" }}>
              No Employee found!
            </Text>
          </Stack>
        </Box>
      )}
    </>
  );
}
