"use client";
import { ContactDetail, PersonalDetail } from "@/components";
import { usePathname } from "next/navigation";
import React from "react";

const SlugCheck = () => {
  const pathname = usePathname();
  return (
    <>
      {pathname.includes("/personal-detail") && <PersonalDetail />}
      {pathname.includes("/contact-detail") && <ContactDetail />}
      {pathname.includes("/emergency-contact") && "emergency-contact"}
      {pathname.includes("/employement-info") && "employement info"}
      {pathname.includes("/qualifications") && "qualifications"}
      {pathname.includes("/compensation") && "compensation"}
    </>
  );
};

export default SlugCheck;
