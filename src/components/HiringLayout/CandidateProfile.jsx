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
  Switch,
  Text,
  TextInput,
} from "@mantine/core";
import React, { useState } from "react";
import classes from "../HiringLayout/HiringLayout.module.css";
import { IconArrowUp, IconCloudDown } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

const CandidateProfile = ({ loading, form, handleEdit, states, countries }) => {
  const [isEdit, setIsEdit] = useState(false);
  const router = useRouter();
  return (
    <Box pt={30}>
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
          checked={isEdit}
          onChange={(e) => setIsEdit(e.currentTarget.checked)}
          labelPosition="left"
          label="Edit"
          classNames={{
            label: classes.editLabel,
          }}
        />
      </Group>
      <form
        style={{ marginTop: "1.5rem" }}
        onSubmit={form?.onSubmit((values) => handleEdit(values))}
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
                {...form?.getInputProps("firstName")}
                disabled={loading || !isEdit}
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
                {...form?.getInputProps("lastName")}
                disabled={loading || !isEdit}
              />
            </GridCol>
            <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
              <TextInput
                disabled={loading || !isEdit}
                size="md"
                withAsterisk
                label="Email"
                style={{ width: "100%" }}
                {...form?.getInputProps("email")}
                classNames={{
                  label: classes.label,
                  error: classes.error,
                }}
              />
            </GridCol>
            <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
              <TextInput
                disabled={loading || !isEdit}
                size="md"
                withAsterisk
                type="tel"
                label="Phone Number"
                style={{ width: "100%" }}
                placeholder="700 000 0000"
                {...form?.getInputProps("phoneNumber")}
                classNames={{
                  label: classes.label,
                  error: classes.error,
                }}
                leftSectionWidth={50}
                leftSection={"+234"}
                maxLength={11}
              />
            </GridCol>
            <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
              <TextInput
                size="md"
                withAsterisk
                label="Address"
                style={{ width: "100%" }}
                {...form?.getInputProps("address")}
                classNames={{
                  label: classes.label,
                  error: classes.error,
                }}
                disabled={loading || !isEdit}
              />
            </GridCol>
            <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
              <TextInput
                size="md"
                withAsterisk
                label="City"
                style={{ width: "100%" }}
                {...form?.getInputProps("city")}
                classNames={{
                  label: classes.label,
                  error: classes.error,
                }}
                disabled={loading || !isEdit}
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
                {...form?.getInputProps("stateId")}
                disabled={loading || !isEdit}
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
                {...form?.getInputProps("countryId")}
                disabled={loading || !isEdit}
                searchable
                nothingFoundMessage="No country found"
              />
            </GridCol>

            <GridCol span={{ lg: 6, md: 6, sm: 12 }}>
              <FileInput
                required
                disabled={loading || !isEdit}
                label="CV/Resume"
                withAsterisk
                placeholder="No file selected"
                variant="filled"
                size="md"
                leftSectionWidth={140}
                accept=".pdf, .doc, .docx"
                {...form?.getInputProps("resumeUrl")}
                leftSectionPointerEvents="none"
                leftSection={
                  <Button
                    disabled
                    style={{
                      textTransform: "capitalize",
                      backgroundColor: "#fff",
                    }}
                    aria-label="browse-file"
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
            <GridCol span={12}>
              <Button
                component="a"
                target="_blank"
                href={form?.values.resumeUrl}
                onClick={(e) => {
                  e.stopPropagation();
                }}
                color="#3377FF"
                size="md"
                leftSection={<IconCloudDown />}
                style={{
                  backgroundColor: "#3377FF",
                }}
                aria-label="download-resume"
              >
                Download resume
              </Button>
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
              px="30px"
              w={{ lg: "auto", md: "auto", sm: "auto" }}
              className={classes.btn}
              onClick={() => router.back()}
              disabled={loading}
              aria-label="back"
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
              disabled={loading || !isEdit}
              aria-label="submit"
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

export default CandidateProfile;
