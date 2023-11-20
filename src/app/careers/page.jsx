import {
  Container,
  Center,
  Text,
  Flex,
  Stack,
  Card,
  Group,
  Badge,
  UnstyledButton,
} from "@mantine/core";
import classes from "../../components/JobListingsLayout/JobListings.module.css";

import { IconBriefcase2, IconMapPin } from "@tabler/icons-react";

import { getSubdomain } from "@/utils/publicFunctions";
import Image from "next/image";

import { headers } from "next/headers";

export default async function JobListings() {
  let jobsData = null;
  let companyInfo = null;
  const headersList = headers();
  const domain = headersList.get("host");
  const subdomain = getSubdomain(domain);
  if (subdomain) {
    const getVacancies = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/vacancies/published/all`,
      {
        headers: {
          "x-subdomain-name": subdomain,
        },
      }
    );
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
    const getVacanciesData = await getVacancies.json();
    jobsData = getVacanciesData.results;
  }

  return (
    <Container size={"100%"} h={"100%"} p={0} bg={"#F8F9FA"} m={0}>
      <div className={classes.inner}>
        <div className={classes.content}>
          <Center maw={"100%"}>
            <Flex direction={"column"} align={"center"}>
              <Image
                w={80}
                my={30}
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
          <Container size={"95%"} py={66}>
            <Stack gap={"xl"}>
              {jobsData &&
                jobsData.map((jobData, index) => (
                  <UnstyledButton
                    key={index}
                    className={classes.job}
                    component="a"
                    href={`/careers/${jobData.slug}`}
                  >
                    <Card bg={"#ffff"} shadow="sm" padding="lg" radius="md">
                      <Group justify="space-between" py={10}>
                        <Flex direction={"column"}>
                          <div style={{ display: "flex", gap: "10px" }}>
                            <Badge
                              color="#F4F4F4"
                              radius="sm"
                              px={9}
                              py={6}
                              tt={"capitalize"}
                              classNames={{
                                label: classes.label,
                              }}
                            >
                              {jobData.jobCategory.name}
                            </Badge>
                          </div>
                          <Text fz={25} pt={20} fw={500}>
                            {jobData.title}
                          </Text>
                        </Flex>
                        <Group>
                          <Group wrap="nowrap" gap={5} mt={3}>
                            <IconMapPin
                              stroke={1.5}
                              size="1rem"
                              className={classes.icon}
                            />
                            <Text fz="16px" c="#454444">
                              {jobData.location} ({jobData.workMode})
                            </Text>
                          </Group>

                          <Group wrap="nowrap" gap={10} mt={5}>
                            <IconBriefcase2
                              stroke={1.5}
                              size="1rem"
                              className={classes.icon}
                            />
                            <Text fz="16px" c="#454444">
                              {jobData.employmentType.name}
                            </Text>
                          </Group>
                        </Group>
                      </Group>
                    </Card>
                  </UnstyledButton>
                ))}
            </Stack>
          </Container>
        </div>
      </div>
    </Container>
  );
}
