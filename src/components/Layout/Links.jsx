"use client";
import {
  IconBriefcase2,
  IconCalendarBolt,
  IconGraph,
  IconHome,
  IconSettings,
  IconUserDollar,
  IconUsers,
} from "@tabler/icons-react";
import React from "react";
import classes from "./layout.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const data = [
  { link: "/dashboard", label: "Dashboard", icon: IconHome },
  {
    link: "/employee",
    label: "Employee",
    icon: IconUsers,
    subLink: true,
  },
  { link: "/hiring", label: "Hiring", icon: IconBriefcase2 },
  { link: "/performance", label: "Performance", icon: IconGraph },
  { link: "/absence", label: "Absence", icon: IconCalendarBolt },
  {
    link: "/compensation",
    label: "Compensation",
    icon: IconUserDollar,
  },
  { link: "/settings", label: "Settings", icon: IconSettings },
];

const Links = () => {
  const currentPath = usePathname();
  const links = data.map((item) => (
    <Link
      className={classes.link}
      data-active={
        currentPath === item.link ||
        (currentPath.includes("/employee") && item.subLink) ||
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
