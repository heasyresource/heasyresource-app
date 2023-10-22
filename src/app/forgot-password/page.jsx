"use client";
import Logo from "@/components/Image";
import {
  Paper,
  Title,
  Text,
  TextInput,
  Button,
  Container,
  Group,
  Anchor,
  Center,
  Box,
  rem,
  Stack,
  Loader,
} from "@mantine/core";
import classes from "./forgotPassword.module.css";
import Link from "next/link";
import useForgotPassword from "@/hooks/useForgotPassword";
import Head from "next/head";

export default function ForgotPassword() {
  const { form, loading, handleSubmit } = useForgotPassword();
  return (
    <>
      <Head>
        <title>Forgot Password | HeasyResource</title>
      </Head>

      <Container
        size={500}
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box>
          <Center>
            <Logo />
          </Center>
          <Title ta="left" c="#000000" order={2} mt={"50px"}>
            Forgot password?
          </Title>
          <Text c="#595959" fz="md" ta="left" mt={29}>
            Submit your email address for the verification process <br /> we
            will send a six-digit code to your inbox
          </Text>

          <form
            onSubmit={form.onSubmit((values) => handleSubmit(values))}
            className="mt-[2rem]"
          >
            <Stack gap="1rem">
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
              >
                {loading ? <Loader type="dots" color="white" /> : "continue"}
              </Button>
            </Stack>
          </form>

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
        </Box>
      </Container>
    </>
  );
}
