"use client";
import {
  ActionIcon,
  Box,
  Button,
  FileInput,
  Grid,
  GridCol,
  Group,
  Loader,
  Select,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import React from "react";
import classes from "../../../dashboard.module.css";
import useAddApplicant from "@/hooks/useAddApplicant";
import { IconArrowUp } from "@tabler/icons-react";

const ApplicantForm = () => {
  const { form, loading, handleSubmit, states, countries, router } =
    useAddApplicant();
  return (
    <Box>
      <Text
        tt={"capitalize"}
        style={{
          fontSize: "20px",
          fontWeight: 600,
          marginTop: "15px",
        }}
      >
        Add Candidate
      </Text>
      <form
        style={{ marginTop: "1.5rem" }}
        onSubmit={form.onSubmit((values) => handleSubmit(values))}
      >
        <Stack gap={"2rem"}>
          <Grid gutter="xl" justify="flex-start" className={classes.formWrap}>
            <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
              <TextInput
                size="md"
                withAsterisk
                label="First Name"
                placeholder="John"
                style={{ width: "100%" }}
                classNames={{
                  label: classes.label,
                  error: classes.error,
                }}
                {...form.getInputProps("firstName")}
                disabled={loading}
              />
            </GridCol>

            <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
              <TextInput
                size="md"
                withAsterisk
                label="Last Name"
                style={{ width: "100%" }}
                placeholder="Alli"
                classNames={{
                  label: classes.label,
                  error: classes.error,
                }}
                {...form.getInputProps("lastName")}
                disabled={loading}
              />
            </GridCol>
            <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
              <TextInput
                disabled={loading}
                size="md"
                withAsterisk
                label="Email"
                style={{ width: "100%" }}
                {...form.getInputProps("email")}
                classNames={{
                  label: classes.label,
                  error: classes.error,
                }}
              />
            </GridCol>
            <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
              <TextInput
                disabled={loading}
                size="md"
                withAsterisk
                type="tel"
                maxLength={11}
                label="Phone Number"
                style={{ width: "100%" }}
                placeholder="700 000 0000"
                {...form.getInputProps("phoneNumber")}
                classNames={{
                  label: classes.label,
                  error: classes.error,
                }}
                leftSectionWidth={50}
                leftSection={"+234"}
              />
            </GridCol>
            <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
              <TextInput
                size="md"
                withAsterisk
                label="Address"
                style={{ width: "100%" }}
                {...form.getInputProps("address")}
                classNames={{
                  label: classes.label,
                  error: classes.error,
                }}
                disabled={loading}
              />
            </GridCol>
            <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
              <TextInput
                size="md"
                withAsterisk
                label="City"
                style={{ width: "100%" }}
                {...form.getInputProps("city")}
                classNames={{
                  label: classes.label,
                  error: classes.error,
                }}
                disabled={loading}
              />
            </GridCol>
            <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
              <Select
                size="md"
                withAsterisk
                label="State"
                style={{ width: "100%" }}
                data={states}
                classNames={{
                  label: classes.label,
                  error: classes.error,
                }}
                allowDeselect={false}
                {...form.getInputProps("stateId")}
                disabled={loading}
                searchable
                nothingFoundMessage="No state found"
              />
            </GridCol>
            <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
              <Select
                size="md"
                withAsterisk
                label="Country"
                style={{ width: "100%" }}
                data={countries}
                classNames={{
                  label: classes.label,
                  error: classes.error,
                }}
                allowDeselect={false}
                {...form.getInputProps("countryId")}
                disabled={loading}
                searchable
                nothingFoundMessage="No country found"
              />
            </GridCol>

            <GridCol span={{ lg: 6, md: 6, sm: 12 }}>
              <FileInput
                required
                disabled={loading}
                label="Select File"
                withAsterisk
                placeholder="No file selected"
                variant="filled"
                size="md"
                leftSectionWidth={140}
                accept=".pdf, .doc, .docx"
                {...form.getInputProps("resumeUrl")}
                leftSection={
                  <Button
                    disabled
                    style={{
                      textTransform: "capitalize",
                      backgroundColor: "#fff",
                    }}
                  >
                    browse file
                  </Button>
                }
                rightSection={
                  <ActionIcon
                    disabled
                    size={"md"}
                    color="#fff"
                    style={{ backgroundColor: "#fff" }}
                  >
                    <IconArrowUp color="#817F7F" />
                  </ActionIcon>
                }
                classNames={{
                  label: classes.label,
                  error: classes.error,
                }}
              />
            </GridCol>
          </Grid>
          <Group
            justify="flex-end"
            className={classes.btnWrap}
            align="center"
            mt={"2rem"}
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
              onClick={() => router.back()}
              disabled={loading}
            >
              back
            </Button>
            <Button
              variant="contained"
              size="md"
              color="#3377FF"
              tt="capitalize"
              px="30px"
              w={{ lg: "auto", md: "auto", sm: "auto" }}
              className={classes.btn}
              type="submit"
              style={{
                backgroundColor: "#3377FF",
              }}
              disabled={loading}
            >
              {loading ? (
                <Loader color="white" type="dots" size="md" />
              ) : (
                "submit"
              )}
            </Button>
          </Group>
        </Stack>
      </form>
    </Box>
  );
};

export default ApplicantForm;
