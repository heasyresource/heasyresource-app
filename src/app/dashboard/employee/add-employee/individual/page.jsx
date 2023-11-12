import {
  Box,
  Card,
  CardSection,
  Grid,
  GridCol,
  Stack,
  Text,
} from "@mantine/core";
import classes from "../../employee.module.css";
import React from "react";
import { AddImage, EmployeeNav } from "@/components";
import EmployeeIndividual from "@/components/EmployeeLayout/EmployeeIndividual";
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
      <CardSection
        pt="25px"
        pb="55px"
        style={{ borderBottom: "1px solid #DDDDDD" }}
      >
        <EmployeeNav tabTitle={"add Employee"} />
      </CardSection>
      <IndividualWrap />
    </Card>
  );
};

export default page;
