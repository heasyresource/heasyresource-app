"use client";
import {
  Box,
  Button,
  Divider,
  Grid,
  GridCol,
  Group,
  Loader,
  MultiSelect,
  Select,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import React from "react";
import classes from "../../employee.module.css";
import useCompensation from "@/hooks/useCompensation";

const CompensationForm = () => {
  const {
    form,
    handleSubmit,
    loading,
    router,
    earnings,
    deductions,
    componentForm,
    handleComponentSubmit,
    componentLoading,
  } = useCompensation();
  return (
    <Box>
      <Text tt={"capitalize"} style={{ fontSize: "22px", fontWeight: 700 }}>
        Compensation
      </Text>
      <form
        style={{ height: "100%", marginTop: "2rem" }}
        onSubmit={form.onSubmit((values) => handleSubmit(values))}
      >
        <Stack style={{ gap: "3rem" }}>
          <Box>
            <Text
              c="#4D4D4D"
              style={{ fontWeight: 500, fontSize: "18px", textAlign: "start" }}
            >
              Add basic salary
            </Text>

            <Grid style={{ marginTop: "20px" }} gutter="xl">
              <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
                <TextInput
                  size="md"
                  withAsterisk
                  type="number"
                  label="Gross Salary"
                  style={{ textAlign: "start", width: "100%" }}
                  classNames={{ label: classes.label, error: classes.error }}
                  {...form.getInputProps("grossSalary")}
                  disabled={loading}
                />
              </GridCol>
              <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
                <Select
                  size="md"
                  withAsterisk
                  label="Pay Frequency"
                  style={{ textAlign: "start", width: "100%" }}
                  classNames={{ label: classes.label, error: classes.error }}
                  data={["Monthly", "Weekly"]}
                  {...form.getInputProps("frequency")}
                  disabled={loading}
                  allowDeselect={false}
                />
              </GridCol>
              <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
                <Select
                  size="md"
                  withAsterisk
                  label="Currency"
                  style={{ textAlign: "start", width: "100%" }}
                  classNames={{ label: classes.label, error: classes.error }}
                  data={["NGN"]}
                  allowDeselect={false}
                  {...form.getInputProps("currency")}
                />
              </GridCol>
            </Grid>
          </Box>

          <Group justify="flex-end" align="center" mt={"auto"}>
            <Button
              variant="contained"
              size="md"
              color="#3377FF"
              tt="capitalize"
              px="30px"
              type="submit"
              style={{
                backgroundColor: "#3377FF",
              }}
              disabled={loading}
            >
              {loading ? (
                <Loader type="dots" color="white" size={"md"} />
              ) : (
                "save"
              )}
            </Button>
          </Group>
        </Stack>
      </form>
      <Divider my={"lg"} />
      <Box>
        <Text
          c="#4D4D4D"
          style={{ fontWeight: 500, fontSize: "18px", textAlign: "start" }}
        >
          Add components
        </Text>
        <form
          onSubmit={componentForm.onSubmit((values) =>
            handleComponentSubmit(values)
          )}
          style={{ marginTop: "2rem" }}
        >
          <Stack gap={"1rem"}>
            <Grid gutter={"lg"}>
              <GridCol span={{ lg: 6, md: 6, sm: 12 }}>
                <MultiSelect
                  size="md"
                  withAsterisk
                  label="Earnings"
                  placeholder="Select components"
                  data={earnings}
                  {...componentForm.getInputProps("earns")}
                  disabled={componentLoading}
                  style={{ textAlign: "start", width: "100%" }}
                  classNames={{ label: classes.label, error: classes.error }}
                />
              </GridCol>
              <GridCol span={{ lg: 6, md: 6, sm: 12 }}>
                <MultiSelect
                  size="md"
                  withAsterisk
                  label="Deductions"
                  placeholder="Select components"
                  data={deductions}
                  {...componentForm.getInputProps("deduct")}
                  disabled={componentLoading}
                  style={{ textAlign: "start", width: "100%" }}
                  classNames={{ label: classes.label, error: classes.error }}
                />
              </GridCol>
            </Grid>
            <Group justify="flex-end" align="center" mt={"1.5rem"}>
              <Button
                variant="outline"
                size="md"
                color="#3377FF"
                style={{ borderColor: "#3377FF" }}
                tt="capitalize"
                px="30px"
                onClick={() => router.back()}
                disabled={componentLoading}
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
                style={{
                  backgroundColor: "#3377FF",
                }}
                disabled={componentLoading}
              >
                {componentLoading ? (
                  <Loader type="dots" color="white" size={"md"} />
                ) : (
                  "save"
                )}
              </Button>
            </Group>
          </Stack>
        </form>
      </Box>
    </Box>
  );
};

export default CompensationForm;
