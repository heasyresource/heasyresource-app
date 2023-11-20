"use client";
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
import React from "react";
import classes from "../../employee.module.css";
import useCompensation from "@/hooks/useCompensation";

const CompensationForm = () => {
  const { form, handleSubmit, loading, router } = useCompensation();
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
              tt="capitalize"
              style={{ fontWeight: 500, fontSize: "18px", textAlign: "start" }}
            >
              add basic salary component
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
              variant="outline"
              size="md"
              color="#3377FF"
              style={{ borderColor: "#3377FF" }}
              tt="capitalize"
              px="30px"
              w={{ lg: "auto", md: "auto", sm: "auto" }}
              onClick={() => router.back()}
              disabled={loading}
            >
              cancel
            </Button>
            <Button
              variant="contained"
              size="md"
              color="#3377FF"
              tt="capitalize"
              px="30px"
              w={{ lg: "auto", md: "auto", sm: "auto" }}
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
    </Box>
  );
};

export default CompensationForm;
