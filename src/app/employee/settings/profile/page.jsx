import React from "react";
import PersonalForm from "./PageForm";
import { getServerSession } from "next-auth";
import { headers } from "next/headers";
import { getSubdomain } from "@/utils/publicFunctions";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const PersonalDetails = async () => {
  let employeeInfo = null;
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
  }
  return <PersonalForm employeeInfo={employeeInfo}></PersonalForm>;
};

export default PersonalDetails;
