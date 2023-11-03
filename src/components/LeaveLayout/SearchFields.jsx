import React from "react";
import { Button, Grid, GridCol, Group, Select, TextInput } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import classes from "./leaveLayout.module.css";
import { IconCalendarBolt } from "@tabler/icons-react";
const SearchFields = () => {
  return (
    <form>
      <Grid justify="space-between" className={classes.formWrap}>
        <GridCol span={{ lg: 3, md: 6, sm: 12 }}>
          <TextInput
            size="md"
            label="Employee Name"
            placeholder="John smith"
            style={{ width: "100%" }}
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
            label="From Date"
            placeholder="DD/MM/YYY"
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
            label="To Date"
            placeholder="DD/MM/YYY"
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
          <Select
            size="md"
            label="Leave Type"
            style={{ width: "100%" }}
            data={[]}
            classNames={{
              label: classes.label,
              error: classes.error,
              placeholder: classes.placeholder,
            }}
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
