"use client";
import {
  Button,
  Grid,
  Group,
  Radio,
  Select,
  Stack,
  TextInput,
} from "@mantine/core";
import React from "react";
import classes from "./personalDetail.module.css";
import { usePersonalDetail } from "@/hooks";

const PersonalDetail = () => {
  const { form, loading, handleSubmit } = usePersonalDetail();
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
          <Grid.Col span={{ lg: 4, md: 6, sm: 12 }}>
            <TextInput
              size="md"
              label="First Name"
              withAsterisk
              style={{ textAlign: "start", width: "100%" }}
              classNames={{ label: classes.label, error: classes.error }}
              {...form.getInputProps("firstName")}
              disabled={loading}
            />
          </Grid.Col>
          <Grid.Col span={{ lg: 4, md: 6, sm: 12 }}>
            <TextInput
              size="md"
              label="Middle Name"
              withAsterisk
              style={{ textAlign: "start", width: "100%" }}
              classNames={{ label: classes.label, error: classes.error }}
              {...form.getInputProps("middleName")}
              disabled={loading}
            />
          </Grid.Col>
          <Grid.Col span={{ lg: 4, md: 6, sm: 12 }}>
            <TextInput
              size="md"
              label="Last Name"
              withAsterisk
              style={{ textAlign: "start", width: "100%" }}
              classNames={{ label: classes.label, error: classes.error }}
              {...form.getInputProps("lastName")}
              disabled={loading}
            />
          </Grid.Col>
          <Grid.Col span={{ lg: 4, md: 6, sm: 12 }}>
            <TextInput
              size="md"
              label="Employee ID"
              type="number"
              withAsterisk
              style={{ textAlign: "start", width: "100%" }}
              classNames={{ label: classes.label, error: classes.error }}
              {...form.getInputProps("employeeId")}
              disabled={loading}
            />
          </Grid.Col>
          <Grid.Col span={{ lg: 4, md: 6, sm: 12 }}>
            <Select
              size="md"
              label="Nationality"
              withAsterisk
              style={{ textAlign: "start", width: "100%" }}
              classNames={{ label: classes.label, error: classes.error }}
              data={["Nigeria"]}
              {...form.getInputProps("nationality")}
              disabled={loading}
            />
          </Grid.Col>
          <Grid.Col span={{ lg: 4, md: 6, sm: 12 }}>
            <Select
              data={["Single", "Married"]}
              size="md"
              label="Marital Status"
              withAsterisk
              style={{ textAlign: "start", width: "100%" }}
              classNames={{ label: classes.label, error: classes.error }}
              {...form.getInputProps("maritalStatus")}
              disabled={loading}
            />
          </Grid.Col>
          <Grid.Col span={{ lg: 4, md: 6, sm: 12 }}>
            <TextInput
              type="date"
              size="md"
              withAsterisk
              style={{ textAlign: "start", width: "100%" }}
              label="Date of Birth"
              placeholder="DD/MM/YYYY"
              classNames={{ label: classes.label, error: classes.error }}
              {...form.getInputProps("dob")}
              disabled={loading}
            />
          </Grid.Col>
          <Grid.Col span={{ lg: 4, md: 6, sm: 12 }}>
            <Radio.Group
              size="md"
              withAsterisk
              label="Gender"
              style={{ textAlign: "start", width: "100%" }}
              classNames={{ label: classes.label, error: classes.error }}
              {...form.getInputProps("gender")}
              disabled={loading}
            >
              <Group mt="xs">
                <Radio value="male" label="Male" labelPosition="left" />
                <Radio value="femaale" label="Female" labelPosition="left" />
              </Group>
            </Radio.Group>
          </Grid.Col>
        </Grid>

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
            onClick={() => form.reset}
            disabled={loading}
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
            disabled={loading}
          >
            add
          </Button>
        </Group>
      </Stack>
    </form>
  );
};

export default PersonalDetail;
