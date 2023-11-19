"use client";
import { LeaveNav, LeaveTable, SearchFields } from "@/components";
import { useAddLeaveType } from "@/hooks";
import {
  Box,
  Button,
  Card,
  CardSection,
  Grid,
  GridCol,
  Group,
  Select,
} from "@mantine/core";
import React from "react";
import classes from "../dashboard.module.css";

const LeaveWrap = () => {
  const {
    employeeLeave,
    paginate,
    leavePagination,
    gettingData,
    setItemID,
    handleReject,
    handleApprove,
    rejectForm,
    loading,
    filterForm,
    types,
    getEmployeeLeaves,
  } = useAddLeaveType();
  const handleReset = () => {
    filterForm.setValues({
      status: null,
      leaveTypeId: null,
    });
    getEmployeeLeaves();
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
          <LeaveNav tabTitle="Leave" />
        </CardSection>
        <Box mt="lg">
          <Grid justify="space-between" className={classes.formWrap}>
            <GridCol span={{ lg: 6, md: 6, sm: 12 }}>
              <Select
                {...filterForm.getInputProps("status")}
                data={["Pending", "Rejected", "Hired"]}
                size="md"
                label="Status"
                style={{ width: "100%" }}
                classNames={{
                  label: classes.label,
                  error: classes.error,
                  placeholder: classes.placeholder,
                }}
              />
            </GridCol>

            <GridCol span={{ lg: 6, md: 6, sm: 12 }}>
              <Select
                size="md"
                {...filterForm.getInputProps("leaveTypeId")}
                label="Leave Type"
                style={{ width: "100%" }}
                data={types}
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
              px={"40px"}
              onClick={() => handleReset()}
            >
              reset
            </Button>
            <Button
              style={{ fontSize: "16px", textTransform: "capitalize" }}
              size="md"
              variant="filled"
              color="#3377FF"
              px={"40px"}
              onClick={() => getEmployeeLeaves()}
            >
              search
            </Button>
          </Group>
        </Box>
      </Card>
      <LeaveTable
        leaves={employeeLeave}
        paginate={paginate}
        pagination={leavePagination}
        gettingData={gettingData}
        setItemID={setItemID}
        handleApprove={handleApprove}
        handleReject={handleReject}
        rejectForm={rejectForm}
        loading={loading}
      />
    </>
  );
};

export default LeaveWrap;
