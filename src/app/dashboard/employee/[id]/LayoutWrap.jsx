"use client";
import { EmployeeLayout } from "@/components";
import useSingleEmployee from "@/hooks/useSingleEmployee";
import React from "react";

const LayoutWrap = ({ children }) => {
  const { firstName, lastName, logoUrl, id, position } = useSingleEmployee();
  return (
    <EmployeeLayout
      logoUrl={logoUrl}
      firstName={firstName}
      lastName={lastName}
      position={position}
      id={id}
    >
      {children}
    </EmployeeLayout>
  );
};

export default LayoutWrap;
