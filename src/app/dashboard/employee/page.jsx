import {
  Button,
  Card,
  CardSection,
  Group,
  Menu,
  MenuDropdown,
  MenuItem,
  MenuTarget,
  Space,
  Text,
} from "@mantine/core";
import {
  IconChevronDown,
  IconExternalLink,
  IconHelpOctagon,
  IconLockOpen,
  IconUser,
} from "@tabler/icons-react";
import React from "react";
import InputField from "../components/InputField";
import { TableSelection } from "../components/TableSelection";
import classes from "./employee.module.css";

const Employee = () => {
  return (
    <>
      <Card
        style={{
          backgroundColor: "#ffff",
          borderRadius: "15px",
          borderBottom: "1px solid #DDDDDD",
          minHeight: "390px",
          margin: "0px",
        }}
      >
        <CardSection
          pt="25px"
          pb="55px"
          style={{ borderBottom: "1px solid #DDDDDD" }}
          className={classes.cardSection}
        >
          <Group justify="space-between" mx="40px">
            <Text fz="24px" fw="700">
              Employee Management
            </Text>
            <Group>
              <Button w="125px" variant="filled" color="#E7F7FF">
                <Text c="#424242" fz="13px" fw={700}>
                  Employee List
                </Text>
              </Button>
              <Button w="125px" variant="filled" color="#EBEBEB">
                <Text c="#424242" fz="13px" fw={700}>
                  Add Employee
                </Text>
              </Button>
              <Menu>
                <MenuTarget>
                  <Button w="150px" variant="filled" color="#EBEBEB">
                    <Text c="#424242" fz="13px" fw={700}>
                      Configuration
                    </Text>
                    <Space w="5px" />
                    <IconChevronDown size="1.3rem" color="#3377FF" />
                  </Button>
                </MenuTarget>
                <MenuDropdown>
                  <MenuItem
                    fz="xs"
                    leftSection={
                      <IconUser
                        style={{
                          width: "14px",
                          height: "14px",
                          color: "rgba(126, 166, 244, 1)",
                        }}
                      />
                    }
                  >
                    Profile
                  </MenuItem>
                  <MenuItem
                    fz="xs"
                    leftSection={
                      <IconHelpOctagon
                        style={{
                          width: "14px",
                          height: "14px",
                          color: "rgba(126, 166, 244, 1)",
                        }}
                      />
                    }
                  >
                    Support
                  </MenuItem>
                  <MenuItem
                    fz="xs"
                    leftSection={
                      <IconLockOpen
                        style={{
                          width: "14px",
                          height: "14px",
                          color: "rgba(126, 166, 244, 1)",
                        }}
                      />
                    }
                  >
                    Change Password
                  </MenuItem>
                  <MenuItem
                    c="#FF3D00"
                    fz="xs"
                    leftSection={
                      <IconExternalLink
                        style={{ width: "14px", height: "14px" }}
                      />
                    }
                  >
                    Logout
                  </MenuItem>
                </MenuDropdown>
              </Menu>
            </Group>
          </Group>
        </CardSection>
        <InputField />
        <Group justify="flex-end" mt={"3rem"}>
          <Button
            style={{ fontSize: "16px", textTransform: "capitalize" }}
            size="md"
            variant="filled"
            color="#3377FF"
            px={"40px"}
          >
            search
          </Button>
        </Group>
      </Card>
      <TableSelection />
    </>
  );
};

export default Employee;
