"use client";
import useVerification from "@/hooks/useVerification";
import { Button, Loader, PinInput, Stack, Text } from "@mantine/core";
import React from "react";

const VerificationForm = () => {
  const { form, loading, handleSubmit, handleResend } = useVerification();
  return (
    <>
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
            {...form.getInputProps("verificationCode")}
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
            mt="1rem"
            disabled={loading}
          >
            {loading ? <Loader type="dots" color="white" /> : "verify"}
          </Button>
        </Stack>
      </form>
      <Text fw={700} size="sm" ta="left" mt="xl" c="#494949">
        Haven’t received it yet?{" "}
        <button style={{ color: "#3377FF", cursor: "pointer" }} onClick={handleResend} disabled={loading}>Resend</button>
      </Text>
    </>
  );
};

export default VerificationForm;
