"use client";
import { Group, AppShell, Text, ActionIcon, Box, Image } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import cx from "clsx";
import classes from "./dashboard.module.css";
import { IconBell, IconMessageDots } from "@tabler/icons-react";
import { useState } from "react";
import { Header } from "@/components";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Profile from "@/components/Profile";
import { useDashboard } from "@/hooks";
const Layout = ({ children }) => {
  const { logo, companyName } = useDashboard();
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
            <Image src={logo || ""} style={{ width: "30px" }} alt="" />

            <Text
              fw={500}
              c="#616161"
              style={{ whiteSpace: "nowrap", textTransform: "capitalize" }}
            >
              {companyName}
            </Text>
          </Group>
          <ActionIcon
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
          </ActionIcon>
          <Profile />
        </Group>
      </AppShell.Header>
      <AppShell.Header className={classes.mobileHeader}>
        <Header companyName={companyName} logo={logo} />
      </AppShell.Header>

      <NavBar />

      <Main>{children}</Main>
    </AppShell>
  );
};

export default Layout;
