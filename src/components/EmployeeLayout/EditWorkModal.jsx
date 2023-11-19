"use client";
import {
  Button,
  Checkbox,
  Grid,
  GridCol,
  Group,
  Loader,
  Modal,
  Select,
  TextInput,
  Textarea,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import React from "react";
import classes from "./employeeLayout.module.css";

const EditWorkModal = ({
  employmentType,
  loading,
  experienceForm,
  handleEditExp,
  closeEditExp,
  openedEditExp,
}) => {
  return (
    <Modal
      title="Edit Work Experience"
      size="xl"
      closeOnClickOutside={false}
      withCloseButton={false}
      centered
      opened={openedEditExp}
      onClose={closeEditExp}
      overlayProps={{
        backgroundOpacity: 0.55,
        blur: 3,
      }}
    >
      <form
        onSubmit={experienceForm?.onSubmit((values) => handleEditExp(values))}
      >
        <Grid
          style={{
            margin: "20px 0",
            maxHeight: "400px",
            overflowY: "scroll",
          }}
          gutter="lg"
        >
          <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
            <TextInput
              size="md"
              withAsterisk
              label="Company Name"
              style={{ textAlign: "start", width: "100%" }}
              classNames={{ label: classes.label, error: classes.error }}
              {...experienceForm?.getInputProps("companyName")}
              disabled={loading}
            />
          </GridCol>
          <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
            <TextInput
              size="md"
              withAsterisk
              label="Position"
              style={{ textAlign: "start", width: "100%" }}
              classNames={{ label: classes.label, error: classes.error }}
              {...experienceForm?.getInputProps("position")}
              disabled={loading}
            />
          </GridCol>
          <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
            <Select
              data={employmentType}
              size="md"
              withAsterisk
              allowDeselect={false}
              label="Employment Type"
              style={{ textAlign: "start", width: "100%" }}
              classNames={{ label: classes.label, error: classes.error }}
              {...experienceForm?.getInputProps("employmentTypeId")}
              disabled={loading}
            />
          </GridCol>
          <GridCol span={{ lg: 6, md: 6, sm: 12 }}>
            <Select
              size="md"
              withAsterisk
              label="Work Mode"
              style={{ textAlign: "start", width: "100%" }}
              data={["On-Site", "Hybrid", "Remote"]}
              classNames={{ label: classes.label, error: classes.error }}
              {...experienceForm?.getInputProps("workMode")}
              disabled={loading}
              allowDeselect={false}
            />
          </GridCol>
          <GridCol span={{ lg: 6, md: 6, sm: 12 }}>
            <TextInput
              size="md"
              withAsterisk
              label="Company Location"
              style={{ textAlign: "start", width: "100%" }}
              classNames={{ label: classes.label, error: classes.error }}
              {...experienceForm?.getInputProps("location")}
              disabled={loading}
              placeholder="Lagos, Nigeria"
            />
          </GridCol>

          <GridCol
            span={12}
            style={{ display: "flex", alignItems: "flex-end" }}
          >
            <Checkbox
              defaultChecked={experienceForm?.values.isPresent}
              color="#3377FF"
              {...experienceForm?.getInputProps("isPresent")}
              label="I currently work here"
            />
          </GridCol>
          <GridCol span={{ lg: 6, md: 12, sm: 12 }}>
            <DateInput
              size="md"
              withAsterisk
              label="Start Date"
              style={{ textAlign: "start", width: "100%" }}
              classNames={{ label: classes.label, error: classes.error }}
              {...experienceForm?.getInputProps("startDate")}
              disabled={loading}
            />
          </GridCol>
          <GridCol span={{ lg: 6, md: 12, sm: 12 }}>
            <DateInput
              size="md"
              withAsterisk
              label="End Date"
              style={{ textAlign: "start", width: "100%" }}
              classNames={{ label: classes.label, error: classes.error }}
              {...experienceForm?.getInputProps("endDate")}
              disabled={loading || experienceForm.values.isPresent}
            />
          </GridCol>

          <GridCol span={12}>
            <Textarea
              size="md"
              label="Comment"
              style={{ textAlign: "start", width: "100%" }}
              classNames={{ label: classes.label, error: classes.error }}
              {...experienceForm?.getInputProps("description")}
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
              closeEditExp();
              experienceForm?.reset();
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
            {loading ? (
              <Loader color="white" type="dots" size="md" />
            ) : (
              "update"
            )}
          </Button>
        </Group>
      </form>
    </Modal>
  );
};

export default EditWorkModal;
