"use client";
import { EmployeeLayout } from "@/components";
import Loading from "@/components/Loading";
import useSingleEmployee from "@/hooks/useSingleEmployee";
import React from "react";

const LayoutWrap = ({ children }) => {
  const { firstName, lastName, logoUrl, id, position, gettingInfo } =
    useSingleEmployee();
  return (
    <>
      {gettingInfo ? (
        <Loading />
      ) : (
        <EmployeeLayout
          logoUrl={logoUrl}
          firstName={firstName}
          lastName={lastName}
          position={position}
          id={id}
        >
          {children}
        </EmployeeLayout>
      )}
    </>
  );
};

export default LayoutWrap;
