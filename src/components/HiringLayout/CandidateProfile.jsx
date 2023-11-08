"use client";
import {
  ActionIcon,
  Box,
  Button,
  FileInput,
  Grid,
  GridCol,
  Group,
  Select,
  SimpleGrid,
  Stack,
  Switch,
  Text,
  TextInput,
  Textarea,
} from "@mantine/core";
import React from "react";
import classes from "../HiringLayout/HiringLayout.module.css";
import { useAssignLeave } from "@/hooks";
import { IconDownload } from "@tabler/icons-react";

const CandidateProfile = () => {
  const { form, handleSubmit } = useAssignLeave();
  return (
    <Box px={72} pt={30}>
      <Group justify="space-between">
        <Text
          tt={"capitalize"}
          style={{
            fontSize: "22px",
            fontWeight: 700,
          }}
        >
          Candidate Profile
        </Text>
        <Switch
          labelPosition="left"
          label="Edit"
          classNames={{
            label: classes.editLabel,
          }}
        />
      </Group>
      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
        <Stack gap={"2rem"}>
          <Grid
            gutter="xl"
            justify="flex-start"
            className={classes.formWrap}
            p={20}
          >
            <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
              <TextInput
                size="md"
                variant="filled"
                value={"Kenechukwu Okafor"}
                label="First Name"
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
            <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
              <TextInput
                size="md"
                variant="filled"
                value={"Front End Developer"}
                label="Middle Name"
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
            <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
              <TextInput
                size="md"
                variant="filled"
                value={"Jadesola Lawal"}
                label="Last Name"
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
            <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
              <TextInput
                size="md"
                variant="filled"
                value={"Junior HR Manager"}
                label="Vacancy"
                style={{ width: "100%" }}
                classNames={{
                  label: classes.label,
                  //   input: classes.input,
                  error: classes.error,
                  placeholder: classes.placeholder,
                }}
              />
            </GridCol>
            <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
              <TextInput
                size="md"
                variant="filled"
                value={"02-10-2023"}
                label="Date of Application"
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
            <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
              <TextInput
                size="md"
                variant="filled"
                value={"oludareshewa@gmail.com"}
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
            <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
              <TextInput
                size="md"
                variant="filled"
                value={"oludareshewa@gmail.com"}
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
            <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
              <TextInput
                size="md"
                variant="filled"
                value={"+234 000 000 0000"}
                label="Phone Number"
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
            <GridCol>
              <Box>
                <Text fz={15} pb={10}>
                  Resume
                </Text>
                <Button
                  variant="contained"
                  px={"30px"}
                  size="lg"
                  leftSection={<IconDownload size={28} />}
                  style={{
                    backgroundColor: "#3377FF",
                  }}
                >
                  Download
                </Button>
              </Box>
            </GridCol>
          </Grid>
        </Stack>
      </form>
    </Box>
  );
};

export default CandidateProfile;
