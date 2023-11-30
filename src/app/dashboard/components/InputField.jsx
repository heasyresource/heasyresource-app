import { Button, Grid, GridCol, Group, Select, TextInput } from "@mantine/core";
import classes from "../dashboard.module.css";
import React from "react";

const InputField = ({
  loading,
  form,
  handleSubmit,
  departments,
  getEmployees,
}) => {
  return (
    <form
      onSubmit={form.onSubmit(() => getEmployees())}
      style={{ marginTop: "1rem" }}
    >
      <Grid justify="space-between" className={classes.formWrap}>
        <GridCol span={{ lg: 3, md: 6, sm: 12 }} mt={0}>
          <TextInput
            size="md"
            label="Employee Name"
            style={{ width: "100%" }}
            {...form.getInputProps("employeeName")}
            classNames={{
              label: classes.label,
              error: classes.error,
              placeholder: classes.placeholder,
            }}
            disabled={loading}
          />
        </GridCol>
        <GridCol span={{ lg: 3, md: 6, sm: 12 }}>
          <TextInput
            size="md"
            label="Employee ID"
            style={{ width: "100%" }}
            {...form.getInputProps("employeeId")}
            classNames={{
              label: classes.label,
              error: classes.error,
              placeholder: classes.placeholder,
            }}
            disabled={loading}
          />
        </GridCol>
        <GridCol span={{ lg: 3, md: 6, sm: 12 }}>
          <Select
            size="md"
            label="Employee Status"
            style={{ width: "100%" }}
            {...form.getInputProps("status")}
            data={[
              "Resigned",
              "Employed",
              "Terminated",
              "Suspended",
              "Retired",
            ]}
            classNames={{
              label: classes.label,
              error: classes.error,
              placeholder: classes.placeholder,
            }}
            disabled={loading}
          />
        </GridCol>
        <GridCol span={{ lg: 3, md: 6, sm: 12 }}>
          <Select
            size="md"
            label="Employee Department"
            style={{ width: "100%" }}
            disabled={loading}
            {...form.getInputProps("departmentId")}
            data={departments}
            classNames={{
              label: classes.label,
              error: classes.error,
              placeholder: classes.placeholder,
            }}
          />
        </GridCol>
      </Grid>
      <Group justify="flex-end" mt={"1.5rem"}>
        <Button
          style={{ fontSize: "16px", textTransform: "capitalize" }}
          size="md"
          variant="outline"
          color="#3377FF"
          px={"40px"}
          onClick={() => form?.reset()}
        >
          Reset
        </Button>
        <Button
          style={{ fontSize: "16px", textTransform: "capitalize" }}
          size="md"
          variant="filled"
          color="#3377FF"
          px={"40px"}
          type="submit"
        >
          search
        </Button>
      </Group>
    </form>
  );
};

export default InputField;
