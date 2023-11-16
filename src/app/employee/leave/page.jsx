import { Container, Grid, Space } from "@mantine/core";
import React from "react";
import classes from "../leave/leave.module.css";
import LeaveMiniCards from "../components/LeaveMiniCards";
import LeaveDetailsTable from "../components/LeaveDetailsTable";

const Leave = () => {
  return (
    <Container className={classes.leaveContainer} size="100%">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Grid justify="space-between" py={"2rem"} gutter={"lg"}>
            <LeaveMiniCards />
          </Grid>
          <Space h={40} />
          <LeaveDetailsTable />
        </div>
      </div>
    </Container>
  );
};

export default Leave;
