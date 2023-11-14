"use client";
import {
  Button,
  Group,
  Menu,
  MenuDropdown,
  MenuItem,
  MenuTarget,
  Space,
  Text,
} from "@mantine/core";
import { usePathname } from "next/navigation";
import React from "react";
import classes from "./Settings.module.css";
import {
  IconChevronDown,
} from "@tabler/icons-react";

const SettingsNav = ({ tabTitle }) => {
  const pathname = usePathname();
  return (
    <Group justify="space-between" mx="40px">
      <Text fz="24px" fw="700" tt={"capitalize"}>
        {tabTitle}
      </Text>
      <Group>
        <Menu position="bottom-end" width={150}>
          <MenuTarget>
            <Button
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
              data-active={"/dashboard/settings" === pathname || undefined}
            >
              Company Information
            </Button>
          </MenuTarget>
          <MenuDropdown>
            <MenuItem
              fz="xs"
              component="a"
              className={classes.activeConfig}
              data-active={"/dashboard/settings" === pathname || undefined}
              href="/dashboard/settings"
            >
              General Information
            </MenuItem>
            {/* <MenuItem
              fz="xs"
              component="a"
              className={classes.activeConfig}
              data-active={
                "/dashboard/compensation/deductions" === pathname || undefined
              }
              href="/dashboard/compensation/deductions"
            >
              Corporate Branding
            </MenuItem> */}
          </MenuDropdown>
        </Menu>
        <Menu position="bottom-end" width={150}>
          <MenuTarget>
            <Button
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
              Employment
            </Button>
          </MenuTarget>
          <MenuDropdown>
            <MenuItem
              fz="xs"
              component="a"
              className={classes.activeConfig}
              data-active={"/dashboard/settings/job-categories" === pathname || undefined}
              href="/dashboard/settings/job-categories"
            >
              Job Categories
            </MenuItem>
            {/* <MenuItem
              fz="xs"
              component="a"
              className={classes.activeConfig}
              // leftSection={<IconWalletOff size="1rem" color="#3377FF" />}
              // data-active={
              //   "/dashboard/compensation/deductions" === pathname || undefined
              // }
              // href="/dashboard/compensation/deductions"
            >
              Employment Status
            </MenuItem>
            <MenuItem
              fz="xs"
              component="a"
              className={classes.activeConfig}
              // leftSection={<IconWalletOff size="1rem" color="#3377FF" />}
              // data-active={
              //   "/dashboard/compensation/deductions" === pathname || undefined
              // }
              // href="/dashboard/compensation/deductions"
            >
              Job Titles
            </MenuItem> */}
          </MenuDropdown>
        </Menu>
        <Menu position="bottom-end" width={150}>
          <MenuTarget>
            <Button
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
                "/dashboard/compensation/earnings" === pathname || undefined
              }
            >
              Configuration
            </Button>
          </MenuTarget>
          {/* <MenuDropdown>
            <MenuItem
              fz="xs"
              component="a"
              className={classes.activeConfig}
              leftSection={<IconZoomMoney size="1rem" color="#3377FF" />}
              data-active={
                "/dashboard/settings/job-titles" === pathname || undefined
              }
              href="/dashboard/settings/job-titles"
            >
              Job Titles
            </MenuItem>
            <MenuItem
              fz="xs"
              component="a"
              className={classes.activeConfig}
              leftSection={<IconWalletOff size="1rem" color="#3377FF" />}
              data-active={
                "/dashboard/compensation/deductions" === pathname || undefined
              }
              href="/dashboard/compensation/deductions"
            >
              Employment Status
            </MenuItem>
            <MenuItem
              fz="xs"
              component="a"
              className={classes.activeConfig}
              leftSection={<IconWalletOff size="1rem" color="#3377FF" />}
              data-active={
                "/dashboard/compensation/deductions" === pathname || undefined
              }
              href="/dashboard/compensation/deductions"
            >
              Job Categories
            </MenuItem>
          </MenuDropdown> */}
        </Menu>
      </Group>
    </Group>
  );
};

export default SettingsNav;
