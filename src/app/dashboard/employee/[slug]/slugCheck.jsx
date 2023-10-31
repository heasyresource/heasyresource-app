"use client";
import { ContactDetail, PersonalDetail } from "@/components";
import Compensation from "@/components/EmployeeLayout/Compensation";
import EmergencyContact from "@/components/EmployeeLayout/EmergencyContact";
import EmployeeInfo from "@/components/EmployeeLayout/EmployeeInfo";
import Qualification from "@/components/EmployeeLayout/Qualification";
import { usePathname } from "next/navigation";
import React from "react";

const SlugCheck = () => {
  const pathname = usePathname();
  return (
    <>
      {pathname.includes("/personal-detail") && <PersonalDetail />}
      {pathname.includes("/contact-detail") && <ContactDetail />}
      {pathname.includes("/emergency-contact") && <EmergencyContact />}
      {pathname.includes("/employement-info") && <EmployeeInfo />}
      {pathname.includes("/qualifications") && <Qualification />}
      {pathname.includes("/compensation") && <Compensation />}
    </>
  );
};

export default SlugCheck;
