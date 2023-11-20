import { Container, Grid, Group, Space, Text } from "@mantine/core";
import React from "react";
import classes from "../leave.module.css";
import LeaveDetailsRow from "../../components/LeaveDetailsRow";

const LeaveDetails = () => {
  return (
    <Container className={classes.container} size="100%">
      <div className={classes.inner}>
        <div className={classes.content}>
            <Space h={20} />
          <Text fz={32} fw={700}>
            Leave Details
          </Text>
          <Grid justify="space-between">
            <LeaveDetailsRow />
          </Grid>
          <Space h={40} />
          <Text c={"#7EA6F4"} fz={"sm"} fw={700}>
            Leave Description
          </Text>
          <Space h={20} />
          <Text ta={'justify'} fz={17} fw={400}>
            Employees returning from maternity leave must inform the HR
            department of their return date in advance. Flexible work
            arrangements or a gradual return to full-time hours may be
            available. The company is committed to supporting employees during
            this significant life event. Employees may discuss concerns or
            request accommodations with the HR department.
          </Text>
        </div>
      </div>
    </Container>
  );
};

export default LeaveDetails;
