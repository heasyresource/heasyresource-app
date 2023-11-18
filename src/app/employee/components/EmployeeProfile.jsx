"use client";
import { forwardRef } from "react";
import {
  IconChevronDown,
  IconExternalLink,
  IconLogout,
  IconSettingsQuestion,
  IconUser,
} from "@tabler/icons-react";
import {
  Group,
  Avatar,
  Text,
  Menu,
  UnstyledButton,
  rem,
  Box,
  Modal,
  Stack,
  Button,
  ActionIcon,
} from "@mantine/core";
import classes from "../../../components/Profile/profile.module.css";
import { useSignOut } from "@/hooks";
import { useDisclosure } from "@mantine/hooks";
import { useSession } from "next-auth/react";

const UserButton = forwardRef(
  ({ image, name, position, icon, ...others }, ref) => (
    <UnstyledButton ref={ref} {...others}>
      <Group gap={"10px"} style={{ flexWrap: "nowrap" }}>
        <div
          style={{
            border: "2px #3377FF solid",
            borderRadius: "50%",
            padding: "3px",
            zIndex: "1",
          }}
        >
          <Avatar
            variant="outline"
            size="sm"
            color="blue"
            src={image}
            radius="xl"
          />
        </div>

        <Box className={classes.profileText}>
          <Text style={{ color: "#2A004C" }} size="sm" fw={500}>
            {name}
          </Text>

          <Text style={{ color: "#696969" }} size="xs">
            {position}
          </Text>
        </Box>

        {icon || (
          <IconChevronDown
            className={classes.profileIcon}
            size="1.3rem"
            color="#3377FF"
          />
        )}
      </Group>
    </UnstyledButton>
  )
);

export default function EmployeeProfile({ position, logo }) {
  const { data: session } = useSession();
  const { handleSignOut } = useSignOut();
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Menu position="bottom-end" offset={10}>
        <Menu.Target>
          <UserButton
            image={logo || "/assets/images/avata2.png"}
            name={
              session && `${session.user.firstName} ${session.user.lastName}`
            }
            position={position || session?.user.role.name}
          />
        </Menu.Target>
        <Menu.Dropdown w={150}>
          <Menu.Item
            component="a"
            href="/employee/settings"
            className={classes.menuLink}
            data-active={"/employee/settings"}
            leftSection={
              <IconUser
                style={{ width: rem(14), height: rem(14), color: "#3377FF" }}
              />
            }
          >
            Profile
          </Menu.Item>
          <Menu.Item
            component="a"
            href="/employee/settings"
            leftSection={
              <IconSettingsQuestion
                style={{ width: rem(14), height: rem(14), color: "#3377FF" }}
              />
            }
          >
            Settings
          </Menu.Item>
          <Menu.Item
            onClick={open}
            c={"#FF0000"}
            leftSection={
              <IconExternalLink
                style={{ width: rem(14), height: rem(14), color: "#FF0000" }}
              />
            }
          >
            Sign Out
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
      <Modal
        withCloseButton={false}
        opened={opened}
        onClose={close}
        centered
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      >
        <Stack py={"3rem"} justify="center" align="center">
          <ActionIcon variant="transparent" size="xl">
            <IconLogout
              style={{
                color: "#FF0000",
                fontSize: "20px",
                width: "100%",
                height: "100%",
              }}
              stroke={1.5}
            />
          </ActionIcon>
          <Text fw={600} style={{ fontSize: "25px", color: "#000000" }}>
            Confirm Sign Out
          </Text>

          <Text style={{ fontSize: "16px", color: "#1E1E1E" }}>
            Are you sure you want to sign out?
          </Text>
          <Group mt="1rem" justify="flex-end" align="center">
            <Button
              variant="outline"
              size="md"
              color="#A3A3A3"
              style={{ borderColor: "#A3A3A3" }}
              tt="capitalize"
              onClick={close}
            >
              cancel
            </Button>
            <Button
              variant="contained"
              size="md"
              style={{ backgroundColor: "#FF0000" }}
              tt="capitalize"
              onClick={() => {
                handleSignOut();
                close();
              }}
            >
              sign out
            </Button>
          </Group>
        </Stack>
      </Modal>
    </>
  );
}

UserButton.displayName = "UserButton";
