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
      <Grid mt="2rem" className={classes.employeeIndividual}>
        <GridCol span={{ lg: 3, md: 12, sm: 12 }}>
          <Stack justify="center" align="center" ta={"center"}>
            <AddImage />
            <Box>
              <Text style={{ fontSize: "13px", fontWeight: 400 }} c="#565656">
                Supported image formats: .jpg, .png
              </Text>
              <Text
                tt="capitalize"
                style={{ fontSize: "13px", fontWeight: 400 }}
                c="#565656"
              >
                Maximum file size: 1MB
              </Text>
              <Text style={{ fontSize: "13px", fontWeight: 400 }} c="#565656">
                Recommended dimension: (200 X 200)px
              </Text>
            </Box>
          </Stack>
        </GridCol>
        <GridCol span={{ lg: 9, md: 12, sm: 12 }}>
          <EmployeeIndividual />
        </GridCol>
      </Grid>
    </Card>
  );
};

export default page;
