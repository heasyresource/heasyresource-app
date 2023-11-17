"use client";
import React from "react";
import classes from "./header.module.css";
import {
  ActionIcon,
  Divider,
  Drawer,
  Flex,
  Group,
  Image,
  Indicator,
  Stack,
  Text,
} from "@mantine/core";
import {
  IconUsers,
  IconHome,
  IconSettings,
  IconBriefcase2,
  IconCalendarBolt,
  IconGraph,
  IconUserDollar,
  IconBell,
  IconAlignLeft,
} from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import EmployeeProfile from "@/app/employee/components/EmployeeProfile";
import Profile from "../Profile";

const data = [
  { link: "/dashboard", label: "Dashboard", icon: IconHome },
  {
    link: "/dashboard/employee",
    label: "Employee",
    icon: IconUsers,
    subLink: true,
  },
  {
    link: "/dashboard/hiring",
    label: "Hiring",
    icon: IconBriefcase2,
    subLink: true,
  },
  {
    link: "/dashboard/leave",
    label: "Leave",
    icon: IconCalendarBolt,
    subLink: true,
  },
  {
    link: "/dashboard/compensation",
    label: "Compensation",
    icon: IconUserDollar,
    subLink: true,
  },
  {
    link: "/dashboard/settings",
    label: "Settings",
    icon: IconSettings,
    subLink: true,
  },
];
const Header = ({ companyName, logo }) => {
  const pathname = usePathname();
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const links = data.map((item) => (
    <Link
      className={classes.link}
      data-active={
        item.link === pathname ||
        (pathname.includes(item.link) && item.subLink) ||
        undefined
      }
      href={item.link}
      key={item.label}
      onClick={closeDrawer}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </Link>
  ));

  return (
    <>
      <header className={classes.header}>
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
            <ActionIcon variant="transparent" size={"lg"}>
              <Indicator
                offset={5}
                position="top-end"
                inline
                processing
                size={6}
              >
                <IconBell color="#3F3F3F" />
              </Indicator>
            </ActionIcon>
            <Profile />
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
        <Flex align={'center'} direction={"row"} my="lg">
          <Image
            src="/assets/svgs/HRlogo.svg"
            style={{ height: "27px" }}
            alt="logo"
          />
          <Divider color="#d3d3d35e" mx={10} size="sm" orientation="vertical" />
          <Flex gap={5} align={'center'} direction={'column'}>
            <Image
              src={logo || ""}
              style={{ width: "54px" }}
              alt="Company Logo"
            />
            {/* <Text
              fw={500}
              c="#ced4da"
              style={{ wordWrap: "break-word", fontSize: "12px", textTransform: "capitalize" }}
            >
              {companyName}
            </Text> */}
          </Flex>
        </Flex>
        <Divider mt="4rem" />
        <Stack mt={"1rem"} pr={"20px"}>
          {links}
        </Stack>
      </Drawer>
    </>
  );
};

export default Header;
