"use client";
import { AppShell, AppShellHeader, Group, Image, Text } from "@mantine/core";
import React, { useState } from "react";
import EmployeeProfile from "./components/EmployeeProfile";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import { useDisclosure } from "@mantine/hooks";
import cx from "clsx";
import classes from "./dashboard.module.css";

const LayoutWrap = ({ employeeInfo, children }) => {
  const [opened, { toggle }] = useDisclosure();
  const [scrolled, setScrolled] = useState(false);
  return (
    <AppShell
      layout="alt"
      padding="lg"
      header={{ height: 80 }}
      navbar={{
        width: "245",
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
    >
      <AppShellHeader
        style={{ backgroundColor: "#F8F9FA", padding: "20px" }}
        className={cx(classes.appShellHeader, { [classes.scrolled]: scrolled })}
        withBorder={false}
      >
        <Group justify="flex-end" gap="20" style={{ flexWrap: "nowrap" }}>
          <Group style={{ flexWrap: "nowrap" }}>
            <Image
              src={employeeInfo && employeeInfo.company.logoUrl}
              style={{ width: "30px" }}
              alt=""
            />

            <Text
              fw={500}
              c="#616161"
              style={{ whiteSpace: "nowrap", textTransform: "capitalize" }}
            >
              {employeeInfo && employeeInfo.company.name}
            </Text>
          </Group>
          {/* <ActionIcon
            color="rgba(126, 166, 244, 0.22)"
            variant="filled"
            size={"lg"}
            radius={"lg"}
          >
            <IconBell color="black" />
          </ActionIcon>
          <ActionIcon
            color="rgba(126, 166, 244, 0.22)"
            variant="filled"
            size={"lg"}
            radius={"lg"}
          >
            <IconMessageDots color="black" />
          </ActionIcon> */}
          <EmployeeProfile
            logo={employeeInfo && employeeInfo.logoUrl}
            position={employeeInfo && employeeInfo.employmentInfo.position}
            name={
              employeeInfo &&
              `${employeeInfo.firstName} ${employeeInfo.lastName}`
            }
          />
        </Group>
      </AppShellHeader>
      <AppShellHeader className={classes.mobileHeader}>
        <Header
          companyLogo={employeeInfo && employeeInfo.company.logoUrl}
          companyName={employeeInfo && employeeInfo.company.name}
          logoUrl={employeeInfo && employeeInfo.logoUrl}
        />
      </AppShellHeader>
      <NavBar />
      <Main>{children}</Main>
    </AppShell>
  );
};

export default LayoutWrap;
