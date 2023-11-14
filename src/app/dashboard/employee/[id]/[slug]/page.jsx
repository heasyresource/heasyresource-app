import { Card, CardSection } from "@mantine/core";
import React from "react";
import SlugCheck from "./slugCheck";
import { EmployeeNav } from "@/components";
import classes from "../../employee.module.css";

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
      <CardSection
        className={classes.cardSection}
        py="25px"
        style={{ borderBottom: "1px solid #DDDDDD" }}
      >
        <EmployeeNav tabTitle={"employee details"} />
      </CardSection>

      <SlugCheck />
    </Card>
  );
};

export default page;
