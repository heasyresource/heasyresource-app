"use client";

import {
  Avatar,
  Box,
  Button,
  Card,
  CardSection,
  Grid,
  GridCol,
  Group,
  Space,
  Stack,
  Switch,
  Text,
  TextInput,
} from "@mantine/core";
import React, { useState } from "react";
import SettingsNav from "@/components/SettingsLayout/SettingsNav";
import SettingsTable from "@/components/SettingsLayout/SettingsTable";
import EditJobTitlesModal from "@/components/SettingsLayout/EditJobTitlesModal";
import AddJobTitlesModal from "@/components/SettingsLayout/AddJobTitlesModal";

const JobTitles = () => {
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
      <AddJobTitlesModal isOpen={isModalOpen} onClose={closeModal} />
      <EditJobTitlesModal
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
          <Text fw={700}>Job Titles</Text>
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

export default JobTitles;
