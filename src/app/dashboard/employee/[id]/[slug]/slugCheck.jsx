"use client";
import { ContactDetail, EmployeeLayout, PersonalDetail } from "@/components";
import Compensation from "@/components/EmployeeLayout/Compensation";
import EmergencyContact from "@/components/EmployeeLayout/EmergencyContact";
import EmployeeInfo from "@/components/EmployeeLayout/EmployeeInfo";
import Qualification from "@/components/EmployeeLayout/Qualification";
import useSingleEmployee from "@/hooks/useSingleEmployee";
import { usePathname } from "next/navigation";
import React from "react";

const SlugCheck = () => {
  const pathname = usePathname();
  const {
    loading,
    handlePersonalSubmit,
    personalForm,
    contactForm,
    handleContactSubmit,
    countries,
    states,
    LGA,
    position,
    lastName,
    firstName,
    id,
    isEmpty,
    emergencyForm,
    handleEmergencySubmit,
    employmentInfoForm,
    handleInfoSubmit,
    employmentType,
    departments,
    logoUrl,
  } = useSingleEmployee();
  return (
    <EmployeeLayout
      position={position}
      firstName={firstName}
      lastName={lastName}
      id={id}
      logoUrl={logoUrl}
    >
      {pathname.includes("/personal-detail") && (
        <PersonalDetail
          handlePersonalSubmit={handlePersonalSubmit}
          loading={loading}
          personalForm={personalForm}
        />
      )}
      {pathname.includes("/contact-detail") && (
        <ContactDetail
          contactForm={contactForm}
          loading={loading}
          isEmpty={isEmpty}
          LGA={LGA}
          countries={countries}
          states={states}
          handleContactSubmit={handleContactSubmit}
        />
      )}
      {pathname.includes("/emergency-contact") && (
        <EmergencyContact
          handleEmergencySubmit={handleEmergencySubmit}
          loading={loading}
          emergencyForm={emergencyForm}
        />
      )}
      {pathname.includes("/employment-info") && (
        <EmployeeInfo
          departments={departments}
          employmentInfoForm={employmentInfoForm}
          handleInfoSubmit={handleInfoSubmit}
          loading={loading}
          employmentType={employmentType}
        />
      )}
      {pathname.includes("/qualifications") && <Qualification />}
      {pathname.includes("/compensation") && <Compensation />}
    </EmployeeLayout>
  );
};

export default SlugCheck;
