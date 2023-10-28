"use client";
import { ActionIcon, Avatar, Box, Modal, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconPlus } from "@tabler/icons-react";
import React from "react";

const AddImage = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Box
        className="add-image"
        w={{ lg: "200px", md: "150px", sm: "150px" }}
        h={{ lg: "200px", md: "150px", sm: "150px" }}
        style={{
          border: "5px #3377FF solid",
          borderRadius: "50%",
          padding: "5px",
          zIndex: "1",
          position: "relative",
        }}
      >
        <Avatar
          w={"100%"}
          h={"100%"}
          variant="outline"
          style={{ borderRadius: "50%" }}
          color="blue"
          src={
            "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
          }
        />
        <ActionIcon
          className="add-icon"
          style={{
            position: "absolute",

            backgroundColor: "#3377FF",
          }}
          radius={"xl"}
          size={"xl"}
          variant="filled"
          onClick={open}
        >
          <IconPlus />
        </ActionIcon>
      </Box>
      <Modal
        opened={opened}
        onClose={close}
        title="Upload Image"
        centered
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      >
        <Box p="20px">
          <Text size="18px" weight={400}>
            Upload Image
          </Text>
          <Text size="14px" mt="md" tt="capitalize" c="565656">
            supported image formats: jpg, .png, .gif, <br />
            maximum file size: 1MB <br /> recommended dimensions: 200px x 200px
          </Text>
        </Box>
      </Modal>
    </>
  );
};

export default AddImage;
