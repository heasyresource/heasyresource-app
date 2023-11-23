import CompleteForm from "./CompleteForm";
import { getServerSession } from "next-auth";
import { headers } from "next/headers";
import { getSubdomain } from "@/utils/publicFunctions";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { Box } from "@mantine/core";

export default async function CompleteRegistration() {
  let companyInfo = null;
  const session = await getServerSession(authOptions);
  const headersList = headers();
  const domain = headersList.get("host");
  const subdomain = getSubdomain(domain);
  const defaultSubdomain = ["www", "heasyresource"];
  const hasSubdomain = !defaultSubdomain.includes(subdomain);
  if (!hasSubdomain && session) {
    const getCompany = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/companies/${session?.user.company.id}`,
      {
        headers: {
          Authorization: `Bearer ${session?.user.token}`
        },
      }
    );

    const getCompanyData = await getCompany.json();
    companyInfo = getCompanyData?.results;
  }
  return (
    <div style={{ backgroundColor: "#F8F9FA", padding: "1rem 0" }}>
      <Box mx={"20px"} style={{ overflow: "auto" }}>
        <CompleteForm companyInfo={companyInfo && companyInfo}></CompleteForm>
      </Box>
    </div>
  );
}
