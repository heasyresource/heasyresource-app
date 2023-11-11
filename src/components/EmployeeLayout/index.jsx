import { Box, Flex } from "@mantine/core";
import React from "react";
import ProfileNav from "../ProfileNav";
import classes from "./employeeLayout.module.css";

const EmployeeLayout = ({
  children,
  position,
  firstName,
  lastName,
  id,
  logoUrl,
}) => {
  return (
    <Flex className={classes.layout}>
      <ProfileNav
        position={position}
        firstName={firstName}
        lastName={lastName}
        id={id}
        logoUrl={logoUrl}
      />
      <Box style={{ flex: 2, padding: "20px" }}>{children}</Box>
    </Flex>
  );
};

export default EmployeeLayout;
