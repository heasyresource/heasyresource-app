"use client";
import {
  Box,
  Button,
  Grid,
  GridCol,
  Group,
  Select,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import React from "react";
import classes from "./employeeLayout.module.css";
import { useEmployeeCompensation } from "@/hooks";

const Compensation = () => {
  const { handleSubmit, form } = useEmployeeCompensation();
  return (
    <Box>
      <Text tt={"capitalize"} style={{ fontSize: "22px", fontWeight: 700 }}>
        Compensation
      </Text>
      <form
        style={{ height: "100%", marginTop: "2rem" }}
        onSubmit={form.onSubmit((value) => handleSubmit(value))}
      >
        <Stack style={{ gap: "3rem" }}>
          <Box>
            <Text
              c="#4D4D4D"
              tt="capitalize"
              style={{ fontWeight: 500, fontSize: "18px", textAlign: "start" }}
            >
              add salary component
            </Text>

            <Grid style={{ marginTop: "20px" }} gutter="xl">
              <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
                <TextInput
                  size="md"
                  withAsterisk
                  label="Salary Component Title"
                  style={{ textAlign: "start", width: "100%" }}
                  classNames={{ label: classes.label, error: classes.error }}
                  {...form.getInputProps("title")}
                />
              </GridCol>
              <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
                <Select
                  size="md"
                  withAsterisk
                  label="Pay Frequency"
                  style={{ textAlign: "start", width: "100%" }}
                  classNames={{ label: classes.label, error: classes.error }}
                  data={[""]}
                  {...form.getInputProps("pay")}
                />
              </GridCol>
              <Grid.Col span={{ lg: 4, md: 6, sm: 12 }}>
                <Select
                  size="md"
                  withAsterisk
                  label="Currency"
                  style={{ textAlign: "start", width: "100%" }}
                  classNames={{ label: classes.label, error: classes.error }}
                  data={[""]}
                  {...form.getInputProps("currency")}
                />
              </Grid.Col>
              <Grid.Col span={{ lg: 4, md: 6, sm: 12 }}>
                <TextInput
                  size="md"
                  withAsterisk
                  label="Amount"
                  style={{ textAlign: "start", width: "100%" }}
                  classNames={{ label: classes.label, error: classes.error }}
                  {...form.getInputProps("amount")}
                />
              </Grid.Col>
              <Grid.Col span={{ lg: 8, md: 6, sm: 12 }}>
                <TextInput
                  size="md"
                  withAsterisk
                  label="Comment"
                  style={{ textAlign: "start", width: "100%" }}
                  classNames={{ label: classes.label, error: classes.error }}
                  {...form.getInputProps("comment")}
                />
              </Grid.Col>
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

export default Compensation;
