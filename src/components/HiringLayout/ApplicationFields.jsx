"use client";
import {
  ActionIcon,
  Box,
  Button,
  FileInput,
  Grid,
  GridCol,
  Group,
  Loader,
  Modal,
  Select,
  Stack,
  Text,
  TextInput,
  Textarea,
} from "@mantine/core";
import React from "react";
import classes from "../HiringLayout/HiringLayout.module.css";
import { DateInput } from "@mantine/dates";
import { IconArrowUp, IconCalendarBolt } from "@tabler/icons-react";
import { useAssignLeave } from "@/hooks";
import { useDisclosure } from "@mantine/hooks";

const ApplicationFields = ({
  form,
  handleReject,
  handleShortlist,
  reasonForm,
  loading,
  status,
  openedShortlist,
  openShortlist,
  closeShortlist,
  openedReject,
  openReject,
  closeReject,
  vacancy,
}) => {
  return (
    <>
      <Box>
        <Text
          tt={"capitalize"}
          style={{
            fontSize: "22px",
            fontWeight: 700,
            margin: "15px 0px",
          }}
        >
          View Applicant
        </Text>

        <Grid gutter={"lg"} justify="flex-start">
          <GridCol span={{ lg: 3, md: 6, sm: 12 }}>
            <Text
              style={{
                fontSize: "small",
                color: "#515151",
                marginBottom: "4px",
              }}
            >
              Candidate Name
            </Text>
            <Text
              style={{ fontSize: "20px" }}
            >{`${form?.values.firstName} ${form?.values.lastName}`}</Text>
          </GridCol>
          <GridCol span={{ lg: 3, md: 6, sm: 12 }}>
            <Text
              style={{
                fontSize: "small",
                color: "#515151",
                marginBottom: "4px",
                textTransform: "capitalize",
              }}
            >
              Vacancy
            </Text>
            <Text style={{ fontSize: "20px" }}>{vacancy?.title}</Text>
          </GridCol>
          <GridCol span={{ lg: 3, md: 6, sm: 12 }}>
            <Text
              style={{
                fontSize: "small",
                color: "#515151",
                marginBottom: "4px",
              }}
            >
              Hiring Manager
            </Text>
            <Text style={{ fontSize: "20px", textTransform: "capitalize" }}>
              {vacancy?.hiringManager}
            </Text>
          </GridCol>
          <GridCol>
            <Group
              justify="space-between"
              className={classes.btnWrap}
              align="center"
              mt={"auto"}
            >
              <Text fz="12px">
                Status:{" "}
                <span
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    color:
                      status === "Shortlisted"
                        ? "#43D72B"
                        : status === "Pending"
                        ? "grey"
                        : "#FF0000",
                  }}
                >
                  {status}
                </span>
              </Text>
              {status === "Pending" && (
                <Group>
                  <Button
                    variant="filled"
                    size="sm"
                    color="#43D72B"
                    component="a"
                    tt="capitalize"
                    px="30px"
                    w={{ lg: "auto", md: "auto", sm: "auto" }}
                    className={classes.btn}
                    onClick={openShortlist}
                  >
                    Shortlist
                  </Button>
                  <Button
                    variant="filled"
                    size="sm"
                    color="#FF0000"
                    tt="capitalize"
                    px="30px"
                    w={{ lg: "auto", md: "auto", sm: "auto" }}
                    className={classes.btn}
                    type="submit"
                    onClick={openReject}
                  >
                    Reject
                  </Button>
                </Group>
              )}
            </Group>
          </GridCol>
        </Grid>
      </Box>
      <Modal
        opened={openedReject}
        onClose={closeReject}
        centered
        withCloseButton={false}
        size={"lg"}
        closeOnClickOutside={false}
        title="Reject Applicant"
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      >
        <form onSubmit={reasonForm?.onSubmit((values) => handleReject(values))}>
          <Stack>
            <Textarea
              label="Reason"
              withAsterisk
              {...reasonForm?.getInputProps("reason")}
              autosize
              minRows={2}
            />
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
                onClick={() => {
                  closeReject();
                  reasonForm?.reset();
                }}
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
      </Modal>
      <Modal
        opened={openedShortlist}
        onClose={closeShortlist}
        centered
        withCloseButton={false}
        size={"lg"}
        closeOnClickOutside={false}
        title="Shortlist Applicant"
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      >
        <form
          onSubmit={reasonForm?.onSubmit((values) => handleShortlist(values))}
        >
          <Stack>
            <Textarea
              label="Reason"
              withAsterisk
              {...reasonForm?.getInputProps("reason")}
              autosize
              minRows={2}
            />
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
                onClick={() => {
                  closeShortlist();
                  reasonForm?.reset();
                }}
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
      </Modal>
    </>
  );
};

export default ApplicationFields;
