"use client";

import { hiringList } from "@/utils/publicFunctions";
import { DataTable } from "mantine-datatable";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import classes from "../HiringLayout/HiringLayout.module.css";
import {
  ActionIcon,
  Flex,
  Button,
  Modal,
  Text,
  Group,
  Badge,
  Stack,
  Grid,
  GridCol,
  TextInput,
  Select,
  Loader,
  FileInput,
  Box,
  Image,
} from "@mantine/core";
import {
  IconTrash,
  IconDownload,
  IconTrashX,
  IconFile,
  IconEye,
} from "@tabler/icons-react";
import { modals } from "@mantine/modals";
import { IconArrowUp } from "@tabler/icons-react";
import Link from "next/link";

const HiringTable = ({
  applicants,
  applicantsPagination,
  paginate,
  gettingApplicants,
  handleDelete,
  handleEdit,
  openEdit,
  closeEdit,
  openedEdit,
  form,
  loading,
  states,
  countries,
}) => {
  const [download, setDownload] = useState("");
  const [noTransitionOpened, setNoTransitionOpened] = useState(false);
  const [noTransitionOpened1, setNoTransitionOpened1] = useState(false);
  const deleteModal = (data) => {
    modals.open({
      radius: "md",
      centered: true,
      closeOnClickOutside: false,
      withCloseButton: false,
      overlayProps: {
        backgroundOpacity: 0.55,
        blur: 3,
      },
      children: (
        <Stack py={"3rem"} justify="center" align="center">
          <ActionIcon variant="transparent" size="xl">
            <IconTrashX
              style={{
                color: "#FF0000",
                fontSize: "20px",
                width: "100%",
                height: "100%",
              }}
              stroke={1.5}
            />
          </ActionIcon>
          <Text fw={600} style={{ fontSize: "25px", color: "#000000" }}>
            Are you sure ?
          </Text>

          <Text
            style={{
              fontSize: "16px",
              color: "#1E1E1E",
              textAlign: "center",
            }}
          >
            You will no longer have this applicant available in your company.
            This process is irreversible.
          </Text>
          <Group mt="1rem" justify="flex-end" align="center">
            <Button
              variant="outline"
              size="md"
              color="#A3A3A3"
              style={{ borderColor: "#A3A3A3" }}
              tt="capitalize"
              onClick={() => {
                modals.closeAll();
              }}
            >
              cancel
            </Button>
            <Button
              variant="contained"
              size="md"
              style={{ backgroundColor: "#FF0000" }}
              tt="capitalize"
              onClick={() => {
                handleDelete(data?.id);
                modals.closeAll();
              }}
            >
              delete
            </Button>
          </Group>
        </Stack>
      ),
    });
  };

  return (
    <>
      <Modal
        opened={noTransitionOpened}
        withCloseButton={false}
        onClose={() => setNoTransitionOpened(false)}
        centered
        classNames={{
          content: classes.content,
        }}
      >
        <Flex
          pt={20}
          gap={"sm"}
          direction={"column"}
          align={"center"}
          w={"100%"}
        >
          <IconTrashX
            color="#FF0000"
            style={{ width: "75.28", height: "75.28" }}
          />
          <Text fw={700} fz={24}>
            Are you sure?
          </Text>
          <Text ta="center" c={"rgba(30, 30, 30, 0.60)"} fz={14}>
            You will no longer be able to access your account or any services
            tied to it. This process is irreversible.
          </Text>
        </Flex>
        <Group
          justify="center"
          className={classes.btnWrap}
          align="center"
          my={40}
        >
          <Button
            variant="outline"
            size="md"
            color="#A3A3A3"
            style={{ borderColor: "#A3A3A3" }}
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
            color="#FF0000"
            tt="capitalize"
            px="50px"
            w={{ lg: "auto", md: "auto", sm: "auto" }}
            className={classes.btn}
            type="submit"
            style={{
              backgroundColor: "#FF0000 ",
            }}
          >
            Delete
          </Button>
        </Group>
      </Modal>

      <Modal
        onClose={closeEdit}
        opened={openedEdit}
        withCloseButton={false}
        title="Edit Applicant"
        closeOnClickOutside={false}
        size="xl"
        centered
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      >
        <form onSubmit={form?.onSubmit((values) => handleEdit(values))}>
          <Grid gutter="xl" justify="flex-start">
            <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
              <TextInput
                size="md"
                withAsterisk
                label="First Name"
                placeholder="John"
                style={{ width: "100%" }}
                classNames={{
                  label: classes.label,
                  error: classes.error,
                }}
                {...form?.getInputProps("firstName")}
                disabled={loading}
              />
            </GridCol>

            <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
              <TextInput
                size="md"
                withAsterisk
                label="Last Name"
                style={{ width: "100%" }}
                placeholder="Alli"
                classNames={{
                  label: classes.label,
                  error: classes.error,
                }}
                {...form?.getInputProps("lastName")}
                disabled={loading}
              />
            </GridCol>
            <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
              <TextInput
                disabled={loading}
                size="md"
                withAsterisk
                label="Email"
                style={{ width: "100%" }}
                {...form?.getInputProps("email")}
                classNames={{
                  label: classes.label,
                  error: classes.error,
                }}
              />
            </GridCol>
            <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
              <TextInput
                disabled={loading}
                size="md"
                withAsterisk
                type="tel"
                label="Phone Number"
                style={{ width: "100%" }}
                placeholder="700 000 0000"
                {...form?.getInputProps("phoneNumber")}
                classNames={{
                  label: classes.label,
                  error: classes.error,
                }}
                leftSectionWidth={50}
                leftSection={"+234"}
                maxLength={11}
              />
            </GridCol>
            <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
              <TextInput
                size="md"
                withAsterisk
                label="Address"
                style={{ width: "100%" }}
                {...form?.getInputProps("address")}
                classNames={{
                  label: classes.label,
                  error: classes.error,
                }}
                disabled={loading}
              />
            </GridCol>
            <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
              <TextInput
                size="md"
                withAsterisk
                label="City"
                style={{ width: "100%" }}
                {...form?.getInputProps("city")}
                classNames={{
                  label: classes.label,
                  error: classes.error,
                }}
                disabled={loading}
              />
            </GridCol>
            <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
              <Select
                size="md"
                withAsterisk
                label="State"
                style={{ width: "100%" }}
                data={states}
                classNames={{
                  label: classes.label,
                  error: classes.error,
                }}
                allowDeselect={false}
                {...form?.getInputProps("stateId")}
                disabled={loading}
                searchable
                nothingFoundMessage="No state found"
              />
            </GridCol>
            <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
              <Select
                size="md"
                withAsterisk
                label="Country"
                style={{ width: "100%" }}
                data={countries}
                classNames={{
                  label: classes.label,
                  error: classes.error,
                }}
                allowDeselect={false}
                {...form?.getInputProps("countryId")}
                disabled={loading}
                searchable
                nothingFoundMessage="No country found"
              />
            </GridCol>

            <GridCol span={{ lg: 6, md: 6, sm: 12 }}>
              <FileInput
                required
                label="Select File"
                disabled={loading}
                withAsterisk
                placeholder="No file selected"
                variant="filled"
                size="md"
                leftSectionWidth={140}
                accept=".pdf, .doc, .docx"
                {...form?.getInputProps("resumeUrl")}
                leftSection={
                  <Button
                    disabled
                    style={{
                      textTransform: "capitalize",
                      backgroundColor: "#fff",
                    }}
                  >
                    browse file
                  </Button>
                }
                rightSection={
                  <ActionIcon
                    disabled
                    size={"md"}
                    color="#fff"
                    style={{ backgroundColor: "#fff" }}
                  >
                    <IconArrowUp color="#817F7F" />
                  </ActionIcon>
                }
                classNames={{
                  label: classes.label,
                  error: classes.error,
                }}
              />
            </GridCol>
          </Grid>
          <Group
            justify="flex-end"
            className={classes.btnWrap}
            align="center"
            mt={"2rem"}
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
              onClick={() => {
                closeEdit();
                form?.reset();
              }}
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

      {applicants?.length !== 0 ? (
        <DataTable
          style={{ background: "none", marginTop: "1rem" }}
          minHeight={"250px"}
          loaderType="dots"
          loaderColor="#3377FF"
          fetching={gettingApplicants}
          withRowBorders={false}
          records={applicants}
          columns={[
            {
              accessor: "index",
              title: "S/N",
              textAlign: "center",

              render: (record) => applicants.indexOf(record) + 1,
            },
            {
              accessor: "vacancy",
              textAlign: "center",
              title: "Job Title",

              noWrap: true,
              render: ({ vacancy }) => (
                <Text style={{ fontSize: "15px", textTransform: "capitalize" }}>
                  {vacancy.title}
                </Text>
              ),
            },
            {
              accessor: "",
              title: "Applicant",
              textAlign: "center",
              textTransform: "capitalize",
              noWrap: true,
              render: ({ firstName, lastName }) => (
                <Text
                  style={{ fontSize: "15px" }}
                >{`${firstName} ${lastName}`}</Text>
              ),
            },
            {
              accessor: "email",
              textAlign: "center",

              noWrap: true,
            },

            {
              accessor: "status",
              textAlign: "center",

              noWrap: true,
              render: ({ status }) => (
                <>
                  {status === "Shortlisted" && (
                    <Badge color="#14cf14">{status}</Badge>
                  )}
                  {status === "Pending" && <Badge color="grey">{status}</Badge>}
                  {status === "Rejected" && <Badge color="red">{status}</Badge>}
                </>
              ),
            },
            {
              accessor: "actions",
              title: "Actions",
              width: "135px",
              textAlign: "center",
              render: (applicants) => (
                <Flex justify="center" align="center">
                  <Link href={`/dashboard/hiring/${applicants.id}`}>
                    <ActionIcon variant="transparent" radius="lg">
                      <IconEye
                        style={{ width: "70%", height: "70%" }}
                        stroke={1.5}
                      />
                    </ActionIcon>
                  </Link>
                  <ActionIcon
                    variant="transparent"
                    color="#FF7A00"
                    onClick={() => deleteModal(applicants)}
                    radius="lg"
                  >
                    <IconTrash
                      style={{ width: "70%", height: "70%" }}
                      stroke={1.5}
                    />
                  </ActionIcon>
                  <ActionIcon
                    component="a"
                    target="_blank"
                    href={applicants.resumeUrl}
                    variant="transparent"
                    color="#43D72B"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                    radius="lg"
                  >
                    <IconDownload
                      style={{ width: "70%", height: "70%" }}
                      stroke={1.5}
                    />
                  </ActionIcon>
                </Flex>
              ),
            },
          ]}
          totalRecords={applicantsPagination?.total}
          recordsPerPage={applicantsPagination?.perPage}
          page={applicantsPagination?.currentPage}
          onPageChange={(page) => paginate(page)}
        />
      ) : (
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            margin: "6rem 0",
          }}
        >
          <Stack justify="center" align="center">
            <Box style={{ width: "10rem", height: "auto" }}>
              <Image src={"/assets/svgs/empty.svg"} alt="empty" />
            </Box>
            <Text style={{ fontSize: "16px", color: "#616161" }}>
              No leaves yet!
            </Text>
          </Stack>
        </Box>
      )}
    </>
  );
};
export default HiringTable;
