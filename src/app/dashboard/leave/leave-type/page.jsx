import { AddLeaveType, LeaveNav, LeaveTypeTable } from "@/components";
import { Card, CardSection } from "@mantine/core";
import React from "react";

const page = () => {
  return (
    <>
      <Card
        style={{
          backgroundColor: "#ffff",
          borderRadius: "15px",
          borderBottom: "1px solid #DDDDDD",
          minHeight: "250px",
          margin: "0px",
        }}
      >
        <CardSection
          pt="25px"
          pb="55px"
          style={{ borderBottom: "1px solid #DDDDDD" }}
        >
          <LeaveNav tabTitle="Leave" />
        </CardSection>
        <AddLeaveType />
      </Card>
      <LeaveTypeTable />
    </>
  );
};

export default page;
