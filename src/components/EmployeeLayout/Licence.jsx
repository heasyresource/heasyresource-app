"use client";
import {
  Box,
  Button,
  Flex,
  Modal,
  Text,
  Grid,
  TextInput,
  GridCol,
  Group,
  Stack,
  Loader,
  ActionIcon,
  Image,
} from "@mantine/core";
import React from "react";
import classes from "./employeeLayout.module.css";
import { DateInput } from "@mantine/dates";
import { IconEdit, IconLink } from "@tabler/icons-react";
import { formatMonthYear } from "@/utils/publicFunctions";

const Licence = ({
  openLcs,
  closeLcs,
  openedLcs,
  openEditLcs,
  closeEditLcs,
  openedEditLcs,
  handleLicenseSubmit,
  licenseForm,
  loading,
  licenses,
  setExpId,
  handleEditLicense,
}) => {
  const currentDate = new Date();
  const handleEdit = (data) => {
    setExpId(data.id);
    licenseForm?.setValues({
      name: data.name,
      issuingOrganization: data.issuingOrganization,
      credentialUrl: data.credentialUrl !== null ? data.credentialUrl : "",
      credentialId: data.credentialId !== null ? data.credentialId : "",
      issueDate: new Date(data.issueDate),
      expirationDate: new Date(data.expirationDate),
    });
    openEditLcs();
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
            Licenses or Certifications:
          </Text>
          <Button
            onClick={openLcs}
            variant="filled"
            tt={"capitalize"}
            style={{ backgroundColor: "#e7f7ff", color: "#000000" }}
          >
            add +
          </Button>
        </Flex>
        {!licenses?.length && (
          <Text size="14px" mt="10px" c="565656">
            No license or certification added yet!
          </Text>
        )}
        {licenses?.length !== 0 && (
          <Stack mt={"md"}>
            {licenses?.map((item, index) => (
              <Box key={item.name + index}>
                <Flex justify={"flex-start"} align={"flex-start"} gap={"10px"}>
                  <Box
                    style={{
                      width: "100%",
                      maxWidth: "45px",
                      maxHeight: "45px",
                      height: "100%",
                    }}
                  >
                    <Image
                      src={"/assets/images/certificate.png"}
                      alt="licence"
                    />
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
                        {item.name}
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
                      {item.issuingOrganization}
                    </Text>
                    <Text
                      style={{
                        fontSize: "14px",
                        textTransform: "capitalize",
                      }}
                    >{`issued ${formatMonthYear(item.issueDate, null)}`}</Text>
                    {item.credentialId !== null && (
                      <Text
                        style={{
                          fontSize: "14px",
                        }}
                      >{`CredentialID: ${item.credentialId}`}</Text>
                    )}
                    {item.credentialUrl !== null && (
                      <Button
                        component="a"
                        target="_blank"
                        href={item.credentialUrl}
                        size="sm"
                        mt={"5px"}
                        variant="outline"
                        rightSection={<IconLink />}
                        color="#3377FF"
                        style={{ borderColor: "#3377FF" }}
                        radius="xl"
                      >
                        Show credential
                      </Button>
                    )}
                  </Box>
                </Flex>
              </Box>
            ))}
          </Stack>
        )}
      </Box>
      <Modal
        title="Add License or Certification"
        size="xl"
        closeOnClickOutside={false}
        withCloseButton={false}
        centered
        opened={openedLcs}
        onClose={closeLcs}
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      >
        <form
          onSubmit={licenseForm?.onSubmit((values) =>
            handleLicenseSubmit(values)
          )}
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
                label="Name"
                style={{ textAlign: "start", width: "100%" }}
                classNames={{ label: classes.label, error: classes.error }}
                {...licenseForm?.getInputProps("name")}
                disabled={loading}
              />
            </GridCol>
            <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
              <TextInput
                size="md"
                withAsterisk
                label="Issuing organization"
                style={{ textAlign: "start", width: "100%" }}
                classNames={{ label: classes.label, error: classes.error }}
                {...licenseForm?.getInputProps("issuingOrganization")}
                placeholder="Microsoft"
                disabled={loading}
              />
            </GridCol>

            <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
              <DateInput
                size="md"
                withAsterisk
                label="Issue Date"
                style={{ textAlign: "start", width: "100%" }}
                classNames={{ label: classes.label, error: classes.error }}
                {...licenseForm?.getInputProps("issueDate")}
                disabled={loading}
                maxDate={currentDate || ""}
              />
            </GridCol>
            <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
              <DateInput
                size="md"
                label="Expiration Date"
                style={{ textAlign: "start", width: "100%" }}
                classNames={{ label: classes.label, error: classes.error }}
                {...licenseForm?.getInputProps("expirationDate")}
                disabled={loading}
                minDate={licenseForm?.values.issueDate || ""}
              />
            </GridCol>
            <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
              <TextInput
                label="Credential ID"
                size="md"
                style={{ textAlign: "start", width: "100%" }}
                classNames={{ label: classes.label, error: classes.error }}
                {...licenseForm?.getInputProps("credentialId")}
                disabled={loading}
              />
            </GridCol>
            <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
              <TextInput
                size="md"
                label="Credential URL"
                style={{ textAlign: "start", width: "100%" }}
                classNames={{ label: classes.label, error: classes.error }}
                {...licenseForm?.getInputProps("credentialUrl")}
                disabled={loading}
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
              onClick={() => {
                closeLcs();
                licenseForm?.reset();
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
                "save"
              )}
            </Button>
          </Group>
        </form>
      </Modal>
      <Modal
        title="Edit License or Certification"
        size="xl"
        closeOnClickOutside={false}
        withCloseButton={false}
        centered
        opened={openedEditLcs}
        onClose={closeEditLcs}
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      >
        <form
          onSubmit={licenseForm?.onSubmit((values) =>
            handleEditLicense(values)
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
                label="Name"
                style={{ textAlign: "start", width: "100%" }}
                classNames={{ label: classes.label, error: classes.error }}
                {...licenseForm?.getInputProps("name")}
                disabled={loading}
              />
            </GridCol>
            <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
              <TextInput
                size="md"
                withAsterisk
                label="Issuing organization"
                style={{ textAlign: "start", width: "100%" }}
                classNames={{ label: classes.label, error: classes.error }}
                {...licenseForm?.getInputProps("issuingOrganization")}
                placeholder="Microsoft"
                disabled={loading}
              />
            </GridCol>

            <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
              <DateInput
                size="md"
                withAsterisk
                label="Issue Date"
                style={{ textAlign: "start", width: "100%" }}
                classNames={{ label: classes.label, error: classes.error }}
                {...licenseForm?.getInputProps("issueDate")}
                disabled={loading}
                maxDate={currentDate || ""}
              />
            </GridCol>
            <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
              <DateInput
                size="md"
                label="Expiration Date"
                style={{ textAlign: "start", width: "100%" }}
                classNames={{ label: classes.label, error: classes.error }}
                {...licenseForm?.getInputProps("expirationDate")}
                disabled={loading}
                minDate={licenseForm?.values.issueDate || ""}
              />
            </GridCol>
            <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
              <TextInput
                size="md"
                label="Credential ID"
                style={{ textAlign: "start", width: "100%" }}
                classNames={{ label: classes.label, error: classes.error }}
                {...licenseForm?.getInputProps("credentialId")}
                disabled={loading}
              />
            </GridCol>
            <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
              <TextInput
                size="md"
                label="Credential URL"
                style={{ textAlign: "start", width: "100%" }}
                classNames={{ label: classes.label, error: classes.error }}
                {...licenseForm?.getInputProps("credentialUrl")}
                disabled={loading}
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
              onClick={() => {
                closeEditLcs();
                licenseForm?.reset();
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
    </>
  );
};

export default Licence;
