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
import classes from "../CompensationLayout/Compensation.module.css";
import { IconChevronDown } from "@tabler/icons-react";

const CompensationNav = ({ tabTitle }) => {
  const pathname = usePathname();
  return (
    <Group justify="space-between" className={classes.mx}>
      <Text fz="24px" fw="700" tt={"capitalize"}>
        {tabTitle}
      </Text>
      <Group>
        <Button
          w="auto"
          component="a"
          href="/dashboard/compensation"
          data-active={
            "/dashboard/compensation" === pathname ||
            "/dashboard/compensation/employee-payslip" === pathname ||
            undefined
          }
          className={classes.btnLink}
          variant="filled"
        >
          Employee Salary
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
                "/dashboard/compensation/earnings" === pathname ||
                "/dashboard/compensation/deductions" === pathname ||
                undefined
              }
            >
              Salary Component
            </Button>
          </MenuTarget>
          <MenuDropdown>
            <MenuItem
              fz="xs"
              component="a"
              className={classes.activeConfig}
              data-active={
                "/dashboard/compensation/earnings" === pathname || undefined
              }
              href="/dashboard/compensation/earnings"
            >
              Earnings
            </MenuItem>
            <MenuItem
              fz="xs"
              component="a"
              className={classes.activeConfig}
              data-active={
                "/dashboard/compensation/deductions" === pathname || undefined
              }
              href="/dashboard/compensation/deductions"
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
