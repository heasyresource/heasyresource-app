"use client";
import React from "react";
import { EmployeeNav } from "@/components";
import {
  ActionIcon,
  Box,
  Button,
  Card,
  CardSection,
  FileInput,
  Group,
  List,
  ListItem,
  Loader,
  Text,
  Grid,
  GridCol,
  TextInput,
  RadioGroup,
  Radio,
  Select,
} from "@mantine/core";
import classes from "../../employee.module.css";
import { IconArrowUp } from "@tabler/icons-react";
import useBulk from "@/hooks/useBulk";

const PageWrap = () => {
  const {
    form,
    router,
    handleSubmit,
    loading,
    retryForm,
    hideFile,
    fields,
    handleRetry,
  } = useBulk();

  return (
    <Card
      style={{
        backgroundColor: "#ffff",
        borderRadius: "15px",
        borderBottom: "1px solid #DDDDDD",
        minHeight: "390px",
        margin: "0px",
      }}
    >
      <CardSection py="25px" style={{ borderBottom: "1px solid #DDDDDD" }}>
        <EmployeeNav tabTitle={"data import"} />
      </CardSection>
      <Box
        style={{
          marginTop: "2rem",
          backgroundColor: "#EEF9FF",
          borderRadius: "15px",
          padding: "25px",
        }}
      >
        <Text style={{ fontSize: "18px", fontWeight: 600 }}>
          Important guidelines for data import:
        </Text>
        <List type="ordered" mt="lg" withPadding>
          <ListItem style={{ fontSize: "15px" }}>
            All fields are mandatory.
          </ListItem>

          <ListItem style={{ fontSize: "15px" }}>
            If specifying gender, choose Male or Female.
          </ListItem>
          <ListItem style={{ fontSize: "15px" }}>
            Each import file should contain a maximum of 100 records
          </ListItem>

          <ListItem style={{ fontSize: "15px" }}>
            Refer to the provided sample CSV file for guidance{" "}
            <a
              href="https://res.cloudinary.com/heasyresource/raw/upload/fl_attachment/i7ovqjkfy3udolr4psty.csv"
              download
              target="_blank"
              style={{ textDecoration: "underline", color: "#3377FF" }}
            >
              download
            </a>
          </ListItem>
        </List>
      </Box>
      {!hideFile && (
        <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
          <Box className={classes.fileInput}>
            <FileInput
              label="Select File"
              withAsterisk
              placeholder="No file selected"
              variant="filled"
              size="xl"
              accept=".csv"
              leftSectionWidth={140}
              {...form.getInputProps("employees")}
              required
              disabled={loading}
              leftSectionPointerEvents="none"
              leftSection={
                <Button
                  disabled
                  style={{
                    textTransform: "capitalize",
                    backgroundColor: "#fff",
                  }}
                >
                  browse file
                </Button>
              }
              rightSection={
                <ActionIcon
                  disabled
                  size={"lg"}
                  color="#fff"
                  style={{ backgroundColor: "#fff" }}
                >
                  <IconArrowUp color="#817F7F" />
                </ActionIcon>
              }
            />
            <Box mt="1rem">
              <Text
                style={{
                  fontSize: "14px",
                  color: "#565656",
                }}
              >
                File must not be larger than 2mb
              </Text>
              <Text
                style={{
                  fontSize: "14px",
                  color: "#565656",
                }}
              >
                File format must be in .csv extension
              </Text>
            </Box>
          </Box>
          <Group justify="flex-end" align="center" mt={"2rem"}>
            <Button
              variant="outline"
              size="md"
              color="#3377FF"
              style={{ borderColor: "#3377FF" }}
              tt="capitalize"
              px="30px"
              onClick={() => router.back()}
              disabled={loading}
            >
              back
            </Button>
            <Button
              variant="contained"
              size="md"
              color="#3377FF"
              tt="capitalize"
              px="30px"
              className={classes.btn}
              type="submit"
              style={{
                backgroundColor: "#3377FF",
              }}
              disabled={loading}
            >
              {loading ? (
                <Loader type="dots" color="white" size={"md"} />
              ) : (
                "upload"
              )}
            </Button>
          </Group>
        </form>
      )}

      {retryForm.values.employees.length !== 0 && (
        <form
          style={{ marginTop: "2rem" }}
          onSubmit={retryForm.onSubmit((values) => handleRetry(values))}
        >
          {retryForm.values.employees.map((item, index) => (
            <Grid
              gutter={"lg"}
              key={`${item}-${index}`}
              style={{
                borderBottom: "1px solid #ced4da",
                paddingBottom: "1rem",
                marginBottom: "2rem",
              }}
            >
              <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
                <TextInput
                  label="First Name"
                  withAsterisk
                  size="md"
                  placeholder="John"
                  style={{ textAlign: "start", width: "100%" }}
                  classNames={{ label: classes.label, error: classes.error }}
                  {...retryForm?.getInputProps(
                    `employees.${index}.employee.firstName`
                  )}
                  disable={loading}
                />

                {item.validation.errors?.map((err, index) => (
                  <Text key={index} style={{ fontSize: "small", color: "red" }}>
                    {err.field === "firstName" && err.message}
                  </Text>
                ))}
              </GridCol>
              <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
                <TextInput
                  label="Middle Name"
                  size="md"
                  placeholder="Smith"
                  style={{ textAlign: "start", width: "100%" }}
                  classNames={{ label: classes.label, error: classes.error }}
                  {...retryForm?.getInputProps(
                    `employees.${index}.employee.middleName`
                  )}
                  disabled={loading}
                />
                {item.validation.errors?.map((err, index) => (
                  <Text key={index} style={{ fontSize: "small", color: "red" }}>
                    {err.field === "middleName" && err.message}
                  </Text>
                ))}
              </GridCol>
              <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
                <TextInput
                  label="Last Name"
                  withAsterisk
                  size="md"
                  placeholder="Corner"
                  style={{ textAlign: "start", width: "100%" }}
                  classNames={{ label: classes.label, error: classes.error }}
                  {...retryForm?.getInputProps(
                    `employees.${index}.employee.lastName`
                  )}
                  disabled={loading}
                />
                {item.validation.errors?.map((err, index) => (
                  <Text key={index} style={{ fontSize: "small", color: "red" }}>
                    {err.field === "lastName" && err.message}
                  </Text>
                ))}
              </GridCol>
              <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
                <TextInput
                  label="Position"
                  withAsterisk
                  size="md"
                  style={{ textAlign: "start", width: "100%" }}
                  classNames={{ label: classes.label, error: classes.error }}
                  {...retryForm?.getInputProps(
                    `employees.${index}.employee.position`
                  )}
                  disabled={loading}
                />
                {item.validation.errors?.map((err, index) => (
                  <Text key={index} style={{ fontSize: "small", color: "red" }}>
                    {err.field === "position" && err.message}
                  </Text>
                ))}
              </GridCol>
              <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
                <Select
                  data={fields}
                  searchable
                  label="Department"
                  withAsterisk
                  size="md"
                  style={{ textAlign: "start", width: "100%" }}
                  classNames={{ label: classes.label, error: classes.error }}
                  {...retryForm?.getInputProps(
                    `employees.${index}.employee.departmentName`
                  )}
                  disabled={loading}
                />
                {item.validation.errors?.map((err, index) => (
                  <Text key={index} style={{ fontSize: "small", color: "red" }}>
                    {err.field === "departmentName" && err.message}
                  </Text>
                ))}
              </GridCol>
              <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
                <TextInput
                  label="Work Email"
                  type="email"
                  withAsterisk
                  size="md"
                  style={{ textAlign: "start", width: "100%" }}
                  classNames={{ label: classes.label, error: classes.error }}
                  {...retryForm?.getInputProps(
                    `employees.${index}.employee.workEmail`
                  )}
                  disabled={loading}
                />

                {item.validation.errors?.map((err, index) => (
                  <Text key={index} style={{ fontSize: "small", color: "red" }}>
                    {err.field === "workEmail" && err.message}
                  </Text>
                ))}
              </GridCol>

              <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
                <RadioGroup
                  size="md"
                  withAsterisk
                  label="Gender"
                  style={{ textAlign: "start", width: "100%" }}
                  classNames={{ label: classes.label, error: classes.error }}
                  {...retryForm?.getInputProps(
                    `employees.${index}.employee.gender`
                  )}
                  disabled={loading}
                >
                  <Group mt="xs">
                    <Radio
                      value="Male"
                      disabled={loading}
                      label="Male"
                      labelPosition="left"
                      color="#3377FF"
                    />
                    <Radio
                      value="Female"
                      disabled={loading}
                      label="Female"
                      labelPosition="left"
                      color="#3377FF"
                    />
                  </Group>
                </RadioGroup>
                {item.validation.errors?.map((err, index) => (
                  <Text key={index} style={{ fontSize: "small", color: "red" }}>
                    {err.field === "gender" && err.message}
                  </Text>
                ))}
              </GridCol>
            </Grid>
          ))}
          <Group justify="flex-end" align="center" mt={"2rem"}>
            <Button
              variant="outline"
              size="md"
              color="#3377FF"
              style={{ borderColor: "#3377FF" }}
              tt="capitalize"
              px="30px"
              onClick={() => router.back()}
              disabled={loading}
            >
              back
            </Button>
            <Button
              variant="contained"
              size="md"
              color="#3377FF"
              tt="capitalize"
              px="30px"
              className={classes.btn}
              type="submit"
              style={{
                backgroundColor: "#3377FF",
              }}
              disabled={loading}
            >
              {loading ? (
                <Loader type="dots" color="white" size={"md"} />
              ) : (
                "submit"
              )}
            </Button>
          </Group>
        </form>
      )}
    </Card>
  );
};

export default PageWrap;
