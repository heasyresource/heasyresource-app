import React from "react";
import { Button, Grid, GridCol, Group, Select, TextInput } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import classes from "./HiringLayout.module.css";
import { IconCalendarBolt } from "@tabler/icons-react";
const SearchFields = () => {
  return (
    <form style={{ marginTop: "1rem" }}>
      <Grid justify="flex-start" className={classes.formWrap}>
        <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
          <TextInput
            size="md"
            label="Applicant Name"
            placeholder=""
            style={{ width: "100%" }}
            classNames={{
              label: classes.label,
              error: classes.error,
              placeholder: classes.placeholder,
            }}
          />
        </GridCol>
        <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
          <Select
            size="md"
            label="Employment Status"
            style={{ width: "100%" }}
            data={["Pending", "Rejected", "Approved"]}
            classNames={{
              label: classes.label,
              error: classes.error,
              placeholder: classes.placeholder,
            }}
            allowDeselect={false}
          />
        </GridCol>
        <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
          <Select
            size="md"
            label="Job Title"
            style={{ width: "100%" }}
            data={["Junior Account Assistant"]}
            classNames={{
              label: classes.label,
              error: classes.error,
              placeholder: classes.placeholder,
            }}
            allowDeselect={false}
          />
        </GridCol>
      </Grid>
      <Group justify="flex-end" mt={"3rem"}>
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
