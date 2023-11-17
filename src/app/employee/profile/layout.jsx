"use client";

import {
  Anchor,
  Avatar,
  Badge,
  Box,
  Burger,
  Button,
  Card,
  Group,
  Text,
} from "@mantine/core";
import React, { useState } from "react";
import classes from "./profile.module.css";
import { Container } from "postcss";
import { usePathname } from "next/navigation";

const profileLinks = [
  { link: "/employee/profile", label: "Personal Details" },
  { link: "/employee/profile/contact-details", label: "Contact Details" },
  { link: "/employee/profile/employment-info", label: "Employment Info" },
  { link: "/employee/profile/qualifications", label: "Qualifications" },
];

const ProfileLayout = ({ children }) => {
  const pathname = usePathname();
  const profileItems = profileLinks.map((item, index) => (
    <Anchor
      data-active={ item.link === pathname || undefined}
      href={item.link}
      key={item.label}
      className={classes.profileLink}
    >
      {item.label}
    </Anchor>
  ));

  return (
    <>
      <Card
        style={{
          backgroundColor: "#ffff",
          borderRadius: "15px",
          borderBottom: "1px solid #DDDDDD",
          paddingBottom: "45px",
          margin: "0px",
        }}
      >
        <Text ta={{ base: "center", md: "left" }} p={40} fz={24} fw={700}>
          Profile
        </Text>
        <Group px={40} justify="space-between">
          <Group justify="center">
            <div
              style={{
                border: "3px solid #3377ff",
                borderRadius: "50%",
                padding: "5px",
              }}
            >
              <Avatar
                src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
                radius="10rem"
                size={"120"}
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
              className={classes.align}
            >
              <Text
                ta={{ base: "center", md: "left" }}
                fz={16}
                size="sm"
                fw={500}
                style={{ marginBottom: "8px" }}
              >
                Mohammed Afolabi
              </Text>

              <Text c="dimmed" size="xs" style={{ marginBottom: "4px" }}>
                afolabi@heasyresource.com
              </Text>

              <Badge fw={500} tt={"capitalize"} color={"blue"} variant="light">
                Product Designer
              </Badge>
            </div>
          </Group>
        </Group>

        <header style={{ marginTop: "40px" }} className={classes.profileHeader}>
          <Box className={classes.links} visibleFrom="sm">
            <Group
              gap={0}
              justify="flex-start"
              className={classes.profileLinks}
            >
              {profileItems}
            </Group>
            <div style={{padding: '20px'}}>{children}</div>
          </Box>
        </header>
      </Card>
    </>
  );
};

export default ProfileLayout;
