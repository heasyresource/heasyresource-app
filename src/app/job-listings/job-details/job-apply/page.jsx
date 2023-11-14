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
  CardSection,
  GridCol,
  Grid,
  Title,
  Space,
  List,
  ListItem,
  Button,
  TextInput,
  Box,
  FileInput,
  ActionIcon,
} from "@mantine/core";
import classes from "../../../../components/JobListingsLayout/JobListings.module.css";
import Logo from "../../../../components/JobListingsLayout/jobLogo.svg";
import NextImage from "next/image";
import { IconArrowUp, IconBriefcase2, IconMapPin } from "@tabler/icons-react";
import { useIndividual } from "@/hooks";

const jobdata = ["", "", "", "", ""];

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
  >
    {item}
  </Badge>
));

export default function JobApply() {
  const { form, handleSubmit, fields, loading } = useIndividual();
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
              <Text fw={500} py={20} fz={19}>
                Apply for the Position
              </Text>
              <Space h={20} />
              <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
                <Grid gutter={"lg"}>
                  <GridCol span={{ lg: 6, md: 6, sm: 12 }}>
                    <TextInput
                      label="First Name"
                      withAsterisk
                      size="md"
                      placeholder="John"
                      style={{ textAlign: "start", width: "100%" }}
                      classNames={{
                        label: classes.label,
                        error: classes.error,
                      }}
                      {...form.getInputProps("firstName")}
                      disabled={loading}
                    />
                  </GridCol>
                  <GridCol span={{ lg: 6, md: 6, sm: 12 }}>
                    <TextInput
                      label="Middle Name"
                      size="md"
                      placeholder="Smith"
                      style={{ textAlign: "start", width: "100%" }}
                      classNames={{
                        label: classes.label,
                        error: classes.error,
                      }}
                      {...form.getInputProps("middleName")}
                      disabled={loading}
                    />
                  </GridCol>
                  <GridCol span={{ lg: 6, md: 6, sm: 12 }}>
                    <TextInput
                      label="Last Name"
                      withAsterisk
                      size="md"
                      placeholder="Connor"
                      style={{ textAlign: "start", width: "100%" }}
                      classNames={{
                        label: classes.label,
                        error: classes.error,
                      }}
                      {...form.getInputProps("lastName")}
                      disabled={loading}
                    />
                  </GridCol>
                  <GridCol span={{ lg: 6, md: 6, sm: 12 }}>
                    <TextInput
                      label="Email"
                      withAsterisk
                      placeholder="amoses@gmail.com"
                      size="md"
                      style={{ textAlign: "start", width: "100%" }}
                      classNames={{
                        label: classes.label,
                        error: classes.error,
                      }}
                      {...form.getInputProps("position")}
                      disabled={loading}
                    />
                  </GridCol>
                  <GridCol span={{ lg: 6, md: 6, sm: 12 }}>
                    <TextInput
                      label="Phone"
                      placeholder="+234 000 000 0000"
                      withAsterisk
                      size="md"
                      style={{ textAlign: "start", width: "100%" }}
                      classNames={{
                        label: classes.label,
                        error: classes.error,
                      }}
                      {...form.getInputProps("departmentId")}
                      disabled={loading}
                    />
                  </GridCol>
                  <GridCol span={{ lg: 6, md: 6, sm: 12 }}>
                    <TextInput
                      label="Address"
                      placeholder="3, Adeboye Street"
                      withAsterisk
                      size="md"
                      style={{ textAlign: "start", width: "100%" }}
                      classNames={{
                        label: classes.label,
                        error: classes.error,
                      }}
                      {...form.getInputProps("email")}
                      disabled={loading}
                    />
                  </GridCol>
                  <GridCol span={{ lg: 6, md: 6, sm: 12 }}>
                    <TextInput
                      label="City"
                      placeholder="Yaba"
                      withAsterisk
                      size="md"
                      style={{ textAlign: "start", width: "100%" }}
                      classNames={{
                        label: classes.label,
                        error: classes.error,
                      }}
                      {...form.getInputProps("email")}
                      disabled={loading}
                    />
                  </GridCol>
                  <GridCol span={{ lg: 6, md: 6, sm: 12 }}>
                    <TextInput
                      label="State"
                      placeholder="Lagos"
                      withAsterisk
                      size="md"
                      style={{ textAlign: "start", width: "100%" }}
                      classNames={{
                        label: classes.label,
                        error: classes.error,
                      }}
                      {...form.getInputProps("email")}
                      disabled={loading}
                    />
                  </GridCol>
                  <GridCol span={{ lg: 12, md: 6, sm: 12 }}>
                    <TextInput
                      label="Country"
                      placeholder="Nigeria"
                      withAsterisk
                      size="md"
                      style={{ textAlign: "start", width: "100%" }}
                      classNames={{
                        label: classes.label,
                        error: classes.error,
                      }}
                      {...form.getInputProps("email")}
                      disabled={loading}
                    />
                  </GridCol>
                  <GridCol span={{ lg: 12, md: 6, sm: 12 }}>
                    <Box>
                      <FileInput
                        label="Select File"
                        withAsterisk
                        placeholder="No file selected"
                        variant="filled"
                        size="xl"
                        leftSectionWidth={140}
                        classNames={{
                          label: classes.label,
                          error: classes.error,
                        }}
                        leftSection={
                          <Button
                            disabled
                            style={{
                              textTransform: "capitalize",
                              backgroundColor: "#fff",
                            }}
                          >
                            browse file
                          </Button>
                        }
                        rightSection={
                          <ActionIcon
                            disabled
                            size={"lg"}
                            color="#fff"
                            style={{ backgroundColor: "#fff" }}
                          >
                            <IconArrowUp color="#817F7F" />
                          </ActionIcon>
                        }
                      />
                      <Box mt="1rem">
                        <Text
                          style={{
                            fontSize: "14px",
                            color: "#565656",
                            textTransform: "capitalize",
                          }}
                        >
                          File must not be larger than 2mb
                        </Text>
                        <Text
                          style={{
                            fontSize: "14px",
                            color: "#565656",
                            textTransform: "capitalize",
                          }}
                        >
                          File format must be in .csv or .xls extensions
                        </Text>
                      </Box>
                    </Box>
                  </GridCol>
                </Grid>
              </form>
              <Group justify="flex-end" className={classes.controls} my={40}>
                <Button
                  variant="outline"
                  className={classes.control}
                  size="md"
                  color="#3377FF"
                  style={{ borderColor: "#3377FF" }}
                  tt="capitalize"
                  px="50px"
                  w={{ lg: "auto", md: "auto", sm: "100%" }}
                >
                  cancel
                </Button>
                <Button
                  variant="contained"
                  className={classes.control}
                  size="md"
                  color="#3377FF"
                  tt="capitalize"
                  px="50px"
                  w={{ lg: "auto", md: "auto", sm: "100" }}
                  type="submit"
                  style={{
                    backgroundColor: "#3377FF",
                  }}
                >
                  submit
                </Button>
              </Group>
            </Card>
          </Container>
        </div>
      </div>
    </Container>
  );
}
