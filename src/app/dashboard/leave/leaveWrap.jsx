"use client";
import { LeaveNav, LeaveTable, SearchFields } from "@/components";
import { useAddLeaveType } from "@/hooks";
import { Card, CardSection } from "@mantine/core";
import React from "react";

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
  } = useAddLeaveType();
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
        <SearchFields />
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
