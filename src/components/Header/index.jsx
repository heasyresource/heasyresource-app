"use client";
import React from "react";
import classes from "./header.module.css";
import { Burger, Drawer, Flex, Group, Image, Stack } from "@mantine/core";
import {
  IconUsers,
  IconBriefcase,
  IconShieldChevron,
  IconCalendarEvent,
  IconWallet,
  IconHome,
  IconSettings,
} from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import Profile from "../Profile";
import Link from "next/link";
import { usePathname } from "next/navigation";

const data = [
  { link: "/", label: "Dashboard", icon: IconHome },
  { link: "/employee", label: "Employee", icon: IconUsers, subLink: true },
  { link: "/hiring", label: "Hiring", icon: IconBriefcase },
  { link: "/performance", label: "Performance", icon: IconShieldChevron },
  { link: "absence", label: "Absence", icon: IconCalendarEvent },
  { link: "/compensation", label: "Compensation", icon: IconWallet },
  { link: "/settings", label: "Settings", icon: IconSettings },
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
