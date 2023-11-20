import React from "react";
import { getSubdomain } from "@/utils/publicFunctions";
import { headers } from "next/headers";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import LayoutWrap from "./LayouWrap";

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
const ProfileRoot = async ({ children }) => {
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

  return (
    <LayoutWrap employeeInfo={employeeInfo && employeeInfo}>
      {children}
    </LayoutWrap>
  );
};

export default ProfileRoot;
