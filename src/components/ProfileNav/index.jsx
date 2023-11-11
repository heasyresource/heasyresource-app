"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import classes from "./profileNav.module.css";
import { Badge, Box, Divider, Stack, Text } from "@mantine/core";
import { AddImage } from "..";
import { obfuscateToken } from "@/utils/encryptToken";

const data = [
  { link: "/personal-detail", label: "personal Details" },
  { link: "/contact-detail", label: "contact Details" },
  { link: "/emergency-contact", label: "emergency contact" },
  { link: "/employment-info", label: "employment info" },
  { link: "/qualifications", label: "qualifications" },
  { link: "/compensation", label: "compensation" },
];
const ProfileNav = ({ position, firstName, lastName, id, logoUrl }) => {
  const pathname = usePathname();
  const links = data.map((item) => (
    <Link
      className={classes.link}
      data-active={pathname.includes(item.link) || undefined}
      href={`/dashboard/employee/${id}${item.link}`}
      key={item.label}
    >
      <span>{item.label}</span>
    </Link>
  ));

  return (
    <Box>
      <nav className={classes.navbar}>
        <Stack
          justify="flex-start"
          align="center"
          className={classes.navbarContainer}
        >
          <Stack
            justify="center"
            align="center"
            gap="10px"
            className={classes.navbarContent}
          >
            <AddImage logoUrl={logoUrl} />
            <Text
              tt="capitalize"
              ta="center"
              style={{ fontWeight: 500, fontSize: "20px" }}
            >
              {`${firstName} ${lastName}`}
            </Text>
            <Badge
              variant="light"
              color="#3377FF"
              style={{ color: "#3377FF", textTransform: "capitalize" }}
            >
              {position}
            </Badge>
          </Stack>
          <Divider my="sm" w={"100%"} />
          <Stack justify="flex-start" ta={"start"}>
            {links}
          </Stack>
        </Stack>
      </nav>
    </Box>
  );
};

export default ProfileNav;
