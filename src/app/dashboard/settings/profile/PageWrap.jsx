"use client";
import usePersonal from "@/hooks/usePersonal";
import {
  Button,
  Grid,
  GridCol,
  Group,
  Loader,
  Radio,
  RadioGroup,
  Select,
  Stack,
  TextInput,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import classes from "./profile.module.css";
import React from "react";

const PageWrap = () => {
  const { form, handleSubmit, loading, router } = usePersonal();
  const currentDate = new Date();
  return (
    <form
      onSubmit={form.onSubmit((values) => handleSubmit(values))}
      style={{ height: "100%" }}
    >
      <Stack
        gap={"3rem"}
        className={classes.formStack}
        style={{ height: "100%" }}
      >
        <Grid style={{ marginTop: "20px" }} gutter="xl">
          <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
            <TextInput
              size="md"
              label="First Name"
              withAsterisk
              style={{ textAlign: "start", width: "100%" }}
              classNames={{ label: classes.label, error: classes.error }}
              {...form.getInputProps("firstName")}
              disabled={loading}
            />
          </GridCol>
          <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
            <TextInput
              size="md"
              label="Middle Name"
              style={{ textAlign: "start", width: "100%" }}
              classNames={{ label: classes.label, error: classes.error }}
              {...form.getInputProps("middleName")}
              disabled={loading}
            />
          </GridCol>
          <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
            <TextInput
              size="md"
              label="Last Name"
              withAsterisk
              style={{ textAlign: "start", width: "100%" }}
              classNames={{ label: classes.label, error: classes.error }}
              {...form.getInputProps("lastName")}
              disabled={loading}
            />
          </GridCol>
          <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
            <TextInput
              size="md"
              label="Nationality"
              withAsterisk
              style={{ textAlign: "start", width: "100%" }}
              classNames={{ label: classes.label, error: classes.error }}
              placeholder="Nigerian"
              {...form.getInputProps("nationality")}
              disabled={loading}
            />
          </GridCol>
          <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
            <Select
              data={["Single", "Married", "Widowed", "Divorced", "Separated"]}
              size="md"
              label="Marital Status"
              withAsterisk
              style={{ textAlign: "start", width: "100%" }}
              classNames={{ label: classes.label, error: classes.error }}
              {...form.getInputProps("maritalStatus")}
              disabled={loading}
              allowDeselect={false}
            />
          </GridCol>
          <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
            <DateInput
              size="md"
              withAsterisk
              style={{ textAlign: "start", width: "100%" }}
              label="Date of Birth"
              placeholder="DD/MM/YYYY"
              classNames={{ label: classes.label, error: classes.error }}
              {...form.getInputProps("dateOfBirth")}
              disabled={loading}
              maxDate={currentDate}
              valueFormat="DD/MM/YYYY"
            />
          </GridCol>
          <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
            <RadioGroup
              size="md"
              withAsterisk
              label="Gender"
              style={{ textAlign: "start", width: "100%" }}
              classNames={{ label: classes.label, error: classes.error }}
              {...form?.getInputProps("gender")}
              disabled={loading}
            >
              <Group mt="xs">
                <Radio
                  value="Male"
                  label="Male"
                  disabled={loading}
                  labelPosition="left"
                  color="#3377FF"
                />
                <Radio
                  value="Female"
                  label="Female"
                  disabled={loading}
                  labelPosition="left"
                  color="#3377FF"
                />
              </Group>
            </RadioGroup>
          </GridCol>
        </Grid>

        <Group justify="flex-end" align="center" mt={"6rem"}>
          <Button
            variant="outline"
            size="md"
            color="#3377FF"
            style={{ borderColor: "#3377FF" }}
            tt="capitalize"
            px="30px"
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
            type="submit"
            disabled={loading}
            style={{
              backgroundColor: "#3377FF",
            }}
          >
            {loading ? <Loader color="white" type="dots" size="md" /> : "save"}
          </Button>
        </Group>
      </Stack>
    </form>
  );
};

export default PageWrap;
