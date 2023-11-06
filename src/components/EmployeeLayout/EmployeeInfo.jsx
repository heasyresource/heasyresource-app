import React from "react";
import classes from "./employeeLayout.module.css";
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
import { useEmploymentInfo } from "@/hooks";

const EmployeeInfo = () => {
  const { form, handleSubmit } = useEmploymentInfo();
  return (
    <Box>
      <Text tt={"capitalize"} style={{ fontSize: "22px", fontWeight: 700 }}>
        Employee Information
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
              Job details:
            </Text>

            <Grid style={{ marginTop: "20px" }} gutter="xl">
              <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
                <Select
                  data={["Front-End"]}
                  size="md"
                  withAsterisk
                  label="Job Title"
                  placeholder="Data Analysis"
                  style={{ textAlign: "start", width: "100%" }}
                  classNames={{ label: classes.label, error: classes.error }}
                  {...form.getInputProps("title")}
                />
              </GridCol>
              <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
                <Select
                  size="md"
                  withAsterisk
                  label="Job Specification"
                  style={{ textAlign: "start", width: "100%" }}
                  classNames={{ label: classes.label, error: classes.error }}
                  data={[""]}
                  {...form.getInputProps("specification")}
                />
              </GridCol>
              <Grid.Col span={{ lg: 4, md: 6, sm: 12 }}>
                <TextInput
                  type="date"
                  size="md"
                  withAsterisk
                  label="Joined Date"
                  placeholder="DD/MM/YYYY"
                  style={{ textAlign: "start", width: "100%" }}
                  classNames={{ label: classes.label, error: classes.error }}
                  {...form.getInputProps("joinedDate")}
                />
              </Grid.Col>
              <Grid.Col span={{ lg: 4, md: 6, sm: 12 }}>
                <TextInput
                  size="md"
                  withAsterisk
                  label="Job Category"
                  style={{ textAlign: "start", width: "100%" }}
                  classNames={{ label: classes.label, error: classes.error }}
                  {...form.getInputProps("category")}
                />
              </Grid.Col>
              <Grid.Col span={{ lg: 4, md: 6, sm: 12 }}>
                <Select
                  size="md"
                  withAsterisk
                  label="Employment Status"
                  style={{ textAlign: "start", width: "100%" }}
                  data={[]}
                  classNames={{ label: classes.label, error: classes.error }}
                  {...form.getInputProps("status")}
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
              Employee Termination:
            </Text>

            <Grid style={{ marginTop: "20px" }} gutter="xl">
              <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
                <Button
                  variant="contained"
                  size="md"
                  color="#FF0000"
                  tt="capitalize"
                  w={{ lg: "auto", md: "auto", sm: "auto" }}
                  className={classes.btn}
                  type="submit"
                  style={{
                    backgroundColor: "#FF0000",
                  }}
                >
                  terminate employment
                </Button>
              </GridCol>
            </Grid>
          </Box>
          <Box>
            <Text
              c="#4D4D4D"
              tt="capitalize"
              style={{ fontWeight: 500, fontSize: "18px", textAlign: "start" }}
            >
              Report to:
            </Text>

            <Grid style={{ marginTop: "20px" }} gutter="xl">
              <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
                <Select
                  data={[]}
                  size="md"
                  withAsterisk
                  label="Add Supervisor"
                  style={{ textAlign: "start", width: "100%" }}
                  classNames={{ label: classes.label, error: classes.error }}
                  {...form.getInputProps("supervisor")}
                />
              </GridCol>
              <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
                <Select
                  size="md"
                  withAsterisk
                  label="Report Method"
                  style={{ textAlign: "start", width: "100%" }}
                  classNames={{ label: classes.label, error: classes.error }}
                  data={[""]}
                  {...form.getInputProps("method")}
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

export default EmployeeInfo;
