import {
  Box,
  Button,
  Grid,
  Group,
  Loader,
  Select,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import React from "react";
import classes from "./employeeLayout.module.css";
import { useContactDetail } from "@/hooks";

const ContactDetail = ({
  contactForm,
  handleContactSubmit,
  loading,
  LGA,
  countries,
  states,
  isEmpty,
}) => {
  return (
    <form
      onSubmit={contactForm?.onSubmit((values) => handleContactSubmit(values))}
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
            <Grid.Col span={{ lg: 4, md: 6, sm: 12 }}>
              <TextInput
                size="md"
                withAsterisk
                label="Home Address"
                disabled={loading}
                {...contactForm?.getInputProps("street")}
                style={{ textAlign: "start", width: "100%" }}
                classNames={{ label: classes.label, error: classes.error }}
              />
            </Grid.Col>
            <Grid.Col span={{ lg: 4, md: 6, sm: 12 }}>
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
                {...contactForm?.getInputProps("stateId")}
                nothingFoundMessage="option not found"
              />
            </Grid.Col>
            <Grid.Col span={{ lg: 4, md: 6, sm: 12 }}>
              <Select
                size="md"
                withAsterisk
                label="LGA"
                placeholder="Ajeromi/Ifelodun"
                style={{ textAlign: "start", width: "100%" }}
                classNames={{ label: classes.label, error: classes.error }}
                data={LGA}
                disabled={loading || isEmpty}
                searchable
                {...contactForm?.getInputProps("lgaId")}
                nothingFoundMessage="option not found"
              />
            </Grid.Col>
            <Grid.Col span={{ lg: 4, md: 6, sm: 12 }}>
              <TextInput
                size="md"
                withAsterisk
                label="Zip Code"
                placeholder="2023920"
                disabled={loading}
                {...contactForm?.getInputProps("zipCode")}
                style={{ textAlign: "start", width: "100%" }}
                classNames={{ label: classes.label, error: classes.error }}
              />
            </Grid.Col>
            <Grid.Col span={{ lg: 4, md: 6, sm: 12 }}>
              <Select
                size="md"
                withAsterisk
                label="Country"
                placeholder="Nigeria"
                disabled={loading}
                searchable
                {...contactForm?.getInputProps("countryId")}
                style={{ textAlign: "start", width: "100%" }}
                data={countries}
                classNames={{ label: classes.label, error: classes.error }}
              />
            </Grid.Col>
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
            <Grid.Col span={{ lg: 4, md: 6, sm: 12 }}>
              <TextInput
                size="md"
                withAsterisk
                label="Home"
                disabled={loading}
                {...contactForm?.getInputProps("homePhoneNumber")}
                style={{ textAlign: "start", width: "100%" }}
                classNames={{ label: classes.label, error: classes.error }}
                leftSection={"+234"}
                leftSectionWidth={50}
                type="tel"
                maxLength={"11"}
              />
            </Grid.Col>
            <Grid.Col span={{ lg: 4, md: 6, sm: 12 }}>
              <TextInput
                type="tel"
                maxLength={"11"}
                size="md"
                withAsterisk
                label="Mobile"
                disabled={loading}
                {...contactForm?.getInputProps("mobilePhoneNumber")}
                style={{ textAlign: "start", width: "100%" }}
                classNames={{ label: classes.label, error: classes.error }}
                leftSection={"+234"}
                leftSectionWidth={50}
              />
            </Grid.Col>
            <Grid.Col span={{ lg: 4, md: 6, sm: 12 }}>
              <TextInput
                type="tel"
                maxLength={"11"}
                size="md"
                withAsterisk
                label="Work"
                disabled={loading}
                {...contactForm?.getInputProps("workPhoneNumber")}
                style={{ textAlign: "start", width: "100%" }}
                classNames={{ label: classes.label, error: classes.error }}
                leftSection={"+234"}
                leftSectionWidth={50}
              />
            </Grid.Col>
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
            <Grid.Col span={{ lg: 4, md: 6, sm: 12 }}>
              <TextInput
                size="md"
                type="email"
                withAsterisk
                label="Personal Email"
                style={{ textAlign: "start", width: "100%" }}
                classNames={{ label: classes.label, error: classes.error }}
                disabled={loading}
                placeholder="example@company.com"
                {...contactForm?.getInputProps("personalEmail")}
              />
            </Grid.Col>
            <Grid.Col span={{ lg: 4, md: 6, sm: 12 }}>
              <TextInput
                size="md"
                type="email"
                withAsterisk
                label="Work Email"
                style={{ textAlign: "start", width: "100%" }}
                classNames={{ label: classes.label, error: classes.error }}
                disabled
                placeholder="example@company.com"
                {...contactForm?.getInputProps("workEmail")}
              />
            </Grid.Col>
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
            px="50px"
            w={{ lg: "auto", md: "auto", sm: "auto" }}
            className={classes.btn}
            disabled={loading}
            onClick={() => contactForm?.reset()}
          >
            cancel
          </Button>
          <Button
            variant="contained"
            size="md"
            color="#3377FF"
            tt="capitalize"
            px="50px"
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

export default ContactDetail;
