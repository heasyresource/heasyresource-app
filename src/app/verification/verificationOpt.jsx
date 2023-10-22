import { Text } from "@mantine/core";
import React from "react";

const VerificationOpt = () => {
  return (
    <Text fw={700} size="sm" ta="left" mt="xl" c="#494949">
      Haven’t received it yet?{" "}
      <span style={{ color: "#3377FF", cursor: "pointer" }}>Resend</span>
    </Text>
  );
};

export default VerificationOpt;
