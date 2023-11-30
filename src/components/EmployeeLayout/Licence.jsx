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
import { addHttps, formatMonthYear } from "@/utils/publicFunctions";
import dynamic from "next/dynamic";

const AddLicenseModal = dynamic(() => import("./AddLicenceModal"), {
  ssr: false,
});
const EditLicenseModal = dynamic(() => import("./EditLicenseModal"), {
  ssr: false,
});
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
      credentialUrl: data.credentialUrl !== null ? data.credentialUrl : "",
      credentialId: data.credentialId !== null ? data.credentialId : "",
      issueDate: new Date(data.issueDate),
      expirationDate:
        data.expirationDate !== null ? new Date(data.expirationDate) : "",
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
              fontSize: "19px",
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
                      >{`Credential ID: ${item.credentialId}`}</Text>
                    )}
                    {item.credentialUrl !== null && (
                      <Button
                        component="a"
                        target="_blank"
                        href={addHttps(item.credentialUrl)}
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
      <AddLicenseModal
        handleLicenseSubmit={handleLicenseSubmit}
        licenseForm={licenseForm}
        loading={loading}
        closeLcs={closeLcs}
        openedLcs={openedLcs}
      />
      <EditLicenseModal
        handleEditLicense={handleEditLicense}
        licenseForm={licenseForm}
        loading={loading}
        closeEditLcs={closeEditLcs}
        openedEditLcs={openedEditLcs}
      />
    </>
  );
};

export default Licence;
