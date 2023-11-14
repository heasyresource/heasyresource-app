import { Grid, GridCol, Stack, TextInput, Textarea } from "@mantine/core";
import React from "react";
import classes from '../AdminLayout/admin.module.css'

const CompanyProfile = () => {
  return (
    <>
        <Stack gap={"2rem"}>
          <Grid
            gutter="xl"
            justify="flex-start"
            className={classes.formWrap}
            p={20}
          >
            <GridCol span={{ lg: 4, md: 6, sm: 6 }}>
              <TextInput
                size="md"
                variant="filled"
                value={"TechNova Solutions"}
                label="Organization Name"
                placeholder="Oludare"
                style={{ width: "100%" }}
                classNames={{
                  label: classes.label,
                  //   input: classes.input,
                  error: classes.error,
                  placeholder: classes.placeholder,
                }}
              />
            </GridCol>
            <GridCol span={{ lg: 4, md: 6, sm: 6 }}>
              <TextInput
                size="md"
                variant="filled"
                value={"51 - 100"}
                label="Number of Employees"
                style={{ width: "100%" }}
                placeholder="Amope"
                classNames={{
                  label: classes.label,
                  //   input: classes.input,
                  error: classes.error,
                  placeholder: classes.placeholder,
                }}
              />
            </GridCol>
            <GridCol span={{ lg: 4, md: 6, sm: 6 }}>
              <TextInput
                size="md"
                variant="filled"
                value={"TNS5678"}
                label="Registration Number"
                style={{ width: "100%" }}
                placeholder="Adeshewa"
                classNames={{
                  label: classes.label,
                  //   input: classes.input,
                  error: classes.error,
                  placeholder: classes.placeholder,
                }}
              />
            </GridCol>
            <GridCol span={{ lg: 4, md: 6, sm: 6 }}>
              <TextInput
                size="md"
                variant="filled"
                value={"+234 000 000 0000"}
                label="Phone"
                style={{ width: "100%" }}
                classNames={{
                  label: classes.label,
                  //   input: classes.input,
                  error: classes.error,
                  placeholder: classes.placeholder,
                }}
              />
            </GridCol>
            <GridCol span={{ lg: 4, md: 6, sm: 6 }}>
              <TextInput
                size="md"
                variant="filled"
                value={"+234 000 000 0000"}
                label="Phone 2"
                style={{ width: "100%" }}
                placeholder="Amope"
                classNames={{
                  label: classes.label,
                  //   input: classes.input,
                  error: classes.error,
                  placeholder: classes.placeholder,
                }}
              />
            </GridCol>
            <GridCol span={{ lg: 4, md: 6, sm: 6 }}>
              <TextInput
                size="md"
                variant="filled"
                value={"@technovasolutions.com"}
                label="Email"
                style={{ width: "100%" }}
                placeholder="Adeshewa"
                classNames={{
                  label: classes.label,
                  //   input: classes.input,
                  error: classes.error,
                  placeholder: classes.placeholder,
                }}
              />
            </GridCol>
            <GridCol span={{ lg: 4, md: 6, sm: 6 }}>
              <TextInput
                size="md"
                variant="filled"
                value={"@technovasolutions.com"}
                label="Domain"
                style={{ width: "100%" }}
                placeholder="Adeshewa"
                classNames={{
                  label: classes.label,
                  //   input: classes.input,
                  error: classes.error,
                  placeholder: classes.placeholder,
                }}
              />
            </GridCol>
            <GridCol span={{ lg: 4, md: 6, sm: 6 }}>
              <TextInput
                size="md"
                variant="filled"
                value={"12, Marina Street"}
                label="Address"
                style={{ width: "100%" }}
                classNames={{
                  label: classes.label,
                  //   input: classes.input,
                  error: classes.error,
                  placeholder: classes.placeholder,
                }}
              />
            </GridCol>
            <GridCol span={{ lg: 4, md: 6, sm: 6 }}>
              <TextInput
                size="md"
                variant="filled"
                value={"Lagos Island"}
                label="City"
                style={{ width: "100%" }}
                placeholder="Adeshewa"
                classNames={{
                  label: classes.label,
                  //   input: classes.input,
                  error: classes.error,
                  placeholder: classes.placeholder,
                }}
              />
            </GridCol>
            <GridCol span={{ lg: 6, md: 6, sm: 6 }}>
              <TextInput
                size="md"
                variant="filled"
                value={"Lagos"}
                label="State"
                style={{ width: "100%" }}
                placeholder="Adeshewa"
                classNames={{
                  label: classes.label,
                  //   input: classes.input,
                  error: classes.error,
                  placeholder: classes.placeholder,
                }}
              />
            </GridCol>
            <GridCol span={{ lg: 6, md: 6, sm:12 }}>
              <TextInput
                size="md"
                variant="filled"
                value={"0000753951"}
                label="Zip Code"
                style={{ width: "100%" }}
                placeholder="Adeshewa"
                classNames={{
                  label: classes.label,
                  //   input: classes.input,
                  error: classes.error,
                  placeholder: classes.placeholder,
                }}
              />
            </GridCol>
            <GridCol span={{ lg: 12, md: 6, sm: 12 }}>
              <Textarea
                size="md"
                variant="filled"
                value={"0000753951"}
                label="Zip Code"
                style={{ width: "100%" }}
                placeholder="Adeshewa"
                classNames={{
                  label: classes.label,
                  //   input: classes.input,
                  error: classes.error,
                  placeholder: classes.placeholder,
                }}
              />
            </GridCol>
          </Grid>
        </Stack>
    </>
  );
};

export default CompanyProfile;
