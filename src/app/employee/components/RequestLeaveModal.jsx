"use client";
import {
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
  Textarea,
} from "@mantine/core";
import React from "react";
import classes from "../leave/leave.module.css";
import { IconCalendar } from "@tabler/icons-react";
import { DateInput } from "@mantine/dates";

const RequestLeaveModal = ({
  opened,
  close,
  form,
  handleSubmit,
  loading,
  types,
}) => {
  const currentDate = new Date();
  return (
    <Modal
      size="lg"
      centered
      closeOnClickOutside={false}
      withCloseButton={false}
      opened={opened}
      onClose={close}
      overlayProps={{
        backgroundOpacity: 0.55,
        blur: 3,
      }}
    >
      <Box>
        <Text
          tt={"capitalize"}
          style={{
            fontSize: "22px",
            fontWeight: 700,
          }}
        >
          Request Leave
        </Text>
        <form onSubmit={form?.onSubmit((values) => handleSubmit(values))}>
          <Stack gap={"2rem"}>
            <Grid gutter="xl" className={classes.formWrap}>
              <GridCol span={12}>
                <Select
                  data={types}
                  size="md"
                  withAsterisk
                  label="Leave Type"
                  style={{ width: "100%" }}
                  classNames={{
                    label: classes.label,
                    error: classes.error,
                    placeholder: classes.placeholder,
                  }}
                  {...form?.getInputProps("leaveTypeId")}
                  allowDeselect={false}
                  disabled={loading}
                />
              </GridCol>
              <GridCol span={{ lg: 6, md: 12, sm: 12 }}>
                <DateInput
                  withAsterisk
                  size="md"
                  minDate={currentDate}
                  label="Start Date"
                  {...form?.getInputProps("startDate")}
                  style={{ width: "100%" }}
                  rightSection={<IconCalendar color="#3377ff" />}
                  classNames={{
                    label: classes.label,
                    error: classes.error,
                    placeholder: classes.placeholder,
                  }}
                  disabled={loading}
                />
              </GridCol>
              <GridCol span={{ lg: 6, md: 12, sm: 12 }}>
                <DateInput
                  withAsterisk
                  size="md"
                  {...form?.getInputProps("endDate")}
                  label="End Date"
                  minDate={form?.values.startDate || ""}
                  style={{ width: "100%" }}
                  rightSection={<IconCalendar color="#3377ff" />}
                  classNames={{
                    label: classes.label,
                    error: classes.error,
                    placeholder: classes.placeholder,
                  }}
                  disabled={loading}
                />
              </GridCol>
              <GridCol span={12}>
                <Textarea
                  size="md"
                  {...form?.getInputProps("comment")}
                  label="Comment"
                  classNames={{
                    label: classes.label,
                    error: classes.error,
                    placeholder: classes.placeholder,
                  }}
                  disabled={loading}
                />
              </GridCol>
            </Grid>
            <Group
              justify="flex-end"
              className={classes.btnWrap}
              align="center"
              mt={"auto"}
            >
              <Button
                variant="outline"
                size="md"
                color="#3377FF"
                style={{ borderColor: "#3377FF" }}
                tt="capitalize"
                px="30px"
                w={{ lg: "auto", md: "auto", sm: "auto" }}
                className={classes.btn}
                disabled={loading}
                onClick={() => {
                  close();
                  form?.reset();
                }}
              >
                back
              </Button>
              <Button
                variant="contained"
                size="md"
                color="#3377FF"
                tt="capitalize"
                px="30px"
                w={{ lg: "auto", md: "auto", sm: "auto" }}
                className={classes.btn}
                type="submit"
                style={{
                  backgroundColor: "#3377FF",
                }}
                disabled={loading}
              >
                {loading ? (
                  <Loader color="white" type="dots" size={"md"} />
                ) : (
                  "submit"
                )}
              </Button>
            </Group>
          </Stack>
        </form>
      </Box>
    </Modal>
  );
};

export default RequestLeaveModal;
