import React from "react";
import { Button, Grid, GridCol, Group, Select } from "@mantine/core";
import classes from "./HiringLayout.module.css";
const VacancySearchFields = ({ loading }) => {
  return (
    <form style={{ marginTop: "1rem" }}>
      <Grid justify="space-between" className={classes.formWrap}>
        <GridCol span={{ lg: 3, md: 6, sm: 12 }}>
          <Select
            size="md"
            label="Hiring Manager"
            placeholder="Elizabeth Okoli"
            data={["Elizabeth Okoli"]}
            style={{ width: "100%" }}
            classNames={{
              label: classes.label,
              error: classes.error,
              placeholder: classes.placeholder,
            }}
            allowDeselect={false}
          />
        </GridCol>
        <GridCol span={{ lg: 3, md: 6, sm: 12 }}>
          <Select
            size="md"
            label="Employment Type"
            data={[]}
            style={{ width: "100%" }}
            classNames={{
              label: classes.label,
              error: classes.error,
              placeholder: classes.placeholder,
            }}
            rightSectionWidth={70}
            allowDeselect={false}
          />
        </GridCol>
        <GridCol span={{ lg: 3, md: 6, sm: 12 }}>
          <Select
            size="md"
            label="Work Mode"
            data={["On-Site", "Hybrid", "Remote"]}
            style={{ width: "100%" }}
            classNames={{
              label: classes.label,
              error: classes.error,
              placeholder: classes.placeholder,
            }}
            allowDeselect={false}
          />
        </GridCol>
        <GridCol span={{ lg: 3, md: 6, sm: 12 }}>
          <Select
            size="md"
            label="Job Category"
            data={[]}
            style={{ width: "100%" }}
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
          variant="outline"
          color="#3377FF"
          px={"40px"}
        >
          reset
        </Button>
        <Button
          style={{ fontSize: "16px", textTransform: "capitalize" }}
          size="md"
          variant="filled"
          color="#3377FF"
          px={"40px"}
        >
          search
        </Button>
      </Group>
    </form>
  );
};
export default VacancySearchFields;
