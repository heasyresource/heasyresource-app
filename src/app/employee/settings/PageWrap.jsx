"use client";
import { Badge, Group, Space, Text } from "@mantine/core";
import React from "react";
import AddEmployeeImg from "../components/AddEmployeeImg";

const PageWrap = () => {
  return (
    <Group my={"auto"} align="center" justify="flex-start" mt="lg">
      <AddEmployeeImg logo={logo} />
      <div>
        <Text fz={24} fw={500}>
          {name}
        </Text>
        <Badge tt={"capitalize"} variant="light" color="blue">
          {position}
        </Badge>
        <Space h={10} />

        <Group wrap="nowrap" gap={10} mt={5}>
          <Text fw={700} fz="sm" c={"#686868"}>
            Email:
          </Text>
          <Text fz="sm" c="dimmed">
            {email}
          </Text>
        </Group>
      </div>
    </Group>
  );
};

export default PageWrap;
