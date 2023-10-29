import { Button, Flex, Group, Text } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import React from "react";
import classes from "./add.module.css";
const index = () => {
  return (
    <Flex
      justify={"space-between"}
      align={"center"}
      p={"2rem"}
      style={{ borderBottom: "2px solid #DDDDDD", flexWrap: "wrap" }}
      className={classes.addEmployee}
    >
      <Text style={{ fontSize: "20px" }} fw={600} tt="capitalize">
        add employee
      </Text>
      <Group justify="space-between">
        <Button
          size="md"
          color="#EBEBEB"
          style={{ color: "#424242" }}
          tt="capitalize"
        >
          employee list
        </Button>
        <Button
          size="md"
          color="#E7F7FF"
          style={{ color: "#424242" }}
          tt="capitalize"
        >
          add employee
        </Button>
        <Button
          size="md"
          color="#EBEBEB"
          style={{ color: "#424242" }}
          tt="capitalize"
          rightSection={<IconChevronDown color="#3377FF" />}
        >
          configuration
        </Button>
      </Group>
    </Flex>
  );
};

export default index;
