"use client";
import {
  Button,
  Grid,
  GridCol,
  Group,
  Loader,
  Modal,
  Select,
  Switch,
  Text,
  TextInput,
} from "@mantine/core";
import React, { useEffect } from "react";
import classes from "../HiringLayout/HiringLayout.module.css";
import { RichTextEditor } from "@mantine/tiptap";

const AddVacancyModal = ({
  isOpen,
  onClose,
  employmentType,
  categories,
  handleVacancySubmit,
  vacancyForm,
  loading,
  rteError,
  editor,
}) => {
  useEffect(() => {
    if (loading) {
      editor?.setOptions({ editable: false });
    }
    //eslint-disable-next-line
  }, [loading]);

  return (
    <Modal
      opened={isOpen}
      onClose={onClose}
      withCloseButton={false}
      closeOnClickOutside={false}
      size="xl"
      centered
      overlayProps={{
        backgroundOpacity: 0.55,
        blur: 3,
      }}
    >
      <Text
        tt={"capitalize"}
        style={{
          fontSize: "22px",
          fontWeight: 700,
        }}
      >
        Add Vacancy
      </Text>
      <form
        onSubmit={vacancyForm?.onSubmit((values) => {
          handleVacancySubmit(values);
        })}
      >
        <Grid
          gutter="xl"
          style={{ margin: "20px 0", maxHeight: "400px", overflowY: "scroll" }}
        >
          <GridCol span={{ lg: 6, md: 6, sm: 12 }}>
            <TextInput
              size="md"
              withAsterisk
              label="Job Title"
              style={{ width: "100%" }}
              classNames={{
                label: classes.label,
                error: classes.error,
                placeholder: classes.placeholder,
              }}
              {...vacancyForm?.getInputProps("title")}
              disabled={loading}
            />
          </GridCol>
          <GridCol span={{ lg: 6, md: 6, sm: 12 }}>
            <Select
              size="md"
              withAsterisk
              label="Job Category"
              style={{ width: "100%" }}
              data={categories}
              classNames={{
                label: classes.label,
                error: classes.error,
                placeholder: classes.placeholder,
              }}
              allowDeselect={false}
              {...vacancyForm?.getInputProps("jobCategoryId")}
              disabled={loading}
            />
          </GridCol>
          <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
            <Select
              size="md"
              withAsterisk
              label="Employment Type"
              style={{ width: "100%" }}
              data={employmentType}
              classNames={{
                label: classes.label,
                error: classes.error,
                placeholder: classes.placeholder,
              }}
              allowDeselect={false}
              {...vacancyForm?.getInputProps("employmentTypeId")}
              disabled={loading}
            />
          </GridCol>
          <Grid.Col span={{ lg: 4, md: 6, sm: 12 }}>
            <Select
              size="md"
              withAsterisk
              label="Work Mode"
              style={{ textAlign: "start", width: "100%" }}
              data={["On-Site", "Hybrid", "Remote"]}
              classNames={{ label: classes.label, error: classes.error }}
              allowDeselect={false}
              {...vacancyForm?.getInputProps("workMode")}
              disabled={loading}
            />
          </Grid.Col>
          <Grid.Col span={{ lg: 4, md: 6, sm: 12 }}>
            <TextInput
              size="md"
              withAsterisk
              label="Location"
              style={{ textAlign: "start", width: "100%" }}
              classNames={{ label: classes.label, error: classes.error }}
              {...vacancyForm?.getInputProps("location")}
              disabled={loading}
            />
          </Grid.Col>
          <GridCol span={12}>
            <RichTextEditor editor={editor}>
              <RichTextEditor.Toolbar sticky stickyOffset={60}>
                <RichTextEditor.ControlsGroup>
                  <RichTextEditor.Bold />
                  <RichTextEditor.Italic />
                  <RichTextEditor.Underline />
                  <RichTextEditor.Strikethrough />
                  <RichTextEditor.ClearFormatting />
                  <RichTextEditor.Highlight />
                  <RichTextEditor.Code />
                </RichTextEditor.ControlsGroup>

                <RichTextEditor.ControlsGroup>
                  <RichTextEditor.H1 />
                  <RichTextEditor.H2 />
                  <RichTextEditor.H3 />
                  <RichTextEditor.H4 />
                </RichTextEditor.ControlsGroup>

                <RichTextEditor.ControlsGroup>
                  <RichTextEditor.Blockquote />
                  <RichTextEditor.Hr />
                  <RichTextEditor.BulletList />
                  <RichTextEditor.OrderedList />
                  <RichTextEditor.Subscript />
                  <RichTextEditor.Superscript />
                </RichTextEditor.ControlsGroup>

                <RichTextEditor.ControlsGroup>
                  <RichTextEditor.Link />
                  <RichTextEditor.Unlink />
                </RichTextEditor.ControlsGroup>

                <RichTextEditor.ControlsGroup>
                  <RichTextEditor.AlignLeft />
                  <RichTextEditor.AlignCenter />
                  <RichTextEditor.AlignJustify />
                  <RichTextEditor.AlignRight />
                </RichTextEditor.ControlsGroup>
              </RichTextEditor.Toolbar>

              <RichTextEditor.Content />
            </RichTextEditor>
            {rteError && (
              <Text style={{ color: "red", fontSize: "12px" }}>
                Description is required
              </Text>
            )}
          </GridCol>
          <GridCol span={{ lg: 6, md: 6, sm: 12 }}>
            <TextInput
              size="md"
              withAsterisk
              label="Hiring Manager"
              style={{ width: "100%" }}
              classNames={{
                label: classes.label,
                error: classes.error,
                placeholder: classes.placeholder,
              }}
              {...vacancyForm?.getInputProps("hiringManager")}
              disabled={loading}
            />
          </GridCol>
          <GridCol span={{ lg: 6, md: 6, sm: 12 }}>
            <TextInput
              size="md"
              withAsterisk
              type="number"
              label="Number of Positions"
              style={{ width: "100%" }}
              classNames={{
                label: classes.label,
                error: classes.error,
                placeholder: classes.placeholder,
              }}
              {...vacancyForm?.getInputProps("numberOfPosition")}
              disabled={loading}
            />
          </GridCol>
          <GridCol span={12}>
            <Switch
              size="md"
              labelPosition="left"
              {...vacancyForm?.getInputProps("isActive")}
              defaultChecked={vacancyForm?.values.isActive}
              label="Active"
              classNames={{
                label: classes.switchLabel,
                error: classes.error,
                placeholder: classes.placeholder,
              }}
              disabled={loading}
            />

            <Switch
              size="md"
              labelPosition="left"
              defaultChecked={vacancyForm?.values.isPublished}
              {...vacancyForm?.getInputProps("isPublished")}
              label="Publish on the Web"
              classNames={{
                label: classes.switchLabel,
                error: classes.error,
                placeholder: classes.placeholder,
              }}
              disabled={loading}
            />
          </GridCol>
        </Grid>

        <Group
          justify="flex-end"
          className={classes.btnWrap}
          align="center"
          mt={"auto"}
        >
          <Button
            variant="outline"
            size="md"
            color="#3377FF"
            style={{ borderColor: "#3377FF" }}
            tt="capitalize"
            px="50px"
            w={{ lg: "auto", md: "auto", sm: "auto" }}
            className={classes.btn}
            onClick={() => {
              onClose();
              vacancyForm?.reset();
              editor?.commands.setContent("");
            }}
            disabled={loading}
          >
            cancel
          </Button>
          <Button
            variant="contained"
            size="md"
            color="#3377FF"
            tt="capitalize"
            px="50px"
            w={{ lg: "auto", md: "auto", sm: "auto" }}
            className={classes.btn}
            type="submit"
            style={{
              backgroundColor: "#3377FF",
            }}
            disabled={loading}
          >
            {loading ? <Loader color="white" type="dots" size="md" /> : "save"}
          </Button>
        </Group>
      </form>
    </Modal>
  );
};

export default AddVacancyModal;
