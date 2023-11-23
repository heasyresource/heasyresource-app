import React from "react";

import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { headers } from "next/headers";
import { getSubdomain } from "@/utils/publicFunctions";

import PageWrap from "./PageWrap";

const Dashboard = async () => {
  let leaves = null;
  let employees = null;
  let analytics = null;
  const session = await getServerSession(authOptions);
  const headersList = headers();
  const domain = headersList.get("host");
  const subdomain = getSubdomain(domain);
  const defaultSubdomain = ["www", "heasyresource"];
  const hasSubdomain = !defaultSubdomain.includes(subdomain);

  if (hasSubdomain && session) {
    const getLeaves = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/employee/leaves?status=Pending`,
      {
        headers: {
          Authorization: `Bearer ${session?.user.token}`,
          "x-subdomain-name": subdomain,
        },
      }
    );
    const getLeavesData = await getLeaves.json();
    console.log({getLeavesData});
    if (getLeavesData.statusCode === 200) {
      leaves = getLeavesData.results.data;
    }
    const getAnalytics = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/analytics/companies/${session?.user.company.id}`,
      {
        headers: {
          Authorization: `Bearer ${session?.user.token}`,
          "x-subdomain-name": subdomain,
        },
      }
    );
    const getAnalyticsData = await getAnalytics.json();
    if (getAnalyticsData.statusCode === 200) {
      analytics = getAnalyticsData.results;
    }

    const getEmployees = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/employees/${session?.user.company.id}`,
      {
        headers: {
          Authorization: `Bearer ${session?.user.token}`,
          "x-subdomain-name": subdomain,
        },
      }
    );
    const getEmployeesData = await getEmployees.json();
    if (getEmployeesData.statusCode === 200) {
      employees = getEmployeesData.results.data;
    }
  }

  const currentDate = new Date();
  return (
    <PageWrap
      session={session}
      currentDate={currentDate}
      leaves={leaves && leaves}
      employees={employees && employees}
      analytics={analytics && analytics}
    ></PageWrap>
  );
};

export default Dashboard;
