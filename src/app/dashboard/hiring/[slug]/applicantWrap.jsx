"use client";
import ApplicationFields from "@/components/HiringLayout/ApplicationFields";
import CandidateProfile from "@/components/HiringLayout/CandidateProfile";
import useAddApplicant from "@/hooks/useAddApplicant";
import React from "react";

const ApplicantWrap = () => {
  const {
    form,
    handleEdit,
    loading,
    states,
    countries,
    handleReject,
    handleShortlist,
    reasonForm,
    status,
    openedShortlist,
    openShortlist,
    closeShortlist,
    openedReject,
    openReject,
    closeReject,
    vacancy,
  } = useAddApplicant();
  return (
    <>
      <ApplicationFields
        form={form}
        handleReject={handleReject}
        handleShortlist={handleShortlist}
        reasonForm={reasonForm}
        loading={loading}
        status={status}
        openedShortlist={openedShortlist}
        openShortlist={openShortlist}
        closeShortlist={closeShortlist}
        openedReject={openedReject}
        openReject={openReject}
        closeReject={closeReject}
        vacancy={vacancy}
      />
      <CandidateProfile
        states={states}
        countries={countries}
        form={form}
        handleEdit={handleEdit}
        loading={loading}
      />
    </>
  );
};

export default ApplicantWrap;
