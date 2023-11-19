"use client";
import React from "react";
import {
    ActionIcon,
  Badge,
  Box,
  Button,
  Card,
  CardSection,
  Container,
  FileInput,
  Flex,
  Grid,
  GridCol,
  Group,
  Loader,
  Select,
  Space,
  Text,
  TextInput,
} from "@mantine/core";
import { IconArrowUp, IconBriefcase2, IconMapPin } from "@tabler/icons-react";
import useJobApply from "@/hooks/useJobApply"
import classes from "../../../../components/JobListingsLayout/JobListings.module.css";

const PageWrap = () => {
    const {handleSubmit, router, loading, form, jobData, countries, states} = useJobApply()
  return (
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
                  {jobData?.jobCategory?.name}
                </Badge>
              </div>
              <Text fz={32} pt={20} fw={500}>
                {jobData?.title}
              </Text>
            </Flex>
            <Group align="center">
              <Group align="center" wrap="nowrap" gap={5} mt={3}>
                <IconMapPin stroke={1.5} size="1rem" className={classes.icon} />
                <Text fz="16px" c="#454444">
                  {jobData?.location} ({jobData?.workMode})
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
        <Text fw={500} py={20} fz={19}>
          Apply for the Position
        </Text>
        <Space
         h={20} />
        <form onSubmit={form.onSubmit((value) => handleSubmit(value))}>
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
                {...form.getInputProps("email")}
                disabled={loading}
              />
            </GridCol>
            <GridCol span={{ lg: 6, md: 6, sm: 12 }}>
              <TextInput
                label="Phone Number"
                placeholder="700 000 0000"
                type="tel"
                maxLength={11}
                withAsterisk
                size="md"
                style={{ textAlign: "start", width: "100%" }}
                classNames={{
                  label: classes.label,
                  error: classes.error,
                }}
                {...form.getInputProps("phoneNumber")}
                disabled={loading}
                leftSection={"+234"}
                leftSectionWidth={50}
              />
            </GridCol>
            <GridCol span={{ lg: 6, md: 6, sm: 12 }}>
              <TextInput
                label="Address"
              
                withAsterisk
                size="md"
                style={{ textAlign: "start", width: "100%" }}
                classNames={{
                  label: classes.label,
                  error: classes.error,
                }}
                {...form.getInputProps("address")}
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
                {...form.getInputProps("city")}
                disabled={loading}
              />
            </GridCol>
            <GridCol span={{ lg: 6, md: 6, sm: 12 }}>
              <Select
              data={states}
                label="State"
                placeholder="Lagos"
                withAsterisk
                size="md"
                style={{ textAlign: "start", width: "100%" }}
                classNames={{
                  label: classes.label,
                  error: classes.error,
                }}
                {...form.getInputProps("stateId")}
                disabled={loading}
              />
            </GridCol>
            <GridCol span={{ lg: 12, md: 6, sm: 12 }}>
              <Select
              data={countries}
                label="Country"
                placeholder="Nigeria"
                withAsterisk
                size="md"
                style={{ textAlign: "start", width: "100%" }}
                classNames={{
                  label: classes.label,
                  error: classes.error,
                }}
                {...form.getInputProps("countryId")}
                disabled={loading}
              />
            </GridCol>
            <GridCol span={{ lg: 12, md: 6, sm: 12 }}>
              <Box>
                <FileInput

                    disabled={loading}
                  {...form.getInputProps("resumeUrl")}
                  accept=".docx, .pdf, .doc"
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
          <Group justify="flex-end"  my={40}>
            <Button
              variant="outline"
              
              size="md"
              color="#3377FF"
              style={{ borderColor: "#3377FF" }}
              tt="capitalize"
              px="50px"
              w={{ lg: "auto", md: "auto", sm: "100%" }}
              onClick={() => router.back()}
              disabled={loading}
            >
              back
            </Button>
            <Button
              variant="contained"
              
              size="md"
              color="#3377FF"
              tt="capitalize"
              px="50px"
              w={{ lg: "auto", md: "auto", sm: "100" }}
              type="submit"
              style={{
                backgroundColor: "#3377FF",
              }}
              disabled={loading}
            >
              {loading ? <Loader color="white" type="dots" size={"md"}/> : "submit"}
            </Button>
          </Group>
        </form>
      </Card>
    </Container>
  );
};

export default PageWrap;
