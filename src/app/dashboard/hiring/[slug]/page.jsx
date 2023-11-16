import ApplicationFields from "@/components/HiringLayout/ApplicationFields";
import CandidateProfile from "@/components/HiringLayout/CandidateProfile";
import HiringNav from "@/components/HiringNav";
import { Card, CardSection } from "@mantine/core";
import React from "react";
import ApplicantWrap from "./applicantWrap";

const ApplicationPhase = () => {
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
        <HiringNav tabTitle="Hiring" />
      </CardSection>
      <ApplicantWrap />
    </Card>
  );
};

export default ApplicationPhase;
