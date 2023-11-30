"use client";

import { Button, Card, CardSection, Group, Text } from "@mantine/core";
import classes from "../../../../components/CompensationLayout/Compensation.module.css";
import React, { useState } from "react";
import CompensationNav from "@/components/CompensationLayout/CompensationNav";
import DeductionsTable from "@/components/CompensationLayout/DeductionsTable";
import AddDeductionsModal from "@/components/CompensationLayout/AddDeductionsModal";
import EditDeductionsModal from "@/components/CompensationLayout/EditDeductionsModal";
import usePayroll from "@/hooks/usePayroll";

const Deductions = () => {
  const {
    form,
    openDeduct,
    closeDeduct,
    openedDeduct,
    loading,
    handleSubmit,
    deductions,
    gettingData,
    setComponentId,
    handleDelete,
    handleEdit,
    openedDeductEdit,
    openDeductEdit,
    closeDeductEdit,
  } = usePayroll();

  return (
    <>
      <AddDeductionsModal
        isOpen={openedDeduct}
        onClose={closeDeduct}
        form={form}
        loading={loading}
        handleSubmit={handleSubmit}
      />
      <Card
        style={{
          backgroundColor: "#ffff",
          borderRadius: "15px",
          borderBottom: "1px solid #DDDDDD",
          margin: "0px",
        }}
      >
        <CardSection py="25px" style={{ borderBottom: "1px solid #DDDDDD" }}>
          <CompensationNav tabTitle={"Compensation"} />
        </CardSection>
        <Group gap={30} mx="lg" py={20}>
          <Text fz={24} fw={700}>
            Deductions
          </Text>
          <Button
            variant="filled"
            color="rgba(126, 166, 244, 0.19)"
            onClick={openDeduct}
            classNames={{
              label: classes.buttonText,
            }}
          >
            Add Deductions +
          </Button>
        </Group>
      </Card>
      <DeductionsTable
        deductions={deductions}
        openDeductEdit={openDeductEdit}
        openedDeductEdit={openedDeductEdit}
        closeDeductEdit={closeDeductEdit}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        gettingData={gettingData}
        form={form}
        loading={loading}
        setComponentId={setComponentId}
      />
    </>
  );
};

export default Deductions;
