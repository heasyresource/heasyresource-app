"use client";
import Loading from "@/components/Loading";
import { obfuscateToken } from "@/utils/encryptToken";
import { Badge, Box, Group, Space, Text } from "@mantine/core";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import classes from "../profile.module.css";
import Link from "next/link";
import AddEmployeeImg from "../../components/AddEmployeeImg";
import SettingImg from "../../components/SettingImg";
import useSetting from "@/hooks/useSetting";
import useSetEmployee from "@/hooks/useSetEmployee";

const profileLinks = [
  { link: "/employee/settings/profile", label: "Personal Details" },
  {
    link: "/employee/settings/profile/contact-details",
    label: "Contact Details",
  },
  {
    link: "/employee/settings/profile/qualifications",
    label: "Qualifications",
  },
];
const ProfileRoot = ({ children }) => {
  const { handleSubmit, uploading, employeeInfo, gettingInfo } =
    useSetEmployee();
  const pathname = usePathname();

  const profileItems = profileLinks.map((item, index) => (
    <Link
      style={{ textDecoration: "none" }}
      data-active={item.link === pathname || undefined}
      href={item.link}
      key={item.label}
      className={classes.profileLink}
    >
      {item.label}
    </Link>
  ));

  return (
    <>
      {gettingInfo ? (
        <Loading />
      ) : (
        <>
          <Group my={"auto"} align="center" justify="flex-start" mt="lg">
            {/* <AddEmployeeImg logo={logo} /> */}
            <SettingImg
              uploading={uploading}
              logo={employeeInfo?.logo}
              handleSubmit={handleSubmit}
            />
            <div>
              <Text fz={24} fw={500}>
                {employeeInfo?.name}
              </Text>
              <Badge tt={"capitalize"} variant="light" color="blue">
                {employeeInfo?.position}
              </Badge>
              <Space h={10} />

              <Group wrap="nowrap" gap={10} mt={5}>
                <Text fw={700} fz="sm" c={"#686868"}>
                  Email:
                </Text>
                <Text fz="sm" c="dimmed">
                  {employeeInfo?.email}
                </Text>
              </Group>
            </div>
          </Group>

          <header
            style={{ marginTop: "10px" }}
            className={classes.profileHeader}
          >
            <Box className={classes.links}>
              <Group
                gap={0}
                justify="flex-start"
                mb="lg"
                className={classes.profileLinks}
              >
                {profileItems}
              </Group>
              <div>{children}</div>
            </Box>
          </header>
        </>
      )}
    </>
  );
};

export default ProfileRoot;
