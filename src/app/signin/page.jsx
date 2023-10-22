import React from "react";
import SignInForm from "./signInForm";
import classes from "./signin.module.css";
import { Box, Container, Image, Stack, Text, Title } from "@mantine/core";
export const metadata = {
  title: "Sign In",
};

const SignIn = () => {
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
          <Stack>
            <Title order={2} tt="capitalize" c="#3377FF" fw="bold">
              sign in
            </Title>
            <Text tt="capitalize" c={"#8692A6"} fs="18px">
              Sign In to Initiate Your HR Solutions
            </Text>
          </Stack>
          <SignInForm></SignInForm>
        </Container>
      </Box>
    </Box>
  );
};

export default SignIn;
