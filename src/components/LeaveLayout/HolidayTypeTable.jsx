"use client";
import { convertStringDate } from "@/utils/publicFunctions";
import {
  ActionIcon,
  Box,
  Button,
  Flex,
  Grid,
  GridCol,
  Group,
  Image,
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

export default function HolidayTypeTable({
  holidays,
  openedEdit,
  closeEdit,
  openEdit,
  form,
  gettingDatas,
  setItemID,
  loading,
  handleDelete,
  pagination,
  paginate,
  handleEdit,
}) {
  const handleOpen = (data) => {
    setItemID(data?.id);
    form?.setValues({
      name: data?.name,
      availability: data?.availability,
      isPaid: data?.isPaid === 1 ? "Paid" : "Unpaid",
      isFullDay: data?.isFullDay === 1 ? "Full Day" : "Half Day",
      comments: data?.comments === null ? "" : data?.comments,
      date: new Date(data?.date),
    });
    openEdit();
  };
  const openModal = (data) => {
    setItemID(data?.id);
    modals.open({
      radius: "md",
      centered: true,
      withCloseButton: false,
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
      {holidays?.length !== 0 ? (
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
              render: (record) => holidays?.indexOf(record) + 1,
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
          totalRecords={pagination?.total}
          recordsPerPage={pagination?.perPage}
          page={pagination?.currentPage}
          onPageChange={(page) => paginate(page)}
        />
      ) : (
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            margin: "6rem 0",
          }}
        >
          <Stack justify="center" align="center">
            <Box style={{ width: "10rem", height: "auto" }}>
              <Image src={"/assets/svgs/empty.svg"} alt="empty" />
            </Box>
            <Text style={{ fontSize: "16px", color: "#616161" }}>
              No holiday found!
            </Text>
          </Stack>
        </Box>
      )}
      <Modal
        closeOnClickOutside={false}
        opened={openedEdit}
        onClose={closeEdit}
        withCloseButton={false}
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
            edit holiday
          </Text>
          <form
            onSubmit={form?.onSubmit((values) => handleEdit(values, "edit"))}
          >
            <Box
              style={{
                margin: "20px 0",
                overflowY: "scroll",
                maxHeight: "400px",
              }}
            >
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
                    {...form?.getInputProps("name")}
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
                    {...form?.getInputProps("date")}
                    disabled={loading}
                  />
                </GridCol>
                <GridCol span={{ lg: 6, md: 12, sm: 12 }}>
                  <Select
                    label="Availability"
                    withAsterisk
                    size="md"
                    classNames={{
                      label: classes.label,
                      error: classes.error,
                      placeholder: classes.placeholder,
                    }}
                    {...form?.getInputProps("availability")}
                    disabled={loading}
                    data={["All employees"]}
                    allowDeselect={false}
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
                    {...form?.getInputProps("isFullDay")}
                    data={["Full Day", "Half Day"]}
                    disabled={loading}
                    allowDeselect={false}
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
                    {...form?.getInputProps("isPaid")}
                    data={["Paid", "Unpaid"]}
                    disabled={loading}
                    allowDeselect={false}
                  />
                </GridCol>
              </Grid>
              <Textarea
                mt={"md"}
                autosize
                minRows={5}
                label="Notes/Comments"
                {...form?.getInputProps("comments")}
                disabled={loading}
              />
            </Box>
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
                  closeEdit();
                  form?.reset();
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
                  "add"
                )}
              </Button>
            </Group>
          </form>
        </Box>
      </Modal>
    </>
  );
}
