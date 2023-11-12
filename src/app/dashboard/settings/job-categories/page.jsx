"use client";

import {
  Button,
  Card,
  CardSection,
  Group,
  Space,
  Text,
} from "@mantine/core";
import React, { useState } from "react";
import SettingsNav from "@/components/SettingsLayout/SettingsNav";
import SettingsTable from "@/components/SettingsLayout/SettingsTable";
import AddJobCategoriesModal from "@/components/SettingsLayout/AddJobCategoriesModal";
import EditJobCategoriesModal from "@/components/SettingsLayout/EditJobCategoriesModal";

const JobCategories = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  // Open and Close function for Add Job Modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Open and Close function for Edit Job Modal
  const openEditModal = () => {
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };
  return (
    <>
      <AddJobCategoriesModal isOpen={isModalOpen} onClose={closeModal} />
      <EditJobCategoriesModal
        isEditOpen={isEditModalOpen}
        isEditClose={closeEditModal}
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
          <SettingsNav tabTitle={"Settings"} />
        </CardSection>
      </Card>
      <Space h={"1rem"} />
      <>
        <Group px={40}>
          <Text fw={700}>Job Categories</Text>
          <Button
            onClick={openModal}
            variant="filled"
            tt={"capitalize"}
            style={{ backgroundColor: "#e7f7ff", color: "#000000" }}
          >
            add +
          </Button>
        </Group>
        <SettingsTable openEditModal={openEditModal} />
      </>
    </>
  );
};

export default JobCategories;
