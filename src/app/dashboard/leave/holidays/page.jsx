import { AddHolidayType, HolidayTypeTable, LeaveNav } from "@/components";
import { Card, CardSection } from "@mantine/core";
import React from "react";
import classes from "../leave.module.css";

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
          className={classes.cardSection}
        >
          <LeaveNav tabTitle="Leave" />
        </CardSection>
        <AddHolidayType />
      </Card>
      <HolidayTypeTable />
    </>
  );
};

export default page;
