import React from "react";
import classes from "./signup.module.css";
import { Box, Container, Flex, Image, Text } from "@mantine/core";
import SignUpForm from "./signUpForm";
import Link from "next/link";

export const metadata = {
  title: "Sign Up",
};

const SignUp = () => {
  return (
    <Box className={classes.wrapper}>
      <Box className={classes.wrapper_img}>
        <Box className={classes.wrapper_imgOverlay} />
        <Box className={classes.logo_wrapper}>
          <Image src="/assets/images/HRlogo.png" alt="hr-logo" />
        </Box>
      </Box>
      <Box className={classes.form_wrapper}>
        <Container className={classes.form_container}>
          <SignUpForm></SignUpForm>
        </Container>
      </Box>
    </Box>
  );
};

export default SignUp;
