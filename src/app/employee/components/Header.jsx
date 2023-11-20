"use client";
import React from "react";
import {
  IconHome,
  IconSettings,
  IconUserDollar,
  IconCalendarEvent,
  IconAlignLeft,
} from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ActionIcon,
  Divider,
  Drawer,
  Flex,
  Group,
  Image,
  Stack,
  Text,
} from "@mantine/core";
import classes from "../dashboard.module.css";
import { useDisclosure } from "@mantine/hooks";
import EmployeeProfile from "./EmployeeProfile";

const Header = ({ companyName, companyLogo, logoUrl }) => {
  const pathname = usePathname();
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const data = [
    { link: "/employee", label: "Dashboard", icon: IconHome },
    {
      link: "/employee/leave",
      label: "Leave",
      icon: IconCalendarEvent,
      subLink: true,
    },
    {
      link: "/employee/compensation",
      label: "Compensation",
      icon: IconUserDollar,
      subLink: true,
    },

    {
      link: "/employee/settings",
      label: "Settings",
      icon: IconSettings,
      subLink: true,
    },
  ];
  const links = data.map((item) => (
    <Link
      className={classes.mobile_link}
      data-active={
        item.link === pathname ||
        (pathname.includes(item.link) && item.subLink) ||
        undefined
      }
      href={item.link}
      key={item.label}
      onClick={closeDrawer}
    >
      <item.icon className={classes.mobile_linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </Link>
  ));

  return (
    <>
      <header className={classes.mobile_header}>
        <Flex justify="space-between" align="center" h={"100%"}>
          <ActionIcon
            size={"lg"}
            variant="filled"
            color="#fff"
            opened={drawerOpened.toString()}
            radius={"md"}
            onClick={toggleDrawer}
          >
            <IconAlignLeft style={{ color: "#3377FF" }} />
          </ActionIcon>
          <Group justify="flex-end">
            <EmployeeProfile logo={logoUrl} />
          </Group>
        </Flex>
      </header>
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="70%"
        padding="md"
        zIndex={1000000}
        withCloseButton={false}
      >
        <Stack justify="flex-start" my="lg">
          <Image
            src="/assets/svgs/HRlogo.svg"
            style={{ width: "120px" }}
            alt="logo"
          />
          <Group>
            <Image
              src={companyLogo}
              style={{ width: "30px" }}
              alt="Company Logo"
            />
            <Text
              fw={500}
              c="#616161"
              style={{ fontSize: "13px", textTransform: "capitalize" }}
            >
              {companyName}
            </Text>
          </Group>
        </Stack>
        <Divider mt="4rem" />
        <Stack mt={"1rem"} pr={"20px"}>
          {links}
        </Stack>
      </Drawer>
    </>
  );
};

export default Header;
