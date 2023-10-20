import React from "react";
import classes from "@/styles/Authentication.module.css";
import {
  Anchor,
  Box,
  Button,
  Checkbox,
  Container,
  Flex,
  Image,
  Paper,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { FormIntro } from "@/compoonents";
import Link from "next/link";

const signin = () => {
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
          <FormIntro
            type="sign in"
            desc={"Sign In to Initiate Your HR Solutions"}
           
          />
          <form>
            <Stack gap=".5rem">
              <TextInput
                size="lg"
                label="Email Address"
                placeholder="john@example.com"
                type="email"
              />    
              <PasswordInput size="lg" label="Password" />
              <Button size="lg" variant="filled" tt="capitalize" fs="1rem" fw="bold" c={"white"}>sign in</Button>
            <Flex  justify="center" align="center"> 
            <Link href='/' style={{
                color: "#494949",
                fontSize: "16px",
                textTransform: "capitalize",
            }}>forgot password?</Link>
            </Flex>
            </Stack>
          </form>
        </Container>
      </Box>
    </Box>
  );
};

export default signin;
