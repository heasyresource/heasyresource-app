"use client";
import { Button, Grid, GridCol, Group, Select, TextInput } from "@mantine/core";
import classes from "../CompensationLayout/Compensation.module.css";
import React from "react";
import { useSearch } from "@/hooks";
import { IconCalendarPlus } from "@tabler/icons-react";

const PayrollInputField = () => {
  const { loading, form, handleSubmit } = useSearch();
  return (
    <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
      <Grid
        gutter="xl"
        px={40}
        justify="space-between"
        className={classes.formWrap}
      >
        <GridCol span={{ lg: 4, md: 6, sm: 12 }} mt={0}>
          <Select
            size="md"
            label="Select Employee"
            required
            placeholder="Marketing"
            style={{ width: "100%" }}
            data={[]}
            {...form.getInputProps("employeeName")}
            classNames={{
              label: classes.label,
              error: classes.error,
              placeholder: classes.placeholder,
            }}
            disabled={loading}
          />
        </GridCol>
        <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
          <TextInput
            size="md"
            required
            label="From Date"
            placeholder="02-05-2023"
            rightSection={
              <IconCalendarPlus color="rgba(51, 119, 255, 1)" size={25} />
            }
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
        <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
          <TextInput
            size="md"
            label="To Date"
            required
            placeholder="02-05-2023"
            rightSection={
              <IconCalendarPlus color="rgba(51, 119, 255, 1)" size={25} />
            }
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
        <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
          <Select
            size="md"
            label="Gross Compensation *"
            placeholder="50,000"
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
        <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
          <Select
            size="md"
            label="Duration"
            placeholder="Monthly"
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
        <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
          <TextInput
            size="md"
            label="Currency"
            placeholder="02-05-2023"
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
          variant="outline"
          color="#3377FF"
          px={"40px"}
          type="submit"
          disabled={loading}
        >
          cancel
        </Button>
        <Button
          style={{ fontSize: "16px", textTransform: "capitalize" }}
          size="md"
          variant="filled"
          color="#3377FF"
          px={"40px"}
          type="submit"
          disabled={loading}
        >
          save
        </Button>
      </Group>
    </form>
  );
};

export default PayrollInputField;
