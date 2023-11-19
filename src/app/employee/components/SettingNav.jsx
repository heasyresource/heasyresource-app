"use client";
import { Button, Group, Text } from "@mantine/core";
import React from "react";
import classes from "../dashboard.module.css";
import { usePathname } from "next/navigation";
import Link from "next/link";

const SettingNav = () => {
  const pathname = usePathname();
  return (
    <Group justify="space-between" className={classes.mx}>
      <Text fz="24px" fw="700" tt={"capitalize"}>
        Setting
      </Text>
      <Group>
        <Link href="/employee/settings/profile">
          <Button
            w="125px"
            data-active={
              "/employee/settings/profile" === pathname ||
              pathname.includes("/employee/settings/profile") ||
              undefined
            }
            className={classes.btnLink}
            variant="filled"
          >
            Profile
          </Button>
        </Link>
        <Link href="/employee/settings/security">
          <Button
            w="125px"
            variant="filled"
            className={classes.btnLink}
            data-active={
              "/employee/settings/security" === pathname || undefined
            }
          >
            Password
          </Button>
        </Link>
      </Group>
    </Group>
  );
};

export default SettingNav;
