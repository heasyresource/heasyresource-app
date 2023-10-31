import {
  Box,
  Button,
  Grid,
  Group,
  Select,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import React from "react";
import classes from "./employeeLayout.module.css";
import { useContactDetail } from "@/hooks";

const ContactDetail = () => {
  const { form, handleSubmit, loading } = useContactDetail();
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
            <Grid.Col span={{ lg: 4, md: 6, sm: 12 }}>
              <TextInput
                size="md"
                withAsterisk
                label="Full Name"
                placeholder="John Smith"
                disabled={loading}
                {...form.getInputProps("fullName")}
                style={{ textAlign: "start", width: "100%" }}
                classNames={{ label: classes.label, error: classes.error }}
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
                data={[]}
                disabled={loading}
                {...form.getInputProps("lga")}
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
                data={[]}
                disabled={loading}
                {...form.getInputProps("state")}
              />
            </Grid.Col>
            <Grid.Col span={{ lg: 4, md: 6, sm: 12 }}>
              <TextInput
                size="md"
                withAsterisk
                label="Zip Code"
                placeholder="2023920"
                disabled={loading}
                {...form.getInputProps("code")}
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
                {...form.getInputProps("country")}
                style={{ textAlign: "start", width: "100%" }}
                data={["Nigeria"]}
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
                type="number"
                size="md"
                withAsterisk
                label="Home"
                disabled={loading}
                {...form.getInputProps("homeTel")}
                style={{ textAlign: "start", width: "100%" }}
                classNames={{ label: classes.label, error: classes.error }}
              />
            </Grid.Col>
            <Grid.Col span={{ lg: 4, md: 6, sm: 12 }}>
              <TextInput
                type="number"
                size="md"
                withAsterisk
                label="Mobile"
                disabled={loading}
                {...form.getInputProps("mobileTel")}
                style={{ textAlign: "start", width: "100%" }}
                classNames={{ label: classes.label, error: classes.error }}
              />
            </Grid.Col>
            <Grid.Col span={{ lg: 4, md: 6, sm: 12 }}>
              <TextInput
                type="number"
                size="md"
                withAsterisk
                label="Work"
                disabled={loading}
                {...form.getInputProps("workTel")}
                style={{ textAlign: "start", width: "100%" }}
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
            email:
          </Text>

          <Grid style={{ marginTop: "20px" }} gutter="xl">
            <Grid.Col span={{ lg: 4, md: 6, sm: 12 }}>
              <TextInput
                size="md"
                type="email"
                withAsterisk
                label="Work Email"
                style={{ textAlign: "start", width: "100%" }}
                classNames={{ label: classes.label, error: classes.error }}
                disabled={loading}
                placeholder="example@company.com"
                {...form.getInputProps("workEmail")}
              />
            </Grid.Col>
            <Grid.Col span={{ lg: 4, md: 6, sm: 12 }}>
              <TextInput
                type="email"
                size="md"
                withAsterisk
                label="Personal Email"
                placeholder="example@gmail.com"
                style={{ textAlign: "start", width: "100%" }}
                classNames={{ label: classes.label, error: classes.error }}
                disabled={loading}
                {...form.getInputProps("personalEmail")}
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
            add
          </Button>
        </Group>
      </Stack>
    </form>
  );
};

export default ContactDetail;
