import { EmployeeNav } from "@/components";
import { Box, Card, CardSection, Text } from "@mantine/core";
import classes from "../employee.module.css";

import React from "react";
import { IconUserPlus, IconUsers } from "@tabler/icons-react";

const AddEmployee = () => {
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
        className={classes.cardSection}
      >
        <EmployeeNav tabTitle={"add Employee"} />
      </CardSection>
      <Box
        style={{
          margin: "3rem 0",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "40px",
        }}
      >
        <Box
          component="a"
          href="/dashboard/employee/add-employee/individual"
          className={classes.cardType}
          style={{
            border: "1px solid #3377FF",
            borderRadius: "20px",
            padding: "40px 30px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            gap: "15px",
            cursor: "pointer",
            transition: ".3s ease-in-out",
            color: "initial",
            textDecoration: "none",
          }}
        >
          <IconUserPlus
            style={{ width: "70px", height: "70px", color: "#3377FF" }}
          />
          <Text tt="capitalize" style={{ fontWeight: 700, fontSize: "23px" }}>
            add individual employee
          </Text>
        </Box>
        <Box
          className={classes.cardType}
          component="a"
          href="/dashboard/employee/add-employee/bulk"
          style={{
            border: "1px solid #3377FF",
            borderRadius: "20px",
            padding: "40px 30px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            gap: "15px",
            cursor: "pointer",
            transition: ".3s ease-in-out",
            color: "initial",
            textDecoration: "none",
          }}
        >
          <IconUsers
            style={{ width: "70px", height: "70px", color: "#3377FF" }}
          />
          <Text tt="capitalize" style={{ fontWeight: 700, fontSize: "23px" }}>
            import employees in bulk
          </Text>
        </Box>
      </Box>
    </Card>
  );
};
export default AddEmployee;
