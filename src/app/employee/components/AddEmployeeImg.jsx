"use client";
import {
  ActionIcon,
  Avatar,
  Box,
  Button,
  Flex,
  Image,
  Modal,
  Stack,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconPlus, IconUpload } from "@tabler/icons-react";
import React, { useState } from "react";
import ImageUploading from "react-images-uploading";

const AddEmployeeImg = ({ logo }) => {
  return (
    <>
      <Stack gap={"10px"}>
        <Box
          className="add-image"
          w={{ lg: "150px", md: "150px", sm: "120px" }}
          h={{ lg: "150px", md: "150px", sm: "120px" }}
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
            src={logo || "/assets/images/avata2.png"}
          />
        </Box>
      </Stack>
    </>
  );
};

export default AddEmployeeImg;
