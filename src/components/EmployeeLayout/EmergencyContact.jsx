"use client";
import React from "react";
import classes from "./employeeLayout.module.css";
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

const EmergencyContact = ({
  emergencyForm,
  handleEmergencySubmit,
  loading,
}) => {
  return (
    <Box>
      <Text
        tt="capitalize"
        style={{ fontWeight: 500, fontSize: "18px", textAlign: "start" }}
      >
        Emergency Contact
      </Text>
      <form
        style={{ marginTop: "2rem" }}
        onSubmit={emergencyForm?.onSubmit((values) =>
          handleEmergencySubmit(values)
        )}
      >
        <Stack className={classes.individualWrap}>
          <Grid gutter={"lg"}>
            <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
              <TextInput
                label="First Name"
                withAsterisk
                size="md"
                placeholder="John"
                style={{ textAlign: "start", width: "100%" }}
                classNames={{ label: classes.label, error: classes.error }}
                {...emergencyForm?.getInputProps("firstName")}
                disabled={loading}
              />
            </GridCol>
            <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
              <TextInput
                label="Last Name"
                withAsterisk
                size="md"
                placeholder="Smith"
                style={{ textAlign: "start", width: "100%" }}
                classNames={{ label: classes.label, error: classes.error }}
                {...emergencyForm?.getInputProps("lastName")}
                disabled={loading}
              />
            </GridCol>
            <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
              <Select
                label="Relationship"
                data={[
                  "Sibling",
                  "Parent",
                  "Child",
                  "Extended Family",
                  "Friend",
                  "Spouse",
                ]}
                withAsterisk
                size="md"
                {...emergencyForm?.getInputProps("relationship")}
                disabled={loading}
                style={{ textAlign: "start", width: "100%" }}
                classNames={{ label: classes.label, error: classes.error }}
              />
            </GridCol>
            <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
              <TextInput
                label="Home Address"
                withAsterisk
                size="md"
                style={{ textAlign: "start", width: "100%" }}
                disabled={loading}
                classNames={{ label: classes.label, error: classes.error }}
                {...emergencyForm?.getInputProps("homeAddress")}
              />
            </GridCol>
            <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
              <TextInput
                label="Phone Number"
                withAsterisk
                size="md"
                style={{ textAlign: "start", width: "100%" }}
                classNames={{ label: classes.label, error: classes.error }}
                {...emergencyForm?.getInputProps("phoneNumber")}
                leftSection={"+234"}
                leftSectionWidth={50}
                disabled={loading}
                maxLength={"11"}
                type="tel"
              />
            </GridCol>
            <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
              <TextInput
                label="Email Address"
                type="email"
                withAsterisk
                size="md"
                style={{ textAlign: "start", width: "100%" }}
                classNames={{ label: classes.label, error: classes.error }}
                {...emergencyForm?.getInputProps("email")}
                disabled={loading}
              />
            </GridCol>
          </Grid>
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
              {loading ? (
                <Loader color="white" type="dots" size="md" />
              ) : (
                "save"
              )}
            </Button>
          </Group>
        </Stack>
      </form>
    </Box>
  );
};

export default EmergencyContact;
