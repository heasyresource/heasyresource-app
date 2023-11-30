import React from "react";
import ContactForm from "./ContactForm";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getSubdomain } from "@/utils/publicFunctions";
import { headers } from "next/headers";

const ContactDetails = async () => {
  let employeeInfo = null;
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
    employeeInfo = getEmployeeData.results;
  }
  return <ContactForm employeeInfo={employeeInfo} />;
};

export default ContactDetails;
