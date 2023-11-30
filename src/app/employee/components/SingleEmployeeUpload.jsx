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

const SingleEmployeeUpload = ({ logo, uploading, handleSubmit }) => {
  const [imgs, setImgs] = useState([]);
  const [imgUrl, setImgUrl] = useState("");
  const [opened, { open, close }] = useDisclosure(false);

  const handleImageChange = async (images, index) => {
    setImgs(images);
  };
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
            src={imgUrl || logo || "/assets/images/avata2.png"}
            opacity={uploading ? ".5" : "1"}
          />
          <ActionIcon
            className="add-icon"
            style={{
              position: "absolute",
              right: "0",
              backgroundColor: "#3377FF",
            }}
            radius={"xl"}
            size={"xl"}
            variant="filled"
            onClick={open}
            disabled={uploading}
          >
            <IconPlus />
          </ActionIcon>
        </Box>
      </Stack>
      <Modal
        opened={opened}
        onClose={close}
        closeOnClickOutside={false}
        centered
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      >
        <Box p="20px">
          <Text size="18px" weight={400}>
            Upload Profile Picture
          </Text>
          <Text size="14px" mt="10px" c="565656">
            Supported image formats: .jpg, .png <br />
            Maximum file size: 200KB <br /> Recommended dimensions: (200 X
            200)px
          </Text>
          <ImageUploading
            value={imgs}
            onChange={handleImageChange}
            maxNumber={1}
            acceptType={["jpg", "jpeg", "png"]}
            maxFileSize={200000}
          >
            {({
              imageList,
              onImageUpload,
              onImageUpdate,
              onImageRemove,
              dragProps,
              errors,
            }) => (
              <Box>
                <Button
                  mt={"lg"}
                  onClick={onImageUpload}
                  size="lg"
                  {...dragProps}
                  w={"100%"}
                  style={{
                    backgroundColor: "#3377FF",
                  }}
                >
                  <IconUpload style={{ marginRight: "7px" }} />
                  Select Image
                </Button>

                {imageList.map((image, index) => (
                  <Box key={index}>
                    <Flex
                      style={{ overflow: "hidden" }}
                      justify={"center"}
                      mt={"lg"}
                      align={"center"}
                    >
                      <Box w={"200px"} h={"200px"}>
                        <Image src={image.dataURL} alt="profile" />
                      </Box>
                    </Flex>

                    <Flex
                      justify={"space-between"}
                      align={"center"}
                      mt={"15px"}
                    >
                      <Button
                        onClick={() => {
                          onImageRemove(index);
                          setImgUrl("");
                        }}
                        style={{
                          backgroundColor: "#FF0000",
                        }}
                      >
                        Remove
                      </Button>
                      <Button
                        onClick={() => {
                          setImgUrl(image.dataURL);
                          close();
                          handleSubmit(imgs);
                        }}
                        style={{
                          backgroundColor: "#3377FF",
                        }}
                      >
                        Save
                      </Button>
                    </Flex>
                  </Box>
                ))}

                {errors && (
                  <Box>
                    {errors.acceptType && (
                      <Text size="12px" c={"#FF0000"}>
                        * Please select a file type of either .png or .jpg
                      </Text>
                    )}
                    {errors.maxFileSize && (
                      <Text size="12px" c={"#FF0000"}>
                        * Please select a file with a maximum size of 200kb
                      </Text>
                    )}
                  </Box>
                )}
              </Box>
            )}
          </ImageUploading>
        </Box>
      </Modal>
    </>
  );
};

export default SingleEmployeeUpload;
