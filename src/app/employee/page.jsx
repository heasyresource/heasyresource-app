import React from "react";
import PageWrap from "./PageWrap";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { headers } from "next/headers";
import { getSubdomain } from "@/utils/publicFunctions";

const Dashboard = async () => {
  let employeeInfo = null;
  let leavesInfo = null;
  const session = await getServerSession(authOptions);
  const headersList = headers();
  const domain = headersList.get("host");
  const subdomain = getSubdomain(domain);
  if (subdomain && session) {
    const getEmployee = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/employees/${session.user.company.id}/employee/${session.user.id}`,
      {
        headers: {
          Authorization: `Bearer ${session?.user.token}`,
          "x-subdomain-name": subdomain,
        },
      }
    );
    const getEmployeeData = await getEmployee.json();
    employeeInfo = getEmployeeData.results;

    const getLeaves = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/employee/leaves/me?paginate=false`,
      {
        headers: {
          Authorization: `Bearer ${session?.user.token}`,
          "x-subdomain-name": subdomain,
        },
      }
    );
    const getLeavesData = await getLeaves.json();
    leavesInfo = getLeavesData.results.data;
  }

  return (
    <PageWrap
      employeeInfo={employeeInfo && employeeInfo}
      leavesInfo={leavesInfo && leavesInfo}
    ></PageWrap>
  );
};

export default Dashboard;
