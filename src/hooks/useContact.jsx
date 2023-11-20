"use client";
import { apiClient } from "@/lib/interceptor/apiClient";
import { errorStyles, successStyles } from "@/utils/notificationTheme";
import { getSubdomain, normalizePhoneNumber } from "@/utils/publicFunctions";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { signOut, useSession } from "next-auth/react";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const useContact = () => {
  const param = useParams();
  const router = useRouter();
  const { id } = param;
  const [loading, setLoading] = useState(false);
  const subdomain = getSubdomain();
  const { data: session } = useSession();
  const [isChanged, setIsChanged] = useState(null);
  const [lgas, setLgas] = useState(null);
  const [countries, setCountries] = useState(null);
  const [states, setStates] = useState(null);
  const [isEmpty, setIsEmpty] = useState(true);
  const form = useForm({
    initialValues: {
      street: "",
      lgaId: "",
      stateId: "",
      zipCode: "",
      countryId: "",
      homePhoneNumber: "",
      mobilePhoneNumber: "",
      workPhoneNumber: "",
      workEmail: "",
      personalEmail: "",
    },
    validate: {
      street: (value) => (!value.length ? "Home Address is required" : null),
      lgaId: (value) => (!value.length ? "LGA is required" : null),
      stateId: (value) => (!value.length ? "State is required" : null),
      zipCode: (value) => (!value.length ? "Zip Code is required" : null),
      countryId: (value) => (!value.length ? "Country is required" : null),
      mobilePhoneNumber: (value) =>
        value.length < 10 ? "Enter a valid  mobiile phone number" : null,
    },
  });
  const headerSettings = {
    headers: {
      Authorization: `Bearer ${session?.user.token}`,
      "x-subdomain-name": subdomain,
    },
  };
  const handleSignOut = async () => {
    const result = await signOut({ redirect: false, callbackUrl: "/signin" });
    router.push(result.url);
  };
  const handleSubmit = async (data) => {
    setLoading(true);
    const normalizedHomeNumber = normalizePhoneNumber(data.homePhoneNumber);
    const normalizedWorkNumber = normalizePhoneNumber(data.workPhoneNumber);
    const normalizedMobileNumber = normalizePhoneNumber(data.mobilePhoneNumber);
    try {
      const modifiedValues = {
        ...data,
        homePhoneNumber: !data.homePhoneNumber.length
          ? ""
          : normalizedHomeNumber,
        workPhoneNumber: !data.workPhoneNumber.length
          ? ""
          : normalizedWorkNumber,
        mobilePhoneNumber: normalizedMobileNumber,
      };
      const response = await apiClient.put(
        `/employees/${id || session.user.id}/contact-details`,
        modifiedValues,
        headerSettings
      );
      notifications.show({
        color: "white",
        title: "Success",
        message: "Contact details added successfully. ",
        styles: successStyles,
        autoClose: 7000,
      });
      setLoading(false);
      setIsChanged(response);
    } catch (err) {
      setLoading(false);
      if (err.errors) {
        err.errors.forEach((error) => {
          const { field, message } = error;

          form.setFieldError(field, message);
        });
      }
      if (err.statusCode === 500) {
        notifications.show({
          color: "white",
          title: "Failed",
          message: "Something went wrong, please try again.",
          styles: errorStyles,
          autoClose: 7000,
        });
      }
    }
  };
  const getEmployee = async () => {
    try {
      const response = await apiClient.get(
        `/employees/${session.user.company.id}/employee/${
          id || session.user.id
        }`,
        headerSettings
      );
      const results = response.results;
      form.setFieldValue("workEmail", results.email);
      form.setValues({
        street:
          results.contactDetail.street === null
            ? ""
            : results.contactDetail.street,
        mobilePhoneNumber: results.phoneNumber.replace(/\+234/g, ""),
        homePhoneNumber:
          results.contactDetail.homePhoneNumber === null
            ? ""
            : results.contactDetail.homePhoneNumber.replace(/\+234/g, ""),
        workPhoneNumber:
          results.contactDetail.workPhoneNumber === null
            ? ""
            : results.contactDetail.workPhoneNumber.replace(/\+234/g, ""),
        zipCode: results.contactDetail.zipCode,
        personalEmail:
          results.contactDetail.personalEmail === null
            ? ""
            : results.contactDetail.personalEmail,
        countryId: results.contactDetail.country.id,
        stateId: results.contactDetail.state.id,
        lgaId: results.contactDetail.lga.id,
      });
    } catch (err) {
      if (
        err.message === "Authorization is required to access this resource."
      ) {
        handleSignOut();
      }
    }
  };
  const getMetadata = async () => {
    try {
      const res = await apiClient.get("/metadata");

      const country = res.results.countries.map((option) => ({
        value: option.id,
        label: option.name,
      }));
      const state = res.results.states.map((option) => ({
        value: option.id,
        label: option.name,
      }));
      const lga = res.results.lgas.map((option) => ({
        value: option.id,
        label: option.name,
        stateId: option.stateId,
      }));

      setCountries(country);
      setLgas(lga);
      setStates(state);
    } catch (err) {}
  };
  useEffect(() => {
    if (form.values.stateId?.length !== 0) {
      setIsEmpty(false);
      const filteredItems = lgas?.filter(
        (item) => item.stateId === form.values?.stateId
      );
      setLgas(filteredItems);
    }
    //eslint-disable-next-line
  }, [form.values.stateId]);
  useEffect(() => {
    if (isChanged !== null) {
      getEmployee();
    }
    //eslint-disable-next-line
  }, [isChanged]);

  useEffect(() => {
    getMetadata();
    getEmployee();
    //eslint-disable-next-line
  }, []);

  return {
    form,
    router,
    handleSubmit,
    loading,
    countries,
    lgas,
    states,
    isEmpty,
  };
};

export default useContact;
