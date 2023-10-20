"use client";
import React from "react";
import classes from "./signup.module.css";
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Image,
  Loader,
  
  PasswordInput,
  Popover,
  Progress,
  Select,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";

import useCustomAuthHook from "@/hooks";
import { IconCheck, IconX } from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";

const requirements = [
    { re: /[0-9]/, label: 'Includes number' },
    { re: /[a-z]/, label: 'Includes lowercase letter' },
    { re: /[A-Z]/, label: 'Includes uppercase letter' },
    { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: 'Includes special symbol' },
  ];
  
const signup = () => {
  const isMobile = useMediaQuery(`(max-width: 768px)`)
  const {
    companyInfoForm,
    handleCompanyInfoSubmit,
    step,
    companyRepForm,
    handleCompanyRepSubmit,
    popoverOpened,
    setPopoverOpened,
    loadingCompanyInfo,
    loadingCompanyRep
  } = useCustomAuthHook();

  const getStrength = (string) => {
    let multiplier = string.length > 7 ? 0 : 1;
  
    requirements.forEach((requirement) => {
      if (!requirement.re.test(string)) {
        multiplier += 1;
      }
    });
  
    return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 10);
  };
  const PasswordRequirement = ({ meets, label }) => {
    return (
        <Text
          c={meets ? 'teal' : 'red'}
         
          style={{display: 'flex', alignItems: 'center'}}
          mt={7}
          size="sm"
        >
          {meets ? <IconCheck size={14} /> : <IconX size={14} />}{' '}
          <Box ml={10}>{label}</Box>
        </Text>
      );
  };
  const checks = requirements.map((requirement, index) => (
    <PasswordRequirement
      key={index}
      label={requirement.label}
      meets={requirement.re.test(companyRepForm.values.password)}
    />
  ));
  const strength = getStrength(companyRepForm.values.password);
  const color = strength === 100 ? 'teal' : strength > 50 ? 'yellow' : 'red';
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
          <Flex justify={"space-between"} align={"flex-start"}>
            <Box>
              <Title order={2}  c="#3377FF" fw={"bold"}>
                Sign Up as a Company
              </Title>
              <Text mt="5px" tt="capitalize" c={"#565656"} fs="18px" fw="bold">
                {` company ${step === 1 ? "information" : "representative"}`}
              </Text>
            </Box>
            <Box className={classes.step}>
              <Text  fw={"500"} c="#000000" fs="16px">
                {`  Step ${step} of 2`}
              </Text>
            </Box>
          </Flex>
          {step === 1 ? (
            <form
              onSubmit={companyInfoForm.onSubmit((values) =>
                handleCompanyInfoSubmit(values)
              )}
            >
              <Stack gap="1.5rem">
                <TextInput
                  size="md"
                placeholder="Pepsi"
                  type="text"
                  {...companyInfoForm.getInputProps("name")}
                  withAsterisk
                  disabled={loadingCompanyInfo}
                  label="Company Name"
                  
                />
                <TextInput
                  size="md"
                  placeholder="pepsi@example.com"
                  type="email"
                  withAsterisk
                  {...companyInfoForm.getInputProps("email")}
                  disabled={loadingCompanyInfo}
                  label="Company Email"
                />
                <TextInput
                  size="md"
                  
                  type="url"
                withAsterisk
                  {...companyInfoForm.getInputProps("website")}
                  disabled={loadingCompanyInfo}
                  label="Company Website"
                />
                <Select
                  size="md"
                  withAsterisk
                  data={["Information Technology", "Data Analysis", "Cyber Security", "Graphics Designer"]}
                  searchable
                 
                  {...companyInfoForm.getInputProps("field")}
                  disabled={loadingCompanyInfo}
                  label="Field/Industry"
                />
                <TextInput
                  size="md"
                  placeholder="+23470000000"
                  type="tel"
                  withAsterisk
                  {...companyInfoForm.getInputProps("phoneNumber")}
                  disabled={loadingCompanyInfo}
                  label="Phone Number"
                />
                <Button
                  size="md"
                  variant="filled"
                  tt="capitalize"
                  fs="1rem"
                  fw="bold"
                  c={"white"}
                  type="submit"
                  bg="#3377FF"
                >
                  {loadingCompanyInfo ? <Loader color="white" variant="dots"/> : "next"}
                </Button>
              </Stack>
            </form>
          ) : (
            <form
              onSubmit={companyRepForm.onSubmit((values) =>
                handleCompanyRepSubmit(values)
              )}
            >
              <Stack gap="1.5rem">
                <Grid>
                  <Grid.Col span={isMobile ? 12 : 6}>

                <TextInput
                style={{flex: 1}}
                  size="md"
                  label="First Name"
                  placeholder="John "
                  type="text"
                  {...companyRepForm.getInputProps("firstName")}
                  withAsterisk
                  disabled={loadingCompanyRep}
                />
                  </Grid.Col>

                  <Grid.Col span={isMobile ? 12 : 6}>

                <TextInput
                 style={{flex: 1}}
                  size="md"
                  label="Last Name"
                  placeholder="Smith"
                  type="text"
                  withAsterisk
                  disabled={loadingCompanyRep}
                  {...companyRepForm.getInputProps("lastName")}
                />
                  </Grid.Col>
                </Grid>
                <TextInput
                  size="md"
                  placeholder="smith@gmail.com"
                  type="email"
                  withAsterisk
                  label="Email Address"
                  {...companyRepForm.getInputProps("email")}
                  disabled={loadingCompanyRep}
                />
                <TextInput
                  size="md"
                  label="Phone Number"
                  type="tel"
                  placeholder="+23470000000"
                  withAsterisk
                  {...companyRepForm.getInputProps("phoneNumber")}
                  disabled={loadingCompanyRep}
                />
                <TextInput
                  size="md"
                  label="Position in Company"
                  type="text"
                 
                  withAsterisk
                  {...companyRepForm.getInputProps("position")}
                  disabled={loadingCompanyRep}
                />

                <Popover
                  opened={popoverOpened}
                  position="bottom"
                  width="target"
                  transition="pop"
                >
                  <Popover.Target>
                    <div
                      onFocusCapture={() => setPopoverOpened(true)}
                      onBlurCapture={() => setPopoverOpened(false)}
                    >
                      <PasswordInput
                        size="md"
                        required
                        label="Password"
                        {...companyRepForm.getInputProps("password")}
                        disabled={loadingCompanyRep}
                      />
                    </div>
                  </Popover.Target>
                  <Popover.Dropdown>
                    <Progress
                      color={color}
                      value={strength}
                      size={7}
                      style={{ marginBottom: 10 }}
                    />
                    <PasswordRequirement
                      label="Includes at least 8 characters"
                      meets={companyRepForm.values.password.length > 7}
                    />
                    {checks}
                  </Popover.Dropdown>
                </Popover>
                <PasswordInput
                  size="md"
                  required
                  label="Confirm Password"
                  {...companyRepForm.getInputProps("comfirmPassword")}
                  disabled={loadingCompanyRep}
                />
                <Button
                  size="md"
                  variant="filled"
                  tt="capitalize"
                  fs="1rem"
                  fw="bold"
                  c={"white"}
                  type="submit"
                  bg="#3377FF"
                  className={classes.signup_btn}
                >
                  {
                    loadingCompanyRep ? <Loader color="white" type="dots" /> : "sign up"
                  }
                  
         
                </Button>
              </Stack>
            </form>
          )}
        </Container>
      </Box>
    </Box>
  );
};

export default signup;
