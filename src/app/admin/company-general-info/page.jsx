import React from "react";
import classes from "../../../components/AdminLayout/admin.module.css";
import {
  Avatar,
  Button,
  Container,
  Grid,
  GridCol,
  Group,
  Space,
  Text,
  TextInput,
} from "@mantine/core";
import Profile from "@/components/Profile";
import { IconBuildingSkyscraper } from "@tabler/icons-react";

const CompanyGeneralInfo = () => {
  return (
    <Container className={classes.infoContainer} size="100%">
      <div className={classes.inner}>
        <div className={classes.infoContent}>
          <div className={classes.headerContent}>
            <Group p={"25px"} justify="space-between">
              <Group>
                <Avatar bg="#3377FF" radius={"xl"}>
                  <IconBuildingSkyscraper color="#ffff" />
                </Avatar>
                <Text c={"#555555"} fz={"20px"}>
                  TechNova Solutions
                </Text>
              </Group>
              <Profile />
            </Group>
          </div>
        </div>
        <Space h={50} />
        <Container px={53} size="100%">
          <Text fz={24} fw={700}>
            General Information
          </Text>
          <div className={classes.infoMainContent}>
            <Space h={36} />
            <div className={classes.generalInfo}>
              <Grid justify="space-between" align="center">
                <GridCol span="content">
                  <Avatar bg="#3377FF" size={"lg"} radius={"xl"}>
                    <IconBuildingSkyscraper color="#ffff" />
                  </Avatar>
                </GridCol>
                <GridCol span="content">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text c="dimmed" size="xs" lh={1} mb={17}>
                      Company Name
                    </Text>
                    <Text fw={500} size="1.1rem" lh={1}>
                      TechNova Solutions
                    </Text>
                  </div>
                </GridCol>
                <GridCol span="content">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text c="dimmed" size="xs" lh={1} mb={17}>
                      Company Size
                    </Text>
                    <Text fw={500} size="1.1rem" lh={1}>
                      51-100
                    </Text>
                  </div>
                </GridCol>
                <GridCol span="content">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text c="dimmed" size="xs" lh={1} mb={17}>
                      Industry
                    </Text>
                    <Text fw={500} size="1.1rem" lh={1}>
                      Technology
                    </Text>
                  </div>
                </GridCol>
                <GridCol span="content">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text c="dimmed" size="xs" lh={1} mb={17}>
                      Location
                    </Text>
                    <Text fw={500} size="1.1rem" lh={1}>
                      Lagos
                    </Text>
                  </div>
                </GridCol>
                <GridCol span="content">
                  <Group>
                    <Button
                      variant="filled"
                      size="sm"
                      color="#43D72B"
                      component="a"
                      tt="capitalize"
                      px="50px"
                      w={{ lg: "auto", md: "auto", sm: "auto" }}
                      className={classes.btn}
                    >
                      Shortlist
                    </Button>
                    <Button
                      variant="filled"
                      size="sm"
                      color="#FF0000"
                      tt="capitalize"
                      px="50px"
                      w={{ lg: "auto", md: "auto", sm: "auto" }}
                      className={classes.btn}
                      type="submit"
                    >
                      Reject
                    </Button>
                  </Group>
                </GridCol>
              </Grid>
            </div>
            <Space h={36} />
            <div className={classes.companyProfile}>
                Biscuit
            </div>
          </div>
        </Container>
      </div>
    </Container>
  );
};

export default CompanyGeneralInfo;
