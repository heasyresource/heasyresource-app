"use client";
import {
  ActionIcon,
  Box,
  Button,
  Checkbox,
  Flex,
  Grid,
  GridCol,
  Group,
  Image,
  Loader,
  Modal,
  Select,
  Stack,
  Text,
  TextInput,
  Textarea,
} from "@mantine/core";
import classes from "./employeeLayout.module.css";
import { DateInput } from "@mantine/dates";
import { IconEdit } from "@tabler/icons-react";
import React from "react";
import {
  calculateDateDifference,
  formatMonthYear,
} from "@/utils/publicFunctions";

const WorkExprience = ({
  openExp,
  workExp,
  loading,
  experienceForm,
  handleExpSubmit,
  employmentType,
  closeExp,
  openedExp,
  openEditExp,
  closeEditExp,
  openedEditExp,
  setExpId,
  handleEditExp,
}) => {
  const handleEdit = (data) => {
    setExpId(data.id);
    experienceForm?.setValues({
      companyName: data.companyName,
      position: data.position,
      location: data.location,
      isPresent: data.isPresent === 1,
      startDate: new Date(data.startDate),
      endDate: data.endDate !== null ? new Date(data.endDate) : "",
      description: data.description !== null ? data.description : "",
      workMode: data.workMode,
      employmentTypeId: data.employmentType.id,
    });
    openEditExp();
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
            Work Experiences:
          </Text>
          <Button
            onClick={openExp}
            variant="filled"
            tt={"capitalize"}
            style={{ backgroundColor: "#e7f7ff", color: "#000000" }}
          >
            add +
          </Button>
        </Flex>
        {!workExp?.length && (
          <Text size="14px" mt="10px" c="565656">
            No experience added yet!
          </Text>
        )}
        {workExp?.length !== 0 && (
          <Stack mt={"md"}>
            {workExp?.map((item) => (
              <Box key={item.companyName}>
                <Flex justify={"flex-start"} align={"flex-start"} gap={"10px"}>
                  <Box style={{ width: "45px", height: "45px" }}>
                    <Image src={"/assets/images/workExprience.png"} />
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
                        {item.position}
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
                      {`${item.companyName} · ${item.employmentType.name}`}
                    </Text>
                    <Text
                      style={{
                        fontSize: "14px",
                        textTransform: "capitalize",
                      }}
                    >{`${formatMonthYear(
                      item.startDate,
                      item.endDate
                    )} ${calculateDateDifference(
                      item.startDate,
                      item.endDate
                    )} ${item.isPresent === 1 && "· present"}`}</Text>
                    <Text
                      style={{
                        fontSize: "14px",
                        textTransform: "capitalize",
                      }}
                    >
                      {item.location}
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
        title="Add Work Experience"
        size="xl"
        closeOnClickOutside={false}
        centered
        opened={openedExp}
        onClose={closeExp}
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      >
        <form
          onSubmit={experienceForm?.onSubmit((values) =>
            handleExpSubmit(values)
          )}
        >
          <Grid
            style={{
              margin: "20px 0",
              maxHeight: "400px",
              overflowY: "scroll",
            }}
            gutter="lg"
          >
            <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
              <TextInput
                size="md"
                withAsterisk
                label="Company Name"
                style={{ textAlign: "start", width: "100%" }}
                classNames={{ label: classes.label, error: classes.error }}
                {...experienceForm?.getInputProps("companyName")}
                disabled={loading}
              />
            </GridCol>
            <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
              <TextInput
                size="md"
                withAsterisk
                label="Position"
                style={{ textAlign: "start", width: "100%" }}
                classNames={{ label: classes.label, error: classes.error }}
                {...experienceForm?.getInputProps("position")}
                disabled={loading}
              />
            </GridCol>
            <Grid.Col span={{ lg: 4, md: 6, sm: 12 }}>
              <Select
                data={employmentType}
                size="md"
                withAsterisk
                label="Emplyment Type"
                style={{ textAlign: "start", width: "100%" }}
                classNames={{ label: classes.label, error: classes.error }}
                {...experienceForm?.getInputProps("employmentTypeId")}
                disabled={loading}
                allowDeselect={false}
              />
            </Grid.Col>
            <Grid.Col span={{ lg: 4, md: 6, sm: 12 }}>
              <Select
                size="md"
                withAsterisk
                label="Work Mode"
                style={{ textAlign: "start", width: "100%" }}
                data={["On-Site", "Hybrid", "Remote"]}
                classNames={{ label: classes.label, error: classes.error }}
                {...experienceForm?.getInputProps("workMode")}
                disabled={loading}
                allowDeselect={false}
              />
            </Grid.Col>
            <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
              <TextInput
                size="md"
                withAsterisk
                label="Company Location"
                style={{ textAlign: "start", width: "100%" }}
                classNames={{ label: classes.label, error: classes.error }}
                {...experienceForm?.getInputProps("location")}
                disabled={loading}
                placeholder="Lagos, Nigeria"
              />
            </GridCol>

            <GridCol
              span={12}
              style={{ display: "flex", alignItems: "flex-end" }}
            >
              <Checkbox
                defaultChecked
                color="#3377FF"
                {...experienceForm?.getInputProps("isPresent")}
                label="I currently work here"
              />
            </GridCol>
            <Grid.Col span={{ lg: 6, md: 12, sm: 12 }}>
              <DateInput
                size="md"
                clearable
                withAsterisk
                label="Start Date"
                style={{ textAlign: "start", width: "100%" }}
                classNames={{ label: classes.label, error: classes.error }}
                {...experienceForm?.getInputProps("startDate")}
                disabled={loading}
              />
            </Grid.Col>
            <Grid.Col span={{ lg: 6, md: 12, sm: 12 }}>
              <DateInput
                clearable
                size="md"
                withAsterisk
                label="End Date"
                style={{ textAlign: "start", width: "100%" }}
                classNames={{ label: classes.label, error: classes.error }}
                {...experienceForm?.getInputProps("endDate")}
                disabled={loading || experienceForm.values.isPresent}
              />
            </Grid.Col>
            <Grid.Col span={12}>
              <Textarea
                size="md"
                label="Comment"
                style={{ textAlign: "start", width: "100%" }}
                classNames={{ label: classes.label, error: classes.error }}
                {...experienceForm?.getInputProps("description")}
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
              onClick={closeExp}
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
        title="Edit Work Experience"
        size="xl"
        closeOnClickOutside={false}
        centered
        opened={openedEditExp}
        onClose={closeEditExp}
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      >
        <form
          onSubmit={experienceForm?.onSubmit((values) => handleEditExp(values))}
        >
          <Grid
            style={{
              margin: "20px 0",
              maxHeight: "400px",
              overflowY: "scroll",
            }}
            gutter="lg"
          >
            <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
              <TextInput
                size="md"
                withAsterisk
                label="Company Name"
                style={{ textAlign: "start", width: "100%" }}
                classNames={{ label: classes.label, error: classes.error }}
                {...experienceForm?.getInputProps("companyName")}
                disabled={loading}
              />
            </GridCol>
            <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
              <TextInput
                size="md"
                withAsterisk
                label="Position"
                style={{ textAlign: "start", width: "100%" }}
                classNames={{ label: classes.label, error: classes.error }}
                {...experienceForm?.getInputProps("position")}
                disabled={loading}
              />
            </GridCol>
            <Grid.Col span={{ lg: 6, md: 6, sm: 12 }}>
              <Select
                data={employmentType}
                size="md"
                withAsterisk
                allowDeselect={false}
                label="Employment Type"
                style={{ textAlign: "start", width: "100%" }}
                classNames={{ label: classes.label, error: classes.error }}
                {...experienceForm?.getInputProps("employmentTypeId")}
                disabled={loading}
              />
            </Grid.Col>
            <Grid.Col span={{ lg: 6, md: 6, sm: 12 }}>
              <Select
                size="md"
                withAsterisk
                label="Work Mode"
                style={{ textAlign: "start", width: "100%" }}
                data={["On-Site", "Hybrid", "Remote"]}
                classNames={{ label: classes.label, error: classes.error }}
                {...experienceForm?.getInputProps("workMode")}
                disabled={loading}
                allowDeselect={false}
              />
            </Grid.Col>
            <GridCol span={{ lg: 6, md: 6, sm: 12 }}>
              <TextInput
                size="md"
                withAsterisk
                label="Company Location"
                style={{ textAlign: "start", width: "100%" }}
                classNames={{ label: classes.label, error: classes.error }}
                {...experienceForm?.getInputProps("location")}
                disabled={loading}
                placeholder="Lagos, Nigeria"
              />
            </GridCol>

            <GridCol
              span={12}
              style={{ display: "flex", alignItems: "flex-end" }}
            >
              <Checkbox
                defaultChecked={experienceForm.values.isPresent}
                color="#3377FF"
                {...experienceForm?.getInputProps("isPresent")}
                label="I currently work here"
              />
            </GridCol>
            <Grid.Col span={{ lg: 6, md: 12, sm: 12 }}>
              <DateInput
                size="md"
                clearable
                withAsterisk
                label="Start Date"
                style={{ textAlign: "start", width: "100%" }}
                classNames={{ label: classes.label, error: classes.error }}
                {...experienceForm?.getInputProps("startDate")}
                disabled={loading}
              />
            </Grid.Col>
            <Grid.Col span={{ lg: 6, md: 12, sm: 12 }}>
              <DateInput
                clearable
                size="md"
                withAsterisk
                label="End Date"
                style={{ textAlign: "start", width: "100%" }}
                classNames={{ label: classes.label, error: classes.error }}
                {...experienceForm?.getInputProps("endDate")}
                disabled={loading || experienceForm.values.isPresent}
              />
            </Grid.Col>

            <Grid.Col span={12}>
              <Textarea
                size="md"
                label="Comment"
                style={{ textAlign: "start", width: "100%" }}
                classNames={{ label: classes.label, error: classes.error }}
                {...experienceForm?.getInputProps("description")}
                minRows={2}
                autosize
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
              onClick={closeEditExp}
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

export default WorkExprience;
