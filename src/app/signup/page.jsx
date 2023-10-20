"use client";
import React from "react";
import classes from "./signup.module.css";
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
  Popover,
  Progress,
  Select,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
// import { FormIntro } from "@/compoonents";
import Link from "next/link";
import useCustomAuthHook from "@/hooks";
import { IconCheck, IconX } from "@tabler/icons-react";

const requirements = [
    { re: /[0-9]/, label: 'Includes number' },
    { re: /[a-z]/, label: 'Includes lowercase letter' },
    { re: /[A-Z]/, label: 'Includes uppercase letter' },
    { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: 'Includes special symbol' },
  ];
  
const signup = () => {
  const {
    companyInfoForm,
    handleCompanyInfoSubmit,
    step,
    companyRepForm,
    handleCompanyRepSubmit,
    popoverOpened,
    setPopoverOpened,
  } = useCustomAuthHook();

  const getStrength = (string) => {
    let multiplier = string.length > 5 ? 0 : 1;
  
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
              <Title order={2} tt="capitalize" c="#3377FF">
                sign up as a company
              </Title>
              <Text mt="5px" tt="capitalize" c={"#000"} fs="18px" fw="bold">
                {` company ${step === 1 ? "information" : "representative"}`}
              </Text>
            </Box>
            <Box className={classes.step}>
              <Text tt="capitalize" fw={"500"} fs="16px">
                {`  step ${step} of 2`}
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
                  size="lg"
                  placeholder="Company Name"
                  type="text"
                  {...companyInfoForm.getInputProps("name")}
                  required
                />
                <TextInput
                  size="lg"
                  placeholder="Company Email"
                  type="email"
                  required
                  {...companyInfoForm.getInputProps("email")}
                />
                <TextInput
                  size="lg"
                  placeholder="Company Website"
                  type="url"
                  required
                  {...companyInfoForm.getInputProps("website")}
                />
                <Select
                  size="lg"
                  placeholder="Field/Industry"
                  data={["Infomation Technology"]}
                  searchable
                  required
                  {...companyInfoForm.getInputProps("field")}
                />
                <TextInput
                  size="lg"
                  placeholder="Phone Number"
                  type="tel"
                  required
                  {...companyInfoForm.getInputProps("phoneNumber")}
                />
                <Button
                  size="lg"
                  variant="filled"
                  tt="capitalize"
                  fs="1rem"
                  fw="bold"
                  c={"white"}
                  type="submit"
                >
                  next
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
                <TextInput
                  size="lg"
                  placeholder="First Name"
                  type="text"
                  {...companyRepForm.getInputProps("firstName")}
                  required
                />
                <TextInput
                  size="lg"
                  placeholder="Last Name"
                  type="text"
                  required
                  {...companyRepForm.getInputProps("lastName")}
                />
                <TextInput
                  size="lg"
                  placeholder="Work Email Address"
                  type="email"
                  required
                  {...companyRepForm.getInputProps("email")}
                />
                <TextInput
                  size="lg"
                  placeholder="Phone Number"
                  type="tel"
                  required
                  {...companyRepForm.getInputProps("phoneNumber")}
                />
                <TextInput
                  size="lg"
                  placeholder="Position in Company"
                  type="text"
                  required
                  {...companyRepForm.getInputProps("position")}
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
                        size="lg"
                        required
                        placeholder="Password"
                        {...companyRepForm.getInputProps("password")}
                      />
                    </div>
                  </Popover.Target>
                  <Popover.Dropdown>
                    <Progress
                      color={color}
                      value={strength}
                      size={5}
                      style={{ marginBottom: 10 }}
                    />
                    <PasswordRequirement
                      label="Includes at least 6 characters"
                      meets={companyRepForm.values.password.length > 5}
                    />
                    {checks}
                  </Popover.Dropdown>
                </Popover>
                <PasswordInput
                  size="lg"
                  required
                  placeholder="Confirm Password"
                  {...companyRepForm.getInputProps("comfirmPassword")}
                />
                <Button
                  size="lg"
                  variant="filled"
                  tt="capitalize"
                  fs="1rem"
                  fw="bold"
                  c={"white"}
                  type="submit"
                >
                 sign up
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
