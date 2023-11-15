"use client";
import {
  IconCalendarFilled,
  IconHome,
  IconSettings,
  IconUserDollar,
  IconCalendarEvent,
} from "@tabler/icons-react";
import React from "react";
import classes from "../dashboard.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
  },
  {
    link: "/employee/calendar",
    label: "Calendar",
    icon: IconCalendarFilled,
    subLink: true,
  },
  { link: "/employee/settings", label: "Settings", icon: IconSettings },
];

const Links = () => {
  const currentPath = usePathname();
  const links = data.map((item) => (
    <Link
      className={classes.link}
      data-active={
        currentPath === item.link ||
        (currentPath.includes(item.link) && item.subLink) ||
        undefined
      }
      href={item.link}
      key={item.label}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </Link>
  ));
  return <>{links}</>;
};

export default Links;
