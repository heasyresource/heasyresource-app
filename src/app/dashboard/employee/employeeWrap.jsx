"use client";
import React from "react";
import InputField from "../components/InputField";
import { TableSelection } from "../components/TableSelection";
import { EmployeeNav } from "@/components";
import {
  Box,
  Button,
  Card,
  CardSection,
  Grid,
  GridCol,
  Group,
  Select,
  TextInput,
} from "@mantine/core";
import { useSearch } from "@/hooks";
import classes from "../dashboard.module.css";
const EmployeeWrap = () => {
  const {
    loading,
    form,

    paginate,
    employees,
    gettingData,
    pagination,
    departments,
    getEmployees,
  } = useSearch();
  const handleReset = () => {
    form.setValues({
      employeeName: "",
      departmentId: null,
      status: null,
      employeeId: "",
    });
  };

  return (
    <>
      <Card
        style={{
          backgroundColor: "#ffff",
          borderRadius: "15px",
          borderBottom: "1px solid #DDDDDD",
          minHeight: "280px",
          margin: "0px",
        }}
      >
        <CardSection py="25px" style={{ borderBottom: "1px solid #DDDDDD" }}>
          <EmployeeNav tabTitle={"employee management"} />
        </CardSection>
        <Box style={{ marginTop: "1rem" }}>
          <Grid justify="space-between" className={classes.formWrap}>
            <GridCol span={{ lg: 3, md: 6, sm: 12 }} mt={0}>
              <TextInput
                size="md"
                label="Employee Name"
                style={{ width: "100%" }}
                {...form.getInputProps("employeeName")}
                classNames={{
                  label: classes.label,
                  error: classes.error,
                  placeholder: classes.placeholder,
                }}
              />
            </GridCol>
            <GridCol span={{ lg: 3, md: 6, sm: 12 }}>
              <TextInput
                size="md"
                label="Employee ID"
                style={{ width: "100%" }}
                {...form.getInputProps("employeeId")}
                classNames={{
                  label: classes.label,
                  error: classes.error,
                  placeholder: classes.placeholder,
                }}
              />
            </GridCol>
            <GridCol span={{ lg: 3, md: 6, sm: 12 }}>
              <Select
                size="md"
                label="Employee Status"
                {...form.getInputProps("status")}
                data={[
                  "Resigned",
                  "Employed",
                  "Terminated",
                  "Suspended",
                  "Retired",
                ]}
                classNames={{
                  label: classes.label,
                  error: classes.error,
                  placeholder: classes.placeholder,
                }}
              />
            </GridCol>
            <GridCol span={{ lg: 3, md: 6, sm: 12 }}>
              <Select
                size="md"
                label="Employee Department"
                style={{ width: "100%" }}
                disabled={loading}
                {...form.getInputProps("departmentId")}
                data={departments}
                classNames={{
                  label: classes.label,
                  error: classes.error,
                  placeholder: classes.placeholder,
                }}
              />
            </GridCol>
          </Grid>
          <Group justify="flex-end" mt={"1.5rem"}>
            <Button
              style={{ fontSize: "16px", textTransform: "capitalize" }}
              size="md"
              variant="outline"
              color="#3377FF"
              px={"30px"}
              onClick={() => handleReset()}
            >
              Reset
            </Button>
            <Button
              style={{ fontSize: "16px", textTransform: "capitalize" }}
              size="md"
              variant="filled"
              color="#3377FF"
              px={"30px"}
              onClick={() => getEmployees()}
            >
              search
            </Button>
          </Group>
        </Box>
      </Card>
      <TableSelection
        employees={employees}
        paginate={paginate}
        gettingData={gettingData}
        pagination={pagination}
      />
    </>
  );
};

export default EmployeeWrap;
