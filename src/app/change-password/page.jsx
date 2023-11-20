import Logo from "@/components/Image";
import { Title, Container, Center, Box, Image, Text } from "@mantine/core";
import ChangePasswordForm from "./changePasswordForm";
import { headers } from "next/headers";
import { getSubdomain } from "@/utils/publicFunctions";

export const metadata = {
  title: "Change Password",
};

export default async function ChangePassword() {
  const headersList = headers();
  const domain = headersList.get("host");
  const subdomain = getSubdomain(domain);
  const defaultSubdomain = ["www", "heasyresource"];
  let companyLogo = null;
  const hasSubdomain = !defaultSubdomain.includes(subdomain);
  if (subdomain && hasSubdomain) {
    const getSubdomain = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/companies/subdomain/${subdomain}`
    );
    const getSubdomainData = await getSubdomain.json();
    companyLogo = getSubdomainData.results.logoUrl;
  }
  return (
    <Container
      size={500}
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box>
        {companyLogo ? (
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image src={companyLogo} alt="company-logo" h={100} w={100} />
          </Box>
        ) : (
          ""
        )}
        <Title ta="left" order={2} mt={"50px"} c="#000000">
          Change Password
        </Title>

        <ChangePasswordForm />
        {subdomain && hasSubdomain && (
          <Text ta={"center"} size="sm" mt="lg" fw={"500"} c={"#8692A6"}>
            POWERED BY{" "}
            <a
              href="https://heasyresource.com/"
              style={{
                color: "#3377FF",
                textDecoration: "none",
              }}
            >
              HEASYRESOURCE
            </a>
          </Text>
        )}
      </Box>
    </Container>
  );
}
