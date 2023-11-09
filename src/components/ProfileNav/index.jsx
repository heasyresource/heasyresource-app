"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import classes from "./profileNav.module.css";
import { Badge, Box, Divider, Stack, Text } from "@mantine/core";
import { AddImage } from "..";
import { obfuscateToken } from "@/utils/encryptToken";

const data = [
  { link: "/dashboard/employee/personal-detail", label: "personal Details" },
  { link: "/dashboard/employee/contact-detail", label: "contact Details" },
  { link: "/dashboard/employee/emergency-contact", label: "emergency contact" },
  { link: "/dashboard/employee/employment-info", label: "employment info" },
  { link: "/dashboard/employee/qualifications", label: "qualifications" },
  { link: "/dashboard/employee/compensation", label: "compensation" },
];
const ProfileNav = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [position, setPosition] = useState("");
  const pathname = usePathname();
  const links = data.map((item) => (
    <Link
      className={classes.link}
      data-active={item.link === pathname || undefined}
      href={item.link}
      key={item.label}
    >
      <span>{item.label}</span>
    </Link>
  ));
  useEffect(() => {
    const user =
      localStorage.getItem("employee") &&
      obfuscateToken(false, localStorage.getItem("employee") ?? "");
    if (user) {
      const parsedData = JSON.parse(user);
      setFirstName(parsedData.firstName);
      setLastName(parsedData.lastName);
      setPosition(parsedData.employmentInfo.position);
    }
  }, []);

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
            <AddImage />
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
