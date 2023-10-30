"use client";
import {
  Button,
  Grid,
  GridCol,
  Group,
  Select,
  Stack,
  TextInput,
} from "@mantine/core";
import React from "react";
import classes from "./employeeLayout.module.css";
import { useIndividual } from "@/hooks";

const EmployeeIndividual = () => {
  const { form, handleSubmit } = useIndividual();
  return (
    <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
      <Stack className={classes.individualWrap}>
        <Grid gutter={"lg"}>
          <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
            <TextInput
              label="First Name"
              withAsterisk
              size="md"
              placeholder="John"
              style={{ textAlign: "start", width: "100%" }}
              classNames={{ label: classes.label, error: classes.error }}
              {...form.getInputProps("firstName")}
            />
          </GridCol>
          <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
            <TextInput
              label="Middle Name"
              withAsterisk
              size="md"
              placeholder="Smith"
              style={{ textAlign: "start", width: "100%" }}
              classNames={{ label: classes.label, error: classes.error }}
              {...form.getInputProps("middleName")}
            />
          </GridCol>
          <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
            <TextInput
              label="Last Name"
              withAsterisk
              size="md"
              placeholder="Corner"
              style={{ textAlign: "start", width: "100%" }}
              classNames={{ label: classes.label, error: classes.error }}
              {...form.getInputProps("lastName")}
            />
          </GridCol>
          <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
            <TextInput
              label="Employee ID"
              withAsterisk
              size="md"
              type="number"
              placeholder="John"
              style={{ textAlign: "start", width: "100%" }}
              classNames={{ label: classes.label, error: classes.error }}
              {...form.getInputProps("employeeId")}
            />
          </GridCol>
          <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
            <Select
              data={["Front-End Developer"]}
              label="Job Title"
              withAsterisk
              size="md"
              style={{ textAlign: "start", width: "100%" }}
              classNames={{ label: classes.label, error: classes.error }}
              {...form.getInputProps("jobTitle")}
            />
          </GridCol>
          <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
            <Select
              data={[]}
              label="Department"
              withAsterisk
              size="md"
              style={{ textAlign: "start", width: "100%" }}
              classNames={{ label: classes.label, error: classes.error }}
              {...form.getInputProps("department")}
            />
          </GridCol>
          <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
            <TextInput
              label="Work Email"
              type="email"
              withAsterisk
              size="md"
              style={{ textAlign: "start", width: "100%" }}
              classNames={{ label: classes.label, error: classes.error }}
              {...form.getInputProps("workEmail")}
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
          >
            save
          </Button>
        </Group>
      </Stack>
    </form>
  );
};

export default EmployeeIndividual;
