"use client";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridCol,
  Group,
  Select,
  Stack,
  Switch,
  Text,
  TextInput,
  Textarea,
} from "@mantine/core";
import React, { useState } from "react";
import classes from "../HiringLayout/HiringLayout.module.css";
import { IconEdit } from "@tabler/icons-react";
import { useAssignLeave } from "@/hooks";

const AddVacancy = () => {
  const [value, setValue] = useState([]);
  const { form, handleSubmit } = useAssignLeave();
  return (
    <Box px={72} pt={30}>
      <Text
        tt={"capitalize"}
        style={{
          fontSize: "22px",
          fontWeight: 700,
        }}
      >
        Add Vacancy
      </Text>
      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
        <Stack gap={"1.5rem"}>
          <Grid gutter="lg" className={classes.formWrap}>
            <GridCol span={{ lg: 4.5, md: 6, sm: 12 }}>
              <TextInput
                size="md"
                required
                label="Vacancy Name"
                style={{ width: "100%" }}
                classNames={{
                  label: classes.label,
                  error: classes.error,
                  placeholder: classes.placeholder,
                }}
              />
            </GridCol>
            <GridCol span={{ lg: 4.5, md: 6, sm: 12 }}>
              <Select
                size="md"
                required
                label="Employment Type"
                style={{ width: "100%" }}
                placeholder="Gbemisola Adebiyi"
                data={["Gbemisola Adebiyi"]}
                classNames={{
                  label: classes.label,
                  error: classes.error,
                  placeholder: classes.placeholder,
                }}
              />
            </GridCol>
            <GridCol span={{ lg: 9, md: 6, sm: 12 }}>
              <Textarea autosize minRows={4} label="Notes/Comments" />
            </GridCol>
            <GridCol span={{ lg: 4.5, md: 6, sm: 12 }}>
              <TextInput
                size="md"
                required
                label="Hiring Manager"
                placeholder="odebiyi@gmail.cosm"
                style={{ width: "100%" }}
                classNames={{
                  label: classes.label,
                  error: classes.error,
                  placeholder: classes.placeholder,
                }}
              />
            </GridCol>
            <GridCol span={{ lg: 4.5, md: 6, sm: 12 }}>
              <TextInput
                size="md"
                required
                label="Number of Positions"
                style={{ width: "100%" }}
                placeholder="odebiyi@gmail.com"
                classNames={{
                  label: classes.label,
                  error: classes.error,
                  placeholder: classes.placeholder,
                }}
              />
            </GridCol>
            <GridCol span={{ lg: 12, md: 6, sm: 12 }}>
              <Flex direction={"column"}>
                <Switch.Group value={value} onChange={setValue}>
                  <Switch
                    size="md"
                    labelPosition="left"
                    value="Active"
                    label="Active"
                    classNames={{
                      label: classes.switchLabel,
                      error: classes.error,
                      placeholder: classes.placeholder,
                    }}
                  />
                  <Switch
                    size="md"
                    labelPosition="left"
                    value="Publish on the Web"
                    label="Publish on the Web"
                    classNames={{
                      label: classes.switchLabel,
                      error: classes.error,
                      placeholder: classes.placeholder,
                    }}
                  />
                </Switch.Group>
              </Flex>
            </GridCol>
            <GridCol span={{ lg: 11, md: 6, sm: 12 }}>
              <TextInput
                size="md"
                leftSection={"Web Page URL:"}
                leftSectionWidth={150}
                placeholder="https://www.heasyresource.com/careers/engineering/positions/senior-software-engineer"
                rightSection={<IconEdit color="#3377FF" />}
                classNames={{
                  label: classes.label,
                  error: classes.error,
                  placeholder: classes.placeholder,
                  wrapper: classes.wrapper,
                  section: classes.section,
                }}
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
            >
              cancel
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
            >
              save
            </Button>
          </Group>
        </Stack>
      </form>
    </Box>
  );
};

export default AddVacancy;
