import React from "react";
import classes from "./employeeLayout.module.css";
import {
  Box,
  Button,
  Grid,
  GridCol,
  Group,
  Loader,
  Select,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useRouter } from "next/navigation";

const EmployeeInfo = ({
  employmentInfoForm,
  handleInfoSubmit,
  departments,
  employmentType,
  loading,
}) => {
  const currentDate = new Date();

  const router = useRouter();
  return (
    <Box>
      <Text tt={"capitalize"} style={{ fontSize: "22px", fontWeight: 700 }}>
        Employment Information
      </Text>
      <form
        style={{ height: "100%", marginTop: "2rem" }}
        onSubmit={employmentInfoForm?.onSubmit((values) =>
          handleInfoSubmit(values)
        )}
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
                <TextInput
                  size="md"
                  withAsterisk
                  label="Position"
                  style={{ textAlign: "start", width: "100%" }}
                  classNames={{ label: classes.label, error: classes.error }}
                  {...employmentInfoForm?.getInputProps("position")}
                  disabled={loading}
                />
              </GridCol>
              <Grid.Col span={{ lg: 4, md: 6, sm: 12 }}>
                <Select
                  size="md"
                  withAsterisk
                  label="Department"
                  style={{ textAlign: "start", width: "100%" }}
                  data={departments}
                  classNames={{ label: classes.label, error: classes.error }}
                  {...employmentInfoForm?.getInputProps("departmentId")}
                  disabled={loading}
                  allowDeselect={false}
                />
              </Grid.Col>
              <Grid.Col span={{ lg: 4, md: 6, sm: 12 }}>
                <Select
                  size="md"
                  withAsterisk
                  label="Employement Type"
                  style={{ textAlign: "start", width: "100%" }}
                  data={employmentType}
                  classNames={{ label: classes.label, error: classes.error }}
                  {...employmentInfoForm?.getInputProps("employmentTypeId")}
                  disabled={loading}
                  allowDeselect={false}
                />
              </Grid.Col>
              <Grid.Col span={{ lg: 4, md: 6, sm: 12 }}>
                <Select
                  size="md"
                  withAsterisk
                  label="Work Mode"
                  style={{ textAlign: "start", width: "100%" }}
                  data={["On-Site", "Hybrid", "Remote"]}
                  classNames={{ label: classes.label, error: classes.error }}
                  {...employmentInfoForm?.getInputProps("workMode")}
                  disabled={loading}
                  allowDeselect={false}
                />
              </Grid.Col>
              <Grid.Col span={{ lg: 4, md: 6, sm: 12 }}>
                <Select
                  disabled
                  size="md"
                  withAsterisk
                  label="Employment Status"
                  style={{ textAlign: "start", width: "100%" }}
                  data={["Pending", "Rejected", "Hired"]}
                  classNames={{ label: classes.label, error: classes.error }}
                  allowDeselect={false}
                />
              </Grid.Col>

              <Grid.Col span={{ lg: 4, md: 6, sm: 12 }}>
                <DateInput
                  size="md"
                  withAsterisk
                  style={{ textAlign: "start", width: "100%" }}
                  label="Joined Date"
                  classNames={{ label: classes.label, error: classes.error }}
                  {...employmentInfoForm?.getInputProps("resumptionDate")}
                  disabled={loading}
                  maxDate={currentDate}
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
                  disabled={loading}
                  variant="contained"
                  size="md"
                  color="#FF0000"
                  tt="capitalize"
                  w={{ lg: "auto", md: "auto", sm: "auto" }}
                  className={classes.btn}
                  style={{
                    backgroundColor: "#FF0000",
                  }}
                >
                  terminate employment
                </Button>
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
              disabled={loading}
              onClick={() => router.back()}
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
              disabled={loading}
            >
              {loading ? (
                <Loader color="white" type="dots" size="md" />
              ) : (
                "save"
              )}
            </Button>
          </Group>
        </Stack>
      </form>
    </Box>
  );
};

export default EmployeeInfo;
