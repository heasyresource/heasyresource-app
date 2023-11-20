import { Card, CardSection } from "@mantine/core";

import React from "react";
import { EmployeeNav } from "@/components";
import IndividualWrap from "./IndividualWrap";

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
        <EmployeeNav tabTitle={"add Employee"} />
      </CardSection>
      <IndividualWrap />
    </Card>
  );
};

export default page;
