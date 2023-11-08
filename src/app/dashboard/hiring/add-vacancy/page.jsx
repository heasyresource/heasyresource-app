import AddCandidate from "@/components/HiringLayout/AddCandidate";
import AddVacancy from "@/components/HiringLayout/AddVacancy";
import HiringNav from "@/components/HiringNav";
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
          minHeight: "390px",
          margin: "0px",
        }}
      >
        <CardSection
          pt="25px"
          pb="55px"
          style={{ borderBottom: "1px solid #DDDDDD" }}
        >
          <HiringNav tabTitle="Hiring" />
        </CardSection>
        <AddVacancy />
      </Card>
    </>
  )
};

export default page;
