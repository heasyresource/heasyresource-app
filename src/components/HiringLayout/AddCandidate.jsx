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
  Stack,
  Text,
  TextInput,
  Textarea,
} from "@mantine/core";
import React from "react";
import classes from "../HiringLayout/HiringLayout.module.css";
import { DateInput } from "@mantine/dates";
import { IconArrowUp, IconCalendarBolt } from "@tabler/icons-react";
import { useAssignLeave } from "@/hooks";

const AddCandidate = () => {
  const { form, handleSubmit } = useAssignLeave();
  return (
    <Box px={72} pt={30}>
      <Text
        tt={"capitalize"}
        style={{
          fontSize: "22px",
          fontWeight: 700,
        }}
      >
        Add Candidate
      </Text>
      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
        <Stack gap={"2rem"}>
          <Grid
            gutter="xl"
            justify="space-between"
            className={classes.formWrap}
          >
            <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
              <TextInput
                size="md"
                withAsterisk
                label="First Name"
                style={{ width: "100%" }}
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
                label="Middle Name"
                style={{ width: "100%" }}
                placeholder="Gbemisola Adebiyi"
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
                withAsterisk
                label="Last Name"
                style={{ width: "100%" }}
                placeholder="Alli"
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
                withAsterisk
                label="Vacancy"
                style={{ width: "100%" }}
                placeholder="Junior Account Manager"
                data={["Junior Account Manager"]}
                classNames={{
                  label: classes.label,
                  error: classes.error,
                  placeholder: classes.placeholder,
                }}
                allowDeselect={false}
              />
            </GridCol>
            <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
              <DateInput
                size="md"
                withAsterisk
                label="Date of Application"
                placeholder="02-05-2023"
                style={{ width: "100%" }}
                classNames={{
                  label: classes.label,
                  error: classes.error,
                  placeholder: classes.placeholder,
                }}
                rightSectionWidth={70}
                rightSection={<IconCalendarBolt style={{ color: "#7ea6f4" }} />}
                valueFormat="DD/MM/YYYY"
              />
            </GridCol>
            <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
              <TextInput
                size="md"
                withAsterisk
                label="Email"
                style={{ width: "100%" }}
                placeholder="odebiyi@gmail.com"
                classNames={{
                  label: classes.label,
                  error: classes.error,
                  placeholder: classes.placeholder,
                }}
              />
            </GridCol>
            <GridCol span={{ lg: 6, md: 6, sm: 12 }}>
              <TextInput
                size="md"
                withAsterisk
                type="number"
                label="Phone Number"
                style={{ width: "100%" }}
                placeholder="700 000 0000"
                classNames={{
                  label: classes.label,
                  error: classes.error,
                  placeholder: classes.placeholder,
                }}
                leftSectionWidth={50}
                leftSection={"+234"}
              />
            </GridCol>
            <GridCol span={{ lg: 6, md: 6, sm: 12 }}>
              <FileInput
                label="Select File"
                withAsterisk
                placeholder="No file selected"
                variant="filled"
                size="md"
                leftSectionWidth={140}
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
                  placeholder: classes.placeholder,
                }}
              />
            </GridCol>
          </Grid>
          <Textarea
            autosize
            minRows={2}
            style={{ height: "100% !important " }}
            label="Comments"
            {...form.getInputProps("notes")}
          />
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
              back
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
              style={{
                backgroundColor: "#3377FF",
              }}
            >
              save
            </Button>
          </Group>
        </Stack>
      </form>
    </Box>
  );
};

export default AddCandidate;
