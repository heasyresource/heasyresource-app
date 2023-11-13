import React from "react";
import { Button, Grid, GridCol, Group, Select, TextInput } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import classes from "./HiringLayout.module.css";
import { IconCalendarBolt } from "@tabler/icons-react";
const SearchFields = () => {
  return (
    <form style={{ marginTop: "1rem" }}>
      <Grid
        gutter="xl"
        px={40}
        justify="space-between"
        className={classes.formWrap}
      >
        <GridCol span={{ lg: 3, md: 6, sm: 12 }}>
          <TextInput
            size="md"
            required
            label="Candidate Name"
            placeholder="Elizabeth Okoli"
            style={{ width: "100%" }}
            classNames={{
              label: classes.label,
              error: classes.error,
              placeholder: classes.placeholder,
            }}
          />
        </GridCol>
        <GridCol span={{ lg: 3, md: 6, sm: 12 }}>
          <Select
            size="md"
            required
            label="Employment Type"
            style={{ width: "100%" }}
            placeholder="Account Assistant"
            data={["Account Assistant"]}
            classNames={{
              label: classes.label,
              error: classes.error,
              placeholder: classes.placeholder,
            }}
          />
        </GridCol>
        <GridCol span={{ lg: 3, md: 6, sm: 12 }}>
          <Select
            size="md"
            required
            label="Vacancy"
            style={{ width: "100%" }}
            placeholder="Junior Account Assistant"
            data={["Junior Account Assistant"]}
            classNames={{
              label: classes.label,
              error: classes.error,
              placeholder: classes.placeholder,
            }}
          />
        </GridCol>
        <GridCol span={{ lg: 3, md: 6, sm: 12 }}>
          <Select
            size="md"
            required
            label="Status"
            style={{ width: "100%" }}
            placeholder="Accepted"
            data={["Accepted", "Rejected"]}
            classNames={{
              label: classes.label,
              error: classes.error,
              placeholder: classes.placeholder,
            }}
          />
        </GridCol>
        <GridCol span={{ lg: 3, md: 6, sm: 12 }}>
          <Select
            size="md"
            required
            label="Hiring Manager"
            style={{ width: "100%" }}
            placeholder="Fatimah Ahmed"
            data={["Fatimah Ahmed"]}
            classNames={{
              label: classes.label,
              error: classes.error,
              placeholder: classes.placeholder,
            }}
          />
        </GridCol>
        <GridCol span={{ lg: 3, md: 6, sm: 12 }}>
          <Select
            size="md"
            required
            label="Method of Application"
            style={{ width: "100%" }}
            placeholder="Manual"
            data={["Manual", "Referral"]}
            classNames={{
              label: classes.label,
              error: classes.error,
              placeholder: classes.placeholder,
            }}
          />
        </GridCol>
        <GridCol span={{ lg: 3, md: 6, sm: 12 }}>
          <DateInput
            size="md"
            required
            label="Date of Application"
            placeholder="From"
            style={{ width: "100%" }}
            classNames={{
              label: classes.label,
              error: classes.error,
              placeholder: classes.placeholder,
            }}
            rightSectionWidth={70}
            rightSection={<IconCalendarBolt style={{ color: "#7ea6f4" }} />}
          />
        </GridCol>
        <GridCol span={{ lg: 3, md: 6, sm: 12 }}>
          <DateInput
            size="md"
            required
            label="Date of Application"
            placeholder="To"
            style={{ width: "100%" }}
            classNames={{
              label: classes.label,
              error: classes.error,
              placeholder: classes.placeholder,
            }}
            rightSectionWidth={70}
            rightSection={<IconCalendarBolt style={{ color: "#7ea6f4" }} />}
          />
        </GridCol>
      </Grid>
      <Group justify="flex-end" mt={"3rem"}>
        <Button
          style={{ fontSize: "16px", textTransform: "capitalize" }}
          size="md"
          required
          variant="outline"
          color="#3377FF"
          px={"40px"}
          type="submit"
        >
          Reset
        </Button>
        <Button
          style={{ fontSize: "16px", textTransform: "capitalize" }}
          size="md"
          variant="filled"
          color="#3377FF"
          px={"40px"}
          type="submit"
        >
          search
        </Button>
      </Group>
    </form>
  );
};
export default SearchFields;
