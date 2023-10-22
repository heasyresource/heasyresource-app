"use client";
import useVerification from "@/hooks/useVerification";
import { Button, Loader, PinInput, Stack } from "@mantine/core";
import React from "react";

const VerificationForm = () => {
  const { form, loading, handleSubmit } = useVerification();
  return (
    <form
      className="mt-[2rem]"
      onSubmit={form.onSubmit((values) => handleSubmit(values))}
    >
      <Stack gap="1rem">
        <PinInput
          type={/^[0-9]+/}
          inputMode="numeric"
          style={{ display: "flex", justifyContent: "space-between" }}
          size="xl"
          placeholder="0"
          length={6}
          {...form.getInputProps("code")}
          disabled={loading}
        />
        <Button
          size="md"
          variant="filled"
          tt="capitalize"
          fw="bold"
          c={"white"}
          type="submit"
          bg="#3377FF"
          disabled={loading}
        >
          {loading ? <Loader type="dots" color="white" /> : "verify"}
        </Button>
      </Stack>
    </form>
  );
};

export default VerificationForm;
