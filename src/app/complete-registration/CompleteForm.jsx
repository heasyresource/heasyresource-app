"use client";
import { AddComImg } from "@/components";
import {
  Alert,
  Box,
  Button,
  Flex,
  Grid,
  GridCol,
  Group,
  Loader,
  MultiSelect,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import React from "react";
import DepartmentTable from "./DepartmentTable";
import { useCompleteReg } from "@/hooks";
import styles from "./completeRegistration.module.css";
import { IconInfoCircle } from "@tabler/icons-react";

const CompleteForm = () => {
  const {
    cmpSize,
    countries,
    form,
    isRadioChecked,
    handleMultiSelectChange,
    setIsRadioChecked,
    optionCodeMap,
    allSelectedString,
    handleSubmit,
    departmentTable,
    setLogo,
    setDepartmentTable,
    isDptTableEmpty,
    loading,
    IDError,
    uploading,
    isSubmitted,
  } = useCompleteReg();
  return (
    <>
      <Alert variant="light" color="yellow" icon={<IconInfoCircle />}>
        We&apos;re currently reviewing your account to ensure it meets our
        standards and policies
      </Alert>

      <form
        onSubmit={form.onSubmit((values) => handleSubmit(values))}
        className={styles.containerContent}
      >
        <Text fw={700} className={styles.title}>
          Complete Company Registration
        </Text>
        <Grid mt={"2rem"}>
          <GridCol span={{ lg: 3, md: 12, sm: 12 }} className={styles.imgGrid}>
            <AddComImg
              setLogo={setLogo}
              loading={loading}
              uploading={uploading}
              isSubmitted={isSubmitted}
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
                  disabled={uploading || isSubmitted}
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
                  disabled={uploading || isSubmitted}
                />
              </GridCol>
              <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
                <Select
                  label="Company Size"
                  withAsterisk
                  data={cmpSize}
                  size="md"
                  classNames={{
                    label: styles.label,
                    error: styles.error,
                    placeholder: styles.placeholder,
                  }}
                  {...form.getInputProps("companySizeId")}
                  disabled={uploading || isSubmitted}
                />
              </GridCol>

              <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
                <TextInput
                  size="md"
                  label="Email Domain"
                  placeholder="@heasyresource.com"
                  {...form.getInputProps("emailDomain")}
                  style={{ width: "100%" }}
                  classNames={{
                    label: styles.label,
                    error: styles.error,
                    placeholder: styles.placeholder,
                  }}
                  disabled={uploading || isSubmitted}
                />
              </GridCol>
              <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
                <TextInput
                  size="md"
                  type="text"
                  withAsterisk
                  label="Sub Domain"
                  placeholder="@heasyresource.com"
                  style={{ width: "100%" }}
                  classNames={{
                    label: styles.label,
                    error: styles.error,
                    placeholder: styles.placeholder,
                  }}
                  {...form.getInputProps("subdomain")}
                  disabled={uploading || isSubmitted}
                />
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
                        disabled={uploading || isSubmitted}
                      >
                        <Group gap="md">
                          <Radio
                            classNames={{ radio: styles.radio }}
                            labelPosition="left"
                            value={"true"}
                            label="Yes"
                            onClick={() => setIsRadioChecked(true)}
                          />
                          <Radio
                            classNames={{ radio: styles.radio }}
                            labelPosition="left"
                            value={"false"}
                            label="No"
                            onClick={() => setIsRadioChecked(false)}
                          />
                        </Group>
                      </RadioGroup>
                    </Flex>
                  </div>
                </Stack>
                {isRadioChecked && (
                  <>
                    <Text my={"10px"}>{allSelectedString}</Text>

                    <MultiSelect
                      maxDropdownHeight={150}
                      className={styles.multiSelect}
                      placeholder="Pick value"
                      data={Object.keys(optionCodeMap)}
                      onChange={handleMultiSelectChange}
                      clearable
                      classNames={{
                        pill: styles.pill,
                      }}
                      disabled={uploading || isSubmitted}
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
                    and defining its key attributes
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
                    isSubmitted={isSubmitted}
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
              "   Continue"
            )}
          </Button>
        </Group>
      </form>
    </>
  );
};

export default CompleteForm;
