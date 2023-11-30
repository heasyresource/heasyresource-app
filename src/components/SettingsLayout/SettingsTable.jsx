"use client";
import { DataTable } from "mantine-datatable";
import { ActionIcon, Flex, Stack, Text, Button, Group } from "@mantine/core";
import { IconEdit, IconTrash, IconTrashX } from "@tabler/icons-react";
import EditJobCategoriesModal from "./EditJobCategoriesModal";
import { modals } from "@mantine/modals";

const SettingsTable = ({
  form,
  loading,
  categories,
  handleSubmit,
  handleDelete,
  gettingCategory,
  pagination,
  paginate,
  opened,
  close,
  open,
  setCategoryId,
}) => {
  const openModal = (data) => {
    setCategoryId(data.id);
    form?.setValues({
      name: data.name,
    });
    open();
  };
  const openDelete = (data) => {
    modals.open({
      radius: "md",
      centered: true,
      withCloseButton: false,
      closeOnClickOutside: false,
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
            style={{ fontSize: "16px", color: "#1E1E1E", textAlign: "center" }}
          >
            {`You will no longer have ${data?.name} category available in your company. This process
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
              aria-label="cancel"
            >
              cancel
            </Button>
            <Button
              variant="contained"
              size="md"
              style={{ backgroundColor: "#FF0000" }}
              tt="capitalize"
              onClick={() => {
                handleDelete(data.id);
                modals.closeAll();
              }}
              aria-label="delete"
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
      {categories?.length !== 0 && (
        <DataTable
          style={{ background: "none", marginTop: "1rem" }}
          minHeight={"250px"}
          loaderType="dots"
          loaderColor="#3377FF"
          fetching={gettingCategory}
          withRowBorders={false}
          records={categories}
          columns={[
            {
              accessor: "index",
              title: "S/N",
              textAlign: "center",
              width: 70,
              render: (record) => categories.indexOf(record) + 1,
            },
            {
              accessor: "name",
              textTransform: "capitalize",
              noWrap: true,
            },
            {
              accessor: "action",
              title: "Actions",
              width: "135px",
              textAlign: "center",
              render: (categories) => (
                <Flex justify="center" align="center">
                  <ActionIcon
                    onClick={() => openModal(categories)}
                    variant="transparent"
                    color="#84ADFF"
                    radius="lg"
                  >
                    <IconEdit
                      style={{ width: "70%", height: "70%" }}
                      stroke={1.5}
                    />
                  </ActionIcon>
                  <ActionIcon
                    variant="transparent"
                    color="#FF7A00"
                    radius="lg"
                    style={{ marginLeft: "10px" }}
                    onClick={() => openDelete(categories)}
                  >
                    <IconTrash
                      style={{ width: "70%", height: "70%" }}
                      stroke={1.5}
                    />
                  </ActionIcon>
                </Flex>
              ),
            },
          ]}
          totalRecords={pagination?.total}
          recordsPerPage={pagination?.perPage}
          page={pagination?.currentPage}
          onPageChange={(page) => paginate(page)}
        />
      )}
      <EditJobCategoriesModal
        opened={opened}
        close={close}
        open={open}
        handleSubmit={handleSubmit}
        form={form}
        loading={loading}
      />
    </>
  );
};
export default SettingsTable;
