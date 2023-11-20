"use client";

import { Card, CardSection, Space, Text } from "@mantine/core";
import React from "react";
import SettingsNav from "@/components/SettingsLayout/SettingsNav";
import SettingWrap from "./settingWrap";

const Settings = () => {
  return (
    <>
      <Card
        style={{
          backgroundColor: "#ffff",
          borderRadius: "15px",
          borderBottom: "1px solid #DDDDDD",
          margin: "0px",
        }}
      >
        <CardSection py="25px" style={{ borderBottom: "1px solid #DDDDDD" }}>
          <SettingsNav tabTitle={"Settings"} />
        </CardSection>
        <Text ta={{ base: "center", md: "left" }} py={30} fz={24} fw={700}>
          Company Information
        </Text>
      </Card>
      <Space h={24} />
      <SettingWrap />
    </>
  );
};

export default Settings;
