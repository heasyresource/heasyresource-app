"use client";

import { Button, Card, CardSection, Group, Text } from "@mantine/core";
import classes from "../../../../components/CompensationLayout/Compensation.module.css";
import React, { useState } from "react";
import CompensationNav from "@/components/CompensationLayout/CompensationNav";
import EarningsTable from "@/components/CompensationLayout/EarningsTable";
import AddEarningsModal from "@/components/CompensationLayout/AddEarningsModal";
import EditEarningsModal from "@/components/CompensationLayout/EditEarningsModal";

const AddEarnings = () => {
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
    setIsEditModalOpen(false)
  };

  return (
    <>
      <EditEarningsModal
        isEditOpen={isEditModalOpen}
        isEditClose={closeEditModal}
      />
      <AddEarningsModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />
      <Card
        style={{
          backgroundColor: "#ffff",
          borderRadius: "15px",
          borderBottom: "1px solid #DDDDDD",
          //   minHeight: "390px",
          margin: "0px",
        }}
      >
        <CardSection
          pt="25px"
          pb="55px"
          style={{ borderBottom: "1px solid #DDDDDD" }}
        >
          <CompensationNav tabTitle={"Compensation"} />
        </CardSection>
        <Group gap={30} px={40} py={45}>
          <Text fz={24} fw={700}>
            Earnings
          </Text>
          <Button
            variant="filled"
            color="rgba(126, 166, 244, 0.19)"
            onClick={openModal}
            classNames={{
              label: classes.buttonText,
            }}
          >
            Add Earnings +
          </Button>
        </Group>
      </Card>
      <EarningsTable openEditModal={openEditModal} />
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

export default AddEarnings;
