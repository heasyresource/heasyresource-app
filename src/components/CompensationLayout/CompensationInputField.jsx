"use client";
import { Button, Grid, GridCol, Group, Select, TextInput } from "@mantine/core";
import classes from "../CompensationLayout/Compensation.module.css";
import React from "react";
import { useSearch } from "@/hooks";

const CompensationInputField = () => {
  const { loading, form, handleSubmit } = useSearch();
  return (
    <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
      <Grid
        gutter="xl"
        px={40}
        justify="space-between"
        className={classes.formWrap}
      >
        <GridCol span={{ lg: 3, md: 6, sm: 12 }} mt={0}>
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
            label="Employee Salary"
            placeholder="$10,000"
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
            label="Employee Job Title"
            placeholder="Web Developer"
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
            label="Department"
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
      <Group px={40} justify="flex-end" mt={"3rem"}>
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

export default CompensationInputField;
