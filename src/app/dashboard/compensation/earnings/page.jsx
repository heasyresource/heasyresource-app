"use client";
import { Button, Card, CardSection, Group, Text } from "@mantine/core";
import classes from "../../../../components/CompensationLayout/Compensation.module.css";
import React, { useState } from "react";
import CompensationNav from "@/components/CompensationLayout/CompensationNav";
import EarningsTable from "@/components/CompensationLayout/EarningsTable";
import AddEarningsModal from "@/components/CompensationLayout/AddEarningsModal";
import usePayroll from "@/hooks/usePayroll";

const AddEarnings = () => {
  const {
    handleSubmit,
    openAddEarn,
    closeAddEarn,
    openedAddEarn,
    form,
    loading,
    earnings,
    gettingData,
    openedEditEarn,
    openEditEarn,
    closeEditEarn,
    handleEdit,
    setComponentId,
    handleDelete,
  } = usePayroll();

  return (
    <>
      <AddEarningsModal
        isOpen={openedAddEarn}
        onClose={closeAddEarn}
        form={form}
        handleSubmit={handleSubmit}
        loading={loading}
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
            Earnings
          </Text>
          <Button
            variant="filled"
            color="rgba(126, 166, 244, 0.19)"
            onClick={openAddEarn}
            classNames={{
              label: classes.buttonText,
            }}
          >
            Add Earnings +
          </Button>
        </Group>
      </Card>
      <EarningsTable
        openEditEarn={openEditEarn}
        closeEditEarn={closeEditEarn}
        handleEdit={handleEdit}
        openedEditEarn={openedEditEarn}
        setComponentId={setComponentId}
        earnings={earnings}
        gettingEarnings={gettingData}
        form={form}
        loading={loading}
        handleDelete={handleDelete}
      />
    </>
  );
};

export default AddEarnings;
