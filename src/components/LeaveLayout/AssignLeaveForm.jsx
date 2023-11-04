"use client";
import {
  Box,
  Button,
  Grid,
  GridCol,
  Group,
  Select,
  Stack,
  Text,
  TextInput,
  Textarea,
} from "@mantine/core";
import React from "react";
import classes from "./leaveLayout.module.css";
import { DateInput } from "@mantine/dates";
import { IconCalendarBolt } from "@tabler/icons-react";
import { useAssignLeave } from "@/hooks";

const AssignLeaveForm = () => {
  const { form, handleSubmit } = useAssignLeave();
  return (
    <Box>
      <Text
        tt={"capitalize"}
        style={{ fontSize: "22px", fontWeight: 700, marginTop: "1rem" }}
      >
        assign leave
      </Text>
      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
        <Stack gap={"2rem"} mt={"1rem"}>
          <Grid gutter={"xl"}>
            <GridCol span={{ lg: 6, md: 12, sm: 12 }}>
              <TextInput
                label="Employee Name"
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
              <Select
                data={[]}
                label="Leave Type"
                withAsterisk
                size="md"
                classNames={{
                  label: classes.label,
                  error: classes.error,
                  placeholder: classes.placeholder,
                }}
                {...form.getInputProps("type")}
              />
            </GridCol>
            <GridCol span={{ lg: 6, md: 12, sm: 12 }}>
              <DateInput
                label="From Date"
                withAsterisk
                size="md"
                classNames={{
                  label: classes.label,
                  error: classes.error,
                  placeholder: classes.placeholder,
                }}
                rightSectionWidth={80}
                rightSection={<IconCalendarBolt style={{ color: "#7ea6f4" }} />}
                {...form.getInputProps("from")}
              />
            </GridCol>
            <GridCol span={{ lg: 6, md: 12, sm: 12 }}>
              <DateInput
                label="To Date"
                withAsterisk
                size="md"
                classNames={{
                  label: classes.label,
                  error: classes.error,
                  placeholder: classes.placeholder,
                }}
                rightSectionWidth={80}
                rightSection={<IconCalendarBolt style={{ color: "#7ea6f4" }} />}
                {...form.getInputProps("to")}
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
  );
};

export default AssignLeaveForm;
