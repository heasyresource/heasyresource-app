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

const jobBadge = ["Front-end", "Back-end", "Database"];

const jobBadges = jobBadge.map((item) => (
  <Badge
    color="#F4F4F4"
    radius="sm"
    px={9}
    py={6}
    tt={"capitalize"}
    classNames={{
      label: classes.label,
    }}
    key={item}
  >
    {item}
  </Badge>
));

export default function JobDetails() {
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
          <Container size={{base: '95%', sm: '80%' }} py={66}>
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
                </CardSection>
                <Grid mt={40}>
                  <GridCol span={12}>
                    <Card px={0} shadow="sm" radius="md">
                      <Title fz={17} fw={700}>
                        Job Description
                      </Title>
                      <Space h={20} />
                      <Text ta={"justify"} fz={16} style={{ marginBottom: 20 }}>
                        Join our dynamic tech team as a Full Stack Developer,
                        where you&apos;ll play a key role in designing and
                        implementing cutting-edge web solutions. As a Full Stack
                        Developer, you&apos;ll be involved in the entire software
                        development life cycle, from concept to deployment,
                        ensuring seamless user experiences. Collaborate with
                        cross-functional teams, contribute to both front-end and
                        back-end development, and stay at the forefront of
                        emerging technologies. If you&apos;re passionate about
                        crafting innovative solutions and thrive in a
                        collaborative environment, this is the opportunity for
                        you.
                      </Text>
                      <Space h={40} />
                      <Title fz={17} fw={700}>
                        Main Responsibilities
                      </Title>
                      <Space h={20} />
                      <List fz={16} style={{ marginBottom: 20 }}>
                        <ListItem>
                          Design and implement end-to-end web solutions for
                          optimal user experiences.
                        </ListItem>
                        <ListItem>
                          Collaborate with cross-functional teams to develop and
                          maintain robust applications.
                        </ListItem>
                        <ListItem>
                          Create responsive user interfaces using HTML, CSS, and
                          JavaScript.
                        </ListItem>
                        <ListItem>
                          Manage server-side logic and databases to ensure
                          performance and efficiency.
                        </ListItem>
                        <ListItem>
                          Participate in the entire software development life
                          cycle, from concept to deployment.
                        </ListItem>
                        <ListItem>
                          Debug and troubleshoot issues to maintain the
                          reliability of applications.
                        </ListItem>
                        <ListItem>
                          Stay updated on emerging trends and technologies in
                          the full stack development landscape.
                        </ListItem>
                      </List>
                      <Space h={40} />
                      <Title fz={17} fw={700}>
                        Qualifications
                      </Title>
                      <Space h={20} />
                      <List>
                        <ListItem>
                          Bachelor&apos;s degree in Computer Science, Software
                          Engineering, or a related field.
                        </ListItem>
                        <ListItem>
                          Proven experience as a Full Stack Developer or similar
                          role.
                        </ListItem>
                        <ListItem>
                          Proficiency in front-end technologies such as HTML,
                          CSS, JavaScript, and popular frameworks.
                        </ListItem>
                        <ListItem>
                          Strong back-end development skills with expertise in
                          languages like Node.js, Python, or Java.
                        </ListItem>
                        <ListItem>
                          Experience working with databases, both relational
                          (e.g., MySQL) and NoSQL (e.g., MongoDB).
                        </ListItem>
                        <ListItem>
                          Familiarity with version control systems, such as Git.
                        </ListItem>
                        <ListItem>
                          Ability to collaborate effectively in a team
                          environment and communicate technical concepts
                          clearly.
                        </ListItem>
                        <ListItem>
                          Problem-solving skills and a proactive approach to
                          addressing challenges.
                        </ListItem>
                      </List>
                    </Card>
                  </GridCol>
                </Grid>
                <Button
                  variant="filled"
                  color={'#3377FF'}
                  component="a"
                  href="/job-listings/job-details/job-apply"
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
