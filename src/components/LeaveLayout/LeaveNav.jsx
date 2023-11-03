"use client";
import {
  Button,
  Group,
  Menu,
  MenuDivider,
  MenuDropdown,
  MenuItem,
  MenuTarget,
  Space,
  Text,
} from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import { usePathname } from "next/navigation";
import classes from "./leaveLayout.module.css";
import React from "react";

const LeaveNav = ({ tabTitle }) => {
  const pathname = usePathname();
  return (
    <Group justify="space-between" mx="40px">
      <Text fz="24px" fw="700" tt={"capitalize"}>
        {tabTitle}
      </Text>
      <Group style={{ flexWrap: "nowrap" }}>
        <Button
          w="125px"
          component="a"
          href="/dashboard/leave"
          data-active={"/dashboard/leave" === pathname || undefined}
          className={classes.btnLink}
          variant="filled"
        >
          Leave List
        </Button>
        <Button
          component="a"
          href="/dashboard/leave/assign-leave"
          w="125px"
          variant="filled"
          className={classes.btnLink}
          data-active={
            "/dashboard/leave/assign-leave" === pathname || undefined
          }
        >
          Assign Leave
        </Button>
        <Menu>
          <MenuTarget>
            <Button
              w="150px"
              variant="filled"
              color="#EBEBEB"
              style={{
                color: "#424242",
                fontSize: "13px",
                fontWeight: 700,
              }}
              className={classes.btnLink}
              data-active={
                "/dashboard/leave/leave-type" === pathname ||
                "/dashboard/leave/holidays" === pathname ||
                undefined
              }
            >
              Configuration
              <Space w="5px" />
              <IconChevronDown size="1.3rem" color="#3377FF" />
            </Button>
          </MenuTarget>
          <MenuDropdown>
            <MenuItem
              fz="xs"
              component="a"
              className={classes.activeConfig}
              data-active={
                "/dashboard/leave/leave-type" === pathname || undefined
              }
              href="/dashboard/leave/leave-type"
            >
              Leave Type
            </MenuItem>
            <MenuDivider />
            <MenuItem
              fz="xs"
              component="a"
              className={classes.activeConfig}
              data-active={
                "/dashboard/leave/holidays" === pathname || undefined
              }
              href="/dashboard/leave/holidays"
            >
              Holidays
            </MenuItem>
          </MenuDropdown>
        </Menu>
      </Group>
    </Group>
  );
};

export default LeaveNav;
