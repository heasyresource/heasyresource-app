"use client";
import useProfileNav from "@/hooks/useProfileNav";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import classes from "./profile.module.css";
import { Badge, Box, Card, Divider, Flex, Stack, Text } from "@mantine/core";
import SingleEmployeeUpload from "@/app/employee/components/SingleEmployeeUpload";

const data = [
  {
    link: "/dashboard/settings/profile",
    label: "personal Details",
  },
  {
    link: "/dashboard/settings/profile/contact-detail",
    label: "contact Details",
  },
  {
    link: "/dashboard/settings/profile/emergency-contact",
    label: "emergency contact",
  },
  {
    link: "/dashboard/settings/profile/employment-info",
    label: "employment info",
  },
  {
    link: "/dashboard/settings/profile/qualifications",
    label: "qualifications",
  },
];
const LayoutWrap = ({ employeeInfo, children }) => {
  const { handleSubmit, uploading } = useProfileNav();
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
  return (
    <Card
      style={{
        backgroundColor: "#ffff",
        borderRadius: "15px",
        borderBottom: "1px solid #DDDDDD",
        margin: "0px",
      }}
    >
      <Flex className={classes.flexWrap}>
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
              <SingleEmployeeUpload
                uploading={uploading}
                handleSubmit={handleSubmit}
                logo={employeeInfo && employeeInfo.logoUrl}
              />

              <Text
                tt="capitalize"
                ta="center"
                style={{ fontWeight: 500, fontSize: "20px" }}
              >
                {employeeInfo &&
                  `${employeeInfo.firstName} ${employeeInfo.lastName}`}
              </Text>
              <Badge
                variant="light"
                color="#3377FF"
                style={{ color: "#3377FF", textTransform: "capitalize" }}
              >
                {employeeInfo && employeeInfo.employmentInfo.position}
              </Badge>
            </Stack>
            <Divider my="sm" w={"100%"} />
            <Stack justify="flex-start" ta={"start"}>
              {links}
            </Stack>
          </Stack>
        </nav>
        <Box style={{ flex: 2 }}>{children}</Box>
      </Flex>
    </Card>
  );
};

export default LayoutWrap;
