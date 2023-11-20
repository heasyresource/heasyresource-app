"use client";
import { Box } from "@mantine/core";
import React from "react";
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

  return (
    <Box>
      <div className={classes.inner}>
        <div className={classes.content}>
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
