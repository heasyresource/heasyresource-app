import { Text } from "@mantine/core";
import Link from "next/link";
import React from "react";

const ForgotPasswordOpt = () => {
  return (
    <Text fw={700} c={"#494949"} size="sm" ta="left" mt="xl">
      Remember your password?{" "}
      <Link
        href="/signin"
        style={{
          color: "#3377FF",
          textTransform: "capitalize",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        sign in
      </Link>
    </Text>
  );
};

export default ForgotPasswordOpt;
