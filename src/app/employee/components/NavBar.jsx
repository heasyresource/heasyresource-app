"use client";
import { AppShell, Box, Group } from "@mantine/core";
import React from "react";
import classes from "../dashboard.module.css";
import Footer from "./Footer";
import Links from "./Links";
import Logo from "@/components/Image";

const NavBar = () => {
  return (
    <AppShell.Navbar style={{ backgroundColor: '#CBDCFF', borderTopRightRadius: "25px" }} withBorder={true}>
      <nav className={classes.navbar}>
        <div className={classes.navbarMain}>
          <Group justify="center" mt={35} mb={70}>
            <Logo h={35} />
          </Group>
          <Box style={{ paddingRight: "25px", borderTop: "2px solid #EFEFEF" }}>
            <Links />
          </Box>
        </div>
        <Footer />
      </nav>
    </AppShell.Navbar>
  );
};

export default NavBar;
