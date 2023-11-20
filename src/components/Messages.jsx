"use client";
import {
  Avatar,
  Container,
  Flex,
  Group,
  HoverCard,
  HoverCardDropdown,
  HoverCardTarget,
  Space,
  Stack,
  Text,
} from "@mantine/core";
import React from "react";

const data = ["", "", "", "", "", "", ""];

const Messages = () => {
  const message = data.map((item, index) => (
    <Flex direction="column" mb="5px" key={item + index}>
      <HoverCard width={280} shadow="md">
        <HoverCardTarget>
          <Group mih={10} gap="sm" wrap="nowrap">
            <Avatar
              variant="outline"
              size="sm"
              color="blue"
              src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
              radius="xl"
            />
            <Text fz="sm" lineClamp={1}>
              Tumininu sent you an approval message today
            </Text>
          </Group>
        </HoverCardTarget>
        <HoverCardDropdown>
          <Text size="sm">Tumininu sent you an approval message today</Text>
        </HoverCardDropdown>
      </HoverCard>
      <Group justify="flex-start" style={{ paddingLeft: "38px" }}>
        <Text fz="sm" c="rgba(28, 28, 28, 0.4)">
          Today
        </Text>
      </Group>
    </Flex>
  ));
  return (
    <Container p="32px">
      <Text>Messages</Text>
      <Space h="xl" />
      <Stack
        h={300}
        bg="var(--mantine-color-body)"
        justify="flex-start"
        gap="xs"
      >
        {message}
      </Stack>
    </Container>
  );
};

export default Messages;
