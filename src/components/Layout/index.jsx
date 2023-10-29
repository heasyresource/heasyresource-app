import React from "react";
import { Header, Navbar } from "..";
import { ActionIcon, Box, Flex, Image } from "@mantine/core";
import { IconBell, IconMessage2Search } from "@tabler/icons-react";
import Profile from "../Profile";
import classes from "./layout.module.css";

const Layout = ({ children }) => {
  return (
    <main className={classes.appWrapper}>
      <Navbar />
      <Box className={classes.appContainer}>
        <Header />
        <Box
          className={classes.appContent}
          mx="20px"
          ta="center"
          flex={2}
          style={{ overflow: "scroll" }}
        >
          <Flex
            pt="1rem"
            justify={"flex-end"}
            align={"center"}
            gap="30px"
            className={classes.profileContainer}
          >
            <Image
              src="/assets/images/companyLogo.png"
              alt="company"
              className={classes.companyLogo}
            />
            <ActionIcon
              size="lg"
              radius="lg"
              variant="light"
              style={{ color: "#3377F" }}
            >
              <IconBell />
            </ActionIcon>
            <ActionIcon
              size="lg"
              style={{ color: "#3377F" }}
              radius="lg"
              variant="light"
            >
              <IconMessage2Search />
            </ActionIcon>
            <Profile />
          </Flex>
          {children}
        </Box>
      </Box>
    </main>
  );
};

export default Layout;
