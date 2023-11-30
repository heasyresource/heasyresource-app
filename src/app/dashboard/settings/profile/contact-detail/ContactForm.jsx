"use client";
import useContact from "@/hooks/useContact";
import {
  Box,
  Button,
  Grid,
  GridCol,
  Group,
  Loader,
  Select,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import React from "react";
import classes from "../profile.module.css";

const ContactForm = () => {
  const {
    form,
    handleSubmit,
    router,
    states,
    countries,
    lgas,
    isEmpty,
    loading,
  } = useContact();
  return (
    <form
      onSubmit={form.onSubmit((values) => handleSubmit(values))}
      style={{ height: "100%" }}
    >
      <Stack style={{ gap: "3rem" }}>
        <Box>
          <Text
            c="#4D4D4D"
            tt="capitalize"
            style={{ fontWeight: 500, fontSize: "18px", textAlign: "start" }}
          >
            address:
          </Text>

          <Grid style={{ marginTop: "20px" }} gutter="xl">
            <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
              <TextInput
                size="md"
                withAsterisk
                label="Home Address"
                disabled={loading}
                {...form.getInputProps("street")}
                style={{ textAlign: "start", width: "100%" }}
                classNames={{ label: classes.label, error: classes.error }}
              />
            </GridCol>
            <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
              <Select
                size="md"
                withAsterisk
                label="State"
                placeholder="Lagos State"
                style={{ textAlign: "start", width: "100%" }}
                classNames={{ label: classes.label, error: classes.error }}
                data={states}
                disabled={loading}
                searchable
                {...form.getInputProps("stateId")}
                nothingFoundMessage="option not found"
                allowDeselect={false}
              />
            </GridCol>
            <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
              <Select
                size="md"
                withAsterisk
                label="LGA"
                placeholder="Select LGA"
                style={{ textAlign: "start", width: "100%" }}
                classNames={{ label: classes.label, error: classes.error }}
                data={lgas}
                disabled={loading || isEmpty}
                searchable
                {...form.getInputProps("lgaId")}
                nothingFoundMessage="option not found"
                allowDeselect={false}
              />
            </GridCol>
            <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
              <TextInput
                size="md"
                withAsterisk
                label="Zip Code"
                placeholder="2023920"
                type="number"
                maxLength={7}
                disabled={loading}
                {...form.getInputProps("zipCode")}
                style={{ textAlign: "start", width: "100%" }}
                classNames={{ label: classes.label, error: classes.error }}
              />
            </GridCol>
            <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
              <Select
                size="md"
                withAsterisk
                label="Country"
                placeholder="Nigeria"
                disabled={loading}
                searchable
                {...form.getInputProps("countryId")}
                style={{ textAlign: "start", width: "100%" }}
                data={countries}
                classNames={{ label: classes.label, error: classes.error }}
                allowDeselect={false}
              />
            </GridCol>
          </Grid>
        </Box>

        <Box>
          <Text
            c="#4D4D4D"
            tt="capitalize"
            style={{ fontWeight: 500, fontSize: "18px", textAlign: "start" }}
          >
            telephone:
          </Text>

          <Grid style={{ marginTop: "20px" }} gutter="xl">
            <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
              <TextInput
                size="md"
                label="Home"
                disabled={loading}
                {...form.getInputProps("homePhoneNumber")}
                style={{ textAlign: "start", width: "100%" }}
                classNames={{ label: classes.label, error: classes.error }}
                leftSection={"+234"}
                leftSectionWidth={50}
                type="tel"
                maxLength={11}
              />
            </GridCol>
            <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
              <TextInput
                type="tel"
                maxLength={11}
                size="md"
                withAsterisk
                label="Mobile"
                disabled={loading}
                {...form.getInputProps("mobilePhoneNumber")}
                style={{ textAlign: "start", width: "100%" }}
                classNames={{ label: classes.label, error: classes.error }}
                leftSection={"+234"}
                leftSectionWidth={50}
              />
            </GridCol>
            <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
              <TextInput
                type="tel"
                maxLength={11}
                size="md"
                label="Work"
                disabled={loading}
                {...form.getInputProps("workPhoneNumber")}
                style={{ textAlign: "start", width: "100%" }}
                classNames={{ label: classes.label, error: classes.error }}
                leftSection={"+234"}
                leftSectionWidth={50}
              />
            </GridCol>
          </Grid>
        </Box>
        <Box>
          <Text
            c="#4D4D4D"
            tt="capitalize"
            style={{ fontWeight: 500, fontSize: "18px", textAlign: "start" }}
          >
            email:
          </Text>

          <Grid style={{ marginTop: "20px" }} gutter="xl">
            <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
              <TextInput
                size="md"
                type="email"
                label="Personal Email"
                style={{ textAlign: "start", width: "100%" }}
                classNames={{ label: classes.label, error: classes.error }}
                disabled={loading}
                placeholder="example@company.com"
                {...form.getInputProps("personalEmail")}
              />
            </GridCol>
            <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
              <TextInput
                size="md"
                type="email"
                withAsterisk
                label="Work Email"
                style={{ textAlign: "start", width: "100%" }}
                classNames={{ label: classes.label, error: classes.error }}
                disabled
                placeholder="example@company.com"
                {...form.getInputProps("workEmail")}
              />
            </GridCol>
          </Grid>
        </Box>
        <Group
          justify="flex-end"
          className={classes.btnWrap}
          align="center"
          mt={"auto"}
        >
          <Button
            variant="outline"
            size="md"
            color="#3377FF"
            style={{ borderColor: "#3377FF" }}
            tt="capitalize"
            px="30px"
            w={{ lg: "auto", md: "auto", sm: "auto" }}
            className={classes.btn}
            disabled={loading}
            onClick={() => router.back()}
          >
            back
          </Button>
          <Button
            variant="contained"
            size="md"
            color="#3377FF"
            tt="capitalize"
            px="30px"
            w={{ lg: "auto", md: "auto", sm: "auto" }}
            className={classes.btn}
            type="submit"
            style={{
              backgroundColor: "#3377FF",
            }}
            disabled={loading}
          >
            {loading ? <Loader color="white" type="dots" size="md" /> : "save"}
          </Button>
        </Group>
      </Stack>
    </form>
  );
};

export default ContactForm;
