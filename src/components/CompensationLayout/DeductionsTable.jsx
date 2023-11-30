"use client";

import { DeductionsList } from "@/utils/publicFunctions";
import { DataTable } from "mantine-datatable";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  ActionIcon,
  Badge,
  Button,
  Flex,
  Group,
  Stack,
  Text,
} from "@mantine/core";
import { usePathname } from "next/navigation";
import { IconEdit, IconTrash } from "@tabler/icons-react";
import { IconTrashX } from "@tabler/icons-react";
import { modals } from "@mantine/modals";
import EditDeductionsModal from "./EditDeductionsModal";

const DeductionsTable = ({
  deductions,
  gettingData,
  form,
  openedDeductEdit,
  openDeductEdit,
  closeDeductEdit,
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
              delete
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
    openDeductEdit();
  };
  return (
    <>
      <EditDeductionsModal
        isEditClose={closeDeductEdit}
        isEditOpen={openedDeductEdit}
        form={form}
        handleSubmit={handleEdit}
        loading={loading}
      />
      {deductions?.length !== 0 && (
        <DataTable
          style={{ background: "none", marginTop: "1rem" }}
          minHeight={"250px"}
          loaderType="dots"
          loaderColor="#3377FF"
          fetching={gettingData}
          withRowBorders={false}
          records={deductions}
          columns={[
            {
              accessor: "index",
              title: "S/N",
              width: 70,
              textAlign: "center",
              render: (record) => deductions.indexOf(record) + 1,
            },
            {
              accessor: "name",
              noWrap: true,
              render: ({ name }) => (
                <Text style={{ fontSize: "15px", textTransform: "capitalize" }}>
                  {name}
                </Text>
              ),
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
              textAlign: "center",
              render: (deductions) => (
                <Flex justify="center" align="center">
                  <ActionIcon
                    variant="transparent"
                    onClick={() => openEdit(deductions)}
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
                    onClick={() => openModal(deductions)}
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
      )}
    </>
  );
};
export default DeductionsTable;
