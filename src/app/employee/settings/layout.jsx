"use client";

import { Card, CardSection } from "@mantine/core";
import SettingNav from "../components/SettingNav";

const ProfileLayout = ({ children }) => {
  return (
    <Card
      style={{
        backgroundColor: "#ffff",
        borderRadius: "15px",
        borderBottom: "1px solid #DDDDDD",
        margin: "0px",
        minHeight: "390px",
      }}
    >
      <CardSection py="25px" style={{ borderBottom: "1px solid #DDDDDD" }}>
        <SettingNav />
      </CardSection>

      {children}
    </Card>
  );
};

export default ProfileLayout;
