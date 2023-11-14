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
  UnstyledButton,
} from "@mantine/core";
import classes from "../../components/JobListingsLayout/JobListings.module.css";
import Logo from "../../components/JobListingsLayout/jobLogo.svg";
import NextImage from "next/image";
import { IconBriefcase2, IconMapPin } from "@tabler/icons-react";

const jobdata = ["", "", "", "", ""];

const jobBadge = ["Front-end", "Back-end", "Database"];

const jobBadges = jobBadge.map((item, i) => (
  <Badge
    key={i}
    color="#F4F4F4"
    radius="sm"
    px={9}
    py={6}
    tt={"capitalize"}
    classNames={{
      label: classes.label,
    }}
  >
    {item}
  </Badge>
));

export default function JobListings() {
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
          <Container size={"95%"} py={66}>
            <Stack gap={"xl"}>
              {jobdata.map((item, i) => (
                <UnstyledButton
                  key={i}
                  className={classes.job}
                  component="a"
                  href="/job-listings/job-details"
                >
                  <Card bg={"#ffff"} shadow="sm" padding="lg" radius="md">
                    <Group justify="space-between" py={20}>
                      <Flex direction={"column"}>
                        <div style={{ display: "flex", gap: "10px" }}>
                          {jobBadges}
                        </div>
                        <Text fz={32} pt={20} fw={500}>
                          FullStack Developer
                        </Text>
                        <Text c={"#727272"} fz={13}>
                          A Full Stack Developer is a versatile professional
                          proficient in both front-end
                        </Text>
                      </Flex>
                      <Group>
                        <Group wrap="nowrap" gap={10} mt={3}>
                          <IconMapPin
                            stroke={1.5}
                            size="1rem"
                            className={classes.icon}
                          />
                          <Text fz="16px" c="#454444">
                            Jibowu, Lagos
                          </Text>
                        </Group>

                        <Group wrap="nowrap" gap={10} mt={5}>
                          <IconBriefcase2
                            stroke={1.5}
                            size="1rem"
                            className={classes.icon}
                          />
                          <Text fz="16px" c="#454444">
                            Full Time
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
