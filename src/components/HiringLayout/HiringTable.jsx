"use client";

import { hiringList } from "@/utils/publicFunctions";
import { DataTable } from "mantine-datatable";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import classes from "../HiringLayout/HiringLayout.module.css";
import {
  ActionIcon,
  Flex,
  Menu,
  MenuTarget,
  MenuDropdown,
  MenuItem,
  Button,
  Modal,
  Text,
  Group,
} from "@mantine/core";
import { usePathname } from "next/navigation";
import {
  IconCheck,
  IconX,
  IconDotsVertical,
  IconEye,
  IconTrash,
  IconDownload,
  IconTrashX,
  IconFile,
} from "@tabler/icons-react";

const PAGE_SIZE = 10;
const HiringTable = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [records, setRecords] = useState(hiringList.slice(0, PAGE_SIZE));
  const [noTransitionOpened, setNoTransitionOpened] = useState(false);
  const [noTransitionOpened1, setNoTransitionOpened1] = useState(false);

  useEffect(() => {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE;
    setRecords(hiringList.slice(from, to));
  }, [page]);

  return (
    <>
      <Modal
        opened={noTransitionOpened}
        onClose={() => setNoTransitionOpened(false)}
        centered
        title="Please consider this"
        classNames={{
          content: classes.content,
        }}
      >
        <Flex
          pt={20}
          gap={"sm"}
          direction={"column"}
          align={"center"}
          w={"100%"}
        >
          <IconTrashX
            color="#FF0000"
            style={{ width: "75.28", height: "75.28" }}
          />
          <Text fw={700} fz={24}>
            Are you sure?
          </Text>
          <Text ta="center" c={"rgba(30, 30, 30, 0.60)"} fz={14}>
            You will no longer be able to access your account or any services
            tied to it. This process is irreversible.
          </Text>
        </Flex>
        <Group
          justify="center"
          className={classes.btnWrap}
          align="center"
          my={40}
        >
          <Button
            variant="outline"
            size="md"
            color="#A3A3A3"
            style={{ borderColor: "#A3A3A3" }}
            tt="capitalize"
            px="50px"
            w={{ lg: "auto", md: "auto", sm: "auto" }}
            className={classes.btn}
          >
            cancel
          </Button>
          <Button
            variant="contained"
            size="md"
            color="#FF0000"
            tt="capitalize"
            px="50px"
            w={{ lg: "auto", md: "auto", sm: "auto" }}
            className={classes.btn}
            type="submit"
            style={{
              backgroundColor: "#FF0000 ",
            }}
          >
            Delete
          </Button>
        </Group>
      </Modal>
      <Modal
        opened={noTransitionOpened1}
        onClose={() => setNoTransitionOpened1(false)}
        centered
        title="Please consider this"
        classNames={{
          content: classes.content,
        }}
      >
        <Flex
          pt={20}
          gap={"sm"}
          direction={"column"}
          align={"center"}
          w={"100%"}
        >
          <IconFile size={75} />
          <Text fw={700} fz={24}>
            Download
          </Text>
        </Flex>
        <Group
          justify="center"
          className={classes.btnWrap}
          align="center"
          my={30}
        >
          <Button
            variant="contained"
            size="md"
            color="#3377FF"
            tt="capitalize"
            px="50px"
            w={{ lg: "auto", md: "auto", sm: "auto" }}
            className={classes.btn}
            type="submit"
            style={{
              backgroundColor: "#3377FF",
            }}
            leftSection={<IconDownload size={25} />}
          >
            Download
          </Button>
        </Group>
      </Modal>
      <Button
        component="a"
        variant="filled"
        href="/dashboard/hiring/add-candidate"
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
                  // color="#84ADFF"
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
                  onClick={() => setNoTransitionOpened(true)}
                  radius="lg"
                  style={{ marginLeft: "10px" }}
                >
                  <IconTrash
                    style={{ width: "70%", height: "70%" }}
                    stroke={1.5}
                  />
                </ActionIcon>
                <ActionIcon
                  variant="transparent"
                    color="#43D72B"
                  onClick={() => setNoTransitionOpened1(true)}
                  radius="lg"
                  style={{ marginLeft: "10px" }}
                >
                  <IconDownload
                    style={{ width: "70%", height: "70%" }}
                    stroke={1.5}
                  />
                </ActionIcon>
              </Flex>
            ),
          },
        ]}
        totalRecords={hiringList.length}
        recordsPerPage={PAGE_SIZE}
        page={page}
        onPageChange={(p) => setPage(p)}
      />
    </>
  );
};
export default HiringTable;
