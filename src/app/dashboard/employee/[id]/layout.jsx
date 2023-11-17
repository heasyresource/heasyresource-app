import { EmployeeNav } from "@/components";
import { Card, CardSection } from "@mantine/core";
import React from "react";
import classes from "../employee.module.css";
import LayoutWrap from "./LayoutWrap";

const layout = ({ children }) => {
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
      <CardSection
        className={classes.cardSection}
        py="25px"
        style={{ borderBottom: "1px solid #DDDDDD" }}
      >
        <EmployeeNav tabTitle={"employee details"} />
      </CardSection>
      <LayoutWrap>{children}</LayoutWrap>
    </Card>
  );
};

export default layout;
