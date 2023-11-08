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

import { useAddLeaveType } from "@/hooks";

const AddLeaveType = () => {
  const { form, handleSubmit, loading, openAdd, closeAdd, openedAdd } =
    useAddLeaveType();
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
          Leave Types
        </Text>
        <Button
          onClick={openAdd}
          variant="filled"
          tt={"capitalize"}
          style={{ backgroundColor: "#e7f7ff", color: "#000000" }}
        >
          add +
        </Button>
      </Flex>
      <Modal
        closeOnClickOutside={false}
        opened={openedAdd}
        onClose={closeAdd}
        title="Add Leave Type"
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
            add leave type
          </Text>
          <form
            onSubmit={form.onSubmit((values) => handleSubmit(values, "add"))}
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
                    {...form.getInputProps("name")}
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
                    {...form.getInputProps("availability")}
                    disabled={loading}
                    data={["All employees"]}
                  />
                </GridCol>
                <GridCol span={{ lg: 6, md: 12, sm: 12 }}>
                  <Select
                    label="Paid or Unpaid"
                    data={["Paid", "Unpaid"]}
                    withAsterisk
                    size="md"
                    classNames={{
                      label: classes.label,
                      error: classes.error,
                      placeholder: classes.placeholder,
                    }}
                    {...form.getInputProps("isPaid")}
                    disabled={loading}
                  />
                </GridCol>
              </Grid>
              <Textarea
                style={{ height: "100% !important " }}
                label="Notes/Comments"
                {...form.getInputProps("comments")}
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
                  onClick={closeAdd}
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
};

export default AddLeaveType;
