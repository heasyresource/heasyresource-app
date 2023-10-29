import { AddImage } from "@/components";
import { Grid, TextInput } from "@mantine/core";
import React from "react";

const EmployeeForm = () => {
  return (
    <Grid style={{ marginTop: "20px" }} gutter="xl">
      <Grid.Col span={{ lg: 4, md: 12, sm: 12 }}>
        <AddImage />
      </Grid.Col>
      <Grid.Col span={{ lg: 8, md: 12, sm: 12 }}>
        <Grid style={{ marginTop: "20px" }} gutter="xl">
          <Grid.Col span={{ lg: 4, md: 6, sm: 12 }}>
            <TextInput
              size="md"
              label="First Name"
              withAsterisk
              style={{ textAlign: "start", width: "100%" }}
              //   classNames={{ label: classes.label, error: classes.error }}
            />
          </Grid.Col>
          <Grid.Col span={{ lg: 4, md: 6, sm: 12 }}>
            <TextInput
              size="md"
              label="Middle Name"
              withAsterisk
              //   classNames={{ label: classes.label, error: classes.error }}
              style={{ textAlign: "start", width: "100%" }}
            />
          </Grid.Col>
          <Grid.Col span={{ lg: 4, md: 6, sm: 12 }}>
            <TextInput
              size="md"
              label="Last Name"
              withAsterisk
              style={{ textAlign: "start", width: "100%" }}
              //   classNames={{ label: classes.label, error: classes.error }}
            />
          </Grid.Col>
          <Grid.Col span={{ lg: 4, md: 6, sm: 12 }}>
            <TextInput
              size="md"
              label="Employee ID"
              withAsterisk
              //   classNames={{ label: classes.label, error: classes.error }}
              style={{ textAlign: "start", width: "100%" }}
            />
          </Grid.Col>
          <Grid.Col span={{ lg: 4, md: 6, sm: 12 }}>
            <TextInput
              size="md"
              label="Employee ID"
              withAsterisk
              //   classNames={{ label: classes.label, error: classes.error }}
              style={{ textAlign: "start", width: "100%" }}
            />
          </Grid.Col>
          <Grid.Col span={{ lg: 4, md: 6, sm: 12 }}>
            <TextInput
              size="md"
              label="Employee ID"
              withAsterisk
              //   classNames={{ label: classes.label, error: classes.error }}
              style={{ textAlign: "start", width: "100%" }}
            />
          </Grid.Col>
        </Grid>
      </Grid.Col>
    </Grid>
  );
};

export default EmployeeForm;
