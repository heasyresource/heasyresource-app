"use client";
import React from "react";
import { Card, Grid, GridCol, Group, Text } from "@mantine/core";
import classes from "../leave/leave.module.css";

const data = [
  {
    title: "Total Earnings",
    value: "N 450,000",
  },
  {
    title: "Total Deductions",
    value: "N 450,000",
  },
  {
    title: "Total PAYE Tax",
    value: "N 450,000",
  },
  {
    title: "Last Month Salary",
    value: "N 450,000",
  },
];

// Define your custom Card component
function CompensationMiniCards({ height }) {
  const cards = data.map((item) => (
    <GridCol key={item.title} span={{ lg: "content", md: 3, sm: 6 }}>
      <Card
        className={classes.card}
        style={{ width: "250px", borderRadius: "15px" }}
        mah={155}
        px="28"
        h={'100%'}
        bg="var(--mantine-color-body)"
      >
        <Text style={{ color: "#7EA6F4" }} fz="sm" fw={700}>
          {item.title}
        </Text>
        <Group mt={30} align="center" justify="space-between">
          <Text style={{ fontSize: "24px" }} fw={700}>
            {item.value}
          </Text>
        </Group>
      </Card>
    </GridCol>
  ));

  return <>{cards}</>;
}

export default CompensationMiniCards;
