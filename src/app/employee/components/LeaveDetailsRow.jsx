"use client";
import React from "react";
import { Card, GridCol, Group, Text } from "@mantine/core";
import classes from "../leave/leave.module.css";

const data = [
  {
    title: "Leave Type",
    value: "MATERNITY LEAVE",
  },
  {
    title: "Entitled Days",
    value: "20 DAYS",
  },
  {
    title: "Start Date",
    value: "MON., 25TH DEC., 2023",
  },
  {
    title: "End Date",
    value: "MON., 25TH DEC., 2023",
  },
];

// Define your custom Card component
function LeaveDetailsRow({ height }) {
  const cards = data.map((item) => (
    <GridCol key={item.title} span={{ lg: "content", md: 3, sm: 6 }}>
      <Card
        padding={0}
        my={40}
        className={classes.card}
        style={{ minwidth: "250px" }}
        mah={155}
        h={"100%"}
      >
        <Text style={{ color: "#7EA6F4" }} fz="sm" fw={700}>
          {item.title}
        </Text>
        <Group mt={30} align="center" justify="space-between">
          <Text style={{ fontSize: "19px" }} fw={400}>
            {item.value}
          </Text>
        </Group>
      </Card>
    </GridCol>
  ));

  return <>{cards}</>;
}

export default LeaveDetailsRow;
