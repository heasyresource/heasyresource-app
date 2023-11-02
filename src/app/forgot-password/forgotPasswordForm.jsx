"use client";
import useForgotPassword from "@/hooks/useForgotPassword";
import { Button, Loader, Stack, TextInput } from "@mantine/core";
import classes from "./forgotPassword.module.css";
import React from "react";

const ForgotPasswordForm = () => {
  const { form, loading, handleSubmit } = useForgotPassword();
  return (
    <form
      onSubmit={form.onSubmit((values) => handleSubmit(values))}
      className="mt-[2rem]"
    >
      <Stack gap="1rem" mt="2rem">
        <TextInput
          fz="md"
          label="Email address"
          type="email"
          classNames={{ label: classes.label, error: classes.error }}
          size="md"
          placeholder="johndoe@email.com"
          {...form.getInputProps("email")}
          disabled={loading}
          withAsterisk
        />
        <Button
          size="md"
          variant="filled"
          tt="capitalize"
          fs="1rem"
          fw="bold"
          c={"white"}
          type="submit"
          bg="#3377FF"
          mt="1rem"
          disabled={loading}
        >
          {loading ? <Loader type="dots" color="white" /> : "continue"}
        </Button>
      </Stack>
    </form>
  );
};

export default ForgotPasswordForm;
