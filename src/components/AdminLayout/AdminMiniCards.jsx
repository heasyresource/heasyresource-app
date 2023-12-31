"use client";
import React from "react";
import { Card, GridCol, Group, Text } from "@mantine/core";
import classes from "./admin.module.css";
import { IconBuildingSkyscraper } from "@tabler/icons-react";

const data = [
  {
    title: "Total Companies",
    value: "2503",
    icon: <IconBuildingSkyscraper style={{ color: "#7EA6F4" }} />,
  },
  {
    title: "Total Companies",
    value: "2503",
    icon: <IconBuildingSkyscraper style={{ color: "#7EA6F4" }} />,
  },
  {
    title: "Total Companies",
    value: "2503",
    icon: <IconBuildingSkyscraper style={{ color: "#7EA6F4" }} />,
  },
  {
    title: "Total Companies",
    value: "2503",
    icon: <IconBuildingSkyscraper style={{ color: "#7EA6F4" }} />,
  },
  {
    title: "Total Companies",
    value: "2503",
    icon: <IconBuildingSkyscraper style={{ color: "#7EA6F4" }} />,
  },
];

// Define your custom Card component
function AdminMiniCards({ height }) {
  const cards = data.map((item, index) => (
    <GridCol key={item.title + index} span={{ lg: "content", md: 3, sm: 6 }}>
      <Card
        className={classes.card}
        style={{ width: "250px", height: "120px", borderRadius: "15px" }}
        px="28"
        py="20"
        bg="var(--mantine-color-body)"
      >
        <Text style={{ color: "#7EA6F4" }} fz="sm" fw={700}>
          {item.title}
        </Text>
        <Group mt={30} align="center" justify="space-between">
          <Text style={{ fontSize: "24px" }} fw={700}>
            {item.value}
          </Text>
          {item.icon}
        </Group>
      </Card>
    </GridCol>
  ));

  return <>{cards}</>;
}

export default AdminMiniCards;
