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
import { IconEdit } from "@tabler/icons-react";
import { formatMonthYear } from "@/utils/publicFunctions";
import { IconLink } from "@tabler/icons-react";

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
  const handleEdit = (data) => {
    setExpId(data.id);
    licenseForm?.setValues({
      name: data.name,
      issuingOrganization: data.issuingOrganization,
      credentialUrl: data.credentialUrl,
      credentialId: data.credentialId,
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
            {licenses?.map((item) => (
              <Box key={item.name}>
                <Flex justify={"flex-start"} align={"flex-start"} gap={"10px"}>
                  <Box style={{ width: "45px", height: "45px" }}>
                    <Image src={"/assets/images/company.png"} />
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
                clearable
                withAsterisk
                label="Issue Date"
                style={{ textAlign: "start", width: "100%" }}
                classNames={{ label: classes.label, error: classes.error }}
                {...licenseForm?.getInputProps("issueDate")}
                disabled={loading}
              />
            </GridCol>
            <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
              <DateInput
                size="md"
                clearable
                label="Expiration Date"
                style={{ textAlign: "start", width: "100%" }}
                classNames={{ label: classes.label, error: classes.error }}
                {...licenseForm?.getInputProps("expirationDate")}
                disabled={loading}
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
              onClick={closeLcs}
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
                clearable
                withAsterisk
                label="Issue Date"
                style={{ textAlign: "start", width: "100%" }}
                classNames={{ label: classes.label, error: classes.error }}
                {...licenseForm?.getInputProps("issueDate")}
                disabled={loading}
              />
            </GridCol>
            <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
              <DateInput
                size="md"
                clearable
                label="Expiration Date"
                style={{ textAlign: "start", width: "100%" }}
                classNames={{ label: classes.label, error: classes.error }}
                {...licenseForm?.getInputProps("expirationDate")}
                disabled={loading}
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
              onClick={closeEditLcs}
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
