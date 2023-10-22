"use client";
import { useSignup } from "@/hooks";
import {
  Box,
  Button,
  Flex,
  Grid,
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
import classes from "./signup.module.css";
import React from "react";
import { getStrength, requirements } from "@/utils/publicFunctions";
import { IconCheck, IconX } from "@tabler/icons-react";

const PasswordRequirement = ({ meets, label }) => {
  return (
    <Text
      c={meets ? "teal" : "red"}
      style={{ display: "flex", alignItems: "center" }}
      mt={7}
      size="sm"
    >
      {meets ? <IconCheck size={14} /> : <IconX size={14} />}{" "}
      <span
        style={{
          marginLeft: 10,
        }}
      >
        {label}
      </span>
    </Text>
  );
};
const SignUpForm = () => {
  const {
    companyInfoForm,
    handleCompanyInfoSubmit,
    loadingCompanyInfo,
    step,
    companyRepForm,
    loadingCompanyRep,
    handleCompanyRepSubmit,
    setPopoverOpened,
    popoverOpened,
    isMobile,
  } = useSignup();
  const checks = requirements.map((requirement, index) => (
    <PasswordRequirement
      key={requirement.label}
      label={requirement.label}
      meets={requirement.re.test(companyRepForm.values.password)}
    />
  ));
  const strength = getStrength(companyRepForm.values.password);
  const color = strength === 100 ? "teal" : strength > 50 ? "yellow" : "red";
  return (
    <>
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
      {step === 1 ? (
        <form
          onSubmit={companyInfoForm.onSubmit((values) => {
            handleCompanyInfoSubmit(values);
          })}
        >
          <Stack gap="1rem">
            <TextInput
              size="md"
              placeholder="Pepsi"
              type="text"
              {...companyInfoForm.getInputProps("name")}
              withAsterisk
              disabled={loadingCompanyInfo}
              label="Company Name"
              classNames={{ label: classes.label, error: classes.error }}
            />
            <TextInput
              size="md"
              placeholder="pepsi@example.com"
              type="email"
              withAsterisk
              {...companyInfoForm.getInputProps("email")}
              disabled={loadingCompanyInfo}
              label="Company Email"
              classNames={{ label: classes.label, error: classes.error }}
            />
            <TextInput
              size="md"
              placeholder="https://pepsi.com"
              type="url"
              withAsterisk
              {...companyInfoForm.getInputProps("website")}
              disabled={loadingCompanyInfo}
              label="Company Website"
              classNames={{ label: classes.label, error: classes.error }}
            />
            <Select
              size="md"
              withAsterisk
              data={[
                "Information Technology",
                "Data Analysis",
                "Cyber Security",
                "Graphics Designer",
              ]}
              searchable
              placeholder="Information Technology"
              {...companyInfoForm.getInputProps("field")}
              disabled={loadingCompanyInfo}
              label="Field/Industry"
              classNames={{ label: classes.label, error: classes.error }}
            />
            <TextInput
              size="md"
              placeholder="+23470000000"
              type="tel"
              withAsterisk
              {...companyInfoForm.getInputProps("phoneNumber")}
              disabled={loadingCompanyInfo}
              label="Phone Number"
              classNames={{ label: classes.label, error: classes.error }}
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
              disabled={loadingCompanyInfo}
            >
              {loadingCompanyInfo ? (
                <Loader color="white" type="dots" size="md" />
              ) : (
                "next"
              )}
            </Button>
          </Stack>
        </form>
      ) : (
        <form
          onSubmit={companyRepForm.onSubmit((values) => {
            handleCompanyRepSubmit(values);
          })}
        >
          <Stack gap="1rem">
            <Grid>
              <Grid.Col span={isMobile ? 12 : 6}>
                <TextInput
                  style={{ flex: 1 }}
                  size="md"
                  label="First Name"
                  placeholder="John"
                  type="text"
                  {...companyRepForm.getInputProps("firstName")}
                  withAsterisk
                  disabled={loadingCompanyRep}
                  classNames={{ label: classes.label, error: classes.error }}
                />
              </Grid.Col>

              <Grid.Col span={isMobile ? 12 : 6}>
                <TextInput
                  style={{ flex: 1 }}
                  size="md"
                  label="Last Name"
                  placeholder="Smith"
                  type="text"
                  withAsterisk
                  disabled={loadingCompanyRep}
                  {...companyRepForm.getInputProps("lastName")}
                  classNames={{ label: classes.label, error: classes.error }}
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
              classNames={{ label: classes.label, error: classes.error }}
            />
            <TextInput
              size="md"
              label="Position in Company"
              type="text"
              placeholder="CEO"
              withAsterisk
              {...companyRepForm.getInputProps("position")}
              disabled={loadingCompanyRep}
              classNames={{ label: classes.label, error: classes.error }}
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
                    classNames={{ label: classes.label, error: classes.error }}
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
              classNames={{ label: classes.label, error: classes.error }}
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
              disabled={loadingCompanyRep}
            >
              {loadingCompanyRep ? (
                <Loader color="white" type="dots" size="md" />
              ) : (
                "sign up"
              )}
            </Button>
          </Stack>
        </form>
      )}
    </>
  );
};

export default SignUpForm;