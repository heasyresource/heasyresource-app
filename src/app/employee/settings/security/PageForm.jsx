"use client";
import { Box, Button, Group, Stack, Text, TextInput } from "@mantine/core";
import React from "react";
import classes from "../profile.module.css";

const PageForm = () => {
  return (
    <Box py={"lg"}>
      <Text style={{ fontSize: "20px", fontWeight: 600 }}>Change Password</Text>
      <form style={{ marginTop: "2rem" }}>
        <Stack w={{ lg: "40%", md: "100%", sm: "100%" }}>
          <Box>
            <TextInput
              size="md"
              label="Old Password"
              withAsterisk
              classNames={{ label: classes.label, error: classes.error }}
            />
          </Box>
          <Box>
            <TextInput
              size="md"
              label="New Password"
              withAsterisk
              classNames={{ label: classes.label, error: classes.error }}
            />
          </Box>
          <Box>
            <TextInput
              size="md"
              label="Confirm Passsword"
              withAsterisk
              classNames={{ label: classes.label, error: classes.error }}
            />
          </Box>
          <Group justify="flex-start" mt={".5rem"}>
            <Button
              size="md"
              variant="filled"
              tt="capitalize"
              fs="1rem"
              fw="bold"
              c={"white"}
              type="submit"
              bg="#3377ff"
            >
              update Password
            </Button>
          </Group>
        </Stack>
      </form>
    </Box>
  );
};

export default PageForm;
