"use client";
import { Group, AppShell, Text, Image } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import cx from "clsx";
import classes from "./dashboard.module.css";
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import EmployeeProfile from "./components/EmployeeProfile";
import Header from "./components/Header";
import { obfuscateToken } from "@/utils/encryptToken";
const Layout = ({ children }) => {
  const [companyName, setCompanyName] = useState("");
  const [logo, setLogo] = useState("");
  const [companyLogo, setCompanyLogo] = useState("");
  const [position, setPosition] = useState("");
  const [opened, { toggle }] = useDisclosure();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const isDataStored = !!sessionStorage.getItem("employeeInfo");
    if (isDataStored) {
      const storeData = obfuscateToken(
        false,
        sessionStorage.getItem("employeeInfo")
      );
      const parsedData = JSON.parse(storeData);

      setLogo(parsedData.logoUrl);
      setCompanyName(parsedData.name);
      setPosition(parsedData.position);
      setCompanyLogo(parsedData.companyLogo);
    }
  }, []);

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
            <Image src={companyLogo || ""} style={{ width: "30px" }} alt="" />

            <Text
              fw={500}
              c="#616161"
              style={{ whiteSpace: "nowrap", textTransform: "capitalize" }}
            >
              {companyName}
            </Text>
          </Group>
          <EmployeeProfile logo={logo} />
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
