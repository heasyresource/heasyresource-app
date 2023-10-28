import {
  Box,
  Button,
  Grid,
  Group,
  Radio,
  Stack,
  TextInput,
} from "@mantine/core";
import React from "react";
import classes from "./personalDetail.module.css";

const PersonalDetail = () => {
  return (
    <Box style={{ height: "100%" }}>
      <Stack
        gap={"3rem"}
        className={classes.formStack}
        style={{ height: "100%" }}
      >
        <Grid style={{ marginTop: "20px" }} gutter="xl">
          <Grid.Col span={{ lg: 4, md: 6, sm: 12 }}>
            <TextInput
              size="md"
              label="First Name"
              withAsterisk
              style={{ textAlign: "start", width: "100%" }}
              classNames={{ label: classes.label, error: classes.error }}
            />
          </Grid.Col>
          <Grid.Col span={{ lg: 4, md: 6, sm: 12 }}>
            <TextInput
              size="md"
              label="Middle Name"
              withAsterisk
              style={{ textAlign: "start", width: "100%" }}
              classNames={{ label: classes.label, error: classes.error }}
            />
          </Grid.Col>
          <Grid.Col span={{ lg: 4, md: 6, sm: 12 }}>
            <TextInput
              size="md"
              label="Last Name"
              withAsterisk
              style={{ textAlign: "start", width: "100%" }}
              classNames={{ label: classes.label, error: classes.error }}
            />
          </Grid.Col>
          <Grid.Col span={{ lg: 4, md: 6, sm: 12 }}>
            <TextInput
              size="md"
              label="Employee ID"
              withAsterisk
              style={{ textAlign: "start", width: "100%" }}
              classNames={{ label: classes.label, error: classes.error }}
            />
          </Grid.Col>
          <Grid.Col span={{ lg: 4, md: 6, sm: 12 }}>
            <TextInput
              size="md"
              label="Nationality"
              withAsterisk
              style={{ textAlign: "start", width: "100%" }}
              classNames={{ label: classes.label, error: classes.error }}
            />
          </Grid.Col>
          <Grid.Col span={{ lg: 4, md: 6, sm: 12 }}>
            <TextInput
              size="md"
              label="Marital Status"
              withAsterisk
              style={{ textAlign: "start", width: "100%" }}
              classNames={{ label: classes.label, error: classes.error }}
            />
          </Grid.Col>
          <Grid.Col span={{ lg: 4, md: 6, sm: 12 }}>
            <TextInput
              type="date"
              size="md"
              withAsterisk
              style={{ textAlign: "start", width: "100%" }}
              label="Date of Birth"
              placeholder="DD/MM/YYYY"
              classNames={{ label: classes.label, error: classes.error }}
            />
          </Grid.Col>
          <Grid.Col span={{ lg: 4, md: 6, sm: 12 }}>
            <Radio.Group
              size="md"
              withAsterisk
              label="Gender"
              style={{ textAlign: "start", width: "100%" }}
              classNames={{ label: classes.label, error: classes.error }}
            >
              <Group mt="xs">
                <Radio value="male" label="Male" labelPosition="left" />
                <Radio value="femaale" label="Female" labelPosition="left" />
              </Group>
            </Radio.Group>
          </Grid.Col>
        </Grid>
        {/* <Flex
          justify={"space-between"}
          align={"center"}
          style={{ gap: "1rem" }}
          className={classes.inputWrap}
        >
          <TextInput
            size="md"
            label="First Name"
            withAsterisk
            style={{ textAlign: "start", width: "100%" }}
            classNames={{ label: classes.label, error: classes.error }}
          />
          <TextInput
            size="md"
            label="Middle Name"
            withAsterisk
            style={{ textAlign: "start", width: "100%" }}
            classNames={{ label: classes.label, error: classes.error }}
          />
          <TextInput
            size="md"
            label="Last Name"
            withAsterisk
            style={{ textAlign: "start", width: "100%" }}
            classNames={{ label: classes.label, error: classes.error }}
          />
        </Flex> */}
        {/* <Flex
          justify={"space-between"}
          align={"center"}
          style={{ gap: "1rem" }}
          className={classes.inputWrap}
        >
          <TextInput
            size="md"
            label="Employee ID"
            withAsterisk
            style={{ textAlign: "start", width: "100%" }}
            classNames={{ label: classes.label, error: classes.error }}
          />
          <TextInput
            size="md"
            label="Nationality"
            withAsterisk
            style={{ textAlign: "start", width: "100%" }}
            classNames={{ label: classes.label, error: classes.error }}
          />
          <TextInput
            size="md"
            label="Marital Status"
            withAsterisk
            style={{ textAlign: "start", width: "100%" }}
            classNames={{ label: classes.label, error: classes.error }}
          />
        </Flex> */}
        {/* <Flex
          justify={"flex-start"}
          align={"center"}
          style={{ gap: "50px" }}
          className={classes.inputWrap}
        >
          <TextInput
            type="date"
            size="md"
            withAsterisk
            style={{ textAlign: "start", width: "100%" }}
            label="Date of Birth"
            placeholder="DD/MM/YYYY"
            classNames={{ label: classes.label, error: classes.error }}
          />
          <Radio.Group
            size="md"
            withAsterisk
            label="Gender"
            style={{ textAlign: "start", width: "100%" }}
            classNames={{ label: classes.label, error: classes.error }}
          >
            <Group mt="xs">
              <Radio value="male" label="Male" labelPosition="left" />
              <Radio value="femaale" label="Female" labelPosition="left" />
            </Group>
          </Radio.Group>
        </Flex> */}
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

export default PersonalDetail;
