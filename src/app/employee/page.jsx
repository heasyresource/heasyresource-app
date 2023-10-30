import {
  Button,
  Card,
  CardSection,
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
import React from "react";
import InputField from "../../components/Layout/InputField";
import { TableSelection } from "../../components/Layout/TableSelection";
import classes from "./employee.module.css";
import { EmployeeNav, Layout } from "@/components";

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
          <EmployeeNav tabTitle={"employee management"} />
        </CardSection>
        <InputField />
      </Card>
      <TableSelection />
    </>
  );
};

export default Employee;
