"use client";
import {
  ActionIcon,
  Box,
  Button,
  FileInput,
  Flex,
  Grid,
  GridCol,
  Group,
  Modal,
  Select,
  Stack,
  Switch,
  Text,
  TextInput,
  Textarea,
} from "@mantine/core";
import React, { useState } from "react";
import classes from "../leave/leave.module.css";
import { IconCalendar, IconEdit } from "@tabler/icons-react";
import { useAssignLeave } from "@/hooks";
import { useDisclosure } from "@mantine/hooks";

const RequestLeaveModal = ({ isOpen, onClose }) => {
  const [value, setValue] = useState([]);
  const { form, handleSubmit } = useAssignLeave();

  return (
    <Modal opened={isOpen} onClose={onClose} size="50%" radius={15} shadow="sm">
      <Box px={30} pt={30}>
        <Text
          tt={"capitalize"}
          style={{
            fontSize: "22px",
            fontWeight: 700,
          }}
        >
          Request Leave
        </Text>
        <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
          <Stack gap={"2rem"}>
            <Grid gutter="xl" className={classes.formWrap}>
              <GridCol span={{ lg: 12, md: 12, sm: 12 }}>
                <TextInput
                  size="md"
                  required
                  label="Leave Type"
                  placeholder="Marketing"
                  style={{ width: "100%" }}
                  classNames={{
                    label: classes.label,
                    error: classes.error,
                    placeholder: classes.placeholder,
                  }}
                />
              </GridCol>
              <GridCol span={{ lg: 6, md: 12, sm: 12 }}>
                <TextInput
                  size="md"
                  required
                  label="Start Date"
                  style={{ width: "100%" }}
                  rightSection={<IconCalendar color="#3377ff" />}
                  classNames={{
                    label: classes.label,
                    error: classes.error,
                    placeholder: classes.placeholder,
                  }}
                />
              </GridCol>
              <GridCol span={{ lg: 6, md: 12, sm: 12 }}>
                <TextInput
                  size="md"
                  required
                  label="End Date"
                  style={{ width: "100%" }}
                  rightSection={<IconCalendar color="#3377ff" />}
                  classNames={{
                    label: classes.label,
                    error: classes.error,
                    placeholder: classes.placeholder,
                  }}
                />
              </GridCol>
              <GridCol span={{ lg: 12, md: 12, sm: 12 }}>
                <Textarea
                  size="md"
                  placeholder="Note"
                  required
                  label="Frequency"
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
              >
                back
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
                continue
              </Button>
            </Group>
          </Stack>
        </form>
      </Box>
    </Modal>
  );
};

export default RequestLeaveModal;
