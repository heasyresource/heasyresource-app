"use client";
import { apiClient } from "@/lib/interceptor/apiClient";
import { obfuscateToken } from "@/utils/encryptToken";
import { successStyles } from "@/utils/notificationTheme";
import { getSubdomain, normalizePhoneNumber } from "@/utils/publicFunctions";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

const useContactDetail = () => {
  const subdomain = getSubdomain();
  const { data: session } = useSession();
  const [loading, setLoading] = useState();
  const [countries, setCountries] = useState(null);
  const [states, setStates] = useState(null);
  const [LGA, setLGA] = useState(null);
  const [userId, setUserId] = useState("");
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
      personalEmail: (val) =>
        /^\S+@\S+$/.test(val) ? null : "Enter a valid personal email",
    },
  });
  const headerSettings = {
    headers: {
      Authorization: `Bearer ${session?.user.token}`,
      "x-subdomain-name": subdomain,
    },
  };
  const handleSubmit = async (data) => {
    setLoading(true);
    const normalizedHomeNumber = normalizePhoneNumber(data.homePhoneNumber);
    const normalizedWorkNumber = normalizePhoneNumber(data.workPhoneNumber);
    const normalizedMobileNumber = normalizePhoneNumber(data.mobilePhoneNumber);
    try {
      if (userId.length !== 0) {
        const modifiedValues = {
          ...data,
          homePhoneNumber: normalizedHomeNumber,
          workPhoneNumber: normalizedWorkNumber,
          mobilePhoneNumber: normalizedMobileNumber,
        };
        await apiClient.put(
          `/employees/${userId}/contact-details`,
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
      }
      setLoading(false);
    } catch (err) {
      setLoading(false);
      if (err.errors) {
        err.errors.forEach((error) => {
          const { field, message } = error;

          form.setFieldError(field, message);
        });
      }
    }
  };

  useEffect(() => {
    if (form.values.stateId.length !== 0) {
      setIsEmpty(false);
      const filteredItems = LGA.filter(
        (item) => item.stateId === form.values.stateId
      );
      setLGA(filteredItems);
    }
  }, [form.values.stateId]);

  useEffect(() => {
    const user =
      localStorage.getItem("employee") &&
      obfuscateToken(false, localStorage.getItem("employee") ?? "");
    if (user) {
      const parsedData = JSON.parse(user);
      setUserId(parsedData.id);
    }
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
        setStates(state);
        setLGA(lga);
      } catch (err) {
        console.log(err, "Error getting the metadata");
      }
    };
    getMetadata();
  }, []);
  return {
    handleSubmit,
    form,
    loading,
    countries,
    states,
    LGA,
    isEmpty,
  };
};

export default useContactDetail;
