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
import classes from "./employeeLayout.module.css";
import { IconChevronDown } from "@tabler/icons-react";

const EmployeeNav = ({ tabTitle }) => {
  const pathname = usePathname();
  return (
    <Group justify="space-between" className={classes.mx}>
      <Text fz="24px" fw="700" tt={"capitalize"}>
        {tabTitle}
      </Text>
      <Group>
        <Button
          w="125px"
          component="a"
          href="/dashboard/employee"
          data-active={"/dashboard/employee" === pathname || undefined}
          className={classes.btnLink}
          variant="filled"
        >
          Employee List
        </Button>
        <Button
          component="a"
          href="/dashboard/employee/add-employee"
          w="125px"
          variant="filled"
          className={classes.btnLink}
          data-active={
            "/dashboard/employee/add-employee" === pathname ||
            "/dashboard/employee/add-employee/individual" === pathname ||
            "/dashboard/employee/add-employee/bulk" === pathname ||
            undefined
          }
        >
          Add Employee
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
                "/dashboard/employee/department" === pathname || undefined
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
                "/dashboard/employee/department" === pathname || undefined
              }
              href="/dashboard/employee/department"
            >
              Department
            </MenuItem>
          </MenuDropdown>
        </Menu>
      </Group>
    </Group>
  );
};

export default EmployeeNav;
