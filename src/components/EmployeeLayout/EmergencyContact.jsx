"use client";
import React from "react";
import classes from "./employeeLayout.module.css";
import {
  Box,
  Button,
  Grid,
  GridCol,
  Group,
  Select,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { useEmergencyContact } from "@/hooks";

const EmergencyContact = () => {
  const { form, handleSubmit } = useEmergencyContact();
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
        onSubmit={form.onSubmit((values) => handleSubmit(values))}
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
                {...form.getInputProps("firstName")}
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
                {...form.getInputProps("lastName")}
              />
            </GridCol>
            <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
              <Select
                label="Relationship"
                data={[]}
                withAsterisk
                size="md"
                {...form.getInputProps("relationship")}
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
                classNames={{ label: classes.label, error: classes.error }}
                {...form.getInputProps("homeAddress")}
              />
            </GridCol>
            <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
              <TextInput
                label="Phone Number"
                withAsterisk
                size="md"
                style={{ textAlign: "start", width: "100%" }}
                classNames={{ label: classes.label, error: classes.error }}
                {...form.getInputProps("phoneNumber")}
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
                {...form.getInputProps("email")}
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
            >
              save
            </Button>
          </Group>
        </Stack>
      </form>
    </Box>
  );
};

export default EmergencyContact;
