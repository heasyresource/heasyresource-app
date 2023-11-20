"use client";

import { CompanyList, addHttps } from "@/utils/publicFunctions";
import { DataTable } from "mantine-datatable";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import classes from "../../components/AdminLayout/admin.module.css";
import { Avatar, Badge, Flex, Text, rem } from "@mantine/core";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { IconLink } from "@tabler/icons-react";

const PAGE_SIZE = 10;
const CompanyTable = ({ companies, paginate, pagination, gettingData }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [records, setRecords] = useState(CompanyList.slice(0, PAGE_SIZE));

  return (
    <>
      {companies?.length !== 0 && (
        <DataTable
          style={{ background: "none", marginTop: "1rem" }}
          minHeight={"250px"}
          fetching={gettingData}
          loaderType="dots"
          loaderColor="#3377FF"
          withRowBorders={false}
          records={companies}
          columns={[
            {
              accessor: "index",
              title: "S/N",
              textAlign: "center",

              render: (record) => companies.indexOf(record) + 1,
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
                    src={logoUrl || "/assets/images/cmpLogo.png"}
                    radius={26}
                  />
                </Flex>
              ),
            },
            {
              accessor: "name",
              title: "Company Name",
              textTransform: "capitalize",
              noWrap: true,
            },
            {
              accessor: "companySize",
              title: "Company Size",

              noWrap: true,
              render: ({ companySize }) => (
                <Text style={{ fontSize: "15px" }}>
                  {companySize !== null ? companySize.size : "N/A"}
                </Text>
              ),
            },
            {
              accessor: "industry",

              textTransform: "capitalize",
              noWrap: true,
              render: ({ industry }) => (
                <Text style={{ fontSize: "15px" }}>
                  {industry !== null ? industry.name : "N/A"}
                </Text>
              ),
            },
            {
              accessor: "website",

              textTransform: "capitalize",
              noWrap: true,
              render: ({ website }) => (
                <Badge
                  radius="xs"
                  variant="light"
                  color="#3377FF"
                  size="md"
                  component="a"
                  href={addHttps(website)}
                  target="_blank"
                  rightSection={
                    <IconLink style={{ width: rem(12), height: rem(12) }} />
                  }
                  style={{
                    color: "#3377FF",
                    textTransform: "capitalize",
                    cursor: "pointer",
                  }}
                >
                  website
                </Badge>
              ),
            },
            {
              accessor: "address",

              textTransform: "capitalize",
              noWrap: true,
              render: ({ address }) => (
                <Text style={{ fontSize: "15px" }}>
                  {address !== null ? address : "N/A"}
                </Text>
              ),
            },
            {
              accessor: "status",

              textTransform: "capitalize",
              noWrap: true,
              render: ({ status }) => (
                <>
                  {status === "Approved" && (
                    <Badge color="#14cf14">{status}</Badge>
                  )}
                  {status === "Pending" && <Badge color="grey">{status}</Badge>}
                  {status === "Rejected" && <Badge color="red">{status}</Badge>}
                  {status === "Suspended" && (
                    <Badge color="#ffb242">{status}</Badge>
                  )}
                </>
              ),
            },
            {
              accessor: "moreDetails",
              render: ({ id }) => (
                <Badge
                  radius="xs"
                  variant="light"
                  color="#3377FF"
                  size="md"
                  component="a"
                  href={`admin/${id}`}
                  style={{
                    color: "#3377FF",
                    textTransform: "capitalize",
                    cursor: "pointer",
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
};
export default CompanyTable;
