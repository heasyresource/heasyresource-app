"use client";

import { EarningsList } from "@/utils/publicFunctions";
import { DataTable } from "mantine-datatable";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ActionIcon, Flex } from "@mantine/core";
import { usePathname } from "next/navigation";
import { IconEdit, IconTrash } from "@tabler/icons-react";

const PAGE_SIZE = 10;
const EarningsTable = ({ openEditModal }) => {
  const [page, setPage] = useState(1);
  const [records, setRecords] = useState(EarningsList.slice(0, PAGE_SIZE));

  useEffect(() => {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE;
    setRecords(EarningsList.slice(from, to));
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
            accessor: "rate",
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
                <ActionIcon
                  variant="transparent"
                  onClick={openEditModal}
                  radius="lg"
                >
                  <IconEdit
                    style={{ width: "70%", height: "70%" }}
                    stroke={1.5}
                  />
                </ActionIcon>
                <ActionIcon
                  variant="transparent"
                  color="#FF7A00"
                  onClick={() => setNoTransitionOpened(true)}
                  radius="lg"
                  style={{ marginLeft: "10px" }}
                >
                  <IconTrash
                    style={{ width: "70%", height: "70%" }}
                    stroke={1.5}
                  />
                </ActionIcon>
              </Flex>
            ),
          },
        ]}
        totalRecords={EarningsList.length}
        recordsPerPage={PAGE_SIZE}
        page={page}
        onPageChange={(p) => setPage(p)}
      />
    </>
  );
};
export default EarningsTable;
