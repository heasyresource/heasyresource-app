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
import classes from "../CompensationLayout/Compensation.module.css";
import { IconChevronDown, IconWalletOff, IconZoomMoney } from "@tabler/icons-react";

const CompensationNav = ({ tabTitle }) => {
  const pathname = usePathname();
  return (
    <Group justify="space-between" mx="40px">
      <Text fz="24px" fw="700" tt={"capitalize"}>
        {tabTitle}
      </Text>
      <Group>
        <Button
          w="auto"
          component="a"
          href="/dashboard/compensation"
          data-active={"/dashboard/compensation" === pathname || undefined}
          className={classes.btnLink}
          variant="filled"
        >
          Employee Salary
        </Button>
        <Button
          component="a"
          href="/dashboard/compensation/add-payroll"
          w="125px"
          variant="filled"
          className={classes.btnLink}
          data-active={
            "/dashboard/compensation/add-payroll" === pathname ||
            // "/dashboard/employee/add-employee/individual" === pathname ||
            // "/dashboard/employee/add-employee/bulk" === pathname ||
            undefined
          }
        >
          Add Payroll
        </Button>
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
                "/dashboard/employee/department" === pathname || undefined
              }
            >
              Salary Component
              {/* <Space w="5px" /> */}
            </Button>
          </MenuTarget>
          <MenuDropdown>
            <MenuItem
              fz="xs"
              component="a"
              className={classes.activeConfig}
              leftSection={<IconZoomMoney size="1rem" color="#3377FF" />}
              data-active={
                "/dashboard/employee/department" === pathname || undefined
              }
              href="/dashboard/employee/department"
            >
              Earnings
            </MenuItem>
            <MenuItem
              fz="xs"
              component="a"
              className={classes.activeConfig}
              leftSection={<IconWalletOff size="1rem" color="#3377FF" />}
              data-active={
                "/dashboard/employee/department" === pathname || undefined
              }
              href="/dashboard/employee/department"
            >
              Deductions
            </MenuItem>
          </MenuDropdown>
        </Menu>
      </Group>
    </Group>
  );
};

export default CompensationNav;
