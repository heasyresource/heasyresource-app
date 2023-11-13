"use client";
import {
  ActionIcon,
  Box,
  Button,
  Flex,
  Grid,
  GridCol,
  Group,
  Image,
  Loader,
  Modal,
  Stack,
  Text,
  TextInput,
  Textarea,
} from "@mantine/core";
import React from "react";
import classes from "./employeeLayout.module.css";
import { DateInput } from "@mantine/dates";
import { IconEdit } from "@tabler/icons-react";
import { formatMonthYear } from "@/utils/publicFunctions";

const Education = ({
  educationForm,
  handleEduSubmit,
  loading,
  openEdu,
  openedEdu,
  closeEdu,
  educations,
  handleEditEdu,
  openEditEdu,
  closeEditEdu,
  openedEditEdu,
  setExpId,
}) => {
  const handleEdit = (data) => {
    setExpId(data.id);
    educationForm?.setValues({
      institution: data.institution,
      degree: data.degree,
      fieldOfStudy: data.fieldOfStudy,
      grade: data.grade,
      startDate: new Date(data.startDate),
      endDate: data.endDate !== null ? new Date(data.endDate) : "",
      description: data.description !== null ? data.description : "",
      workMode: data.workMode,
    });
    openEditEdu();
  };
  return (
    <>
      <Box>
        <Flex justify={"flex-start"} gap="10px" align={"center"}>
          <Text
            c="#4D4D4D"
            style={{
              fontWeight: 700,
              fontSize: "23px",
              textAlign: "start",
            }}
          >
            Educations:
          </Text>
          <Button
            onClick={openEdu}
            variant="filled"
            tt={"capitalize"}
            style={{ backgroundColor: "#e7f7ff", color: "#000000" }}
          >
            add +
          </Button>
        </Flex>
        {!educations?.length && (
          <Text size="14px" mt="10px" c="565656">
            No education added yet!
          </Text>
        )}
        {educations?.length !== 0 && (
          <Stack mt={"md"}>
            {educations?.map((item) => (
              <Box key={item.institution}>
                <Flex justify={"flex-start"} align={"flex-start"} gap={"10px"}>
                  <Box style={{ width: "45px", height: "45px" }}>
                    <Image src={"/assets/svgs/education.svg"} />
                  </Box>
                  <Box>
                    <Flex justify={"flex-start"} align={"flex-start"}>
                      <Text
                        style={{
                          fontWeight: 600,
                          fontSize: "16px",
                          textTransform: "capitalize",
                        }}
                      >
                        {item.institution}
                      </Text>
                      <ActionIcon
                        size="sm"
                        color="#3377FF"
                        variant="transparent"
                        onClick={() => handleEdit(item)}
                      >
                        <IconEdit
                          style={{ width: "70%", height: "70%" }}
                          stroke={1.5}
                        />
                      </ActionIcon>
                    </Flex>
                    <Text
                      style={{
                        fontSize: "14px",
                        textTransform: "capitalize",
                      }}
                    >
                      {`${item.degree}, ${item.fieldOfStudy}`}
                    </Text>
                    <Text
                      style={{
                        fontSize: "14px",
                        textTransform: "capitalize",
                      }}
                    >{`${formatMonthYear(item.startDate, item.endDate)}`}</Text>
                    <Text
                      style={{
                        fontSize: "14px",
                        textTransform: "capitalize",
                      }}
                    >
                      {`Grade: ${item.grade}`}
                    </Text>
                    {item.description !== null && (
                      <Text
                        style={{
                          fontSize: "14px",
                          marginTop: "10px",
                        }}
                      >
                        {item.description}
                      </Text>
                    )}
                  </Box>
                </Flex>
              </Box>
            ))}
          </Stack>
        )}
      </Box>
      <Modal
        title="Add Education"
        size="xl"
        closeOnClickOutside={false}
        centered
        opened={openedEdu}
        onClose={closeEdu}
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      >
        <form
          onSubmit={educationForm?.onSubmit((values) =>
            handleEduSubmit(values)
          )}
        >
          <Grid
            style={{
              margin: "20px 0",
              overflowY: "scroll",
              maxHeight: "400px",
            }}
            gutter="xl"
          >
            <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
              <TextInput
                size="md"
                withAsterisk
                label="Institute Name"
                style={{ textAlign: "start", width: "100%" }}
                classNames={{ label: classes.label, error: classes.error }}
                {...educationForm?.getInputProps("institution")}
                disabled={loading}
              />
            </GridCol>
            <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
              <TextInput
                size="md"
                withAsterisk
                label="Field of Study"
                style={{ textAlign: "start", width: "100%" }}
                classNames={{ label: classes.label, error: classes.error }}
                {...educationForm?.getInputProps("fieldOfStudy")}
                placeholder="Computer Science"
                disabled={loading}
              />
            </GridCol>
            <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
              <TextInput
                size="md"
                withAsterisk
                label="Degree"
                style={{ textAlign: "start", width: "100%" }}
                classNames={{ label: classes.label, error: classes.error }}
                {...educationForm?.getInputProps("degree")}
                placeholder="Bachelor Of Science"
                disabled={loading}
              />
            </GridCol>
            <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
              <TextInput
                size="md"
                withAsterisk
                label="Grade"
                style={{ textAlign: "start", width: "100%" }}
                classNames={{ label: classes.label, error: classes.error }}
                {...educationForm?.getInputProps("grade")}
                placeholder="3.6/4.0"
                disabled={loading}
              />
            </GridCol>
            <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
              <DateInput
                size="md"
                clearable
                withAsterisk
                label="Start Date"
                style={{ textAlign: "start", width: "100%" }}
                classNames={{ label: classes.label, error: classes.error }}
                {...educationForm?.getInputProps("startDate")}
                disabled={loading}
              />
            </GridCol>
            <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
              <DateInput
                size="md"
                clearable
                withAsterisk
                label="End Date"
                style={{ textAlign: "start", width: "100%" }}
                classNames={{ label: classes.label, error: classes.error }}
                {...educationForm?.getInputProps("endDate")}
                disabled={loading}
              />
            </GridCol>
            <Grid.Col span={12}>
              <Textarea
                size="md"
                label="Comment"
                style={{ textAlign: "start", width: "100%" }}
                classNames={{ label: classes.label, error: classes.error }}
                {...educationForm?.getInputProps("description")}
                disabled={loading}
              />
            </Grid.Col>
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
              onClick={closeEdu}
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
        </form>
      </Modal>
      <Modal
        title="Edit Education"
        size="xl"
        closeOnClickOutside={false}
        centered
        opened={openedEditEdu}
        onClose={closeEditEdu}
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      >
        <form
          onSubmit={educationForm?.onSubmit((values) => handleEditEdu(values))}
        >
          <Grid
            style={{
              margin: "20px 0",
              maxHeight: "400px",
              overflowY: "scroll",
            }}
            gutter="xl"
          >
            <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
              <TextInput
                size="md"
                withAsterisk
                label="Institute Name"
                style={{ textAlign: "start", width: "100%" }}
                classNames={{ label: classes.label, error: classes.error }}
                {...educationForm?.getInputProps("institution")}
                disabled={loading}
              />
            </GridCol>
            <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
              <TextInput
                size="md"
                withAsterisk
                label="Field of Study"
                style={{ textAlign: "start", width: "100%" }}
                classNames={{ label: classes.label, error: classes.error }}
                {...educationForm?.getInputProps("fieldOfStudy")}
                placeholder="Computer Science"
                disabled={loading}
              />
            </GridCol>
            <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
              <TextInput
                size="md"
                withAsterisk
                label="Degree"
                style={{ textAlign: "start", width: "100%" }}
                classNames={{ label: classes.label, error: classes.error }}
                {...educationForm?.getInputProps("degree")}
                placeholder="Bachelor Of Science"
                disabled={loading}
              />
            </GridCol>
            <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
              <TextInput
                size="md"
                withAsterisk
                label="Grade"
                style={{ textAlign: "start", width: "100%" }}
                classNames={{ label: classes.label, error: classes.error }}
                {...educationForm?.getInputProps("grade")}
                placeholder="3.6/4.0"
                disabled={loading}
              />
            </GridCol>
            <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
              <DateInput
                size="md"
                clearable
                withAsterisk
                label="Start Date"
                style={{ textAlign: "start", width: "100%" }}
                classNames={{ label: classes.label, error: classes.error }}
                {...educationForm?.getInputProps("startDate")}
                disabled={loading}
              />
            </GridCol>
            <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
              <DateInput
                size="md"
                clearable
                withAsterisk
                label="End Date"
                style={{ textAlign: "start", width: "100%" }}
                classNames={{ label: classes.label, error: classes.error }}
                {...educationForm?.getInputProps("endDate")}
                disabled={loading}
              />
            </GridCol>
            <Grid.Col span={12}>
              <Textarea
                size="md"
                label="Comment"
                style={{ textAlign: "start", width: "100%" }}
                classNames={{ label: classes.label, error: classes.error }}
                {...educationForm?.getInputProps("description")}
                disabled={loading}
              />
            </Grid.Col>
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
              onClick={closeEditEdu}
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
                "update"
              )}
            </Button>
          </Group>
        </form>
      </Modal>
    </>
  );
};

export default Education;
