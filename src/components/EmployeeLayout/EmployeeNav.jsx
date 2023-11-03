"use client";
import { Button, Group, Text } from "@mantine/core";
import { usePathname } from "next/navigation";
import React from "react";
import classes from "./employeeLayout.module.css";

const EmployeeNav = ({ tabTitle }) => {
  const pathname = usePathname();
  return (
    <Group justify="space-between" mx="40px">
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
        <Button
          component="a"
          href="/dashboard/employee/department"
          w="125px"
          variant="filled"
          className={classes.btnLink}
          data-active={
            "/dashboard/employee/department" === pathname || undefined
          }
        >
          Department
        </Button>
      </Group>
    </Group>
  );
};

export default EmployeeNav;
