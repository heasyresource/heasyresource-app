"use client";
import {
  ActionIcon,
  Avatar,
  Box,
  Button,
  Flex,
  Image,
  Modal,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconPlus, IconUpload } from "@tabler/icons-react";
import React, { useState } from "react";
import ImageUploading from "react-images-uploading";

const AddImage = () => {
  const [imgs, setImgs] = useState([]);
  const [imgUrl, setImgUrl] = useState("");
  const [opened, { open, close }] = useDisclosure(false);

  const handleImageChange = async (images, index) => {
    setImgs(images);
  };
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
          src={imgUrl || "/assets/images/avata2.png"}
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
          <Text size="14px" mt="10px" c="565656">
            Supported image formats: .jpg, .png, <br />
            Maximum file size: 200KB <br /> Recommended dimensions: (200 X
            200)px
          </Text>
          <ImageUploading
            value={imgs}
            onChange={handleImageChange}
            maxNumber={1}
            acceptType={["jpg", "jpeg", "png"]}
            maxFileSize={100000}
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
                    <Flex justify={"center"} mt={"lg"} align={"center"}>
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
                        * Please select a file with a maximum size of 100kb
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

export default AddImage;
