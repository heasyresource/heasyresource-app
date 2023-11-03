"use client";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridCol,
  Group,
  Modal,
  Select,
  Stack,
  Text,
  TextInput,
  Textarea,
} from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import classes from "./leaveLayout.module.css";
import React from "react";
import { useDisclosure } from "@mantine/hooks";
import { DateInput } from "@mantine/dates";
import { useAddHolidayType } from "@/hooks";

const AddLeaveType = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const { form, handleSubmit } = useAddHolidayType();
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
          onClick={open}
          variant="filled"
          tt={"capitalize"}
          rightSection={<IconPlus />}
          className={classes.btnLink}
          size="md"
        >
          add
        </Button>
      </Flex>
      <Modal
        closeOnClickOutside={false}
        opened={opened}
        onClose={close}
        title="Add Leave Type"
        size="xl"
        centered
      >
        <Box>
          <Text
            tt={"capitalize"}
            style={{ fontSize: "22px", fontWeight: 700, marginTop: "1rem" }}
          >
            add holiday type
          </Text>
          <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
            <Stack gap={"2rem"} mt={"1rem"}>
              <Grid gutter={"xl"}>
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
                    {...form.getInputProps("name")}
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
                    {...form.getInputProps("date")}
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
                    {...form.getInputProps("avalability")}
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
                    {...form.getInputProps("day")}
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
                    {...form.getInputProps("paid")}
                  />
                </GridCol>
              </Grid>
              <Textarea
                style={{ height: "100% !important " }}
                label="Notes/Comments"
                {...form.getInputProps("notes")}
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
                  assign
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