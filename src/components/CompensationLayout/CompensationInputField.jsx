"use client";
import { Button, Grid, GridCol, Group, Select, TextInput } from "@mantine/core";
import classes from "../CompensationLayout/Compensation.module.css";
import React from "react";
import { useSearch } from "@/hooks";

const CompensationInputField = () => {
  const { loading, form, handleSubmit } = useSearch();
  return (
    <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
      <Grid gutter="lg" justify="space-between" className={classes.formWrap}>
        <GridCol span={{ lg: 6, md: 6, sm: 12 }} mt={0}>
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
        <GridCol span={{ lg: 6, md: 6, sm: 12 }}>
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
      <Group justify="flex-end" mt={"3rem"}>
        <Button
          style={{ fontSize: "16px", textTransform: "capitalize" }}
          size="md"
          variant="outline"
          color="#3377FF"
          px={"40px"}
          disabled={loading}
        >
          reset
        </Button>
        <Button
          style={{ fontSize: "16px", textTransform: "capitalize" }}
          size="md"
          variant="filled"
          color="#3377FF"
          px={"40px"}
          disabled={loading}
        >
          search
        </Button>
      </Group>
    </form>
  );
};

export default CompensationInputField;
