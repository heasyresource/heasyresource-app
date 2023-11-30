"use client";
import {
  Box,
  Button,
  Grid,
  GridCol,
  Group,
  Loader,
  Modal,
  Select,
  Stack,
  Switch,
  Text,
  TextInput,
  Textarea,
} from "@mantine/core";
import React, { useEffect } from "react";
import classes from "../HiringLayout/HiringLayout.module.css";

const EditEarningsModal = ({
  isEditOpen,
  isEditClose,
  form,
  handleSubmit,
  loading,
}) => {
  useEffect(() => {
    if (!form?.values.isFixed) {
      form?.setValues({
        amount: "",
      });
    }
    //eslint-disable-next-line
  }, [form?.values.isFixed]);
  return (
    <Modal
      opened={isEditOpen}
      onClose={isEditClose}
      centered
      withCloseButton={false}
      overlayProps={{
        backgroundOpacity: 0.55,
        blur: 3,
      }}
      closeOnClickOutside={false}
      size="lg"
    >
      <Box>
        <Text
          tt={"capitalize"}
          style={{
            fontSize: "22px",
            fontWeight: 700,
          }}
        >
          Edit Earnings
        </Text>
        <form
          onSubmit={form?.onSubmit((values) =>
            handleSubmit(values, "Earnings")
          )}
          style={{ marginTop: "1rem" }}
        >
          <Grid
            gutter="lg"
            className={classes.formWrap}
            style={{
              overflow: "scroll",
              maxHeight: "400px",
              margin: "20px 0",
            }}
          >
            <GridCol span={12}>
              <TextInput
                size="md"
                withAsterisk
                label="Name"
                style={{ width: "100%" }}
                classNames={{
                  label: classes.label,
                  error: classes.error,
                  placeholder: classes.placeholder,
                }}
                {...form?.getInputProps("name")}
                disabled={loading}
              />
            </GridCol>
            <GridCol span={12}>
              <Select
                size="md"
                withAsterisk
                label="Frequency"
                data={["Monthly", "Weekly"]}
                classNames={{
                  label: classes.label,
                  error: classes.error,
                  placeholder: classes.placeholder,
                }}
                disabled={loading}
                {...form?.getInputProps("frequency")}
              />
            </GridCol>
            <GridCol span={12}>
              <label
                style={{ fontSize: "small", color: "#515151", fontWeight: 500 }}
              >
                Unit Calculation
              </label>
              <Switch
                size="md"
                defaultChecked={form?.values.isFixed}
                classNames={{
                  label: classes.switchLabel,
                  error: classes.error,
                  placeholder: classes.placeholder,
                }}
                {...form?.getInputProps("isFixed")}
                disabled={loading}
              />
            </GridCol>
            <GridCol span={12}>
              <TextInput
                type="number"
                max={form?.values.isFixed ? "" : 100}
                size="md"
                withAsterisk
                label={form?.values.isFixed ? " Unit Amount" : "Rate"}
                style={{ width: "100%" }}
                placeholder={form?.values.isFixed ? "" : "28"}
                classNames={{
                  label: classes.label,
                  error: classes.error,
                  placeholder: classes.placeholder,
                }}
                {...form?.getInputProps("amount")}
                disabled={loading}
                rightSection={form?.values.isFixed ? "" : "%"}
              />
            </GridCol>
            <GridCol span={12}>
              <Textarea
                minRows={4}
                autosize
                {...form?.getInputProps("comments")}
                label="Comments"
                classNames={{
                  label: classes.label,
                  error: classes.error,
                  placeholder: classes.placeholder,
                }}
                disabled={loading}
              />
            </GridCol>
          </Grid>
          <Group justify="flex-end" align="center" mt={"auto"}>
            <Button
              variant="outline"
              size="md"
              color="#3377FF"
              style={{ borderColor: "#3377FF" }}
              tt="capitalize"
              px="30px"
              onClick={() => {
                isEditClose();
                form?.reset();
              }}
              disabled={loading}
            >
              cancel
            </Button>
            <Button
              variant="contained"
              size="md"
              color="#3377FF"
              tt="capitalize"
              px="30px"
              type="submit"
              style={{
                backgroundColor: "#3377FF",
              }}
              disabled={loading}
            >
              {loading ? (
                <Loader type="dots" color="white" size="md" />
              ) : (
                "update"
              )}
            </Button>
          </Group>
        </form>
      </Box>
    </Modal>
  );
};

export default EditEarningsModal;
