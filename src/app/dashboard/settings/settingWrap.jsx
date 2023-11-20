"use client";
import { AddComImg } from "@/components";
import useSetting from "@/hooks/useSetting";
import {
  Button,
  Card,
  Grid,
  GridCol,
  Group,
  Loader,
  Select,
  Stack,
  Switch,
  Text,
  TextInput,
} from "@mantine/core";
import React, { useState } from "react";
import classes from "../dashboard.module.css";
import Loading from "@/components/Loading";

const SettingWrap = () => {
  const [isEdit, setIsEdit] = useState(false);
  const {
    form,
    fields,
    companySize,
    countries,
    logoUrl,
    loading,
    handleSubmit,
    setLogoUrl,
    gettingInfo,
  } = useSetting();
  return (
    <>
      {gettingInfo ? (
        <Loading />
      ) : (
        <Card
          style={{
            backgroundColor: "#ffff",
            borderRadius: "15px",
            borderBottom: "1px solid #DDDDDD",

            margin: "0px",
          }}
        >
          <Group
            justify="flex-end"
            align="center"
            style={{ flexWrap: "nowrap", marginBottom: "15px" }}
          >
            <Switch
              color="#3377FF"
              checked={isEdit}
              onChange={(e) => setIsEdit(e.currentTarget.checked)}
              labelPosition="left"
              label="Edit"
            />
          </Group>

          <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
            <Grid>
              <GridCol span={{ lg: 3, md: 12, sm: 12 }}>
                <Stack justify="center" align="center" gap={".5rem"}>
                  <AddComImg
                    logo={logoUrl}
                    isEdit={!isEdit}
                    setLogo={setLogoUrl}
                    uploading={loading}
                  />
                </Stack>
              </GridCol>
              <GridCol span={{ lg: 9, md: 12, sm: 12 }}>
                <Grid gutter={"lg"} justify="flex-start" mt={"lg"}>
                  <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
                    <TextInput
                      size="md"
                      withAsterisk
                      label="Company Name"
                      {...form.getInputProps("name")}
                      style={{ width: "100%" }}
                      classNames={{
                        label: classes.label,
                        error: classes.error,
                      }}
                      disabled
                    />
                  </GridCol>
                  <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
                    <TextInput
                      size="md"
                      withAsterisk
                      label="Subdomain"
                      {...form.getInputProps("subdomain")}
                      style={{ width: "100%" }}
                      classNames={{
                        label: classes.label,
                        error: classes.error,
                      }}
                      disabled
                    />
                  </GridCol>

                  <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
                    <TextInput
                      size="md"
                      {...form.getInputProps("emailDomain")}
                      label="Email Domain"
                      style={{ width: "100%" }}
                      classNames={{
                        label: classes.label,
                        error: classes.error,
                      }}
                      disabled={!isEdit || loading}
                    />
                  </GridCol>
                  <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
                    <TextInput
                      size="md"
                      withAsterisk
                      label="Company Email"
                      type="email"
                      {...form.getInputProps("companyEmail")}
                      style={{ width: "100%" }}
                      classNames={{
                        label: classes.label,

                        error: classes.error,
                      }}
                      disabled={!isEdit || loading}
                    />
                  </GridCol>
                  <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
                    <TextInput
                      leftSectionWidth={50}
                      leftSection={"+234"}
                      size="md"
                      withAsterisk
                      label="Phone Number"
                      {...form.getInputProps("companyPhoneNumber")}
                      style={{ width: "100%" }}
                      classNames={{
                        label: classes.label,

                        error: classes.error,
                      }}
                      disabled={!isEdit || loading}
                      maxLength={11}
                      type="tel"
                    />
                  </GridCol>
                  <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
                    <TextInput
                      size="md"
                      withAsterisk
                      label="Company Website"
                      {...form.getInputProps("companyWebsite")}
                      style={{ width: "100%" }}
                      classNames={{
                        label: classes.label,

                        error: classes.error,
                      }}
                      disabled={!isEdit || loading}
                    />
                  </GridCol>
                  <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
                    <Select
                      allowDeselect={false}
                      data={fields}
                      size="md"
                      withAsterisk
                      label="Field/Industry"
                      style={{ width: "100%" }}
                      classNames={{
                        label: classes.label,

                        error: classes.error,
                      }}
                      {...form.getInputProps("industryId")}
                      disabled={!isEdit || loading}
                    />
                  </GridCol>
                  <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
                    <Select
                      data={companySize}
                      allowDeselect={false}
                      label="Company Size"
                      {...form.getInputProps("companySizeId")}
                      withAsterisk
                      size="md"
                      classNames={{
                        label: classes.label,
                        error: classes.error,
                      }}
                      disabled={!isEdit || loading}
                    />
                  </GridCol>
                  <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
                    <TextInput
                      size="md"
                      withAsterisk
                      label="Company Address"
                      {...form.getInputProps("address")}
                      style={{ width: "100%" }}
                      classNames={{
                        label: classes.label,
                        error: classes.error,
                      }}
                      disabled={!isEdit || loading}
                    />
                  </GridCol>

                  <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
                    <Select
                      data={countries}
                      label="Country"
                      size="md"
                      withAsterisk
                      {...form.getInputProps("countryId")}
                      classNames={{
                        label: classes.label,
                        error: classes.error,
                      }}
                      searchable
                      allowDeselect={false}
                      disabled={!isEdit || loading}
                    />
                  </GridCol>
                </Grid>
                <Group justify="flex-end" mt="3.5rem" fz="16px">
                  <Button
                    size="md"
                    px={40}
                    color="white"
                    bg="#3377ff"
                    type="submit"
                    disabled={!isEdit || loading}
                  >
                    {loading ? (
                      <Loader type="dots" size={"md"} color="white" />
                    ) : (
                      "save"
                    )}
                  </Button>
                </Group>
              </GridCol>
            </Grid>
          </form>
        </Card>
      )}
    </>
  );
};

export default SettingWrap;
