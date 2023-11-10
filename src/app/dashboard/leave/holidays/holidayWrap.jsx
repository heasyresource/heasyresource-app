"use client";
import { AddHolidayType, HolidayTypeTable, LeaveNav } from "@/components";
import { useAddHolidayType } from "@/hooks";
import { Card, CardSection } from "@mantine/core";
import React from "react";

const HolidayWrap = () => {
  const {
    form,
    handleSubmit,
    openedAdd,
    closeAdd,
    openAdd,
    holidays,
    openedEdit,
    closeEdit,
    openEdit,
    gettingDatas,
    setItemID,
    loading,
    handleDelete,
    pagination,
    paginate,
    handleEdit,
  } = useAddHolidayType();
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
        <AddHolidayType
          form={form}
          handleSubmit={handleSubmit}
          openedAdd={openedAdd}
          closeAdd={closeAdd}
          openAdd={openAdd}
          loading={loading}
        />
      </Card>
      <HolidayTypeTable
        form={form}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        paginate={paginate}
        pagination={pagination}
        setItemID={setItemID}
        gettingDatas={gettingDatas}
        openEdit={openEdit}
        openedEdit={openedEdit}
        closeEdit={closeEdit}
        holidays={holidays}
      />
    </>
  );
};

export default HolidayWrap;
