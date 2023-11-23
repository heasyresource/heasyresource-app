import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { headers } from "next/headers";
import { getSubdomain } from "@/utils/publicFunctions";
import LayoutWrap from "./LayoutWrap";
const Layout = async ({ children }) => {
  let companyInfo = null;
  let companyRep = null;
  const session = await getServerSession(authOptions);
  const headersList = headers();
  const domain = headersList.get("host");
  const subdomain = getSubdomain(domain);
  const defaultSubdomain = ["www", "heasyresource"];
  const hasSubdomain = !defaultSubdomain.includes(subdomain);

  if (hasSubdomain && session) {
    const getCompany = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/companies/${session?.user.company.id}`,
      {
        headers: {
          Authorization: `Bearer ${session?.user.token}`,
          "x-subdomain-name": subdomain,
        },
      }
    );
    const getCompanyRep = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/employees/${session.user.company.id}/employee/${session.user.id}`,
      {
        headers: {
          Authorization: `Bearer ${session?.user.token}`,
          "x-subdomain-name": subdomain,
        },
      }
    );
    const getCompanyData = await getCompany.json();
    companyInfo = getCompanyData.results;
    const getCompanyRepData = await getCompanyRep.json();
    companyRep = getCompanyRepData.results;
  }

  return (
    <LayoutWrap
      companyRep={companyRep && companyRep}
      companyInfo={companyInfo && companyInfo}
    >
      {children}
    </LayoutWrap>
  );
};

export default Layout;
