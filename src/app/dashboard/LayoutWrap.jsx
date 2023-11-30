"use client";
import Profile from "@/components/Profile";
import { AppShell, Group, Image, Text } from "@mantine/core";
import cx from "clsx";
import classes from "./dashboard.module.css";
import { Header } from "@/components";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import React, { useState } from "react";
import { useDisclosure } from "@mantine/hooks";

const LayoutWrap = ({ children, companyInfo, companyRep }) => {
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
      <AppShell.Header
        style={{ backgroundColor: "#F8F9FA", padding: "20px" }}
        className={cx(classes.appShellHeader, { [classes.scrolled]: scrolled })}
        withBorder={false}
      >
        <Group justify="flex-end" gap="20" style={{ flexWrap: "nowrap" }}>
          <Group style={{ flexWrap: "nowrap" }}>
            <Image
              src={companyInfo && companyInfo.logoUrl}
              style={{ width: "30px" }}
              alt=""
            />

            <Text
              fw={500}
              c="#616161"
              style={{ whiteSpace: "nowrap", textTransform: "capitalize" }}
            >
              {companyInfo && companyInfo.name}
            </Text>
          </Group>

          <Profile
            image={companyRep && companyRep.logoUrl}
            position={companyRep && companyRep.employmentInfo.position}
            name={
              companyRep && `${companyRep.firstName} ${companyRep.lastName}`
            }
          />
        </Group>
      </AppShell.Header>
      <AppShell.Header className={classes.mobileHeader}>
        <Header
          companyName={companyInfo && companyInfo.name}
          logo={companyInfo && companyInfo.logoUrl}
          image={companyRep && companyRep.logoUrl}
        />
      </AppShell.Header>

      <NavBar />

      <Main>{children}</Main>
    </AppShell>
  );
};

export default LayoutWrap;
