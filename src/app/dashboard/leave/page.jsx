import React from "react";
import { Card, CardSection } from "@mantine/core";
import classes from "./leave.module.css";
import { LeaveNav, SearchFields, LeaveTable } from "@/components";
const absence = () => {
  return (
    <>
      <Card
        style={{
          backgroundColor: "#ffff",
          borderRadius: "15px",
          borderBottom: "1px solid #DDDDDD",
          minHeight: "390px",
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
        <SearchFields />
      </Card>
      <LeaveTable />
    </>
  );
};

export default absence;
