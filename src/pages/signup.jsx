import { FormIntro } from "@/compoonents";
import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  PasswordInput,
  Select,
  Stack,
  TextInput,
} from "@mantine/core";
import Link from "next/link";
import React, { useState } from "react";
import classes from '@/styles/Registration.module.css'

const signup = () => {
    const [step, setStep] = useState(1)
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
            type="sign up as a company"
            desc={"Sign Up to Initiate Your HR Solutionss"}
            title={"company information"}
            step={step}
          />
          <form>
            <Stack gap="1rem">
              <TextInput
                withAsterisk
                required
                size="lg"
                label="Company Name"
                placeholder="Pepsi"
                type="text"
              />
              <TextInput
                withAsterisk
                required
                size="lg"
                label="Company Email"
                type="email"
                placeholder="john@example.com"
              />
              <TextInput
                withAsterisk
                required
                size="lg"
                label="Company Website"
                type="url"
              />
              <Select
                withAsterisk
                label="Field/Industry"
                placeholder="Please select field"
                required
                data={["React", "Angular", "Vue", "Svelte"]}
                size="lg"
              />

              <TextInput
                withAsterisk
                required
                size="lg"
                label="Phone Number"
                type="tel"
              />
              <Button
                size="lg"
                variant="filled"
                tt="capitalize"
                fs="1rem"
                fw="bold"
                c={"white"}
              >
                next
              </Button>
            </Stack>
          </form>
        </Container>
      </Box>
    </Box>
  );
};

export default signup;
