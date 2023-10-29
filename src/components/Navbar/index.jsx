"use client";
import React from "react";
import classes from "./navbar.module.css";
import {
  IconUsers,
  IconBriefcase,
  IconShieldChevron,
  IconCalendarEvent,
  IconWallet,
  IconHome,
  IconSettings,
} from "@tabler/icons-react";
import { Group, Stack, Image } from "@mantine/core";
import Link from "next/link";
import { usePathname } from "next/navigation";

const data = [
  { link: "/", label: "Dashboard", icon: IconHome },
  { link: "/employee", label: "Employee", icon: IconUsers, subLink: true },
  { link: "/hiring", label: "Hiring", icon: IconBriefcase },
  { link: "/performance", label: "Performance", icon: IconShieldChevron },
  { link: "/absence", label: "Absence", icon: IconCalendarEvent },
  { link: "/compensation", label: "Compensation", icon: IconWallet },
  { link: "/settings", label: "Settings", icon: IconSettings },
];
const Navbar = () => {
  const pathname = usePathname();
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
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Group justify="flex-start">
          <Image src="/assets/svgs/HRlogo.svg" style={{ width: "140px" }} />
        </Group>
        <Stack mt="3rem">{links}</Stack>
      </div>
    </nav>
  );
};
export default Navbar;
