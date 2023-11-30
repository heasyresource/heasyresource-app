"use client";
import {
  Button,
  Group,
  Menu,
  MenuDropdown,
  MenuItem,
  MenuTarget,
  Text,
} from "@mantine/core";
import { usePathname } from "next/navigation";
import React from "react";
import classes from "./Settings.module.css";
import { IconChevronDown } from "@tabler/icons-react";
import Link from "next/link";

const SettingsNav = ({ tabTitle }) => {
  const pathname = usePathname();
  return (
    <Group justify="space-between" className={classes.mx}>
      <Text fz="24px" fw="700" tt={"capitalize"}>
        {tabTitle}
      </Text>
      <Group>
        <Link href="/dashboard/settings">
          <Button
            aria-label="company-information"
            w="auto"
            variant="filled"
            color="#EBEBEB"
            style={{
              color: "#424242",
              fontSize: "13px",
              fontWeight: 700,
            }}
            className={classes.btnLink}
            data-active={"/dashboard/settings" === pathname || undefined}
          >
            Company Information
          </Button>
        </Link>
        <Link href="/dashboard/settings/profile">
          <Button
            aria-label="profile"
            w="auto"
            variant="filled"
            color="#EBEBEB"
            style={{
              color: "#424242",
              fontSize: "13px",
              fontWeight: 700,
            }}
            className={classes.btnLink}
            data-active={
              "/dashboard/settings/profile" === pathname ||
              pathname.includes("/dashboard/settings/profile") ||
              undefined
            }
          >
            Profile
          </Button>
        </Link>
        <Menu position="bottom-end" width={150} withArrow>
          <MenuTarget>
            <Button
              aria-label="configuration"
              w="auto"
              variant="filled"
              color="#EBEBEB"
              style={{
                color: "#424242",
                fontSize: "13px",
                fontWeight: 700,
              }}
              className={classes.btnLink}
              rightSection={<IconChevronDown size="1.3rem" color="#3377FF" />}
              data-active={
                "/dashboard/settings/job-categories" === pathname || undefined
              }
            >
              Configuration
            </Button>
          </MenuTarget>
          <MenuDropdown>
            <Link
              style={{ textDecoration: "none" }}
              className={classes.activeConfig}
              href="/dashboard/settings/job-categories"
              data-active={
                "/dashboard/settings/job-categories" === pathname || undefined
              }
            >
              <MenuItem fz="xs">Job categories</MenuItem>
            </Link>
          </MenuDropdown>
        </Menu>
      </Group>
    </Group>
  );
};

export default SettingsNav;
