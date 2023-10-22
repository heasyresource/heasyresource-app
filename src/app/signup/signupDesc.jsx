"use client";
import { Box, Flex, Text, Title } from "@mantine/core";
import classes from "./signup.module.css";
import React from "react";

const SignUpDesc = ({ step }) => {
  return (
    <Flex justify={"space-between"} align={"flex-start"}>
      <Box>
        <Title order={2} c="#3377FF" fw={"bold"}>
          Sign Up as a Company
        </Title>
        <Text mt="5px" tt="capitalize" c={"#565656"} fs="18px" fw="bold">
          {` company ${step === 1 ? "information" : "representative"}`}
        </Text>
      </Box>
      <Box className={classes.step}>
        <Text fw={"500"} c="#000000" fs="16px">
          {`  Step ${step} of 2`}
        </Text>
      </Box>
    </Flex>
  );
};

export default SignUpDesc;
