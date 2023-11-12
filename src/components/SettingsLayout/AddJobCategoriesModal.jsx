"use client";
import {
  Box,
  Button,
  Grid,
  GridCol,
  Group,
  Modal,
  Select,
  Stack,
  Switch,
  Text,
  TextInput,
  Textarea,
} from "@mantine/core";
import React, { useState } from "react";
import classes from "../HiringLayout/HiringLayout.module.css";
import { useAssignLeave } from "@/hooks";

const AddJobCategoriesModal = ({ isOpen, onClose }) => {
  const [value, setValue] = useState([]);
  const { form, handleSubmit } = useAssignLeave();

  return (
    <Modal
      opened={isOpen}
      onClose={onClose}
      title="This is a fullscreen modal"
      size="auto"
      radius={15}
      shadow="sm"
    >
      <Box px={30} pt={30}>
        <Text
          tt={"capitalize"}
          style={{
            fontSize: "22px",
            fontWeight: 700,
          }}
        >
          Add Job Categories
        </Text>
        <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
          <Stack gap={"2rem"}>
            <Grid gutter="xl" className={classes.formWrap}>
              <GridCol span={{ lg: 12, md: 12, sm: 12 }}>
                <TextInput
                  size="md"
                  required
                  label="Job Category"
                  //   placeholder="Marketing"
                  style={{ width: "100%" }}
                  classNames={{
                    label: classes.label,
                    error: classes.error,
                    placeholder: classes.placeholder,
                  }}
                />
              </GridCol>
              {/* <GridCol span={{ lg: 12, md: 12, sm: 12 }}>
                <TextInput
                  size="md"
                  required
                  label="Job Description"
                  style={{ width: "100%" }}
                  //   placeholder="2.8%"
                  data={["Gbemisola Adebiyi"]}
                  classNames={{
                    label: classes.label,
                    error: classes.error,
                    placeholder: classes.placeholder,
                  }}
                />
              </GridCol>
              <GridCol>
                <Textarea
                  size="md"
                  required
                //   variant="filled"
                  label="Note"
                  style={{ width: "100%" }}
                  classNames={{
                    label: classes.label,
                    //   input: classes.input,
                    error: classes.error,
                    placeholder: classes.placeholder,
                  }}
                />
              </GridCol> */}
            </Grid>
            <Group
              justify="flex-end"
              className={classes.btnWrap}
              align="center"
              mt={"auto"}
            >
              <Button
                variant="outline"
                size="md"
                color="#3377FF"
                style={{ borderColor: "#3377FF" }}
                tt="capitalize"
                px="50px"
                w={{ lg: "auto", md: "auto", sm: "auto" }}
                className={classes.btn}
              >
                back
              </Button>
              <Button
                variant="contained"
                size="md"
                color="#3377FF"
                tt="capitalize"
                px="50px"
                w={{ lg: "auto", md: "auto", sm: "auto" }}
                className={classes.btn}
                type="submit"
                style={{
                  backgroundColor: "#3377FF",
                }}
              >
                continue
              </Button>
            </Group>
          </Stack>
        </form>
      </Box>
    </Modal>
  );
};

export default AddJobCategoriesModal;
