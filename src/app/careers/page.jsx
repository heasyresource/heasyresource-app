"use client";
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
import Logo from "../../components/JobListingsLayout/jobLogo.svg";
import NextImage from "next/image";
import {
  IconBriefcase2,
  IconBriefcaseOff,
  IconMapPin,
} from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { apiClient } from "@/lib/interceptor/apiClient";
import { getSubdomain } from "@/utils/publicFunctions";
import Image from "next/image";

export default function JobListings() {
  const subdomain = getSubdomain();
  const [jobsData, setJobsData] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await apiClient.get("/vacancies/published/all", {
          headers: {
            "x-subdomain-name": subdomain,
          },
        });

        const jobsData = response.results;
        setJobsData(jobsData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchJobs();
  });

  return (
    <Container size={"100%"} h={"100%"} p={0} bg={"#F8F9FA"} m={0}>
      <div className={classes.inner}>
        <div className={classes.content}>
          <Center maw={"100%"}>
            <Flex direction={"column"} align={"center"}>
              <Image
                component={NextImage}
                my={30}
                w={80}
                src={Logo}
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
          <Container size={"95%"} py={40}>
            {jobsData.length >= 1 && (
              <Stack gap={"xl"}>
                {jobsData.map((jobData, index) => (
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
            )}

            {jobsData.length === 0 && (
              <>
                <Group justify="center">
                  <IconBriefcaseOff
                    style={{
                      color: "#EBEBEB",
                    }}
                    className={classes.notFound}
                  />
                </Group>
                <Text fz={{ base: 20, sm: 32 }} ta={"center"} c={"#4D4D4D"}>
                  Thank you for interest. Unfortunately, we are not hiring at
                  this time.
                </Text>
                <Text
                  pt={10}
                  px={10}
                  w={{ base: "100%", sm: "50%" }}
                  fz={{ base: 15, sm: 20 }}
                  ta={"center"}
                  style={{ margin: "0px auto" }}
                  c={"dimmed"}
                >
                  Please check back as we will most certainly be looking for
                  great people to join our team in the future.
                </Text>
              </>
            )}
          </Container>
        </div>
      </div>
    </Container>
  );
}
