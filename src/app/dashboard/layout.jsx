"use client";
import { Group, AppShell, Text, ActionIcon } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import cx from "clsx";
import classes from "./dashboard.module.css";
import Image from "next/image";
import NextImage from "next/image";
import { IconBell, IconMessageDots } from "@tabler/icons-react";
import { useState } from "react";
import { Header } from "@/components";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Profile from "@/components/Profile";
const Layout = ({ children }) => {
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
        <Group justify="flex-end" gap="28" style={{ flexWrap: "nowrap" }}>
          <Group>
            <Image
              src={"/jitto.svg"}
              width={28}
              height={28}
              component={NextImage}
              alt="Company Logo"
            />
            <Text fw={500} c="#616161">
              Jitto Consultancy Ltd.
            </Text>
          </Group>
          <ActionIcon
            color="rgba(126, 166, 244, 0.22)"
            variant="filled"
            style={{
              width: "48px",
              height: "48px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "50%",
              zIndex: "1",
            }}
          >
            <IconBell color="black" />
          </ActionIcon>
          <ActionIcon
            color="rgba(126, 166, 244, 0.22)"
            variant="filled"
            style={{
              width: "48px",
              height: "48px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "50%",
              zIndex: "1",
            }}
          >
            <IconMessageDots color="black" />
          </ActionIcon>
          <Profile />
        </Group>
      </AppShell.Header>
      <AppShell.Header className={classes.mobileHeader}>
        <Header />
      </AppShell.Header>

      <NavBar />

      <Main>{children}</Main>
    </AppShell>
  );
};

export default Layout;
