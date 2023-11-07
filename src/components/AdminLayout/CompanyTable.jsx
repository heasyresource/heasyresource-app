"use client";

import { CompanyList } from "@/utils/publicFunctions";
import { DataTable } from "mantine-datatable";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import classes from "../../components/AdminLayout/admin.module.css";
import { ActionIcon, Badge, Flex } from "@mantine/core";
import { usePathname } from "next/navigation";
import { IconEye, IconTrash, IconDownload } from "@tabler/icons-react";
import { clsx } from "clsx";

const PAGE_SIZE = 10;
const CompanyTable = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [records, setRecords] = useState(CompanyList.slice(0, PAGE_SIZE));

  useEffect(() => {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE;
    setRecords(CompanyList.slice(from, to));
  }, [page]);

  return (
    <>
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
            accessor: "companyName",
            textAlign: "center",
            textTransform: "capitalize",
            noWrap: true,
          },
          {
            accessor: "companySize",
            textAlign: "center",
            textTransform: "capitalize",
            noWrap: true,
          },
          {
            accessor: "industry",
            textAlign: "center",
            textTransform: "capitalize",
            noWrap: true,
          },
          {
            accessor: "websiteURL",
            textAlign: "center",
            textTransform: "capitalize",
            noWrap: true,
          },
          {
            accessor: "location",
            textAlign: "center",
            textTransform: "capitalize",
            noWrap: true,
          },
          {
            accessor: "status",
            textAlign: "center",
            textTransform: "capitalize",
            noWrap: true,
            cellsClassName: ({ status }) => {
              return clsx({
                [classes.active]: status === "active",
                [classes.underReview]: status === "under review",
                [classes.pending]: status === "pending",
                [classes.suspended]: status === "suspended",
                [classes.onHold]: status === "on hold",
              });
            },
          },
          {
            accessor: "moreDetails",
            render: () => (
              <Badge
                radius="xs"
                variant="light"
                color="#3377FF"
                size="md"
                style={{
                  color: "#3377FF",
                  textTransform: "capitalize",
                  cursor: "pointer",
                }}
                // onClick={() => router.push("/dashboard/employee/personal-detail")}
              >
                more details
              </Badge>
            ),
          },
          //   {
          //     accessor: "actions",
          //     title: "Actions",
          //     width: "135px",
          //     textAlign: "center",
          //     render: () => (
          //       <Flex justify="center" align="center">
          //         <ActionIcon
          //           variant="transparent"
          //           // color="#84ADFF"
          //           radius="lg"
          //           component="a"
          //           href="/dashboard/hiring/application-phase"
          //         >
          //           <IconEye
          //             style={{ width: "70%", height: "70%" }}
          //             stroke={1.5}
          //           />
          //         </ActionIcon>
          //         <ActionIcon
          //           variant="transparent"
          //           color="#FF7A00"
          //           onClick={() => setNoTransitionOpened(true)}
          //           radius="lg"
          //           style={{ marginLeft: "10px" }}
          //         >
          //           <IconTrash
          //             style={{ width: "70%", height: "70%" }}
          //             stroke={1.5}
          //           />
          //         </ActionIcon>
          //         <ActionIcon
          //           variant="transparent"
          //             color="#43D72B"
          //           onClick={() => setNoTransitionOpened1(true)}
          //           radius="lg"
          //           style={{ marginLeft: "10px" }}
          //         >
          //           <IconDownload
          //             style={{ width: "70%", height: "70%" }}
          //             stroke={1.5}
          //           />
          //         </ActionIcon>
          //       </Flex>
          //     ),
          //   },
        ]}
        totalRecords={CompanyList.length}
        recordsPerPage={PAGE_SIZE}
        page={page}
        onPageChange={(p) => setPage(p)}
      />
    </>
  );
};
export default CompanyTable;
