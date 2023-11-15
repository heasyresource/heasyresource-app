"use client";
import { Avatar, Badge, Flex, Text } from "@mantine/core";
import { DataTable } from "mantine-datatable";
import Link from "next/link";

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
              accessor: "moreDetails",
              render: (employees) => (
                <Link
                  href={`/dashboard/employee/${employees.id}/personal-detail`}
                >
                  <Badge
                    radius="xs"
                    variant="light"
                    color="#3377FF"
                    size="lg"
                    style={{
                      color: "#3377FF",

                      textTransform: "capitalize",
                      cursor: "pointer",
                    }}
                  >
                    more details
                  </Badge>
                </Link>
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
