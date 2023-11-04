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
import classes from "../dashboard.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
  },
  { link: "/dashboard/settings", label: "Settings", icon: IconSettings },
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
