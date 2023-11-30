"use client";
import HiringTable from "@/components/HiringLayout/HiringTable";
import HiringNav from "@/components/HiringNav";
import useAddApplicant from "@/hooks/useAddApplicant";
import classes from "../../dashboard.module.css";
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
    filterForm,

    getApplicants,
  } = useAddApplicant();
  const handleReset = () => {
    filterForm.setValues({
      search: "",
      status: null,
    });
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
          <Grid justify="flex-start">
            <GridCol span={{ lg: 6, md: 6, sm: 12 }}>
              <TextInput
                size="md"
                label="Applicant Name"
                placeholder=""
                style={{ width: "100%" }}
                {...filterForm.getInputProps("search")}
                classNames={{
                  label: classes.label,
                  error: classes.error,
                  placeholder: classes.placeholder,
                }}
              />
            </GridCol>
            <GridCol span={{ lg: 6, md: 6, sm: 12 }}>
              <Select
                size="md"
                label="Status"
                style={{ width: "100%" }}
                data={["Pending", "Rejected", "Shortlisted"]}
                classNames={{
                  label: classes.label,
                  error: classes.error,
                  placeholder: classes.placeholder,
                }}
                allowDeselect={false}
                {...filterForm.getInputProps("status")}
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
              onClick={() => {
                getApplicants();
              }}
            >
              search
            </Button>
          </Group>
        </Box>
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
