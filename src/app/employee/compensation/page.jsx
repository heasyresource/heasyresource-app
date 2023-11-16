import { Container, Grid, Space } from "@mantine/core";
import React from "react";
import classes from "../leave/leave.module.css";
import LeaveDetailsTable from "../components/LeaveDetailsTable";
import CompensationMiniCards from "../components/CompensationMiniCards";
import EmployeeCompensationTable from "../components/EmployeeCompensationTable";

const Leave = () => {
  return (
    <Container bg={'#f8f9fa'} className={classes.container} size="100%">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Grid justify="space-between" py={"2rem"} gutter={"lg"}>
            {/* <LeaveMiniCards /> */}
            <CompensationMiniCards />
          </Grid>
          <Space h={40} />
          {/* <LeaveDetailsTable /> */}
          <EmployeeCompensationTable />
        </div>
      </div>
    </Container>
  );
};

export default Leave;
