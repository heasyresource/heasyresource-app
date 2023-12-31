import React from "react";
import { Card, CardSection } from "@mantine/core";
import { AssignLeaveForm, LeaveNav } from "@/components";

const page = () => {
  return (
    <Card
      style={{
        backgroundColor: "#ffff",
        borderRadius: "15px",
        borderBottom: "1px solid #DDDDDD",
        minHeight: "390px",
        margin: "0px",
      }}
    >
      <CardSection py="25px" style={{ borderBottom: "1px solid #DDDDDD" }}>
        <LeaveNav tabTitle="Leave" />
      </CardSection>
      <AssignLeaveForm />
    </Card>
  );
};

export default page;
