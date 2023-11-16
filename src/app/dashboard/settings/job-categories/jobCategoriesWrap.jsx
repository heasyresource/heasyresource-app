"use client";
import AddJobCategoriesModal from "@/components/SettingsLayout/AddJobCategoriesModal";
import SettingsNav from "@/components/SettingsLayout/SettingsNav";
import SettingsTable from "@/components/SettingsLayout/SettingsTable";
import useSetting from "@/hooks/useSetting";
import { Button, Card, CardSection, Group, Space, Text } from "@mantine/core";
import React from "react";

const JobCategoriesWrap = () => {
  const {
    openAdd,
    openEdit,
    closeAdd,
    closeEdit,
    categoryForm,
    categories,
    openedAdd,
    openedEdit,
    loading,
    gettingCategory,
    handleCategoryAdd,
    setCategoryId,
    handleEditCategory,
    handleDeleteCategory,
    paginate,
    pagination,
  } = useSetting();
  return (
    <>
      <AddJobCategoriesModal
        isOpen={openedAdd}
        onClose={closeAdd}
        form={categoryForm}
        loading={loading}
        handleSubmit={handleCategoryAdd}
      />
      <Card
        style={{
          backgroundColor: "#ffff",
          borderRadius: "15px",
          borderBottom: "1px solid #DDDDDD",
          //   minHeight: "390px",
          margin: "0px",
        }}
      >
        <CardSection py="25px" style={{ borderBottom: "1px solid #DDDDDD" }}>
          <SettingsNav tabTitle={"Settings"} />
        </CardSection>
        <Group mt={"15px"} mx={"md"}>
          <Text fw={700}>Job Category</Text>
          <Button
            onClick={openAdd}
            variant="filled"
            tt={"capitalize"}
            style={{ backgroundColor: "#e7f7ff", color: "#000000" }}
          >
            add +
          </Button>
        </Group>
      </Card>
      <Space h={"1rem"} />

      <SettingsTable
        categories={categories}
        form={categoryForm}
        loading={loading}
        gettingCategory={gettingCategory}
        handleDelete={handleDeleteCategory}
        handleSubmit={handleEditCategory}
        open={openEdit}
        close={closeEdit}
        opened={openedEdit}
        paginate={paginate}
        pagination={pagination}
        setCategoryId={setCategoryId}
      />
    </>
  );
};

export default JobCategoriesWrap;
