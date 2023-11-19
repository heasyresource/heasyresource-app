"use client";
import {
  Image,
  Container,
  Center,
  Text,
  Flex,
  Stack,
  Card,
  Group,
  Badge,
  CardSection,
  GridCol,
  Grid,
  Title,
  Space,
  List,
  ListItem,
  Button,
} from "@mantine/core";
import classes from "../../../components/JobListingsLayout/JobListings.module.css";
import Logo from "../../../components/JobListingsLayout/jobLogo.svg";
import NextImage from "next/image";
import { IconBriefcase2, IconMapPin } from "@tabler/icons-react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { apiClient } from "@/lib/interceptor/apiClient";
import { getSubdomain, purifyText } from "@/utils/publicFunctions";

export default function JobDetails() {
  const subdomain = getSubdomain();
  const [jobData, setJobData] = useState([]);
  const { slug } = useParams();
  const description = purifyText(jobData.description);

  useEffect(() => {
    const fetchJobDetail = async () => {
      try {
        const response = await apiClient.get(`vacancies/slug/${slug}`, {
          headers: {
            "x-subdomain-name": subdomain,
          },
        });
        console.log({ response });
        const jobDetail = response.result;
        setJobData(jobDetail);
      } catch (error) {
        console.error({ error });
      }
    };
    fetchJobDetail();
  }, []);

  return (
    <Container size={"100%"} bg={"#F8F9FA"} m={0}>
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
          <Container size={{ base: "95%", sm: "80%" }} py={66}>
            <Stack gap={"xl"}>
              <Card
                bg={"#ffff"}
                shadow="sm"
                px={40}
                radius="md"
                style={{
                  backgroundColor: "#ffff",
                  borderRadius: "15px",
                  borderBottom: "1px solid #DDDDDD",
                  margin: "0px",
                }}
              >
                <CardSection
                  pt="25px"
                  pb="35px"
                  style={{ borderBottom: "1px solid #DDDDDD" }}
                >
                  <Group justify="space-between" py={20}>
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
                          {jobData.jobCategory?.name}
                        </Badge>
                      </div>
                      <Text fz={32} pt={20} fw={500}>
                        {jobData.title}
                      </Text>
                    </Flex>
                    <Group align="center">
                      <Group align="center" wrap="nowrap" gap={5} mt={3}>
                        <IconMapPin
                          stroke={1.5}
                          size="1rem"
                          className={classes.icon}
                        />
                        <Text fz="16px" c="#454444">
                          {jobData.location} ({jobData.workMode})
                        </Text>
                      </Group>

                      <Group align="center" wrap="nowrap" gap={10} mt={5}>
                        <IconBriefcase2
                          stroke={1.5}
                          size="1rem"
                          className={classes.icon}
                        />
                        <Text fz="16px" c="#454444">
                          {jobData.employmentType?.name}
                        </Text>
                      </Group>
                    </Group>
                  </Group>
                </CardSection>
                <Grid mt={40}>
                  <GridCol span={12}>
                    <Card px={0} shadow="sm" radius="md">
                      {/* {jobData.description} */}
                      <div dangerouslySetInnerHTML={{ __html: description }} />
                    </Card>
                  </GridCol>
                </Grid>
                <Button
                  variant="filled"
                  color={"#3377FF"}
                  component="a"
                  href={`/careers/${jobData.slug}/apply`}
                  size="xl"
                  className={classes.control}
                  mt={40}
                >
                  Apply for this Job
                </Button>
                <Space h={20} />
              </Card>
            </Stack>
          </Container>
        </div>
      </div>
    </Container>
  );
}