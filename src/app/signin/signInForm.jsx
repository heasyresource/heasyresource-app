"use client"
import React from "react";
import classes from "./signin.module.css";
import {
    Button,
    Flex,
    Loader,
    PasswordInput,
    Stack,
    TextInput,
} from "@mantine/core";
import Link from "next/link";
import { useSignin } from "@/hooks";

const SignInForm = () => {
    const { signInForm, handleSignInSubmit, loadingSignIn } = useSignin();
    return (
        <form onSubmit={signInForm.onSubmit((values) => { handleSignInSubmit(values) })}>
            <Stack gap="1rem">
                <TextInput
                    size="md"
                    label="Email Address"
                    placeholder="john@example.com"
                    type="email"
                    {...signInForm.getInputProps('email')}
                    disabled={loadingSignIn}
                    classNames={{ label: classes.label, error: classes.error }}
                />

                <PasswordInput label="Password" size="md" disabled={loadingSignIn} placeholder="Password" {...signInForm.getInputProps('password')}
                    classNames={{ label: classes.label, error: classes.error }}
                />
                <Button
                    size="md"
                    variant="filled"
                    tt="capitalize"
                    fs="1rem"
                    fw="bold"
                    c={"white"}
                    type="submit"
                    bg="#3377ff"
                    mt={"1.5rem"}
                >
                    {loadingSignIn ? <Loader color="white" type="dots" size="md" /> : "sign in"}
                </Button>
                <Flex justify="center" align="center">
                    <Link
                        href="/forgot-password"
                        style={{
                            color: "#3377FF",
                            fontSize: "16px",
                            textTransform: "capitalize",
                            textDecoration: "none",
                            fontWeight: "bold",
                            marginTop: "1rem"
                        }}
                    >
                        forgot password?
                    </Link>
                </Flex>
            </Stack>
        </form>
    );
};

export default SignInForm;
