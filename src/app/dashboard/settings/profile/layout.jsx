import React from "react";

import LayoutWrap from "./LayoutWrap";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { headers } from "next/headers";
import { getSubdomain } from "@/utils/publicFunctions";
import { Card, CardSection, Space } from "@mantine/core";
import SettingsNav from "@/components/SettingsLayout/SettingsNav";

const ProfileRoot = async ({ children }) => {
  let compannyRep = null;
  const session = await getServerSession(authOptions);
  const headerList = headers();
  const domain = headerList.get("host");
  const subdomain = getSubdomain(domain);
  const defaultSubdomain = ["www", "heasyresource"];
  const hasSubdomain = !defaultSubdomain.includes(subdomain);

  if (hasSubdomain && subdomain) {
    const getCompanyRep = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/employees/${session.user.companyId}/employee/${session.user.id}`,
      {
        headers: {
          Authorization: `Bearer ${session.user.token}`,
          "x-subdomain-name": subdomain,
        },
      }
    );
    const getCompanyRepData = await getCompanyRep.json();
    if (getCompanyRepData.statusCode === 200) {
      compannyRep = getCompanyRepData.results;
    }
  }

  return (
    <>
      <Card
        style={{
          backgroundColor: "#ffff",
          borderRadius: "15px",
          margin: "0px",
        }}
      >
        <CardSection py="25px">
          <SettingsNav tabTitle={"Settings"} />
        </CardSection>
      </Card>
      <Space h={"1rem"} />
      <LayoutWrap employeeInfo={compannyRep && compannyRep}>
        {children}
      </LayoutWrap>
    </>
  );
};

export default ProfileRoot;
