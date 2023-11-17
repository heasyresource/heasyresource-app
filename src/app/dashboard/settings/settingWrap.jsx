"use client";
import { AddComImg } from "@/components";
import useSetting from "@/hooks/useSetting";
import {
  Button,
  Card,
  Grid,
  GridCol,
  Group,
  Select,
  Stack,
  Switch,
  Text,
  TextInput,
} from "@mantine/core";
import React, { useState } from "react";
import classes from "../dashboard.module.css";

const SettingWrap = () => {
  const [isEdit, setIsEdit] = useState(false);
  const { form, fields, companySize, countries, logoUrl } = useSetting();
  return (
    <Card
      style={{
        backgroundColor: "#ffff",
        borderRadius: "15px",
        borderBottom: "1px solid #DDDDDD",

        margin: "0px",
      }}
    >
      <Group
        justify="space-between"
        align="center"
        style={{ flexWrap: "nowrap", marginBottom: "15px" }}
      >
        <Text
          ta={{ base: "center", md: "left" }}
          style={{ fontSize: "18px" }}
          fw={700}
        >
          Company Information
        </Text>
        <Switch
          color="#3377FF"
          checked={isEdit}
          onChange={(e) => setIsEdit(e.currentTarget.checked)}
          labelPosition="left"
          label="Edit"
        />
      </Group>

      <form>
        <Grid>
          <GridCol span={{ lg: 3, md: 12, sm: 12 }}>
            <Stack justify="center" align="center" gap={".5rem"}>
              <AddComImg logo={logoUrl} isEdit={!isEdit} />
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
                  disabled={!isEdit}
                />
              </GridCol>
              <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
                <TextInput
                  size="md"
                  withAsterisk
                  label="Company Email"
                  {...form.getInputProps("email")}
                  style={{ width: "100%" }}
                  classNames={{
                    label: classes.label,

                    error: classes.error,
                  }}
                  disabled={!isEdit}
                />
              </GridCol>
              <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
                <TextInput
                  leftSectionWidth={50}
                  leftSection={"+234"}
                  size="md"
                  withAsterisk
                  label="Phone Number"
                  {...form.getInputProps("phoneNumber")}
                  style={{ width: "100%" }}
                  classNames={{
                    label: classes.label,

                    error: classes.error,
                  }}
                  disabled={!isEdit}
                  maxLength={11}
                  type="tel"
                />
              </GridCol>
              <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
                <TextInput
                  size="md"
                  withAsterisk
                  label="Company Website"
                  {...form.getInputProps("website")}
                  style={{ width: "100%" }}
                  classNames={{
                    label: classes.label,

                    error: classes.error,
                  }}
                  disabled={!isEdit}
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
                  disabled={!isEdit}
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
                  disabled={!isEdit}
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
                  disabled={!isEdit}
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
                  disabled={!isEdit}
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
                disabled={!isEdit}
              >
                Save
              </Button>
            </Group>
          </GridCol>
        </Grid>
      </form>
    </Card>
  );
};

export default SettingWrap;
