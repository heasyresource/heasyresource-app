"use client";

import { VacancyList } from "@/utils/publicFunctions";
import { DataTable } from "mantine-datatable";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  ActionIcon,
  Flex,
  Menu,
  MenuTarget,
  MenuDropdown,
  MenuItem,
  Button,
} from "@mantine/core";
import { usePathname } from "next/navigation";
import {
  IconCheck,
  IconX,
  IconDotsVertical,
  IconEye,
  IconTrash,
} from "@tabler/icons-react";
import AddVacancyModal from "./AddVacancyModal";

const PAGE_SIZE = 10;
const VacancyTable = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [records, setRecords] = useState(VacancyList.slice(0, PAGE_SIZE));
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE;
    setRecords(VacancyList.slice(from, to));
  }, [page]);

  return (
    <>
      <AddVacancyModal isOpen={isModalOpen} onClose={closeModal} />
      <Button
        component="a"
        variant="filled"
        onClick={openModal}
        // href="/dashboard/hiring/add"
        tt={"capitalize"}
        style={{
          backgroundColor: "#e7f7ff",
          color: "#000000",
          marginTop: "1.5rem",
        }}
      >
        add +
      </Button>
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
            accessor: "vacancy",
            textAlign: "center",
            textTransform: "capitalize",
            noWrap: true,
          },
          {
            accessor: "candidate",
            textAlign: "center",
            textTransform: "capitalize",
            noWrap: true,
          },
          {
            accessor: "hiringManager",
            textAlign: "center",
            textTransform: "capitalize",
            noWrap: true,
          },
          {
            accessor: "dateOfApplication",
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
                <ActionIcon
                  variant="transparent"
                  color="#84ADFF"
                  radius="lg"
                  component="a"
                  href="/dashboard/hiring/application-phase"
                >
                  <IconEye
                    style={{ width: "70%", height: "70%" }}
                    stroke={1.5}
                  />
                </ActionIcon>
                <ActionIcon
                  variant="transparent"
                  color="#FF7A00"
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
        totalRecords={VacancyList.length}
        recordsPerPage={PAGE_SIZE}
        page={page}
        onPageChange={(p) => setPage(p)}
      />
    </>
  );
};
export default VacancyTable;
