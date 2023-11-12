"use client";
import { Box, Divider, Stack, Text } from "@mantine/core";
import React from "react";
import WorkExprience from "./WorkExprience";
import Education from "./Education";
import Licence from "./Licence";

const Qualification = ({
  openExp,
  openedExp,
  closeExp,
  openEdu,
  closeEdu,
  openedEdu,
  experienceForm,
  educationForm,
  handleExpSubmit,
  loading,
  employmentType,
  handleEduSubmit,
  openLcs,
  closeLcs,
  openedLcs,
  openEditLcs,
  closeEditLcs,
  openedEditLcs,
  handleLicenseSubmit,
  licenseForm,
  workExp,
  openEditExp,
  closeEditExp,
  openedEditExp,
  setExpId,
  handleEditExp,
  educations,
  handleEditEdu,
  openEditEdu,
  closeEditEdu,
  openedEditEdu,
  licenses,
  handleEditLicense,
}) => {
  return (
    <Box>
      <Text tt={"capitalize"} style={{ fontSize: "30px", fontWeight: 700 }}>
        qualifications
      </Text>

      <Stack style={{ gap: "3rem", marginTop: "20px" }}>
        <WorkExprience
          loading={loading}
          employmentType={employmentType}
          handleExpSubmit={handleExpSubmit}
          workExp={workExp}
          experienceForm={experienceForm}
          openExp={openExp}
          openedExp={openedExp}
          closeExp={closeExp}
          openEditExp={openEditExp}
          closeEditExp={closeEditExp}
          openedEditExp={openedEditExp}
          setExpId={setExpId}
          handleEditExp={handleEditExp}
        />
        <Divider my="md" />
        <Education
          openEdu={openEdu}
          closeEdu={closeEdu}
          openedEdu={openedEdu}
          handleEduSubmit={handleEduSubmit}
          educationForm={educationForm}
          educations={educations}
          loading={loading}
          handleEditEdu={handleEditEdu}
          openEditEdu={openEditEdu}
          closeEditEdu={closeEditEdu}
          openedEditEdu={openedEditEdu}
          setExpId={setExpId}
        />
        <Divider my="md" />
        <Licence
          openEditLcs={openEditLcs}
          closeEditLcs={closeEditLcs}
          handleLicenseSubmit={handleLicenseSubmit}
          handleEditLicense={handleEditLicense}
          loading={loading}
          openLcs={openLcs}
          closeLcs={closeLcs}
          openedEditLcs={openedEditLcs}
          openedLcs={openedLcs}
          licenseForm={licenseForm}
          licenses={licenses}
          setExpId={setExpId}
        />
      </Stack>
    </Box>
  );
};

export default Qualification;
