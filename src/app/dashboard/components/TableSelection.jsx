"use client";
import { useSearch } from "@/hooks";
import { obfuscateToken } from "@/utils/encryptToken";
import { Avatar, Badge, Flex, Text } from "@mantine/core";
import { DataTable } from "mantine-datatable";
import { useRouter } from "next/navigation";

export function TableSelection({
  paginate,
  employees,
  gettingData,
  pagination,
}) {
  const router = useRouter();

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
              render: ({ firstName }) => (
                <Text tt="capitalize" style={{ fontSize: "15px" }}>
                  {firstName}
                </Text>
              ),
            },
            {
              accessor: "lastName",
              render: ({ lastName }) => (
                <Text tt="capitalize" style={{ fontSize: "15px" }}>
                  {lastName}
                </Text>
              ),
            },
            {
              accessor: "email",
            },
            {
              accessor: "department",
              render: ({ employmentInfo }) => (
                <Text tt="capitalize" style={{ fontSize: "15px" }}>
                  {employmentInfo.department.name}
                </Text>
              ),
            },
            {
              accessor: "role",
              render: ({ role }) => (
                <Text tt="capitalize" style={{ fontSize: "15px" }}>
                  {role.name}
                </Text>
              ),
            },
            {
              accessor: "moreDetails",
              render: (employees) => (
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
                  onClick={() => {
                    localStorage.setItem(
                      "employee",
                      obfuscateToken(true, JSON.stringify(employees))
                    );
                    router.push("/dashboard/employee/personal-detail");
                  }}
                >
                  more details
                </Badge>
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
