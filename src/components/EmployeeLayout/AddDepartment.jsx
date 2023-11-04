"use client";
import {
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
import classes from "./employeeLayout.module.css";
import React from "react";
import { useDisclosure } from "@mantine/hooks";

const AddDepartment = () => {
  const [opened, { open, close }] = useDisclosure(false);
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
          Department
        </Text>
        <Button
          onClick={open}
          variant="filled"
          tt={"capitalize"}
          style={{ backgroundColor: "#e7f7ff", color: "#000000" }}
        >
          add +
        </Button>
      </Flex>
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
            add department
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
                  add
                </Button>
              </Group>
            </Stack>
          </form>
        </Box>
      </Modal>
    </>
  );
};

export default AddDepartment;
