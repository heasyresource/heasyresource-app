"use client";
import {
  ActionIcon,
  Box,
  Button,
  Flex,
  Grid,
  GridCol,
  Group,
  Loader,
  Modal,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { IconEdit, IconTrash, IconTrashX } from "@tabler/icons-react";
import { DataTable } from "mantine-datatable";
import React from "react";
import classes from "./employeeLayout.module.css";
import { useAddDepartment } from "@/hooks";
import { modals } from "@mantine/modals";
const DepartmentsTable = ({
  departments,
  handleDelete,
  handleEdit,
  loading,
  getttingDatas,
  form,
  setItemID,
  openEdit,
  closeEdit,
  openedEdit,
  paginate,
  pagination,
}) => {
  const handleOpen = (data) => {
    setItemID(data?.id);
    form?.setValues({ name: data?.name, code: data?.code });
    openEdit();
  };
  const openModal = (data) => {
    setItemID(data?.id);
    modals.open({
      radius: "md",
      centered: true,
      closeOnClickOutside: false,
      overlayProps: {
        backgroundOpacity: 0.55,
        blur: 3,
      },
      children: (
        <Stack py={"3rem"} justify="center" align="center">
          <ActionIcon variant="transparent" size="xl">
            <IconTrashX
              style={{
                color: "#FF0000",
                fontSize: "20px",
                width: "100%",
                height: "100%",
              }}
              stroke={1.5}
            />
          </ActionIcon>
          <Text fw={600} style={{ fontSize: "25px", color: "#000000" }}>
            Are you sure ?
          </Text>

          <Text
            style={{ fontSize: "16px", color: "#1E1E1E", textAlign: "center" }}
          >
            {`You will no longer have ${data?.name} department available in your company. This process
            is irreversible.`}
          </Text>
          <Group mt="1rem" justify="flex-end" align="center">
            <Button
              variant="outline"
              size="md"
              color="#A3A3A3"
              style={{ borderColor: "#A3A3A3" }}
              tt="capitalize"
              onClick={() => {
                modals.closeAll();
                setItemID("");
              }}
            >
              cancel
            </Button>
            <Button
              variant="contained"
              size="md"
              style={{ backgroundColor: "#FF0000" }}
              tt="capitalize"
              onClick={() => {
                handleDelete();
                modals.closeAll();
              }}
            >
              delete
            </Button>
          </Group>
        </Stack>
      ),
    });
  };

  return (
    <>
      {departments?.length !== 0 && (
        <DataTable
          style={{ background: "none", marginTop: "3rem" }}
          minHeight={"250px"}
          fetching={getttingDatas}
          loaderType="dots"
          loaderColor="#3377FF"
          withRowBorders={false}
          records={departments}
          columns={[
            {
              accessor: "index",
              title: "S/N",
              textAlign: "center",
              width: 70,
              render: (record) => departments.indexOf(record) + 1,
            },
            {
              accessor: "name",
              title: "Department Name",
              noWrap: true,
            },
            {
              accessor: "code",
              title: "Department Code",
              noWrap: true,
            },
            {
              accessor: "",
              title: "Actions",
              width: "135px",
              textAlign: "center",
              render: (departments) => (
                <Flex justify="center" align="center">
                  <ActionIcon
                    variant="transparent"
                    onClick={() => handleOpen(departments)}
                  >
                    <IconEdit
                      style={{ width: "70%", height: "70%" }}
                      stroke={1.5}
                    />
                  </ActionIcon>
                  <ActionIcon
                    variant="transparent"
                    onClick={() => openModal(departments)}
                  >
                    <IconTrash
                      style={{ width: "70%", height: "70%", color: "#FF7A00" }}
                      stroke={1.5}
                    />
                  </ActionIcon>
                </Flex>
              ),
            },
          ]}
          totalRecords={pagination?.total}
          recordsPerPage={pagination?.perPage}
          page={pagination?.currentPage}
          onPageChange={(page) => paginate(page)}
        />
      )}

      <Modal
        closeOnClickOutside={false}
        opened={openedEdit}
        onClose={closeEdit}
        title="Add Leave Type"
        size="lg"
        centered
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      >
        <Box>
          <Text
            tt={"capitalize"}
            style={{ fontSize: "22px", fontWeight: 700, marginTop: "1rem" }}
          >
            edit department
          </Text>
          <form
            onSubmit={form.onSubmit((values) => handleEdit(values, "edit"))}
          >
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
                    {...form.getInputProps("name")}
                    disabled={loading}
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
                    maxLength={3}
                    {...form.getInputProps("code")}
                    disabled={loading}
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
                  onClick={() => {
                    form.setValues({ name: "", code: "" });
                    closeEdit();
                    setItemID("");
                  }}
                  disabled={loading}
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
                  disabled={loading}
                >
                  {loading ? (
                    <Loader color="white" type="dots" size="md" />
                  ) : (
                    "update"
                  )}
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
