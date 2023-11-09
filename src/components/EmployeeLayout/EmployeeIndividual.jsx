"use client";
import {
  Button,
  Grid,
  GridCol,
  Group,
  Loader,
  Radio,
  Select,
  Stack,
  TextInput,
} from "@mantine/core";
import React from "react";
import classes from "./employeeLayout.module.css";
import { useIndividual } from "@/hooks";

const EmployeeIndividual = () => {
  const { form, handleSubmit, fields, loading } = useIndividual();
  return (
    <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
      <Stack className={classes.individualWrap}>
        <Grid gutter={"lg"}>
          <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
            <TextInput
              label="First Name"
              withAsterisk
              size="md"
              placeholder="John"
              style={{ textAlign: "start", width: "100%" }}
              classNames={{ label: classes.label, error: classes.error }}
              {...form.getInputProps("firstName")}
              disabled={loading}
            />
          </GridCol>
          <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
            <TextInput
              label="Middle Name"
              size="md"
              placeholder="Smith"
              style={{ textAlign: "start", width: "100%" }}
              classNames={{ label: classes.label, error: classes.error }}
              {...form.getInputProps("middleName")}
              disabled={loading}
            />
          </GridCol>
          <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
            <TextInput
              label="Last Name"
              withAsterisk
              size="md"
              placeholder="Corner"
              style={{ textAlign: "start", width: "100%" }}
              classNames={{ label: classes.label, error: classes.error }}
              {...form.getInputProps("lastName")}
              disabled={loading}
            />
          </GridCol>
          <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
            <TextInput
              label="Position"
              withAsterisk
              size="md"
              style={{ textAlign: "start", width: "100%" }}
              classNames={{ label: classes.label, error: classes.error }}
              {...form.getInputProps("position")}
              disabled={loading}
            />
          </GridCol>
          <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
            <Select
              data={fields}
              searchable
              label="Department"
              withAsterisk
              size="md"
              style={{ textAlign: "start", width: "100%" }}
              classNames={{ label: classes.label, error: classes.error }}
              {...form.getInputProps("departmentId")}
              disabled={loading}
            />
          </GridCol>
          <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
            <TextInput
              label="Work Email"
              type="email"
              withAsterisk
              size="md"
              style={{ textAlign: "start", width: "100%" }}
              classNames={{ label: classes.label, error: classes.error }}
              {...form.getInputProps("email")}
              disabled={loading}
            />
          </GridCol>
          <Grid.Col span={{ lg: 4, md: 6, sm: 12 }}>
            <Radio.Group
              size="md"
              withAsterisk
              label="Gender"
              style={{ textAlign: "start", width: "100%" }}
              classNames={{ label: classes.label, error: classes.error }}
              {...form.getInputProps("gender")}
              disabled={loading}
              color="#3377FF"
            >
              <Group mt="xs">
                <Radio
                  value="Male"
                  disabled={loading}
                  label="Male"
                  labelPosition="left"
                />
                <Radio
                  value="Female"
                  disabled={loading}
                  label="Female"
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
            onClick={() => form.reset()}
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
            {loading ? <Loader color="white" type="dots" size="md" /> : "save"}
          </Button>
        </Group>
      </Stack>
    </form>
  );
};

export default EmployeeIndividual;
