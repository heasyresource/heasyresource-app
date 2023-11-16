"use client";

import {
  Avatar,
  Box,
  Button,
  Card,
  CardSection,
  Grid,
  GridCol,
  Group,
  Select,
  Space,
  Stack,
  Switch,
  Text,
  TextInput,
} from "@mantine/core";
import classes from "../../../components/SettingsLayout/Settings.module.css";
import React, { useState } from "react";
import SettingsNav from "@/components/SettingsLayout/SettingsNav";
import { AddComImg } from "@/components";
import { useCompleteReg } from "@/hooks";

const Settings = () => {
  const { setLogo, loading, uploading, isSubmitted } = useCompleteReg();
  return (
    <>
      <Card
        style={{
          backgroundColor: "#ffff",
          borderRadius: "15px",
          borderBottom: "1px solid #DDDDDD",
          //   minHeight: "390px",
          margin: "0px",
        }}
      >
        <CardSection
          pt="25px"
          pb="55px"
          style={{ borderBottom: "1px solid #DDDDDD" }}
        >
          <SettingsNav tabTitle={"Settings"} />
        </CardSection>
        <Text
          ta={{ base: "center", md: "left" }}
          px={40}
          py={30}
          fz={24}
          fw={700}
        >
          General Information
        </Text>
      </Card>
      <Space h={24} />
      <Card
        style={{
          backgroundColor: "#ffff",
          borderRadius: "15px",
          borderBottom: "1px solid #DDDDDD",
          //   minHeight: "390px",
          margin: "0px",
        }}
      >
        <Group px={40} justify="space-between">
          <Text ta={{ base: "center", md: "left" }} py={30} fz={24} fw={700}>
            Company Information
          </Text>
          <Switch
            color="#3377FF"
            defaultChecked
            labelPosition="left"
            label="Edit"
          />
        </Group>
        <Group px={40}>
          <AddComImg
            setLogo={setLogo}
            loading={loading}
            uploading={uploading}
            isSubmitted={isSubmitted}
          />
        </Group>
        <form>
          <Stack gap={"2rem"}>
            <Grid
              gutter={{ lg: "xl", sm: "2xl" }}
              justify="flex-start"
              className={classes.formWrap}
              p={20}
            >
              <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
                <TextInput
                  size="md"
                  variant="filled"
                  value={"Jitto Consultancy Ltd."}
                  label="Company Name"
                  placeholder="Jitto Consultancy Ltd."
                  style={{ width: "100%" }}
                  classNames={{
                    label: classes.label,
                    error: classes.error,
                    placeholder: classes.placeholder,
                  }}
                />
              </GridCol>
              <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
                <TextInput
                  size="md"
                  variant="filled"
                  value={"jittoconsultancy@yahoo.com"}
                  label="Company Email"
                  style={{ width: "100%" }}
                  placeholder="Amope"
                  classNames={{
                    label: classes.label,
                    //   input: classes.input,
                    error: classes.error,
                    placeholder: classes.placeholder,
                  }}
                />
              </GridCol>
              <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
                <TextInput
                  size="md"
                  variant="filled"
                  value={"www.jittoconsultancy.com"}
                  label="Company Website"
                  style={{ width: "100%" }}
                  placeholder="Adeshewa"
                  classNames={{
                    label: classes.label,
                    //   input: classes.input,
                    error: classes.error,
                    placeholder: classes.placeholder,
                  }}
                />
              </GridCol>
              <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
                <TextInput
                  size="md"
                  variant="filled"
                  value={"Management Consulting"}
                  label="Field/Industry"
                  style={{ width: "100%" }}
                  classNames={{
                    label: classes.label,
                    //   input: classes.input,
                    error: classes.error,
                    placeholder: classes.placeholder,
                  }}
                />
              </GridCol>
              <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
                <TextInput
                  size="md"
                  variant="filled"
                  value={"+2344191113"}
                  label="Phone Number"
                  style={{ width: "100%" }}
                  placeholder="Amope"
                  classNames={{
                    label: classes.label,
                    //   input: classes.input,
                    error: classes.error,
                    placeholder: classes.placeholder,
                  }}
                />
              </GridCol>
              <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
                <TextInput
                  size="md"
                  variant="filled"
                  label="Company Address"
                  value="123 Main Street, Cityville, Countryland"
                  style={{ width: "100%" }}
                  classNames={{
                    label: classes.label,
                    error: classes.error,
                    placeholder: classes.placeholder,
                  }}
                />
              </GridCol>

              <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
                <TextInput
                  label="Country"
                  size="md"
                  value="United States"
                  variant="filled"
                  classNames={{
                    label: classes.label,
                    error: classes.error,
                    placeholder: classes.placeholder,
                  }}
                  searchable
                />
              </GridCol>
              <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
                <TextInput
                  label="Company Size"
                  value="51-100"
                  withAsterisk
                  size="md"
                  variant="filled"
                  classNames={{
                    label: classes.label,
                    error: classes.error,
                    placeholder: classes.placeholder,
                  }}
                />
              </GridCol>

              <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
                <TextInput
                  size="md"
                  variant="filled"
                  label="Email Domain"
                  value="example.com"
                  style={{ width: "100%" }}
                  classNames={{
                    label: classes.label,
                    error: classes.error,
                    placeholder: classes.placeholder,
                  }}
                />
              </GridCol>
              <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
                <TextInput
                  size="md"
                  variant="filled"
                  value="subdomain.example.com"
                  type="text"
                  withAsterisk
                  label="Sub Domain"
                  style={{ width: "100%" }}
                  classNames={{
                    label: classes.label,
                    error: classes.error,
                    placeholder: classes.placeholder,
                  }}
                />
              </GridCol>
              <GridCol span="12">
                <div className={classes.controls}>
                  <Button
                    className={classes.control}
                    size="lg"
                    variant="outline"
                    color="#3377FF"
                  >
                    Cancel
                  </Button>
                  <Button color="#3377FF" className={classes.control} size="lg">
                    Save
                  </Button>
                </div>
              </GridCol>
            </Grid>
          </Stack>
        </form>
      </Card>
    </>
  );
};

export default Settings;
