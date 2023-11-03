import { Card, CardSection } from "@mantine/core";
import React from "react";
import InputField from "../components/InputField";
import { TableSelection } from "../components/TableSelection";
import classes from "./employee.module.css";
import { EmployeeNav } from "@/components";

const Employee = () => {
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
        >
          <EmployeeNav tabTitle={"employee management"} />
        </CardSection>
        <InputField />
      </Card>
      <TableSelection />
    </>
  );
};

export default Employee;
