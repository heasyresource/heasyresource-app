"use client";

import { PaySlipList } from "@/utils/publicFunctions";
import { DataTable } from "mantine-datatable";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ActionIcon, Badge, Flex } from "@mantine/core";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { IconEdit, IconTrash } from "@tabler/icons-react";

const PAGE_SIZE = 10;
const PaySLipTable = ({ openEditModal }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [records, setRecords] = useState(PaySlipList.slice(0, PAGE_SIZE));

  useEffect(() => {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE;
    setRecords(PaySlipList.slice(from, to));
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
            accessor: "name",
            textAlign: "center",
            textTransform: "capitalize",
            noWrap: true,
          },
          {
            accessor: "earnings",
            textAlign: "center",
            textTransform: "capitalize",
            noWrap: true,
          },
          {
            accessor: "deductions",
            textAlign: "center",
            textTransform: "capitalize",
            noWrap: true,
          },
          {
            accessor: "unitAmount",
            textAlign: "center",
            textTransform: "capitalize",
            noWrap: true,
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
        //           onClick={openEditModal}
        //           radius="lg"
        //         >
        //           <IconEdit
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
        //       </Flex>
        //     ),
        //   },
        ]}
        totalRecords={PaySlipList.length}
        recordsPerPage={PAGE_SIZE}
        page={page}
        onPageChange={(p) => setPage(p)}
      />
    </>
  );
};
export default PaySLipTable;
