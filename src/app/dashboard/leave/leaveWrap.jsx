"use client";
import { LeaveNav, LeaveTable, SearchFields } from "@/components";
import { useAddLeaveType } from "@/hooks";
import { Card, CardSection } from "@mantine/core";
import React from "react";

const LeaveWrap = () => {
  const { leaves, paginate, pagination, gettingData } = useAddLeaveType();
  return (
    <>
      <Card
        style={{
          backgroundColor: "#ffff",
          borderRadius: "15px",
          borderBottom: "1px solid #DDDDDD",
          minHeight: "390px",
          margin: "0px",
        }}
      >
        <CardSection
          pt="25px"
          pb="55px"
          style={{ borderBottom: "1px solid #DDDDDD" }}
        >
          <LeaveNav tabTitle="Leave" />
        </CardSection>
        <SearchFields />
      </Card>
      <LeaveTable
        leaves={leaves}
        paginate={paginate}
        pagination={pagination}
        gettingData={gettingData}
      />
    </>
  );
};

export default LeaveWrap;
