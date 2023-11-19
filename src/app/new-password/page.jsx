import Logo from "@/components/Image";
import {
  Title,
  Container,
  Center,
  Box,
  Text, Image
} from "@mantine/core";
import NewPasswordForm from "./newPasswordForm";
import { headers } from 'next/headers'
import { getSubdomain } from '@/utils/publicFunctions';

export const metadata = {
  title: 'New Password',
};

export default async function NewPassword() {
  const headersList = headers()
  const domain = headersList.get('host')
  const subdomain = getSubdomain(domain);
  const defaultSubdomain = ['www', 'heasyresource']
  let companyLogo = null;
  if (subdomain && !defaultSubdomain.includes(subdomain)) {
    const getSubdomain = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/companies/subdomain/${subdomain}`);
    const getSubdomainData = await getSubdomain.json();
    companyLogo = getSubdomainData.results.logoUrl
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
        <Center>
        {companyLogo ? <Image src={companyLogo} alt="company-logo" h={100} w={100} /> : <Logo />}
        </Center>
        <Title ta="left" order={2} mt={"50px"} c="#000000">
          New Password
        </Title>
       
        <NewPasswordForm></NewPasswordForm>

        <Text ta={'center'} mt={50} size="sm" fw={'500'} c={"#8692A6"}>POWERED BY <a href="https://heasyresource.com/" style={{
          color: "#3377FF",
          textDecoration: "none",
        }}>HEASYRESOURCE.COM</a></Text>
      </Box>
    </Container>
  );
}
