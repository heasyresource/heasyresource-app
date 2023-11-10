"use client";
import { LeaveNav, LeaveTypeTable, AddLeaveType } from "@/components";
import { useAddLeaveType } from "@/hooks";

import { Card, CardSection } from "@mantine/core";
import React from "react";

const LeaveTypeWrap = () => {
  const {
    form,
    handleSubmit,
    loading,
    openAdd,
    closeAdd,
    openedAdd,
    leaves,
    gettingData,
    openEdit,
    openedEdit,
    closeEdit,
    setItemID,
    handleDelete,
    handleEdit,
    pagination,
    paginate,
  } = useAddLeaveType();
  return (
    <>
      <Card
        style={{
          backgroundColor: "#ffff",
          borderRadius: "15px",
          borderBottom: "1px solid #DDDDDD",
          minHeight: "250px",
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
        <AddLeaveType
          form={form}
          handleSubmit={handleSubmit}
          loading={loading}
          openAdd={openAdd}
          closeAdd={closeAdd}
          openedAdd={openedAdd}
        />
      </Card>
      <LeaveTypeTable
        paginate={paginate}
        pagination={pagination}
        handleEdit={handleEdit}
        setItemID={setItemID}
        closeEdit={closeEdit}
        openEdit={openEdit}
        handleDelete={handleDelete}
        leaves={leaves}
        gettingData={gettingData}
        openedEdit={openedEdit}
      />
    </>
  );
};

export default LeaveTypeWrap;
