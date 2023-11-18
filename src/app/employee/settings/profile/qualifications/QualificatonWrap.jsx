"use client";
import Education from "@/components/EmployeeLayout/Education";
import Licence from "@/components/EmployeeLayout/Licence";
import WorkExprience from "@/components/EmployeeLayout/WorkExprience";
import { useQualification } from "@/hooks";
import { Box, Divider, Stack, Text } from "@mantine/core";
import React from "react";

const QualificationWrap = () => {
  const {
    handleEduSubmit,
    handleExpSubmit,
    handleLicenseSubmit,
    openEditEdu,
    openEditExp,
    openEditLcs,
    openEdu,
    openExp,
    openLcs,
    openedEditEdu,
    openedEditExp,
    openedEditLcs,
    openedEdu,
    openedExp,
    openedLcs,
    closeEditEdu,
    closeEditExp,
    closeEditLcs,
    closeEdu,
    closeExp,
    closeLcs,
    licenseForm,
    licenses,
    workExp,
    experienceForm,
    educationForm,
    setExpId,
    handleEditEdu,
    handleEditExp,
    loading,
    handleEditLicense,
    employmentTypes,
    educations,
  } = useQualification();
  return (
    <Box>
      <Text tt={"capitalize"} style={{ fontSize: "30px", fontWeight: 700 }}>
        qualifications
      </Text>

      <Stack style={{ gap: "3rem", marginTop: "20px" }}>
        <WorkExprience
          loading={loading}
          employmentType={employmentTypes}
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

export default QualificationWrap;
