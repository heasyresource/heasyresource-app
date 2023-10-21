"use client";
import { useMediaQuery } from "@mantine/hooks";
import Logo from "../../../src/components/Image";
import {
  Title,
  Text,
  Button,
  Container,
  Center,
  Box,
  PinInput,
  Stack,
  Loader,
} from "@mantine/core";
import useVerification from "@/hooks/useVerification";
import Head from "next/head";

export default function Verification() {
  const isMobile = useMediaQuery("(max-width: 500px)");
  const { loading, form, handleSubmit } = useVerification();
  return (
    <>
    <Head>
      <title>Verify Account | HeasyResource</title>
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
        <Title ta="left" order={2} mt={"50px"} c="#000000">
          Verification
        </Title>
        <Text c="#595959" fz="md" ta="left" mt={29}>
          An OTP code has been sent to your email address{" "}
          <br style={{ display: isMobile ? "none" : "block" }} />{" "}
          <span style={{ fontWeight: "bold" }}>your@email.com</span> for
          verification.
        </Text>

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
            >
              {loading ? <Loader type="dots" color="white" /> : "verify"}
            </Button>
          </Stack>
        </form>
        <Text fw={700} size="sm" ta="left" mt="xl" c="#494949">
          Haven’t received it yet?{" "}
          <span style={{ color: "#3377FF", cursor: "pointer" }}>Resend</span>
        </Text>
      </Box>
    </Container>
    </>
  );
}
