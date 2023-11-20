"use client";
import React from "react";
import { Card, GridCol, Group, Text } from "@mantine/core";
import classes from "./miniCard.module.css";
import { IconBriefcase, IconUsers, IconWallet } from "@tabler/icons-react";

const data = [
  {
    title: "Total Employees",
    value: "6789",
    icon: <IconUsers style={{ color: "#7EA6F4" }} />,
  },
  {
    title: "New Employees",
    value: "6789",
    icon: <IconUsers style={{ color: "#7EA6F4" }} />,
  },
  {
    title: "Job Vacancy",
    value: "6789",
    icon: <IconBriefcase style={{ color: "#7EA6F4" }} />,
  },
  {
    title: "Payroll Created",
    value: "6789",
    icon: <IconWallet style={{ color: "#7EA6F4" }} />,
  },
];

// Define your custom Card component
function MiniCard({ height }) {
  const cards = data.map((item) => (
    <GridCol key={item.title} span={{ lg: 3, md: 3, sm: 6 }}>
      <Card
        className={classes.card}
        style={{ width: "100%", height, borderRadius: "15px" }}
        px="28"
        py="20"
        padding="xl"
        bg="var(--mantine-color-body)"
      >
        <Text style={{ color: "#7EA6F4" }} fz="sm" fw={700}>
          {item.title}
        </Text>
        <Group mt={8} align="center" justify="space-between">
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

export default MiniCard;
