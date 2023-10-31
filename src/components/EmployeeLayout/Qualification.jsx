"use client";
import {
  Box,
  Button,
  Grid,
  GridCol,
  Group,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import React from "react";
import classes from "./employeeLayout.module.css";
import { useQualification } from "@/hooks";

const Qualification = () => {
  const { form, handleSubmit } = useQualification();
  return (
    <Box>
      <Text tt={"capitalize"} style={{ fontSize: "22px", fontWeight: 700 }}>
        qualifications
      </Text>
      <form
        style={{ height: "100%", marginTop: "2rem" }}
        onSubmit={form.onSubmit((values) => handleSubmit(values))}
      >
        <Stack style={{ gap: "3rem" }}>
          <Box>
            <Text
              c="#4D4D4D"
              tt="capitalize"
              style={{ fontWeight: 500, fontSize: "18px", textAlign: "start" }}
            >
              work exprience:
            </Text>

            <Grid style={{ marginTop: "20px" }} gutter="xl">
              <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
                <TextInput
                  size="md"
                  withAsterisk
                  label="Company Name"
                  style={{ textAlign: "start", width: "100%" }}
                  classNames={{ label: classes.label, error: classes.error }}
                  {...form.getInputProps("companyName")}
                />
              </GridCol>
              <Grid.Col span={{ lg: 4, md: 6, sm: 12 }}>
                <TextInput
                  size="md"
                  withAsterisk
                  label="Job Title"
                  style={{ textAlign: "start", width: "100%" }}
                  classNames={{ label: classes.label, error: classes.error }}
                  {...form.getInputProps("jobTitle")}
                />
              </Grid.Col>
              <Grid.Col span={{ lg: 4, md: 6, sm: 12 }}>
                <TextInput
                  type="date"
                  size="md"
                  withAsterisk
                  label="Start Date"
                  placeholder="DD/MM/YYYY"
                  style={{ textAlign: "start", width: "100%" }}
                  classNames={{ label: classes.label, error: classes.error }}
                  {...form.getInputProps("startDate")}
                />
              </Grid.Col>
              <Grid.Col span={{ lg: 4, md: 6, sm: 12 }}>
                <TextInput
                  type="date"
                  size="md"
                  withAsterisk
                  label="End Date"
                  placeholder="DD/MM/YYYY"
                  style={{ textAlign: "start", width: "100%" }}
                  classNames={{ label: classes.label, error: classes.error }}
                  {...form.getInputProps("endDate")}
                />
              </Grid.Col>
              <Grid.Col span={{ lg: 8, md: 6, sm: 12 }}>
                <TextInput
                  size="md"
                  label="Comment"
                  style={{ textAlign: "start", width: "100%" }}
                  classNames={{ label: classes.label, error: classes.error }}
                  {...form.getInputProps("comment")}
                />
              </Grid.Col>
            </Grid>
          </Box>
          <Box>
            <Text
              c="#4D4D4D"
              tt="capitalize"
              style={{ fontWeight: 500, fontSize: "18px", textAlign: "start" }}
            >
              Education
            </Text>

            <Grid style={{ marginTop: "20px" }} gutter="xl">
              <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
                <TextInput
                  size="md"
                  withAsterisk
                  label="Institute Name"
                  style={{ textAlign: "start", width: "100%" }}
                  classNames={{ label: classes.label, error: classes.error }}
                  {...form.getInputProps("instituteName")}
                />
              </GridCol>
              <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
                <TextInput
                  size="md"
                  withAsterisk
                  label="Specialization"
                  style={{ textAlign: "start", width: "100%" }}
                  classNames={{ label: classes.label, error: classes.error }}
                  {...form.getInputProps("specialization")}
                />
              </GridCol>
              <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
                <TextInput
                  type="date"
                  size="md"
                  withAsterisk
                  label="Start Year"
                  placeholder="DD/MM/YYYY"
                  style={{ textAlign: "start", width: "100%" }}
                  classNames={{ label: classes.label, error: classes.error }}
                  {...form.getInputProps("eduStart")}
                />
              </GridCol>
              <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
                <TextInput
                  size="md"
                  withAsterisk
                  type="date"
                  label="End Year"
                  placeholder="DD/MM/YYYY"
                  style={{ textAlign: "start", width: "100%" }}
                  classNames={{ label: classes.label, error: classes.error }}
                  {...form.getInputProps("eduEnd")}
                />
              </GridCol>
              <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
                <TextInput
                  size="md"
                  withAsterisk
                  label="Level"
                  style={{ textAlign: "start", width: "100%" }}
                  classNames={{ label: classes.label, error: classes.error }}
                  {...form.getInputProps("level")}
                />
              </GridCol>
            </Grid>
          </Box>
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
              cancel
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

export default Qualification;
