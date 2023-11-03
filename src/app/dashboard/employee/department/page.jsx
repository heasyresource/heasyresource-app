import { AddDepartment, DepartmentsTable, EmployeeNav } from "@/components";
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
          minHeight: "200px",
          margin: "0px",
        }}
      >
        <CardSection
          pt="18px"
          pb="27px"
          style={{ borderBottom: "1px solid #DDDDDD" }}
        >
          <EmployeeNav tabTitle={"employee management"} />
        </CardSection>
        <AddDepartment />
      </Card>
      <DepartmentsTable />
    </>
  );
};

export default page;
