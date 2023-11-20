"use client";
import { DataTable } from "mantine-datatable";
import { useState } from "react";
import {
  ActionIcon,
  Flex,
  Button,
  Text,
  Badge,
  Group,
  Stack,
  Menu,
  MenuTarget,
  MenuDropdown,
  MenuItem,
  Box,
  Image,
} from "@mantine/core";
import { IconEye, IconTrash, IconCheck, IconX } from "@tabler/icons-react";
import AddVacancyModal from "./AddVacancyModal";
import { IconEdit } from "@tabler/icons-react";
import EditVancancyModal from "./EditVancancyModal";
import { modals } from "@mantine/modals";
import { IconTrashX } from "@tabler/icons-react";
import { IconDotsVertical } from "@tabler/icons-react";
import Link from "next/link";

const VacancyTable = ({
  employmentType,
  categories,
  handleVacancySubmit,
  vacancyForm,
  loading,
  paginate,
  vacancies,
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
}) => {
  const openEditF = (data) => {
    setVacancyId(data.id);
    vacancyForm?.setValues({
      title: data.title,
      jobCategoryId: data.jobCategory.id,
      employmentTypeId: data.employmentTypeId,
      workMode: data.workMode,
      location: data.location,
      description: data.description,
      hiringManager: data.hiringManager,
      numberOfPosition: data.numberOfPosition,
      isActive: data.isActive === 1 ? true : false,
      isPublished: data.isPublished === 1 ? true : false,
    });
    editor?.commands.setContent(data.description);
    openEdit();
  };
  const closeEditF = () => {
    setVacancyId("");
    closeEdit();
    vacancyForm?.reset();
    editor?.commands.setContent("");
  };

  const deleteModal = (data) => {
    modals.open({
      radius: "md",
      centered: true,
      closeOnClickOutside: false,
      withCloseButton: false,
      overlayProps: {
        backgroundOpacity: 0.55,
        blur: 3,
      },
      children: (
        <Stack py={"3rem"} justify="center" align="center">
          <ActionIcon variant="transparent" size="xl">
            <IconTrashX
              style={{
                color: "#FF0000",
                fontSize: "20px",
                width: "100%",
                height: "100%",
              }}
              stroke={1.5}
            />
          </ActionIcon>
          <Text fw={600} style={{ fontSize: "25px", color: "#000000" }}>
            Are you sure ?
          </Text>

          <Text
            style={{
              fontSize: "16px",
              color: "#1E1E1E",
              textAlign: "center",
            }}
          >
            {`You will no longer have ${data?.title} vacancy available in your company. This process
            is irreversible.`}
          </Text>
          <Group mt="1rem" justify="flex-end" align="center">
            <Button
              variant="outline"
              size="md"
              color="#A3A3A3"
              style={{ borderColor: "#A3A3A3" }}
              tt="capitalize"
              onClick={() => {
                modals.closeAll();
              }}
            >
              cancel
            </Button>
            <Button
              variant="contained"
              size="md"
              style={{ backgroundColor: "#FF0000" }}
              tt="capitalize"
              onClick={() => {
                handleDeleteVacancy(data?.id);
                modals.closeAll();
              }}
            >
              delete
            </Button>
          </Group>
        </Stack>
      ),
    });
  };

  return (
    <>
      <AddVacancyModal
        isOpen={openedAdd}
        onClose={closeAdd}
        employmentType={employmentType}
        categories={categories}
        handleVacancySubmit={handleVacancySubmit}
        vacancyForm={vacancyForm}
        loading={loading}
        rteError={rteError}
        editor={editor}
      />
      <EditVancancyModal
        isOpen={openedEdit}
        onClose={closeEditF}
        employmentType={employmentType}
        categories={categories}
        loading={loading}
        vacancyForm={vacancyForm}
        handleEditVacancy={handleEditVacancy}
        rteError={rteError}
        editor={editor}
      />
      <Button
        component="a"
        variant="filled"
        onClick={openAdd}
        tt={"capitalize"}
        style={{
          backgroundColor: "#e7f7ff",
          color: "#000000",
          marginTop: "1.5rem",
        }}
      >
        add +
      </Button>
      {vacancies?.length !== 0 ? (
        <DataTable
          style={{ background: "none", marginTop: "1rem" }}
          minHeight={"250px"}
          loaderType="dots"
          loaderColor="#3377FF"
          fetching={gettingVacancies}
          withRowBorders={false}
          records={vacancies}
          columns={[
            {
              accessor: "index",
              title: "S/N",
              textAlign: "center",

              render: (record) => vacancies.indexOf(record) + 1,
            },
            {
              accessor: "title",
              title: "Job Title",
              textAlign: "center",
              noWrap: true,
              render: ({ title }) => (
                <Text style={{ fontSize: "15px", textTransform: "capitalize" }}>
                  {title}
                </Text>
              ),
            },

            {
              accessor: "hiringManager",
              textAlign: "center",
              noWrap: true,
              render: ({ hiringManager }) => (
                <Text style={{ fontSize: "15px", textTransform: "capitalize" }}>
                  {hiringManager}
                </Text>
              ),
            },

            {
              accessor: "isActive",
              title: "Active",
              textAlign: "center",
              noWrap: true,
              render: ({ isActive }) => (
                <>
                  {isActive === 1 ? (
                    <Badge color="#14cf14">Active</Badge>
                  ) : (
                    <Badge color="red">Inactive</Badge>
                  )}
                </>
              ),
            },
            {
              accessor: "isPublished",
              title: "Published",
              textAlign: "center",
              noWrap: true,
              render: ({ isPublished }) => (
                <>
                  {isPublished === 1 ? (
                    <ActionIcon variant="filled" color="#14cf14" radius="lg">
                      <IconCheck
                        style={{ width: "70%", height: "70%" }}
                        stroke={1.5}
                      />
                    </ActionIcon>
                  ) : (
                    <ActionIcon variant="filled" color="red" radius="lg">
                      <IconX
                        style={{ width: "70%", height: "70%" }}
                        stroke={1.5}
                      />
                    </ActionIcon>
                  )}
                </>
              ),
            },
            {
              accessor: "actions",
              title: "Actions",
              width: "135px",
              textAlign: "center",
              render: (vacancies) => (
                <Flex justify="center" align="center">
                  <ActionIcon
                    variant="transparent"
                    color="#84ADFF"
                    radius="lg"
                    onClick={() => openEditF(vacancies)}
                  >
                    <IconEdit
                      style={{ width: "70%", height: "70%" }}
                      stroke={1.5}
                    />
                  </ActionIcon>
                  <ActionIcon
                    onClick={() => {
                      deleteModal(vacancies);
                    }}
                    variant="transparent"
                    color="#FF7A00"
                    radius="lg"
                    style={{ marginLeft: "10px" }}
                  >
                    <IconTrash
                      style={{ width: "70%", height: "70%" }}
                      stroke={1.5}
                    />
                  </ActionIcon>
                  <Menu shadow="md" width={200} withArrow>
                    <MenuTarget>
                      <ActionIcon variant="transparent" color="#838383">
                        <IconDotsVertical
                          style={{ width: "70%", height: "70%" }}
                          stroke={1.5}
                        />
                      </ActionIcon>
                    </MenuTarget>
                    <MenuDropdown>
                      <MenuItem>
                        <Link
                          style={{ textDecoration: "none", color: "inherit" }}
                          href={`/dashboard/hiring/vacancies/${vacancies.id}`}
                        >
                          Add Applicant
                        </Link>
                      </MenuItem>
                    </MenuDropdown>
                  </Menu>
                </Flex>
              ),
            },
          ]}
          totalRecords={vacancyPagination?.total}
          recordsPerPage={vacancyPagination?.perPage}
          page={vacancyPagination?.currentPage}
          onPageChange={(page) => paginate(page)}
        />
      ) : (
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            margin: "6rem 0",
          }}
        >
          <Stack justify="center" align="center">
            <Box style={{ width: "10rem", height: "auto" }}>
              <Image src={"/assets/svgs/empty.svg"} alt="empty" />
            </Box>
            <Text style={{ fontSize: "16px", color: "#616161" }}>
              No vacancy found!
            </Text>
          </Stack>
        </Box>
      )}
    </>
  );
};
export default VacancyTable;
