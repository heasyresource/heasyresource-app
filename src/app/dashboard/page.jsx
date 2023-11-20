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
  if (subdomain && session) {
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
    leaves = getLeavesData.results.data;
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
    analytics = getAnalyticsData.results;

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
    employees = getEmployeesData.results.data;
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
