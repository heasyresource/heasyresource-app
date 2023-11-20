import React from "react";
import PageWrap from "./PageWrap";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { headers } from "next/headers";
import { getSubdomain } from "@/utils/publicFunctions";

const Admin = async () => {
  let analytics = null;
  const session = await getServerSession(authOptions);
  const headersList = headers();
  const domain = headersList.get("host");
  const subdomain = getSubdomain(domain);
  if (session) {
    const getAnalytics = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/analytics/`,
      {
        headers: {
          Authorization: `Bearer ${session?.user.token}`,
        },
      }
    );
    const getAnalyticsData = await getAnalytics.json();
    analytics = getAnalyticsData.results;
    console.log({ getAnalyticsData });
  }
  return <PageWrap analytics={analytics && analytics} />;
};

export default Admin;
