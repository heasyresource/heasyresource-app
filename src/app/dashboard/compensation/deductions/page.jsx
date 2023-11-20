"use client";

import { Button, Card, CardSection, Group, Text } from "@mantine/core";
import classes from "../../../../components/CompensationLayout/Compensation.module.css";
import React, { useState } from "react";
import CompensationNav from "@/components/CompensationLayout/CompensationNav";
import DeductionsTable from "@/components/CompensationLayout/DeductionsTable";
import AddDeductionsModal from "@/components/CompensationLayout/AddDeductionsModal";
import EditDeductionsModal from "@/components/CompensationLayout/EditDeductionsModal";

const Deductions = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  // Open and Close function for Add Earning Modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Open and Close function for Add Earning Modal
  const openEditModal = () => {
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  return (
    <>
      <EditDeductionsModal
        isEditOpen={isEditModalOpen}
        isEditClose={closeEditModal}
      />
      <AddDeductionsModal isOpen={isModalOpen} onClose={closeModal} />
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
        <Group gap={30} px={40} py={45}>
          <Text fz={24} fw={700}>
            Deductions
          </Text>
          <Button
            variant="filled"
            color="rgba(126, 166, 244, 0.19)"
            onClick={openModal}
            classNames={{
              label: classes.buttonText,
            }}
          >
            Add Deductions +
          </Button>
        </Group>
      </Card>
      <DeductionsTable openEditModal={openEditModal} />
      <Group justify="flex-end" my={"3rem"}>
        <Button
          style={{ fontSize: "16px", textTransform: "capitalize" }}
          size="md"
          variant="outline"
          color="#3377FF"
          px={"40px"}
          type="submit"
        >
          cancel
        </Button>
        <Button
          style={{ fontSize: "16px", textTransform: "capitalize" }}
          size="md"
          variant="filled"
          color="#3377FF"
          px={"40px"}
          type="submit"
        >
          save
        </Button>
      </Group>
    </>
  );
};

export default Deductions;
