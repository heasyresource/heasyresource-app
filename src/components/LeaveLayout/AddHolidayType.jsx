"use client";
import {
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
import classes from "./leaveLayout.module.css";
import React from "react";
import { DateInput } from "@mantine/dates";

const AddLeaveType = ({
  form,
  handleSubmit,
  openedAdd,
  closeAdd,
  openAdd,
  loading,
}) => {
  const currentDate = new Date();
  return (
    <>
      <Flex
        justify={{ lg: "flex-start", md: "space-between", sm: "space-between" }}
        mt="2rem"
        align={"center"}
        gap={"20px"}
        px={"20px"}
      >
        <Text
          style={{
            fontSize: "25px",
            fontWeight: 700,
            textTransform: "capitalize",
            whiteSpace: "nowrap",
          }}
        >
          Holiday Types
        </Text>
        <Button
          onClick={openAdd}
          variant="filled"
          tt={"capitalize"}
          style={{ backgroundColor: "#e7f7ff", color: "#000000" }}
          aria-label="add"
        >
          add +
        </Button>
      </Flex>
      <Modal
        closeOnClickOutside={false}
        opened={openedAdd}
        onClose={closeAdd}
        withCloseButton={false}
        size="xl"
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
            add holiday type
          </Text>
          <form
            onSubmit={form?.onSubmit((values) => handleSubmit(values, "add"))}
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
                    minDate={currentDate}
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
                style={{ height: "100% !important " }}
                label="Notes/Comments"
                {...form?.getInputProps("comments")}
                disabled={loading}
              />
              <Group justify="flex-end" align="center" mt={"auto"}>
                <Button
                  variant="outline"
                  size="md"
                  color="#3377FF"
                  style={{ borderColor: "#3377FF" }}
                  tt="capitalize"
                  px="30px"
                  onClick={() => {
                    closeAdd();
                    form?.reset();
                  }}
                  disabled={loading}
                  aria-label="cancel"
                >
                  cancel
                </Button>
                <Button
                  variant="contained"
                  size="md"
                  color="#3377FF"
                  tt="capitalize"
                  px="30px"
                  type="submit"
                  style={{
                    backgroundColor: "#3377FF",
                  }}
                  disabled={loading}
                  aria-label="add"
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
};

export default AddLeaveType;
