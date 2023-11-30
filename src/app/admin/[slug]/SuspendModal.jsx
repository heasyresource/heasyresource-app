"use client";
import {
  ActionIcon,
  Button,
  Group,
  Loader,
  Modal,
  Stack,
  Text,
} from "@mantine/core";
import { IconAlertCircle } from "@tabler/icons-react";
import React from "react";

const SuspendModal = ({ loading, handleSuspend, opened, close }) => {
  return (
    <Modal
      opened={opened}
      onClose={close}
      overlayProps={{
        backgroundOpacity: 0.55,
        blur: 3,
      }}
      centered
      closeOnClickOutside={false}
      withCloseButton={false}
    >
      <Stack py={"3rem"} justify="center" align="center">
        <ActionIcon variant="transparent" size="xl">
          <IconAlertCircle
            style={{
              color: "#ffb242",
              fontSize: "20px",
              width: "100%",
              height: "100%",
            }}
            stroke={1.5}
          />
        </ActionIcon>
        <Text fw={600} style={{ fontSize: "25px", color: "#000000" }}>
          Are you sure ?
        </Text>

        <Text
          style={{ fontSize: "16px", color: "#1E1E1E", textAlign: "center" }}
        >
          You are about to suspend this company
        </Text>
        <Group mt="1rem" justify="flex-end" align="center">
          <Button
            variant="outline"
            size="md"
            color="#A3A3A3"
            style={{ borderColor: "#A3A3A3" }}
            tt="capitalize"
            onClick={close}
            disabled={loading}
            aria-label="cancel"
          >
            cancel
          </Button>
          <Button
            variant="contained"
            size="md"
            style={{ backgroundColor: "#ffb242" }}
            tt="capitalize"
            onClick={() => {
              handleSuspend();
            }}
            disabled={loading}
            aria-label="suspend"
          >
            {loading ? (
              <Loader type="dots" size={"md"} color="white" />
            ) : (
              "suspend"
            )}
          </Button>
        </Group>
      </Stack>
    </Modal>
  );
};

export default SuspendModal;
