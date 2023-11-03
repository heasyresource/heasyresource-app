"use client";
import { departmentType } from "@/utils/publicFunctions";
import {
  ActionIcon,
  Box,
  Button,
  Flex,
  Grid,
  GridCol,
  Group,
  Modal,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconEdit, IconTrash } from "@tabler/icons-react";
import { DataTable } from "mantine-datatable";
import React, { useEffect, useState } from "react";
import classes from "./employeeLayout.module.css";
const PAGE_SIZE = 10;
const DepartmentsTable = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [page, setPage] = useState(1);
  const [records, setRecords] = useState(departmentType.slice(0, PAGE_SIZE));

  useEffect(() => {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE;
    setRecords(departmentType.slice(from, to));
  }, [page]);
  return (
    <>
      <DataTable
        style={{ background: "none", marginTop: "3rem" }}
        height={"auto"}
        withRowBorders={false}
        records={records}
        columns={[
          {
            accessor: "index",
            title: "S/N",
            textAlign: "center",
            width: 70,
            render: (record) => records.indexOf(record) + 1,
          },
          {
            accessor: "name",
            title: "Department Name",
            noWrap: true,
          },
          {
            accessor: "deptCode",
            title: "Department Code",
            noWrap: true,
          },
          {
            accessor: "actions",
            title: "Actions",
            width: "135px",
            textAlign: "center",
            render: () => (
              <Flex justify="center" align="center">
                <ActionIcon variant="transparent" onClick={open}>
                  <IconEdit
                    style={{ width: "70%", height: "70%" }}
                    stroke={1.5}
                  />
                </ActionIcon>
                <ActionIcon variant="transparent">
                  <IconTrash
                    style={{ width: "70%", height: "70%", color: "#FF7A00" }}
                    stroke={1.5}
                  />
                </ActionIcon>
              </Flex>
            ),
          },
        ]}
        totalRecords={departmentType.length}
        recordsPerPage={PAGE_SIZE}
        page={page}
        onPageChange={(p) => setPage(p)}
      />

      <Modal
        closeOnClickOutside={false}
        opened={opened}
        onClose={close}
        title="Add Leave Type"
        size="lg"
        centered
      >
        <Box>
          <Text
            tt={"capitalize"}
            style={{ fontSize: "22px", fontWeight: 700, marginTop: "1rem" }}
          >
            edit department
          </Text>
          <form>
            <Stack gap={"2rem"} mt={"1rem"}>
              <Grid gutter={"xl"}>
                <GridCol span={12}>
                  <TextInput
                    label="Department Name"
                    withAsterisk
                    size="md"
                    classNames={{
                      label: classes.label,
                      error: classes.error,
                      placeholder: classes.placeholder,
                    }}
                  />
                </GridCol>
                <GridCol span={12}>
                  <TextInput
                    label="Department Code"
                    withAsterisk
                    size="md"
                    classNames={{
                      label: classes.label,
                      error: classes.error,
                      placeholder: classes.placeholder,
                    }}
                  />
                </GridCol>
              </Grid>

              <Group
                justify="flex-end"
                className={classes.btnWrap}
                align="center"
                mt={"auto"}
              >
                <Button
                  variant="outline"
                  size="md"
                  color="#3377FF"
                  style={{ borderColor: "#3377FF" }}
                  tt="capitalize"
                  px="50px"
                  w={{ lg: "auto", md: "auto", sm: "auto" }}
                  className={classes.btn}
                  onClick={close}
                >
                  cancel
                </Button>
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
                >
                  update
                </Button>
              </Group>
            </Stack>
          </form>
        </Box>
      </Modal>
    </>
  );
};

export default DepartmentsTable;
