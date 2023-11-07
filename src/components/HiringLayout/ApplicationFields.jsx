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

const ApplicationFields = () => {
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
        View Applicant
      </Text>
      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
        <Stack gap={"2rem"}>
          <Grid
            gutter="xl"
            justify="flex-start"
            className={classes.formWrap}
            bg={"#FCFCFC"}
            p={20}
          >
            <GridCol span={{ lg: 3 , md: 6, sm: 12 }}>
              <TextInput
                size="md"
                required
                variant="unstyled"
                value={"Kenechukwu Okafor"}
                label="Candidate Name"
                placeholder="Marketing"
                style={{ width: "100%" }}
                classNames={{
                  label: classes.label,
                  input: classes.input,
                  error: classes.error,
                  placeholder: classes.placeholder,
                }}
              />
            </GridCol>
            <GridCol span={{ lg: 3, md: 6, sm: 12 }}>
              <TextInput
                size="md"
                required
                variant="unstyled"
                value={"Front End Developer"}
                label="Vacancy"
                style={{ width: "100%" }}
                placeholder="Gbemisola Adebiyi"
                classNames={{
                  label: classes.label,
                  input: classes.input,
                  error: classes.error,
                  placeholder: classes.placeholder,
                }}
              />
            </GridCol>
            <GridCol span={{ lg: 3, md: 6, sm: 12 }}>
              <TextInput
                size="md"
                required
                variant="unstyled"
                value={"Jadesola Lawal"}
                label="Hiring Manager"
                style={{ width: "100%" }}
                placeholder="Alli"
                classNames={{
                  label: classes.label,
                  input: classes.input,
                  error: classes.error,
                  placeholder: classes.placeholder,
                }}
              />
            </GridCol>
            <GridCol>
              <Group
                justify="space-between"
                className={classes.btnWrap}
                align="center"
                mt={"auto"}
              >
                <Text fz='12px'>Status:</Text>
                <Group>
                  <Button
                    variant="filled"
                    size="sm"
                    color="#43D72B"
                    component="a"
                    tt="capitalize"
                    px="50px"
                    w={{ lg: "auto", md: "auto", sm: "auto" }}
                    className={classes.btn}
                  >
                    Shortlist
                  </Button>
                  <Button
                    variant="filled"
                    size="sm"
                    color="#FF0000"
                    tt="capitalize"
                    px="50px"
                    w={{ lg: "auto", md: "auto", sm: "auto" }}
                    className={classes.btn}
                    type="submit"
                  >
                    Reject
                  </Button>
                </Group>
              </Group>
            </GridCol>
          </Grid>
        </Stack>
      </form>
    </Box>
  );
};

export default ApplicationFields;
