"use client";
import React from "react";
import VacancySearchFields from "@/components/HiringLayout/VacancySearchFields";
import VacancyTable from "@/components/HiringLayout/VacancyTable";
import HiringNav from "@/components/HiringNav";
import {
  Box,
  Button,
  Card,
  CardSection,
  Grid,
  GridCol,
  Group,
  Select,
  TextInput,
} from "@mantine/core";
import useHiring from "@/hooks/useHiring";
import classes from "../../dashboard.module.css";

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
    filterForm,
    getVacancy,
  } = useHiring();
  const handleReset = () => {
    filterForm.setValues({
      search: "",
      jobCategoryId: null,
      workMode: null,
      employmentTypeId: null,
    });
    getVacancy();
  };

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
        <Box style={{ marginTop: "1rem" }}>
          <Grid justify="space-between" className={classes.formWrap}>
            <GridCol span={{ lg: 3, md: 6, sm: 12 }}>
              <TextInput
                size="md"
                label="Hiring Manager"
                {...filterForm.getInputProps("search")}
                style={{ width: "100%" }}
                classNames={{
                  label: classes.label,
                  error: classes.error,
                  placeholder: classes.placeholder,
                }}
              />
            </GridCol>
            <GridCol span={{ lg: 3, md: 6, sm: 12 }}>
              <Select
                size="md"
                label="Employment Type"
                data={employmentType}
                style={{ width: "100%" }}
                classNames={{
                  label: classes.label,
                  error: classes.error,
                  placeholder: classes.placeholder,
                }}
                allowDeselect={false}
                {...filterForm.getInputProps("employmentTypeId")}
              />
            </GridCol>
            <GridCol span={{ lg: 3, md: 6, sm: 12 }}>
              <Select
                size="md"
                label="Work Mode"
                data={["On-Site", "Hybrid", "Remote"]}
                style={{ width: "100%" }}
                classNames={{
                  label: classes.label,
                  error: classes.error,
                  placeholder: classes.placeholder,
                }}
                allowDeselect={false}
                {...filterForm.getInputProps("workMode")}
              />
            </GridCol>
            <GridCol span={{ lg: 3, md: 6, sm: 12 }}>
              <Select
                size="md"
                label="Job Category"
                data={categories}
                style={{ width: "100%" }}
                classNames={{
                  label: classes.label,
                  error: classes.error,
                  placeholder: classes.placeholder,
                }}
                allowDeselect={false}
                {...filterForm.getInputProps("employmentTypeId")}
              />
            </GridCol>
          </Grid>
          <Group justify="flex-end" mt={"3rem"}>
            <Button
              style={{ fontSize: "16px", textTransform: "capitalize" }}
              size="md"
              variant="outline"
              color="#3377FF"
              px={"40px"}
              onClick={() => handleReset()}
            >
              reset
            </Button>
            <Button
              style={{ fontSize: "16px", textTransform: "capitalize" }}
              size="md"
              variant="filled"
              color="#3377FF"
              px={"40px"}
              onClick={() => getVacancy()}
            >
              search
            </Button>
          </Group>
        </Box>
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
