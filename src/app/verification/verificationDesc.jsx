"use client";
import useVerification from "@/hooks/useVerification";
import { Text } from "@mantine/core";
import React from "react";

const VerificationDesc = () => {
  const { isMobile, email } = useVerification();


  return (
    <Text c="#595959" fz="md" ta="left" mt={29}>
      An OTP code has been sent to your email address{" "}
      <br style={{ display: isMobile ? "none" : "block" }} />{" "}
      <span style={{ fontWeight: "bold" }}>{email}</span> for verification.
    </Text>
  );
};

export default VerificationDesc;
