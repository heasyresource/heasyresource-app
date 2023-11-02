"use client";
import React from "react";
import classes from "./signin.module.css";
import {
  Button,
  Flex,
  Group,
  Loader,
  PasswordInput,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import Link from "next/link";
import { useSignin } from "@/hooks";

const SignInForm = () => {
  const { signInForm, handleSignInSubmit, loadingSignIn } = useSignin();
  return (
    <form
      onSubmit={signInForm.onSubmit((values) => {
        handleSignInSubmit(values);
      })}
    >
      <Stack gap="1rem">
        <TextInput
          size="md"
          label="Email Address"
          placeholder="john@example.com"
          type="email"
          {...signInForm.getInputProps("email")}
          disabled={loadingSignIn}
          classNames={{ label: classes.label, error: classes.error }}
        />

        <PasswordInput
          label="Password"
          size="md"
          disabled={loadingSignIn}
          placeholder="Password"
          {...signInForm.getInputProps("password")}
          classNames={{ label: classes.label, error: classes.error }}
        />
        <Group justify="flex-end">
          <Text fw={700} c={"#3377FF"} tt="capitalize" size="sm">
            <Link
              href="/forgot-password"
              style={{
                color: "#3377FF",
                textDecoration: "none",
              }}
            >
              forgot password?
            </Link>
          </Text>
        </Group>

        <Button
          size="md"
          variant="filled"
          tt="capitalize"
          fs="1rem"
          fw="bold"
          c={"white"}
          type="submit"
          bg="#3377ff"
          disabled={loadingSignIn}
        >
          {loadingSignIn ? (
            <Loader color="white" type="dots" size="md" />
          ) : (
            "sign in"
          )}
        </Button>
        <Flex justify="center" align="center" mt={".5rem"}>
          <Text fw={700} c={"#494949"} size="sm">
            Don&apos;t have an account?{" "}
            <Link
              href="/signup"
              style={{
                color: "#3377FF",
                textDecoration: "none",
                textTransform: "capitalize",
              }}
            >
              Sign Up
            </Link>
          </Text>
        </Flex>
      </Stack>
    </form>
  );
};

export default SignInForm;
