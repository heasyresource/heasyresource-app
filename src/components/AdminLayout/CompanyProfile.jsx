import { Grid, GridCol, Stack, TextInput, Textarea } from "@mantine/core";
import React from "react";
import classes from "../AdminLayout/admin.module.css";

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
          <GridCol span={{ lg: 6, md: 6, sm: 12 }}>
            <TextInput
              size="md"
              variant="filled"
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
