"use client";
import {
  Button,
  Grid,
  GridCol,
  Group,
  Loader,
  Modal,
  TextInput,
  Textarea,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import React from "react";
import classes from "./employeeLayout.module.css";

const AddEduModal = ({
  educationForm,
  handleEduSubmit,
  loading,
  closeEdu,
  openedEdu,
}) => {
  const currentDate = new Date();
  return (
    <Modal
      title="Add Education"
      withCloseButton={false}
      size="xl"
      closeOnClickOutside={false}
      centered
      opened={openedEdu}
      onClose={closeEdu}
      overlayProps={{
        backgroundOpacity: 0.55,
        blur: 3,
      }}
    >
      <form
        onSubmit={educationForm?.onSubmit((values) => handleEduSubmit(values))}
      >
        <Grid
          style={{
            margin: "20px 0",
            overflowY: "scroll",
            maxHeight: "400px",
          }}
          gutter="xl"
        >
          <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
            <TextInput
              size="md"
              withAsterisk
              label="Institute Name"
              style={{ textAlign: "start", width: "100%" }}
              classNames={{ label: classes.label, error: classes.error }}
              {...educationForm?.getInputProps("institution")}
              disabled={loading}
            />
          </GridCol>
          <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
            <TextInput
              size="md"
              withAsterisk
              label="Field of Study"
              style={{ textAlign: "start", width: "100%" }}
              classNames={{ label: classes.label, error: classes.error }}
              {...educationForm?.getInputProps("fieldOfStudy")}
              placeholder="Computer Science"
              disabled={loading}
            />
          </GridCol>
          <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
            <TextInput
              size="md"
              withAsterisk
              label="Degree"
              style={{ textAlign: "start", width: "100%" }}
              classNames={{ label: classes.label, error: classes.error }}
              {...educationForm?.getInputProps("degree")}
              placeholder="Bachelor Of Science"
              disabled={loading}
            />
          </GridCol>
          <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
            <TextInput
              size="md"
              withAsterisk
              label="Grade"
              style={{ textAlign: "start", width: "100%" }}
              classNames={{ label: classes.label, error: classes.error }}
              {...educationForm?.getInputProps("grade")}
              placeholder="3.6/4.0"
              disabled={loading}
            />
          </GridCol>
          <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
            <DateInput
              size="md"
              withAsterisk
              label="Start Date"
              style={{ textAlign: "start", width: "100%" }}
              classNames={{ label: classes.label, error: classes.error }}
              {...educationForm?.getInputProps("startDate")}
              disabled={loading}
              maxDate={currentDate}
            />
          </GridCol>
          <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
            <DateInput
              size="md"
              withAsterisk
              label="End Date"
              style={{ textAlign: "start", width: "100%" }}
              classNames={{ label: classes.label, error: classes.error }}
              {...educationForm?.getInputProps("endDate")}
              disabled={loading}
              minDate={educationForm?.values.startDate || ""}
            />
          </GridCol>
          <GridCol span={12}>
            <Textarea
              size="md"
              label="Comment"
              style={{ textAlign: "start", width: "100%" }}
              classNames={{ label: classes.label, error: classes.error }}
              {...educationForm?.getInputProps("description")}
              disabled={loading}
              minRows={2}
              autosize
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
            px="50px"
            w={{ lg: "auto", md: "auto", sm: "auto" }}
            onClick={() => {
              closeEdu();
              educationForm?.reset();
            }}
            disabled={loading}
          >
            cancel
          </Button>
          <Button
            variant="contained"
            size="md"
            color="#3377FF"
            tt="capitalize"
            px="50px"
            w={{ lg: "auto", md: "auto", sm: "auto" }}
            type="submit"
            style={{
              backgroundColor: "#3377FF",
            }}
            disabled={loading}
          >
            {loading ? <Loader color="white" type="dots" size="md" /> : "save"}
          </Button>
        </Group>
      </form>
    </Modal>
  );
};

export default AddEduModal;
