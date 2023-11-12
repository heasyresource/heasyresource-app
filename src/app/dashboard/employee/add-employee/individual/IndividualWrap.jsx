"use client";
import { AddImage } from "@/components";
import EmployeeIndividual from "@/components/EmployeeLayout/EmployeeIndividual";
import { Box, Grid, GridCol, Stack, Text } from "@mantine/core";
import React from "react";
import classes from "../../employee.module.css";
import { useIndividual } from "@/hooks";

const IndividualWrap = () => {
  const { form, handleSubmit, fields, loading, logo, setLogo, uploading } =
    useIndividual();
  return (
    <Grid mt="2rem" className={classes.employeeIndividual}>
      <GridCol span={{ lg: 3, md: 12, sm: 12 }}>
        <Stack justify="center" align="center" ta={"center"}>
          <AddImage
            setLogo={setLogo}
            logo={logo}
            loading={loading}
            uploading={uploading}
          />
          <Box>
            <Text style={{ fontSize: "13px", fontWeight: 400 }} c="#565656">
              Supported image formats: .jpg, .png
            </Text>
            <Text
              tt="capitalize"
              style={{ fontSize: "13px", fontWeight: 400 }}
              c="#565656"
            >
              Maximum file size: 1MB
            </Text>
            <Text style={{ fontSize: "13px", fontWeight: 400 }} c="#565656">
              Recommended dimension: (200 X 200)px
            </Text>
          </Box>
        </Stack>
      </GridCol>
      <GridCol span={{ lg: 9, md: 12, sm: 12 }}>
        <EmployeeIndividual
          form={form}
          loading={loading}
          fields={fields}
          handleSubmit={handleSubmit}
        />
      </GridCol>
    </Grid>
  );
};

export default IndividualWrap;
