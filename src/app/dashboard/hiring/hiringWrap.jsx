"use client";
import HiringTable from "@/components/HiringLayout/HiringTable";
import SearchFields from "@/components/HiringLayout/SearchFields";
import HiringNav from "@/components/HiringNav";
import useAddApplicant from "@/hooks/useAddApplicant";
import { Card, CardSection } from "@mantine/core";
import React from "react";

const HiringWrap = () => {
  const {
    applicants,
    applicantsPagination,
    paginate,
    gettingApplicants,
    handleDelete,
    handleEdit,
    openEdit,
    closeEdit,
    openedEdit,
    form,
    setApplicantId,
    loading,
    states,
    countries,
  } = useAddApplicant();
  return (
    <>
      <Card
        style={{
          backgroundColor: "#ffff",
          borderRadius: "15px",
          borderBottom: "1px solid #DDDDDD",
          minHeight: "280px",
          margin: "0px",
        }}
      >
        <CardSection py="25px" style={{ borderBottom: "1px solid #DDDDDD" }}>
          <HiringNav tabTitle="Hiring" />
        </CardSection>
        <SearchFields />
      </Card>
      <HiringTable
        form={form}
        applicants={applicants}
        applicantsPagination={applicantsPagination}
        paginate={paginate}
        gettingApplicants={gettingApplicants}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        openEdit={openEdit}
        closeEdit={closeEdit}
        openedEdit={openedEdit}
        setApplicantId={setApplicantId}
        loading={loading}
        states={states}
        countries={countries}
      />
    </>
  );
};

export default HiringWrap;
