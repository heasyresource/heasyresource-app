"use client";
import {
  Box,
  Button,
  Group,
  Loader,
  PasswordInput,
  Popover,
  Progress,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import React from "react";
import classes from "../profile.module.css";
import { IconCheck, IconX } from "@tabler/icons-react";
import { getStrength, requirements } from "@/utils/publicFunctions";
import useChangePassword from "@/hooks/useChangePassword";

const PasswordRequirement = ({ meets, label }) => {
  return (
    <Text
      c={meets ? "teal" : "red"}
      style={{ display: "flex", alignItems: "center" }}
      mt={7}
      size="sm"
    >
      {meets ? <IconCheck size={14} /> : <IconX size={14} />}{" "}
      <span className="ml-[15px]" ml={10}>
        {label}
      </span>
    </Text>
  );
};
const PageForm = () => {
  const { form, handleFormSubmit, setPopoverOpened, popoverOpened, loading } =
    useChangePassword();

  const checks = requirements.map((requirement, index) => (
    <PasswordRequirement
      key={requirement.label}
      label={requirement.label}
      meets={requirement.re.test(form.values.newPassword)}
    />
  ));
  const strength = getStrength(form.values.newPassword);
  const color = strength === 100 ? "teal" : strength > 50 ? "yellow" : "red";
  return (
    <Box py={"lg"}>
      <Text style={{ fontSize: "20px", fontWeight: 600 }}>Change Password</Text>
      <form
        style={{ marginTop: "2rem" }}
        onSubmit={form.onSubmit((values) => handleFormSubmit(values))}
      >
        <Stack w={{ lg: "40%", md: "100%", sm: "100%" }}>
          <Box>
            <PasswordInput
              size="md"
              label="Current Password"
              withAsterisk
              disabled={loading}
              {...form.getInputProps("currentPassword")}
              classNames={{ label: classes.label, error: classes.error }}
            />
          </Box>
          <Box>
            <Popover
              opened={popoverOpened}
              position="bottom"
              width="target"
              transition="pop"
              closeOnClickOutside={false}
            >
              <Popover.Target>
                <div
                  onFocusCapture={() => setPopoverOpened(true)}
                  onBlurCapture={() => setPopoverOpened(false)}
                >
                  <PasswordInput
                    size="md"
                    withAsterisk
                    label="New Password"
                    {...form.getInputProps("newPassword")}
                    disabled={loading}
                    classNames={{
                      label: classes.label,
                      error: classes.error,
                    }}
                  />
                </div>
              </Popover.Target>
              <Popover.Dropdown>
                <Progress
                  color={color}
                  value={strength}
                  size={7}
                  style={{ marginBottom: 10 }}
                />
                <PasswordRequirement
                  label="Includes at least 8 characters"
                  meets={form.values.newPassword.length > 7}
                />
                {checks}
              </Popover.Dropdown>
            </Popover>
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
              disabled={loading}
            >
              {loading ? (
                <Loader type="dots" color="white" />
              ) : (
                " change Password"
              )}
            </Button>
          </Group>
        </Stack>
      </form>
    </Box>
  );
};

export default PageForm;
