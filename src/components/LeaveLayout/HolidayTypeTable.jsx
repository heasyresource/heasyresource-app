"use client";

import { useAddHolidayType } from "@/hooks";
import { convertStringDate } from "@/utils/publicFunctions";
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
import { IconEdit, IconTrash, IconTrashX } from "@tabler/icons-react";
import { DataTable } from "mantine-datatable";
import classes from "./leaveLayout.module.css";
import { DateInput } from "@mantine/dates";

export default function HolidayTypeTable() {
  const {
    holidays,
    openedEdit,
    closeEdit,
    openEdit,
    editForm,
    gettingDatas,
    setItemID,
    loading,
    handleDelete,
    pagination,
  } = useAddHolidayType();
  const handleOpen = (data) => {
    setItemID(data?.id);
    editForm.setValues({
      name: data?.name,
      availability: data?.availability,
      isPaid: data?.isPaid === 1 ? "Yes" : "No",
      isFullDay: data?.isFullDay === 1 ? "Yes" : "No",
      comments: data?.comments === null ? "" : data?.comments,
      // date: data?.date,
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
            style={{
              fontSize: "16px",
              color: "#1E1E1E",
              textAlign: "center",
            }}
          >
            {`You will no longer have ${data?.name} holiday available in your company. This process
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
      {holidays?.length !== 0 && (
        <DataTable
          style={{ background: "none", marginTop: "3rem" }}
          minHeight={"250px"}
          loaderType="dots"
          loaderColor="#3377FF"
          fetching={gettingDatas}
          withRowBorders={false}
          records={holidays}
          columns={[
            {
              accessor: "index",
              title: "S/N",
              textAlign: "center",
              width: 70,
              render: (record) => holidays.indexOf(record) + 1,
            },
            {
              accessor: "name",
              noWrap: true,
            },
            {
              accessor: "date",
              noWrap: true,
              render: ({ date }) => (
                <Text style={{ fontSize: "15px" }}>
                  {convertStringDate(date)}
                </Text>
              ),
            },
            {
              accessor: "day",
              title: "Full Day/Half Day",
              noWrap: true,
              render: ({ isFullDay }) => (
                <Text style={{ fontSize: "15px" }}>
                  {isFullDay === 1 ? "Full Day" : "Half Day"}
                </Text>
              ),
            },
            {
              accessor: "actions",
              title: "Actions",
              width: "135px",
              textAlign: "center",
              render: (holidays) => (
                <Flex justify="center" align="center">
                  <ActionIcon
                    variant="transparent"
                    onClick={() => handleOpen(holidays)}
                  >
                    <IconEdit
                      style={{ width: "70%", height: "70%" }}
                      stroke={1.5}
                    />
                  </ActionIcon>
                  <ActionIcon
                    variant="transparent"
                    onClick={() => openModal(holidays)}
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
      )}
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
            edit holiday
          </Text>
          <form
            onSubmit={editForm.onSubmit((values) => handleEdit(values, "edit"))}
          >
            <Stack gap={"1.5rem"} mt={"1rem"}>
              <Grid gutter={"md"}>
                <GridCol span={{ lg: 6, md: 12, sm: 12 }}>
                  <TextInput
                    label="Holiday Type Name"
                    withAsterisk
                    size="md"
                    classNames={{
                      label: classes.label,
                      error: classes.error,
                      placeholder: classes.placeholder,
                    }}
                    disabled={loading}
                    {...editForm.getInputProps("name")}
                  />
                </GridCol>
                <GridCol span={{ lg: 6, md: 12, sm: 12 }}>
                  <DateInput
                    size="md"
                    label="Date"
                    withAsterisk
                    style={{ width: "100%" }}
                    classNames={{
                      label: classes.label,
                      error: classes.error,
                      placeholder: classes.placeholder,
                    }}
                    {...editForm.getInputProps("date")}
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
                    label="Full Day/Half Day"
                    withAsterisk
                    size="md"
                    classNames={{
                      label: classes.label,
                      error: classes.error,
                      placeholder: classes.placeholder,
                    }}
                    {...editForm.getInputProps("isFullDay")}
                    data={["Yes", "No"]}
                    disabled={loading}
                  />
                </GridCol>
                <GridCol span={{ lg: 6, md: 12, sm: 12 }}>
                  <Select
                    label="Paid or Unpaid"
                    withAsterisk
                    size="md"
                    classNames={{
                      label: classes.label,
                      error: classes.error,
                      placeholder: classes.placeholder,
                    }}
                    {...editForm.getInputProps("isPaid")}
                    data={["Yes", "No"]}
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
                    "add"
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
