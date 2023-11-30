"use client";
import { DataTable } from "mantine-datatable";
import {
  ActionIcon,
  Box,
  Button,
  Flex,
  Group,
  Image,
  Loader,
  Stack,
  Text,
} from "@mantine/core";
import { IconEdit, IconTrash } from "@tabler/icons-react";
import EditEarningsModal from "./EditEarningsModal";
import { modals } from "@mantine/modals";
import { IconTrashX } from "@tabler/icons-react";

const EarningsTable = ({
  earnings,
  gettingEarnings,
  form,
  openedEditEarn,
  openEditEarn,
  closeEditEarn,
  handleEdit,
  setComponentId,
  loading,
  handleDelete,
}) => {
  const convertToDecimalFormat = (inputString) => {
    const parsedNumber = parseFloat(inputString);

    if (!isNaN(parsedNumber)) {
      const decimalString = parsedNumber.toFixed(2);
      return decimalString.toString();
    }
  };
  const openModal = (data) => {
    modals.open({
      radius: "md",
      centered: true,
      closeOnClickOutside: false,
      withCloseButton: false,
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
            This process is irreversible.
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
                handleDelete(data.id);
                modals.closeAll();
              }}
            >
              {loading ? (
                <Loader type="dots" color="white" size="md" />
              ) : (
                "delete"
              )}
            </Button>
          </Group>
        </Stack>
      ),
    });
  };
  const openEdit = (data) => {
    form?.setValues({
      name: data.name,
      frequency: data.frequency,
      isFixed: data.isFixed === 1 ? true : false,
      amount: data.isFixed !== 1 ? data.rate : data.amount,
    });
    setComponentId(data.id);
    openEditEarn();
  };

  return (
    <>
      <EditEarningsModal
        isEditClose={closeEditEarn}
        isEditOpen={openedEditEarn}
        form={form}
        loading={loading}
        handleSubmit={handleEdit}
      />
      {earnings?.length !== 0 ? (
        <DataTable
          style={{ background: "none", marginTop: "1rem" }}
          minHeight={"250px"}
          loaderType="dots"
          loaderColor="#3377FF"
          fetching={gettingEarnings}
          withRowBorders={false}
          records={earnings}
          columns={[
            {
              accessor: "index",
              title: "S/N",
              width: 70,
              textAlign: "center",
              render: (record) => earnings.indexOf(record) + 1,
            },
            {
              accessor: "name",

              textTransform: "capitalize",
              noWrap: true,
            },
            {
              accessor: "frequency",
            },
            {
              accessor: "",
              title: "Rate/Amount",

              textTransform: "capitalize",
              noWrap: true,
              render: (earnings) => (
                <Text style={{ fontSize: "15px" }}>
                  {earnings.rate !== null
                    ? earnings.rate?.includes("%")
                      ? earnings.rate
                      : `${earnings.rate}%`
                    : ""}
                  {earnings.amount !== null &&
                    convertToDecimalFormat(earnings.amount)}
                </Text>
              ),
            },
            {
              accessor: "actions",
              title: "Actions",
              width: "135px",
              textAlign: "center",
              render: (earnings) => (
                <Flex justify="center" align="center">
                  <ActionIcon
                    variant="transparent"
                    onClick={() => openEdit(earnings)}
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
                    onClick={() => openModal(earnings)}
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
              No earnings found!
            </Text>
          </Stack>
        </Box>
      )}
    </>
  );
};
export default EarningsTable;
