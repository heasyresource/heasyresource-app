"use client";
import React from "react";
import classes from "./header.module.css";
import { Burger, Drawer, Flex, Group, Image, Stack } from "@mantine/core";
import {
  IconUsers,
  IconHome,
  IconSettings,
  IconBriefcase2,
  IconCalendarBolt,
} from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import Profile from "../Profile";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconGraph, IconUserDollar } from "@tabler/icons-react";

const data = [
  { link: "/dashboard", label: "Dashboard", icon: IconHome },
  {
    link: "/dashboard/employee",
    label: "Employee",
    icon: IconUsers,
    subLink: true,
  },
  { link: "/dashboard/hiring", label: "Hiring", icon: IconBriefcase2 },
  { link: "/dashboard/performance", label: "Performance", icon: IconGraph },
  { link: "/dashboard/absence", label: "Absence", icon: IconCalendarBolt },
  {
    link: "/dashboard/compensation",
    label: "Compensation",
    icon: IconUserDollar,
  },
  { link: "/dashboard/settings", label: "Settings", icon: IconSettings },
];
const Header = () => {
  const pathname = usePathname();
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const links = data.map((item) => (
    <Link
      className={classes.link}
      data-active={
        item.link === pathname ||
        (pathname.includes("/employee") && item.subLink) ||
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
          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            aria-label="Toggle navigation"
          />

          <Image
            src="/assets/images/companyLogo.png"
            alt="company"
            className={classes.companyLogo}
          />

          <Profile />
        </Flex>
      </header>
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="70%"
        padding="md"
        zIndex={1000000}
      >
        <Group justify="flex-start">
          <Image src="/assets/svgs/HRlogo.svg" style={{ width: "120px" }} />
        </Group>
        <Stack mt={"2rem"}>{links}</Stack>
      </Drawer>
    </>
  );
};

export default Header;
