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
import React from "react";

const EmployeeNav = ({ tabTitle }) => {
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
          style={{ color: "#424242", fontSize: "13px", fontWeight: 700 }}
          variant="filled"
          color="#E7F7FF"
        >
          Employee List
        </Button>
        <Button
          component="a"
          href="/dashboard/employee/add-employee"
          w="125px"
          variant="filled"
          color="#EBEBEB"
          style={{ color: "#424242", fontSize: "13px", fontWeight: 700 }}
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
            >
              Configuration
              <Space w="5px" />
              <IconChevronDown size="1.3rem" color="#3377FF" />
            </Button>
          </MenuTarget>
          <MenuDropdown>
            <MenuItem fz="xs">Optional Fields</MenuItem>
            <MenuDivider />
            <MenuItem
              fz="xs"
              component="a"
              href="/dashboard/employee/add-employee/bulk"
            >
              Data Import
            </MenuItem>
          </MenuDropdown>
        </Menu>
      </Group>
    </Group>
  );
};

export default EmployeeNav;
