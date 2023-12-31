import {
  Button,
  Grid,
  GridCol,
  Group,
  Loader,
  Modal,
  TextInput,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import React from "react";
import classes from "./employeeLayout.module.css";

const EditLicenseModal = ({
  loading,
  closeEditLcs,
  openedEditLcs,
  handleEditLicense,
  licenseForm,
}) => {
  const currentDate = new Date();
  return (
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
        onSubmit={licenseForm?.onSubmit((values) => handleEditLicense(values))}
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
  );
};

export default EditLicenseModal;
