"use client";
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
import classes from "../../employee.module.css";
import useEmergency from "@/hooks/useEmergency";

const EmergencyForm = () => {
  const { form, loading, handleSubmit, router } = useEmergency();
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
                {...form.getInputProps("lastName")}
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
                {...form.getInputProps("relationship")}
                disabled={loading}
                style={{ textAlign: "start", width: "100%" }}
                classNames={{ label: classes.label, error: classes.error }}
                allowDeselect={false}
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
                leftSection={"+234"}
                leftSectionWidth={50}
                disabled={loading}
                maxLength={11}
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
                {...form.getInputProps("email")}
                disabled={loading}
              />
            </GridCol>
          </Grid>
          <Group justify="flex-end" align="center" mt={"auto"}>
            <Button
              variant="outline"
              size="md"
              color="#3377FF"
              style={{ borderColor: "#3377FF" }}
              tt="capitalize"
              px="30px"
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

export default EmergencyForm;
