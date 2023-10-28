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
import classes from "./contactDetail.module.css";

const ContactDetail = () => {
  return (
    <Box style={{ height: "100%" }}>
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
              />
            </Grid.Col>
            <Grid.Col span={{ lg: 4, md: 6, sm: 12 }}>
              <TextInput
                size="md"
                withAsterisk
                label="Zip Code"
                style={{ textAlign: "start", width: "100%" }}
              />
            </Grid.Col>
            <Grid.Col span={{ lg: 4, md: 6, sm: 12 }}>
              <Select
                size="md"
                withAsterisk
                label="Country"
                placeholder="Nigeria"
                style={{ textAlign: "start", width: "100%" }}
                data={[]}
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
                style={{ textAlign: "start", width: "100%" }}
                classNames={{ label: classes.label, error: classes.error }}
              />
            </Grid.Col>
            <Grid.Col span={{ lg: 4, md: 6, sm: 12 }}>
              <TextInput
                size="md"
                withAsterisk
                label="Zip Code"
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
                style={{ textAlign: "start", width: "100%" }}
                classNames={{ label: classes.label, error: classes.error }}
                data={[]}
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
              />
            </Grid.Col>
            <Grid.Col span={{ lg: 4, md: 6, sm: 12 }}>
              <TextInput
                type="email"
                size="md"
                withAsterisk
                label="Personal Email"
                style={{ textAlign: "start", width: "100%" }}
                classNames={{ label: classes.label, error: classes.error }}
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
          >
            add
          </Button>
        </Group>
      </Stack>
    </Box>
  );
};

export default ContactDetail;
