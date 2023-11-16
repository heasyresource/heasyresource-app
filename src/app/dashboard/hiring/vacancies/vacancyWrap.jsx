"use client";
import React from "react";
import VacancySearchFields from "@/components/HiringLayout/VacancySearchFields";
import VacancyTable from "@/components/HiringLayout/VacancyTable";
import HiringNav from "@/components/HiringNav";
import { Card, CardSection } from "@mantine/core";
import useHiring from "@/hooks/useHiring";

const VacancyWrap = () => {
  const {
    vacancies,
    loading,
    employmentType,
    categories,
    handleVacancySubmit,
    vacancyForm,
    paginate,
    vacancyPagination,
    gettingVacancies,
    handleEditVacancy,
    setVacancyId,
    handleDeleteVacancy,
    rteError,
    editor,
    openEdit,
    closeEdit,
    openedEdit,
    closeAdd,
    openAdd,
    openedAdd,
  } = useHiring();

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
        <VacancySearchFields />
      </Card>
      <VacancyTable
        rteError={rteError}
        handleVacancySubmit={handleVacancySubmit}
        vacancyForm={vacancyForm}
        loading={loading}
        employmentType={employmentType}
        categories={categories}
        vacancies={vacancies}
        paginate={paginate}
        gettingVacancies={gettingVacancies}
        vacancyPagination={vacancyPagination}
        handleEditVacancy={handleEditVacancy}
        setVacancyId={setVacancyId}
        handleDeleteVacancy={handleDeleteVacancy}
        editor={editor}
        openEdit={openEdit}
        closeEdit={closeEdit}
        openedEdit={openedEdit}
        closeAdd={closeAdd}
        openAdd={openAdd}
        openedAdd={openedAdd}
      />
    </>
  );
};
export default VacancyWrap;
