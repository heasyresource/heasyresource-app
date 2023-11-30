"use client";
import {
  Box,
  Button,
  Grid,
  GridCol,
  Group,
  Loader,
  Modal,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import React from "react";
import classes from "../HiringLayout/HiringLayout.module.css";

const EditJobCategoriesModal = ({
  opened,
  close,
  handleSubmit,
  form,
  loading,
}) => {
  return (
    <Modal
      opened={opened}
      onClose={close}
      withCloseButton={false}
      closeOnClickOutside={false}
      size="lg"
      shadow="sm"
      centered
      overlayProps={{
        backgroundOpacity: 0.55,
        blur: 3,
      }}
    >
      <Box>
        <Text
          tt={"capitalize"}
          style={{
            fontSize: "22px",
            fontWeight: 700,
          }}
        >
          Edit Job Categories
        </Text>
        <form onSubmit={form?.onSubmit((values) => handleSubmit(values))}>
          <Stack gap={"2rem"}>
            <Grid gutter="xl" className={classes.formWrap}>
              <GridCol span={{ lg: 12, md: 12, sm: 12 }}>
                <TextInput
                  size="md"
                  withAsterisk
                  label="Job Category"
                  {...form?.getInputProps("name")}
                  style={{ width: "100%" }}
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
                disabled={loading}
                onClick={() => {
                  close();
                  form?.reset();
                }}
                aria-label="cancel"
              >
                cancel
              </Button>
              <Button
                variant="contained"
                size="md"
                color="#3377FF"
                tt="capitalize"
                type="submit"
                style={{
                  backgroundColor: "#3377FF",
                }}
                disabled={loading}
                aria-label="update"
              >
                {loading ? (
                  <Loader color="white" type="dots" size="md" />
                ) : (
                  "update"
                )}
              </Button>
            </Group>
          </Stack>
        </form>
      </Box>
    </Modal>
  );
};

export default EditJobCategoriesModal;
