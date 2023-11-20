import { Image, Container, Center, Text, Flex } from "@mantine/core";
import classes from "../../../../components/JobListingsLayout/JobListings.module.css";

import PageWrap from "./PageWrap";
import { getSubdomain } from "@/utils/publicFunctions";
import { headers } from "next/headers";

export default async function JobApply() {
  let companyInfo = null;
  const headersList = headers();
  const domain = headersList.get("host");
  const subdomain = getSubdomain(domain);
  if (subdomain) {
    const getCompany = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/companies/subdomain/${subdomain}`,
      {
        headers: {
          "x-subdomain-name": subdomain,
        },
      }
    );
    const getCompanyData = await getCompany.json();
    companyInfo = getCompanyData.results;
  }

  return (
    <Container size={"100%"} bg={"#F8F9FA"} m={0}>
      <div className={classes.inner}>
        <div className={classes.content}>
          <Center maw={"100%"}>
            <Flex direction={"column"} align={"center"}>
              <Image
                my={30}
                w={80}
                src={companyInfo && companyInfo.logoUrl}
                alt="Company Logo"
              />
              <Text fw={700} fz={30}>
                Available Jobs
              </Text>
              <Text ta={{ base: "center", sm: "left" }} c={"#5A5A5A"} fz={20}>
                Discover opportunities. Apply now!
              </Text>
            </Flex>
          </Center>
          <PageWrap></PageWrap>
        </div>
      </div>
    </Container>
  );
}
