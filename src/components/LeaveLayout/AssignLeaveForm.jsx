"use client";
import {
  Box,
  Button,
  Grid,
  GridCol,
  Group,
  Loader,
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
  const currentDate = new Date();
  const {
    form,
    handleSubmit,
    leaveTypes,
    loading,
    router,
    firstName,
    lastName,
  } = useAssignLeave();
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
          <Grid gutter={"lg"}>
            {firstName !== null && lastName !== null && (
              <GridCol span={{ lg: 6, md: 12, sm: 12 }}>
                <TextInput
                  size="md"
                  label="Employee Name"
                  disabled
                  classNames={{
                    label: classes.label,
                    error: classes.error,
                    placeholder: classes.placeholder,
                  }}
                  defaultValue={`${firstName} ${lastName}`}
                />
              </GridCol>
            )}
            <GridCol span={{ lg: 6, md: 12, sm: 12 }}>
              <Select
                data={leaveTypes}
                label="Leave Type"
                withAsterisk
                size="md"
                classNames={{
                  label: classes.label,
                  error: classes.error,
                  placeholder: classes.placeholder,
                }}
                {...form.getInputProps("leaveTypeId")}
                allowDeselect={false}
                disabled={loading}
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
                {...form.getInputProps("startDate")}
                valueFormat="DD/MM/YYYY"
                disabled={loading}
                minDate={currentDate}
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
                {...form.getInputProps("endDate")}
                valueFormat="DD/MM/YYYY"
                disabled={loading}
                minDate={form.values.startDate || ""}
              />
            </GridCol>
          </Grid>
          <Textarea
            label="Comments"
            {...form.getInputProps("comments")}
            disabled={loading}
            autosize
            minRows={2}
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
              disabled={loading}
              onClick={() => router.back()}
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
              disabled={loading}
            >
              {loading ? (
                <Loader color="white" type="dots" size="md" />
              ) : (
                "assign"
              )}
            </Button>
          </Group>
        </Stack>
      </form>
    </Box>
  );
};

export default AssignLeaveForm;
