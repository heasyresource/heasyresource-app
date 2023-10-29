import { Grid, GridCol, Group, TextInput } from "@mantine/core";
import classes from "../dashboard.module.css";
import React from "react";
import { IconChevronDown } from "@tabler/icons-react";

const InputField = () => {
  const icon = <IconChevronDown size="1.3rem" color="#3377FF" />;
  return (
    <Grid justify="space-between" className={classes.formWrap}>
      <GridCol span={{ lg: 6, md: 12, sm: 12 }}>
        <TextInput
          size="md"
          label="Employee Name"
          placeholder="Name"
          style={{ width: "100%" }}
          classNames={{
            label: classes.label,
            error: classes.error,
            placeholder: classes.placeholder,
          }}
        />
      </GridCol>
      <GridCol span={{ lg: 2, md: 12, sm: 12 }}>
        <TextInput
          size="md"
          label="Employee ID"
          placeholder="ID"
          style={{ width: "100%" }}
          classNames={{
            label: classes.label,
            error: classes.error,
            placeholder: classes.placeholder,
          }}
        />
      </GridCol>
      <GridCol span={{ lg: 2, md: 12, sm: 12 }}>
        <TextInput
          size="md"
          label="Employee Status"
          placeholder="Working"
          style={{ width: "100%" }}
          rightSectionPointerEvents="none"
          rightSection={icon}
          classNames={{
            label: classes.label,
            error: classes.error,
            placeholder: classes.placeholder,
          }}
        />
      </GridCol>
      <GridCol span={{ lg: 2, md: 12, sm: 12 }}>
        <TextInput
          size="md"
          label="Employee Department"
          placeholder="Software Development"
          style={{ width: "100%" }}
          rightSectionPointerEvents="none"
          rightSection={icon}
          classNames={{
            label: classes.label,
            error: classes.error,
            placeholder: classes.placeholder,
          }}
        />
      </GridCol>
    </Grid>
  );
};

export default InputField;
