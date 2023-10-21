"use client";
import Logo from "@/components/Image";
import {
  Paper,
  Title,
  Text,
  TextInput,
  Button,
  Container,
  Group,
  Anchor,
  Center,
  Box,
  rem,
  Modal,
  Image,
  Flex,
  PasswordInput,
  Stack,
  Popover,
  Progress,
  Loader,
} from "@mantine/core";
import classes from "./newPassword.module.css";
import { IconCheck, IconX } from "@tabler/icons-react";
import { getStrength, requirements } from "@/utils/publicFunctions";
import useResetPassword from "@/hooks/useResetPassword";
import ResetStatus from "@/components/ResetStatus";
import { useMediaQuery } from "@mantine/hooks";

export default function NewPassword() {
  const isMobile = useMediaQuery("(max-width: 500px)");
  const { form, handleFormSubmit, setPopoverOpened, popoverOpened, loading } = useResetPassword();
  const PasswordRequirement = ({ meets, label }) => {
    return (
      <Text
        c={meets ? "teal" : "red"}
        style={{ display: "flex", alignItems: "center" }}
        mt={7}
        size="sm"
      >
        {meets ? <IconCheck size={14} /> : <IconX size={14} />}{" "}
        <span className="ml-[15px]" ml={10}>{label}</span>
      </Text>
    );
  };
  const checks = requirements.map((requirement, index) => (
    <PasswordRequirement
      key={index}
      label={requirement.label}
      meets={requirement.re.test(form.values.password)}
    />
  ));
  const strength = getStrength(form.values.password);
  const color = strength === 100 ? "teal" : strength > 50 ? "yellow" : "red";

  return (
    <>
     
      <Container
        size={500}
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box>
          <Center>
            <Logo />
          </Center>
          <Title ta="left" order={2} mt={"50px"} c="#000000">
            New Password
          </Title>
          <Text c="dimmed" fz="md" ta="left" mt={"20px"}>
            Set the new password for your account so you can login <br style={{display: isMobile ? "none" : 'block'}}/> and
            access all features
          </Text>
          <form
            className="mt-[2rem]"
            onSubmit={form.onSubmit((values) => handleFormSubmit(values))}
          >
            <Stack gap="1rem">
            <Popover
                  opened={popoverOpened}
                  position="bottom"
                  width="target"
                  transition="pop"
                >
                  <Popover.Target>
                    <div
                      onFocusCapture={() => setPopoverOpened(true)}
                      onBlurCapture={() => setPopoverOpened(false)}
                    >
                      <PasswordInput
                        size="md"
                        required
                        label="Enter New Password"
                        {...form.getInputProps("password")}
                        disabled={loading}
                        classNames={{ label: classes.label, error: classes.error }}
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
                      meets={form.values.password.length > 7}
                    />
                    {checks}
                  </Popover.Dropdown>
                </Popover>
              <PasswordInput
                classNames={{ label: classes.label, error: classes.error }}
                label="Confirm Password"
                size="md"
               
                required
                disabled={loading}
                {...form.getInputProps("confirmPassword")}
              />
              <Button
                
                size="md"
                variant="filled"
                tt="capitalize"
                fw="bold"
                c={"white"}
                type="submit"
                bg="#3377FF"
               
                
              >
                {loading ? <Loader type="dots" color="white"/> : "Update Password"}
              </Button>
            </Stack>
          </form>
        </Box>
        <ResetStatus />
      </Container>
    </>
  );
}
