"use client";
import { Button, Grid, GridCol, Group, Select, TextInput } from "@mantine/core";
import classes from "../dashboard.module.css";
import React from "react";
import { useSearch } from "@/hooks";

const InputField = () => {
  const { loading, form, handleSubmit } = useSearch();
  return (
    <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
      <Grid justify="space-between" className={classes.formWrap}>
        <GridCol span={{ lg: 3, md: 6, sm: 12 }}>
          <TextInput
            size="md"
            label="Employee Name"
            placeholder="Name"
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
            placeholder="ID"
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
            placeholder="Working"
            style={{ width: "100%" }}
            {...form.getInputProps("employeeStatus")}
            data={[]}
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
            placeholder="Software Development"
            style={{ width: "100%" }}
            disabled={loading}
            {...form.getInputProps("employeeDepartment")}
            data={[]}
            classNames={{
              label: classes.label,
              error: classes.error,
              placeholder: classes.placeholder,
            }}
          />
        </GridCol>
      </Grid>
      <Group justify="flex-end" mt={"3rem"}>
        <Button
          style={{ fontSize: "16px", textTransform: "capitalize" }}
          size="md"
          variant="filled"
          color="#3377FF"
          px={"40px"}
          type="submit"
          disabled={loading}
        >
          search
        </Button>
      </Group>
    </form>
  );
};

export default InputField;
