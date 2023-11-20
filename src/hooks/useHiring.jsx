"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { getSubdomain } from "@/utils/publicFunctions";
import { apiClient } from "@/lib/interceptor/apiClient";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { errorStyles, successStyles } from "@/utils/notificationTheme";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEditor } from "@tiptap/react";
import Highlight from "@tiptap/extension-highlight";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import Superscript from "@tiptap/extension-superscript";
import SubScript from "@tiptap/extension-subscript";
import Placeholder from "@tiptap/extension-placeholder";
import { Link } from "@mantine/tiptap";
import { useDisclosure } from "@mantine/hooks";

const useHiring = () => {
  const [openedAdd, { open: openAdd, close: closeAdd }] = useDisclosure(false);
  const [openedEdit, { open: openEdit, close: closeEdit }] =
    useDisclosure(false);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const { data: session } = useSession();
  const subdomain = getSubdomain();
  const [categories, setCategories] = useState(null);
  const [employmentType, setEmploymentType] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(null);
  const [vacancies, setVacancies] = useState(null);
  const [vacancyPagination, setVacancyPagination] = useState(null);
  const [gettingVacancies, setGettingVacancies] = useState(true);
  const [vacancyId, setVacancyId] = useState("");
  const [rteError, setRteError] = useState(null);
  const [editorContent, setEditorContent] = useState("");

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link,
      Superscript,
      SubScript,
      Highlight,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Placeholder.configure({ placeholder: "Job description" }),
    ],
    content: "",
    onUpdate({ editor }) {
      setEditorContent(editor.getHTML());
    },
  });
  const vacancyForm = useForm({
    initialValues: {
      title: "",
      jobCategoryId: "",
      employmentTypeId: "",
      workMode: "",
      location: "",
      description: "",
      hiringManager: "",
      numberOfPosition: "",
      isActive: true,
      isPublished: true,
    },
    validate: {
      title: (val) => (!val.length ? "Job Title is requied" : null),
      jobCategoryId: (val) => (!val.length ? "Job Category is requied" : null),
      employmentTypeId: (val) =>
        !val.length ? "Employment Type is required" : null,
      workMode: (val) => (!val.length ? "Work Mode is required" : null),
      location: (val) => (!val.length ? "Location is required" : null),
      hiringManager: (val) =>
        !val.length ? "Hiring Manager is required" : null,
      numberOfPosition: (val) =>
        !val.length ? "Number of Position is required" : null,
    },
  });
  const filterForm = useForm({
    initialValues: {
      search: "",
      workMode: "",
      employmentTypeId: "",
      jobCategoryId: "",
    },
  });
  const headerSettings = {
    headers: {
      Authorization: `Bearer ${session?.user.token}`,
      "x-subdomain-name": subdomain,
    },
  };
  const paginate = (page) => {
    const params = new URLSearchParams(searchParams);
    if (page) {
      params.set("page", page);
    } else {
      params.delete("page");
    }
    replace(`${pathname}?${params.toString()}`);
  };
  const handleVacancySubmit = async (data) => {
    const isNotEmpty = !!editor?.state.doc.textContent.trim().length;
    try {
      if (isNotEmpty) {
        setLoading(true);
        setRteError(false);
        const response = await apiClient.post(
          `/vacancies`,
          { ...data, description: editorContent },
          headerSettings
        );
        notifications.show({
          color: "white",
          title: "Success",
          message: "Vacancy added successfully!",
          styles: successStyles,
          autoClose: 7000,
        });
        closeAdd();
        setLoading(false);
        setIsSubmitted(response);
        vacancyForm.reset();
      } else {
        setRteError(true);
      }
    } catch (err) {
      setLoading(false);
      if (err.statusCode >= 400) {
        notifications.show({
          color: "red",
          message: "Something went wrong. Please try again!",
          styles: errorStyles,
          autoClose: 7000,
        });
      }
    }
  };
  const handleEditVacancy = async (data) => {
    const isNotEmpty = !!editor?.state.doc.textContent.trim().length;
    try {
      if (isNotEmpty) {
        setLoading(true);
        setRteError(false);
        if (vacancyId.length !== 0) {
          const response = await apiClient.put(
            `/vacancies/${vacancyId}`,
            { ...data, description: editorContent },
            headerSettings
          );
          notifications.show({
            color: "white",
            title: "Success",

            message: "Vacancy updated successfully!",
            styles: successStyles,
            autoClose: 7000,
          });
          setLoading(false);
          setIsSubmitted(response);
          closeEdit();
        }
      } else {
        setRteError(true);
      }
    } catch (error) {
      if (err.errors) {
        err.errors.forEach((error) => {
          const { field, message } = error;
          form.setFieldError(field, message);
        });
      }
    }
  };
  const handleDeleteVacancy = async (id) => {
    try {
      const response = await apiClient.delete(
        `/vacancies/${id}`,
        headerSettings
      );
      notifications.show({
        color: "white",
        title: "Success",

        message: "Vacancy deleted successfully!",
        styles: successStyles,
        autoClose: 7000,
      });

      setIsSubmitted(response);
    } catch (err) {
      if (err.statusCode >= 400) {
        notifications.show({
          color: "red",
          message: "Something went wrong. Please try again!",
          styles: errorStyles,
          autoClose: 7000,
        });
      }
    }
  };
  const getCategory = async () => {
    try {
      const response = await apiClient.get(
        "/job-categories?paginate=false",
        headerSettings
      );
      const category = response.results.map((item) => ({
        value: item.id,
        label: item.name,
      }));
      setCategories(category);
    } catch (err) {}
  };
  const getVacancy = async (params = "") => {
    if (searchParams.get("page")) {
      params = searchParams.get("page");
    }
    const qParams = {
      page: params || "1",
    };
    if (!!filterForm.values.search?.length) {
      qParams.search = filterForm.values.search;
    }
    if (!!filterForm.values.workMode?.length) {
      qParams.workMode = filterForm.values.workMode;
    }
    if (!!filterForm.values?.employmentTypeId) {
      qParams.employmentTypeId = filterForm.values.employmentTypeId;
    }
    if (!!filterForm.values?.jobCategoryId) {
      qParams.jobCategoryId = filterForm.values.jobCategoryId;
    }
    try {
      const response = await apiClient.get(`/vacancies`, {
        params: qParams,
        ...headerSettings,
      });
      setVacancies(response.results.data);
      setVacancyPagination(response.results.meta);
      setGettingVacancies(false);
    } catch (err) {
      setGettingVacancies(false);
      if (err.statusCode >= 400) {
        notifications.show({
          color: "red",
          message: "Something went wrong. Please try again!",
          styles: errorStyles,
          autoClose: 7000,
        });
      }
    }
  };
  const getMetadata = async () => {
    try {
      const response = await apiClient.get("/metadata");
      const type = response.results.employmentType.map((option) => ({
        value: option.id,
        label: option.name,
      }));

      setEmploymentType(type);
    } catch (err) {}
  };
  useEffect(() => {
    if (isSubmitted !== null) {
      getVacancy();
    }
    //eslint-disable-next-line
  }, [isSubmitted]);

  useEffect(() => {
    getCategory();
    getMetadata();
    getVacancy();
    //eslint-disable-next-line
  }, []);
  return {
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
    getVacancy,
    filterForm,
  };
};

export default useHiring;
