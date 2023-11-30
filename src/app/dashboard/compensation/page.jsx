import { Card, CardSection } from "@mantine/core";
import React from "react";
import CompensationNav from "@/components/CompensationLayout/CompensationNav";
import { CompensationTable } from "@/components/CompensationLayout/CompensationTable";
import CompensationInputField from "@/components/CompensationLayout/CompensationInputField";

const Compensation = () => {
  return (
    <>
      <Card
        style={{
          backgroundColor: "#ffff",
          borderRadius: "15px",
          borderBottom: "1px solid #DDDDDD",

          margin: "0px",
        }}
      >
        <CardSection py="25px" style={{ borderBottom: "1px solid #DDDDDD" }}>
          <CompensationNav tabTitle={"Compensation"} />
        </CardSection>
        <CompensationInputField />
      </Card>
      <CompensationTable />
    </>
  );
};

export default Compensation;
