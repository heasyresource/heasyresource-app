"use client";
import { Button, Group, Text } from "@mantine/core";
import React from "react";
import classes from "../dashboard.module.css";
import { usePathname } from "next/navigation";

const SettingNav = () => {
  const pathname = usePathname();
  return (
    <Group justify="space-between" className={classes.mx}>
      <Text fz="24px" fw="700" tt={"capitalize"}>
        Setting
      </Text>
      <Group>
        <Button
          w="125px"
          component="a"
          href="/employee/settings/profile"
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
        <Button
          component="a"
          href="/employee/settings/security"
          w="125px"
          variant="filled"
          className={classes.btnLink}
          data-active={"/employee/settings/security" === pathname || undefined}
        >
          Password
        </Button>
      </Group>
    </Group>
  );
};

export default SettingNav;
