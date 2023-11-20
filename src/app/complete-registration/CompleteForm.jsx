"use client";
import { AddComImg } from "@/components";
import {
  ActionIcon,
  Alert,
  Box,
  Button,
  Flex,
  Grid,
  GridCol,
  Group,
  Highlight,
  Loader,
  Modal,
  MultiSelect,
  Paper,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import React from "react";
import DepartmentTable from "./DepartmentTable";
import { useCompleteReg, useSignOut } from "@/hooks";
import styles from "./completeRegistration.module.css";
import {
  IconInfoCircle,
  IconLogout,
  IconProgressCheck,
} from "@tabler/icons-react";
import Link from "next/link";
import { useDisclosure } from "@mantine/hooks";

const CompleteForm = ({ companyInfo }) => {
  const [opened, { open, close }] = useDisclosure(false);
  const {
    cmpSize,
    countries,
    form,
    isRadioChecked,
    setIsRadioChecked,
    optionCodeMap,
    handleSubmit,
    departmentTable,
    setLogo,
    setDepartmentTable,
    isDptTableEmpty,
    loading,
    IDError,
    uploading,
    isSubmitted,
    allOptions,
    logo,
  } = useCompleteReg();
  const { handleSignOut } = useSignOut();
  return (
    <>
      <Flex justify={"flex-end"} align={"center"}>
        <Button
          size="md"
          mb={"md"}
          variant="subtle"
          color="#FF0000"
          rightSection={<IconLogout />}
          onClick={open}
        >
          Sign out
        </Button>
      </Flex>

      <Paper
        shadow="xs"
        className={styles.container}
        style={{ borderRadius: "15px" }}
      >
        {isSubmitted && (
          <Alert variant="light" color="yellow" icon={<IconInfoCircle />}>
            We&apos;re currently reviewing your company to ensure it meets our
            standards and policies
          </Alert>
        )}

        {companyInfo &&
          companyInfo.isCompletedRegistration === 1 &&
          companyInfo.status === "Approved" && (
            <Alert variant="light" color="green" icon={<IconProgressCheck />}>
              Congratulation, your company has been approved. This is the link
              to your new dashboard:{" "}
              <Link
                href={`https://${companyInfo.subdomain}.heasyresource.com`}
                style={{ textDecoration: "none", color: "#3377ff" }}
              >
                {`https://${companyInfo.subdomain}.heasyresource.com`}
              </Link>
            </Alert>
          )}
        <form
          onSubmit={form.onSubmit((values) => handleSubmit(values))}
          style={{ padding: "20px" }}
        >
          <Text fw={700} className={styles.title}>
            Complete Company Registration
          </Text>
          <Grid mt={"2rem"}>
            <GridCol
              span={{ lg: 3, md: 12, sm: 12 }}
              className={styles.imgGrid}
            >
              <AddComImg
                logo={logo}
                setLogo={setLogo}
                loading={loading}
                uploading={uploading}
                isSubmitted={
                  isSubmitted ||
                  (companyInfo && companyInfo.isCompletedRegistration === 1)
                }
              />
            </GridCol>
            <GridCol span={{ lg: 9, md: 12, sm: 12 }}>
              <Grid gutter="md">
                <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
                  <TextInput
                    size="md"
                    label="Company Address"
                    withAsterisk
                    {...form.getInputProps("address")}
                    style={{ width: "100%" }}
                    classNames={{
                      label: styles.label,
                      error: styles.error,
                      placeholder: styles.placeholder,
                    }}
                    disabled={
                      uploading ||
                      isSubmitted ||
                      (companyInfo && companyInfo.isCompletedRegistration === 1)
                    }
                  />
                </GridCol>

                <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
                  <Select
                    label="Country"
                    withAsterisk
                    data={countries}
                    size="md"
                    classNames={{
                      label: styles.label,
                      error: styles.error,
                      placeholder: styles.placeholder,
                    }}
                    searchable
                    {...form.getInputProps("countryId")}
                    disabled={
                      uploading ||
                      isSubmitted ||
                      (companyInfo && companyInfo.isCompletedRegistration === 1)
                    }
                  />
                </GridCol>
                <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
                  <Select
                    label="Company Size"
                    withAsterisk
                    data={cmpSize}
                    size="md"
                    value={form?.values.companySizeId}
                    classNames={{
                      label: styles.label,
                      error: styles.error,
                      placeholder: styles.placeholder,
                    }}
                    {...form.getInputProps("companySizeId")}
                    disabled={
                      uploading ||
                      isSubmitted ||
                      (companyInfo && companyInfo.isCompletedRegistration === 1)
                    }
                  />
                </GridCol>

                <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
                  <TextInput
                    size="md"
                    label="Email Domain"
                    placeholder="@company1.com,@company2.com"
                    {...form.getInputProps("emailDomain")}
                    style={{ width: "100%" }}
                    classNames={{
                      label: styles.label,
                      error: styles.error,
                      placeholder: styles.placeholder,
                    }}
                    disabled={
                      uploading ||
                      isSubmitted ||
                      (companyInfo && companyInfo.isCompletedRegistration === 1)
                    }
                  />
                  {form.values.emailDomain.length !== 0 && (
                    <Text size="14px" mt="10px" c="565656">
                      {`Note: you will be able to add only employees with this email domain ${form.values.emailDomain}`}
                    </Text>
                  )}
                </GridCol>
                <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
                  <TextInput
                    size="md"
                    type="text"
                    withAsterisk
                    label="Sub Domain"
                    style={{ width: "100%" }}
                    classNames={{
                      label: styles.label,
                      error: styles.error,
                      placeholder: styles.placeholder,
                    }}
                    {...form.getInputProps("subdomain")}
                    disabled={
                      uploading ||
                      isSubmitted ||
                      (companyInfo && companyInfo.isCompletedRegistration === 1)
                    }
                    pattern="^[a-zA-Z0-9]+$"
                    title="Subdomain should contain only alphabets and numbers"
                  />

                  <Highlight
                    highlightStyles={{
                      fontWeight: "bold",
                    }}
                    color="#e7f7ff"
                    size="14px"
                    mt="10px"
                    highlight={form.values.subdomain || "subdomain"}
                  >
                    {`Your domain will look like: https://${
                      form.values.subdomain.length !== 0
                        ? form.values.subdomain
                        : "subdomain"
                    }.heasyresource`}
                  </Highlight>
                </GridCol>

                <GridCol span={12} style={{ marginTop: "20px" }}>
                  <Stack>
                    <div>
                      <Text fz={20} fw={500} c="#272727">
                        Employee Configuration
                      </Text>

                      <Text fz={15} fw={400} c="#5F5F5F">
                        Would you like us to automatically generate an employee
                        ID?
                      </Text>
                    </div>
                    <div>
                      <Flex h="100%" align="flex-end">
                        <RadioGroup
                          withAsterisk
                          {...form.getInputProps("autoGenerateEmployeeId")}
                          disabled={
                            uploading ||
                            isSubmitted ||
                            (companyInfo &&
                              companyInfo.isCompletedRegistration === 1)
                          }
                        >
                          <Group gap="md">
                            <Radio
                              classNames={{ radio: styles.radio }}
                              labelPosition="left"
                              value={"true"}
                              label="Yes"
                              onClick={() => setIsRadioChecked(true)}
                              disabled={
                                uploading ||
                                isSubmitted ||
                                (companyInfo &&
                                  companyInfo.isCompletedRegistration === 1)
                              }
                              color="#3377FF"
                            />
                            <Radio
                              classNames={{ radio: styles.radio }}
                              labelPosition="left"
                              value={"false"}
                              label="No"
                              onClick={() => setIsRadioChecked(false)}
                              disabled={
                                uploading ||
                                isSubmitted ||
                                (companyInfo &&
                                  companyInfo.isCompletedRegistration === 1)
                              }
                              color="#3377FF"
                            />
                          </Group>
                        </RadioGroup>
                      </Flex>
                    </div>
                  </Stack>
                  {isRadioChecked && (
                    <>
                      {form.values.employeeIdFormat.length !== 0 && (
                        <Text
                          size="14px"
                          c="565656"
                          mt={"10px"}
                        >{`The employee ID will look like: ${form.values.employeeIdFormat
                          .map((option) => optionCodeMap[option])
                          .join("")}`}</Text>
                      )}

                      <MultiSelect
                        mt={"10px"}
                        maxDropdownHeight={150}
                        className={styles.multiSelect}
                        placeholder="Pick value"
                        // value={selectedOptions}
                        data={allOptions}
                        // onChange={handleMultiSelectChange}
                        {...form.getInputProps("employeeIdFormat")}
                        clearable
                        classNames={{
                          pill: styles.pill,
                        }}
                        disabled={
                          uploading ||
                          isSubmitted ||
                          (companyInfo &&
                            companyInfo.isCompletedRegistration === 1)
                        }
                      />
                      {IDError && (
                        <Text style={{ color: "red", fontSize: "13px" }}>
                          Please select all options
                        </Text>
                      )}
                    </>
                  )}
                </GridCol>
                <GridCol span={12} mt={"25px"}>
                  <Box>
                    <Text fz={20} fw={500} c="#272727">
                      Add Department
                    </Text>
                    <Text fz="14px">
                      Streamline your organization by creating a new department
                      for enhanced operational efficiency.
                    </Text>
                  </Box>
                </GridCol>
                <GridCol span={12}>
                  <Box style={{ marginTop: "10px" }}>
                    <DepartmentTable
                      uploading={uploading}
                      departmentTable={departmentTable}
                      setDepartmentTable={setDepartmentTable}
                      isDptTableEmpty={isDptTableEmpty}
                      isSubmitted={
                        isSubmitted ||
                        (companyInfo &&
                          companyInfo.isCompletedRegistration === 1)
                      }
                    />
                  </Box>
                </GridCol>
              </Grid>
            </GridCol>
          </Grid>

          <Group justify="flex-end" mt="3.5rem" fz="16px">
            <Button
              size="md"
              color="white"
              bg="#3377ff"
              className={styles.control}
              type="submit"
              disabled={uploading || isSubmitted}
            >
              {uploading ? (
                <Loader color="white" type="dots" size="md" />
              ) : (
                "   Submit"
              )}
            </Button>
          </Group>
        </form>
      </Paper>
      <Modal
        withCloseButton={false}
        opened={opened}
        onClose={close}
        centered
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      >
        <Stack py={"3rem"} justify="center" align="center">
          <ActionIcon variant="transparent" size="xl">
            <IconLogout
              style={{
                color: "#FF0000",
                fontSize: "20px",
                width: "100%",
                height: "100%",
              }}
              stroke={1.5}
            />
          </ActionIcon>
          <Text fw={600} style={{ fontSize: "25px", color: "#000000" }}>
            Confirm Sign Out
          </Text>

          <Text style={{ fontSize: "16px", color: "#1E1E1E" }}>
            Are you sure you want to sign out?
          </Text>
          <Group mt="1rem" justify="flex-end" align="center">
            <Button
              variant="outline"
              size="md"
              color="#A3A3A3"
              style={{ borderColor: "#A3A3A3" }}
              tt="capitalize"
              onClick={close}
            >
              cancel
            </Button>
            <Button
              variant="contained"
              size="md"
              style={{ backgroundColor: "#FF0000" }}
              tt="capitalize"
              onClick={() => {
                handleSignOut();
                close();
              }}
            >
              sign out
            </Button>
          </Group>
        </Stack>
      </Modal>
    </>
  );
};

export default CompleteForm;
