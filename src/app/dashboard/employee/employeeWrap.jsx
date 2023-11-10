"use client";
import React from "react";
import InputField from "../components/InputField";
import { TableSelection } from "../components/TableSelection";
import { EmployeeNav } from "@/components";
import { Card, CardSection } from "@mantine/core";
import { useSearch } from "@/hooks";
const EmployeeWrap = () => {
  const {
    loading,
    form,
    handleSubmit,
    paginate,
    employees,
    gettingData,
    pagination,
  } = useSearch();
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
          <EmployeeNav tabTitle={"employee management"} />
        </CardSection>
        <InputField loading={loading} form={form} handleSubmit={handleSubmit} />
      </Card>
      <TableSelection
        employees={employees}
        paginate={paginate}
        gettingData={gettingData}
        pagination={pagination}
      />
    </>
  );
};

export default EmployeeWrap;
