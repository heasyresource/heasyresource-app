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
  const defaultSubdomain = ["www", "heasyresource"];
  const hasSubdomain = !defaultSubdomain.includes(subdomain);

  if (hasSubdomain && session) {
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
    if (getEmployeeData.statusCode === 200) {
      employeeInfo = getEmployeeData.results;
    }
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
    if (getLeavesData.statusCode === 200) {
      leavesInfo = getLeavesData.results.data;
    }
  }

  return (
    <PageWrap
      employeeInfo={employeeInfo && employeeInfo}
      leavesInfo={leavesInfo && leavesInfo}
    ></PageWrap>
  );
};

export default Dashboard;
