"use client";
import {
  Grid,
  GridCol,
  Group,
  Radio,
  RadioGroup,
  Select,
  TextInput,
} from "@mantine/core";
import React from "react";
import classes from "./employeeLayout.module.css";

const EmployeeForm = () => {
  return (
    <Grid gutter={"lg"}>
      <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
        <TextInput
          label="First Name"
          withAsterisk
          size="md"
          placeholder="John"
          style={{ textAlign: "start", width: "100%" }}
          classNames={{ label: classes.label, error: classes.error }}
          //   {...form?.getInputProps("firstName")}
          //   disabled={loading}
        />
      </GridCol>
      <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
        <TextInput
          label="Middle Name"
          size="md"
          placeholder="Smith"
          style={{ textAlign: "start", width: "100%" }}
          classNames={{ label: classes.label, error: classes.error }}
          //   {...form?.getInputProps("middleName")}
          //   disabled={loading}
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
          //   {...form?.getInputProps("lastName")}
          //   disabled={loading}
        />
      </GridCol>
      <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
        <TextInput
          label="Position"
          withAsterisk
          size="md"
          style={{ textAlign: "start", width: "100%" }}
          classNames={{ label: classes.label, error: classes.error }}
          //   {...form?.getInputProps("position")}
          //   disabled={loading}
        />
      </GridCol>
      <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
        <Select
          //   data={fields}
          searchable
          label="Department"
          withAsterisk
          size="md"
          style={{ textAlign: "start", width: "100%" }}
          classNames={{ label: classes.label, error: classes.error }}
          //   {...form?.getInputProps("departmentId")}
          //   disabled={loading}
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
          //   {...form?.getInputProps("email")}
          //   disabled={loading}
        />
      </GridCol>
      <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
        <RadioGroup
          size="md"
          withAsterisk
          label="Gender"
          style={{ textAlign: "start", width: "100%" }}
          classNames={{ label: classes.label, error: classes.error }}
          //   {...form?.getInputProps("gender")}
          //   disabled={loading}
        >
          <Group mt="xs">
            <Radio
              value="Male"
              //   disabled={loading}
              label="Male"
              labelPosition="left"
              color="#3377FF"
            />
            <Radio
              value="Female"
              //   disabled={loading}
              label="Female"
              labelPosition="left"
              color="#3377FF"
            />
          </Group>
        </RadioGroup>
      </GridCol>
    </Grid>
  );
};

export default EmployeeForm;
