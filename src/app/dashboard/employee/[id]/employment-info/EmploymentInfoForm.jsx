"use client";
import useEmploymentInfo from "@/hooks/useEmploymentInfo";
import {
  ActionIcon,
  Box,
  Button,
  Grid,
  GridCol,
  Group,
  Loader,
  Modal,
  Select,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import React from "react";
import classes from "../../employee.module.css";
import { IconAlertCircle } from "@tabler/icons-react";
const EmploymentInfoForm = () => {
  const currentDate = new Date();
  const {
    form,
    handleSubmit,
    departments,
    employmentTypes,
    loading,
    router,
    terminate,
    handleTerminate,
    open,
    close,
    opened,
  } = useEmploymentInfo();
  return (
    <>
      <Box>
        <Text tt={"capitalize"} style={{ fontSize: "22px", fontWeight: 700 }}>
          Employment Information
        </Text>
        <form
          style={{ height: "100%", marginTop: "2rem" }}
          onSubmit={form.onSubmit((values) => handleSubmit(values))}
        >
          <Stack style={{ gap: "3rem" }}>
            <Box>
              <Text
                c="#4D4D4D"
                tt="capitalize"
                style={{
                  fontWeight: 500,
                  fontSize: "18px",
                  textAlign: "start",
                }}
              >
                Job details:
              </Text>

              <Grid style={{ marginTop: "20px" }} gutter="xl">
                <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
                  <TextInput
                    size="md"
                    withAsterisk
                    label="Position"
                    style={{ textAlign: "start", width: "100%" }}
                    classNames={{ label: classes.label, error: classes.error }}
                    {...form.getInputProps("position")}
                    disabled={loading}
                  />
                </GridCol>
                <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
                  <Select
                    size="md"
                    withAsterisk
                    label="Department"
                    style={{ textAlign: "start", width: "100%" }}
                    data={departments}
                    classNames={{ label: classes.label, error: classes.error }}
                    {...form.getInputProps("departmentId")}
                    disabled={loading}
                    allowDeselect={false}
                  />
                </GridCol>
                <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
                  <Select
                    size="md"
                    withAsterisk
                    label="Employement Type"
                    style={{ textAlign: "start", width: "100%" }}
                    data={employmentTypes}
                    classNames={{ label: classes.label, error: classes.error }}
                    {...form.getInputProps("employmentTypeId")}
                    disabled={loading}
                    allowDeselect={false}
                  />
                </GridCol>
                <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
                  <Select
                    size="md"
                    withAsterisk
                    label="Work Mode"
                    style={{ textAlign: "start", width: "100%" }}
                    data={["On-Site", "Hybrid", "Remote"]}
                    classNames={{ label: classes.label, error: classes.error }}
                    {...form.getInputProps("workMode")}
                    disabled={loading}
                    allowDeselect={false}
                  />
                </GridCol>
                <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
                  <Select
                    disabled
                    size="md"
                    withAsterisk
                    label="Employment Status"
                    style={{ textAlign: "start", width: "100%" }}
                    data={["Terminated", "Employed"]}
                    {...form.getInputProps("status")}
                    classNames={{ label: classes.label, error: classes.error }}
                    allowDeselect={false}
                  />
                </GridCol>

                <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
                  <DateInput
                    size="md"
                    withAsterisk
                    style={{ textAlign: "start", width: "100%" }}
                    label="Joined Date"
                    classNames={{ label: classes.label, error: classes.error }}
                    {...form.getInputProps("resumptionDate")}
                    disabled={loading}
                    maxDate={currentDate}
                  />
                </GridCol>
              </Grid>
            </Box>
            {form.values.status === "Employed" && (
              <Box>
                <Text
                  c="#4D4D4D"
                  tt="capitalize"
                  style={{
                    fontWeight: 500,
                    fontSize: "18px",
                    textAlign: "start",
                  }}
                >
                  Employee Termination:
                </Text>

                <Grid style={{ marginTop: "20px" }} gutter="xl">
                  <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
                    <Button
                      disabled={loading}
                      variant="contained"
                      size="md"
                      color="#FF0000"
                      tt="capitalize"
                      w={{ lg: "auto", md: "auto", sm: "auto" }}
                      className={classes.btn}
                      style={{
                        backgroundColor: "#FF0000",
                      }}
                      onClick={open}
                    >
                      {terminate ? (
                        <Loader type="dots" color="white" size="md" />
                      ) : (
                        "terminate employment"
                      )}
                    </Button>
                  </GridCol>
                </Grid>
              </Box>
            )}
            <Group justify="flex-end" align="center" mt={"auto"}>
              <Button
                variant="outline"
                size="md"
                color="#3377FF"
                style={{ borderColor: "#3377FF" }}
                tt="capitalize"
                px="30px"
                disabled={loading}
                onClick={() => router.back()}
              >
                back
              </Button>
              <Button
                variant="contained"
                size="md"
                color="#3377FF"
                tt="capitalize"
                px="30px"
                type="submit"
                style={{
                  backgroundColor: "#3377FF",
                }}
                disabled={loading}
              >
                {loading ? (
                  <Loader color="white" type="dots" size="md" />
                ) : (
                  "save"
                )}
              </Button>
            </Group>
          </Stack>
        </form>
      </Box>

      <Modal
        opened={opened}
        onClose={close}
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
        centered
        closeOnClickOutside={false}
        withCloseButton={false}
      >
        <Stack py={"3rem"} justify="center" align="center">
          <ActionIcon variant="transparent" size="xl">
            <IconAlertCircle
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
            Are you sure ?
          </Text>

          <Text
            style={{ fontSize: "16px", color: "#1E1E1E", textAlign: "center" }}
          >
            You are about to terminate this employee
          </Text>
          <Group mt="1rem" justify="flex-end" align="center">
            <Button
              variant="outline"
              size="md"
              color="#A3A3A3"
              style={{ borderColor: "#A3A3A3" }}
              tt="capitalize"
              onClick={close}
              disabled={terminate}
            >
              cancel
            </Button>
            <Button
              variant="contained"
              size="md"
              style={{ backgroundColor: "#FF0000" }}
              tt="capitalize"
              onClick={() => {
                handleTerminate();
              }}
              disabled={terminate}
            >
              {terminate ? (
                <Loader type="dots" size={"md"} color="white" />
              ) : (
                "terminate"
              )}
            </Button>
          </Group>
        </Stack>
      </Modal>
    </>
  );
};

export default EmploymentInfoForm;
