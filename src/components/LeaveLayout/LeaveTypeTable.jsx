"use client";

import { useAddLeaveType } from "@/hooks";
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
  Select,
  Stack,
  Text,
  TextInput,
  Textarea,
} from "@mantine/core";
import { modals } from "@mantine/modals";
import { IconTrashX, IconEdit, IconTrash } from "@tabler/icons-react";
import { DataTable } from "mantine-datatable";
import classes from "./leaveLayout.module.css";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

export default function LeaveTypeTable() {
  const {
    leaves,
    gettingData,
    openEdit,
    openedEdit,
    closeEdit,
    setItemID,
    editForm,
    handleDelete,
    loading,
    handleEdit,
    pagination,
  } = useAddLeaveType();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const handleOpen = (data) => {
    setItemID(data?.id);
    editForm.setValues({
      name: data?.name,
      availability: data?.availability,
      isPaid: data?.isPaid === 1 ? "Yes" : "No",
      comments: data?.comments === null ? "" : data?.comments,
    });
    openEdit();
  };
  const openModal = (data) => {
    setItemID(data?.id);
    modals.open({
      radius: "md",
      centered: true,
      closeOnClickOutside: false,
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
            {`You will no longer have ${data?.name} leave available in your company. This process
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
  const paginate = (page) => {
    const currentQuery = searchParams;
    currentQuery.page = page;
    const currentPath = router.pathname;
    router.push({
      pathname: currentPath,
      query: currentQuery,
    });
  };
  return (
    <>
      <DataTable
        style={{ background: "none", marginTop: "3rem" }}
        minHeight={"250px"}
        loaderType="dots"
        loaderColor="#3377FF"
        fetching={gettingData}
        withRowBorders={false}
        records={leaves}
        columns={[
          {
            accessor: "index",
            title: "S/N",
            textAlign: "center",
            width: 70,
            render: (record) => leaves.indexOf(record) + 1,
          },
          {
            accessor: "name",

            noWrap: true,
          },
          {
            accessor: "actions",
            title: "Actions",
            width: "135px",
            textAlign: "center",
            render: (leaves) => (
              <Flex justify="center" align="center">
                <ActionIcon
                  variant="transparent"
                  onClick={() => handleOpen(leaves)}
                >
                  <IconEdit
                    style={{ width: "70%", height: "70%" }}
                    stroke={1.5}
                  />
                </ActionIcon>
                <ActionIcon
                  variant="transparent"
                  onClick={() => openModal(leaves)}
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
        totalRecords={pagination && pagination.total}
        recordsPerPage={pagination && pagination.perPage}
        page={pagination && pagination.currentPage}
      />
      <Modal
        closeOnClickOutside={false}
        opened={openedEdit}
        onClose={closeEdit}
        title="Add Leave Type"
        size="lg"
        centered
      >
        <Box>
          <Text
            tt={"capitalize"}
            style={{ fontSize: "22px", fontWeight: 700, marginTop: "1rem" }}
          >
            edit leave
          </Text>
          <form
            onSubmit={editForm.onSubmit((values) => handleEdit(values, "edit"))}
          >
            <Stack gap={"2rem"} mt={"1rem"}>
              <Grid gutter={"xl"}>
                <GridCol span={{ lg: 6, md: 12, sm: 12 }}>
                  <TextInput
                    label="Leave Type Name"
                    withAsterisk
                    size="md"
                    classNames={{
                      label: classes.label,
                      error: classes.error,
                      placeholder: classes.placeholder,
                    }}
                    {...editForm.getInputProps("name")}
                    disabled={loading}
                  />
                </GridCol>
                <GridCol span={{ lg: 6, md: 12, sm: 12 }}>
                  <Select
                    label="Avalability"
                    withAsterisk
                    size="md"
                    classNames={{
                      label: classes.label,
                      error: classes.error,
                      placeholder: classes.placeholder,
                    }}
                    {...editForm.getInputProps("availability")}
                    disabled={loading}
                    data={["All employees"]}
                  />
                </GridCol>
                <GridCol span={{ lg: 6, md: 12, sm: 12 }}>
                  <Select
                    label="Paid"
                    data={["Yes", "No"]}
                    withAsterisk
                    size="md"
                    classNames={{
                      label: classes.label,
                      error: classes.error,
                      placeholder: classes.placeholder,
                    }}
                    {...editForm.getInputProps("isPaid")}
                    disabled={loading}
                  />
                </GridCol>
              </Grid>
              <Textarea
                style={{ height: "100% !important " }}
                label="Notes/Comments"
                {...editForm.getInputProps("comments")}
                disabled={loading}
              />
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
                  onClick={closeEdit}
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
}
