import Logo from "@/components/Image";
import { Title, Container, Center, Box, Text, Image } from "@mantine/core";
import ForgotPasswordForm from "./forgotPasswordForm";
import Link from "next/link";
import classes from "./forgotPassword.module.css";
import { headers } from 'next/headers'
import { getSubdomain } from '@/utils/publicFunctions';

export const metadata = {
  title: "Forgot Password",
};
export default async function ForgotPassword() {
  const headersList = headers()
  const domain = headersList.get('host')
  const subdomain = getSubdomain(domain);
  const defaultSubdomain = ['www', 'heasyresource']
  let companyLogo = null;
  const hasSubdomain = !defaultSubdomain.includes(subdomain);
  if (subdomain && hasSubdomain) {
    const getSubdomain = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/companies/subdomain/${subdomain}`);
    const getSubdomainData = await getSubdomain.json();
    companyLogo = getSubdomainData.results.logoUrl
  }

  return (
    <Box className={classes.form_wrapper}>
      <Container
        size={500}
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "relative",
          zIndex: 10,
        }}
      >
        <Box>
          <Center>
            {companyLogo ? <Image src={companyLogo} alt="company-logo" h={100} w={100} /> : <Logo />}
          </Center>
          <Title ta="left" c="#000000" order={2} mt={"50px"}>
            Forgot password?
          </Title>
          <Text c="#595959" fz="md" ta="left" mt={29}>
            Submit your email address for the verification process. We
            will send a six-digit code to your inbox
          </Text>

          <ForgotPasswordForm></ForgotPasswordForm>

          <Text fw={700} c={"#494949"} size="sm" ta="left" mt="xl">
            Remember your password?{" "}
            <Link
              href="/signin"
              style={{
                color: "#3377FF",
                textTransform: "capitalize",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              sign in
            </Link>
          </Text>
        </Box>
        {subdomain && hasSubdomain ? <Text ta={'center'} mt={50} size="sm" fw={'500'} c={"#8692A6"}>POWERED BY <a href="https://heasyresource.com/" style={{
          color: "#3377FF",
          textDecoration: "none",
        }}>HEASYRESOURCE.COM</a></Text> : ''}
      </Container>
    </Box>
  );
}
