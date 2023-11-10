"use client";
import { AddDepartment, DepartmentsTable, EmployeeNav } from "@/components";
import { useAddDepartment } from "@/hooks";
import { Card, CardSection } from "@mantine/core";
import React from "react";

const DepartmentWrap = () => {
  const {
    form,
    handleSubmit,
    loading,
    openedAdd,
    closeAdd,
    openAdd,
    departments,
    handleDelete,
    handleEdit,

    getttingDatas,

    setItemID,
    openEdit,
    closeEdit,
    openedEdit,
    paginate,
    pagination,
  } = useAddDepartment();
  return (
    <>
      <Card
        style={{
          backgroundColor: "#ffff",
          borderRadius: "15px",
          borderBottom: "1px solid #DDDDDD",
          minHeight: "200px",
          margin: "0px",
        }}
      >
        <CardSection
          pt="18px"
          pb="27px"
          style={{ borderBottom: "1px solid #DDDDDD" }}
        >
          <EmployeeNav tabTitle={"employee management"} />
        </CardSection>
        <AddDepartment
          form={form}
          handleSubmit={handleSubmit}
          loading={loading}
          openAdd={openAdd}
          openedAdd={openedAdd}
          closeAdd={closeAdd}
        />
      </Card>
      <DepartmentsTable
        form={form}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        paginate={paginate}
        pagination={pagination}
        setItemID={setItemID}
        openEdit={openEdit}
        closeEdit={closeEdit}
        openedEdit={openedEdit}
        departments={departments}
      />
    </>
  );
};

export default DepartmentWrap;
