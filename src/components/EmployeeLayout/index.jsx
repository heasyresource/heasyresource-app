import { Box, Flex } from "@mantine/core";
import React from "react";
import ProfileNav from "../ProfileNav";
import classes from "./employeeLayout.module.css";

const EmployeeLayout = ({ children }) => {
  return (
    <Flex className={classes.layout}>
      <ProfileNav />
      <Box style={{ flex: 2, padding: "20px" }}>{children}</Box>
    </Flex>
  );
};

export default EmployeeLayout;
