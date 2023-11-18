"use client";
import { Box, Grid, Space } from "@mantine/core";
import React from "react";
import LeaveMiniCards from "../components/LeaveMiniCards";
import LeaveDetailsTable from "../components/LeaveDetailsTable";
import classes from "../leave/leave.module.css";
import useEmloyeeLeave from "@/hooks/useEmloyeeLeave";

const LeaveWrap = () => {
  const {
    form,
    loading,
    openReq,
    openedReq,
    closeReq,
    gettingLeaves,
    leaves,
    paginate,
    pagination,
    handleSubmit,
    types,
  } = useEmloyeeLeave();
  console.log(leaves, "leaves");
  return (
    <Box>
      <div className={classes.inner}>
        <div className={classes.content}>
          {/* <Grid justify="space-between" py={"2rem"} gutter={"lg"}>
            <LeaveMiniCards />
          </Grid>
          <Space h={40} /> */}
          <LeaveDetailsTable
            form={form}
            loading={loading}
            openReq={openReq}
            openedReq={openedReq}
            closeReq={closeReq}
            paginate={paginate}
            pagination={pagination}
            handleSubmit={handleSubmit}
            leaves={leaves}
            types={types}
            gettingLeaves={gettingLeaves}
          />
        </div>
      </div>
    </Box>
  );
};

export default LeaveWrap;
