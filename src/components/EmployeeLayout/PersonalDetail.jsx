"use client";
import {
  Button,
  Grid,
  Group,
  Loader,
  Radio,
  Select,
  Stack,
  TextInput,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import React from "react";
import classes from "./employeeLayout.module.css";
import { useRouter } from "next/navigation";

const PersonalDetail = ({ loading, handlePersonalSubmit, personalForm }) => {
  const router = useRouter();
  const currentDate = new Date();
  return (
    <form
      onSubmit={personalForm.onSubmit((values) => handlePersonalSubmit(values))}
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
              {...personalForm?.getInputProps("firstName")}
              disabled={loading}
            />
          </Grid.Col>
          <Grid.Col span={{ lg: 4, md: 6, sm: 12 }}>
            <TextInput
              size="md"
              label="Middle Name"
              style={{ textAlign: "start", width: "100%" }}
              classNames={{ label: classes.label, error: classes.error }}
              {...personalForm?.getInputProps("middleName")}
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
              {...personalForm?.getInputProps("lastName")}
              disabled={loading}
            />
          </Grid.Col>
          <Grid.Col span={{ lg: 4, md: 6, sm: 12 }}>
            <TextInput
              size="md"
              label="Employee ID"
              style={{ textAlign: "start", width: "100%" }}
              classNames={{ label: classes.label, error: classes.error }}
              {...personalForm?.getInputProps("employeeId")}
              disabled
            />
          </Grid.Col>
          <Grid.Col span={{ lg: 4, md: 6, sm: 12 }}>
            <TextInput
              size="md"
              label="Nationality"
              withAsterisk
              style={{ textAlign: "start", width: "100%" }}
              classNames={{ label: classes.label, error: classes.error }}
              placeholder="Nigerian"
              {...personalForm?.getInputProps("nationality")}
              disabled={loading}
            />
          </Grid.Col>
          <Grid.Col span={{ lg: 4, md: 6, sm: 12 }}>
            <Select
              data={["Single", "Married", "Widowed", "Divorced", "Separated"]}
              size="md"
              label="Marital Status"
              withAsterisk
              style={{ textAlign: "start", width: "100%" }}
              classNames={{ label: classes.label, error: classes.error }}
              {...personalForm?.getInputProps("maritalStatus")}
              disabled={loading}
              allowDeselect={false}
            />
          </Grid.Col>
          <Grid.Col span={{ lg: 4, md: 6, sm: 12 }}>
            <DateInput
              size="md"
              withAsterisk
              style={{ textAlign: "start", width: "100%" }}
              label="Date of Birth"
              placeholder="DD/MM/YYYY"
              classNames={{ label: classes.label, error: classes.error }}
              {...personalForm?.getInputProps("dateOfBirth")}
              disabled={loading}
              maxDate={currentDate}
              valueFormat="DD/MM/YYYY"
            />
          </Grid.Col>
          <Grid.Col span={{ lg: 4, md: 6, sm: 12 }}>
            <Radio.Group
              size="md"
              withAsterisk
              label="Gender"
              style={{ textAlign: "start", width: "100%" }}
              classNames={{ label: classes.label, error: classes.error }}
              {...personalForm?.getInputProps("gender")}
              disabled={loading}
              color="#3377FF"
            >
              <Group mt="xs">
                <Radio
                  value="Male"
                  label="Male"
                  disabled={loading}
                  labelPosition="left"
                />
                <Radio
                  value="Female"
                  label="Female"
                  disabled={loading}
                  labelPosition="left"
                />
              </Group>
            </Radio.Group>
          </Grid.Col>
        </Grid>

        <Group
          justify="flex-end"
          className={classes.btnWrap}
          align="center"
          mt={"6rem"}
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
            px="50px"
            w={{ lg: "auto", md: "auto", sm: "auto" }}
            className={classes.btn}
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

export default PersonalDetail;
