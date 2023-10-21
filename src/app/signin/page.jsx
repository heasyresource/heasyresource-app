"use client"
import React from "react";
import classes from "./signin.module.css";
import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  Loader,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import Link from "next/link";
import useCustomAuthHook from "@/hooks";

const signin = () => {
  const {  signInForm, handleSignInSubmit, loadingSignIn } = useCustomAuthHook();
  return (
    <Box className={classes.wrapper}>
      <Box className={classes.wrapper_img}>
        <Box className={classes.wrapper_imgOverlay} />
        <Box className={classes.logo_wrapper}>
          <Image src="/assets/images/HRlogo.png" alt="" />
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
          <form onSubmit={signInForm.onSubmit((values) => {handleSignInSubmit(values)})}>
            <Stack gap="1.5rem">
              <TextInput
                size="md"
                label="Your Email"
                placeholder="john@example.com"
                type="email"
                {...signInForm.getInputProps('email')}
                disabled={loadingSignIn}
              />
           
              <PasswordInput label="Your Password" size="md" disabled={loadingSignIn} placeholder="Password"    {...signInForm.getInputProps('password')}/>
              <Button
                size="lg"
                variant="filled"
                tt="capitalize"
                fs="1rem"
                fw="bold"
                c={"white"}
                type="submit"
                bg="#3377ff"
              >
                {loadingSignIn ? <Loader color="white" type="dots" size="md" />: "sign in"}
              </Button>
              <Flex justify="center" align="center">
                <Link
                  href="/"
                  style={{
                    color: "#3377FF",
                    fontSize: "16px",
                    textTransform: "capitalize",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  forgot password?
                </Link>
              </Flex>
            </Stack>
          </form>
        </Container>
      </Box>
    </Box>
  );
};

export default signin;
