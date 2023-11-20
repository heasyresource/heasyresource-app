import React from "react";
import SignInForm from "./signInForm";
import classes from "./signin.module.css";
import { Box, Container, Flex, Image, Stack, Text, Title } from "@mantine/core";
import Link from "next/link";
import { headers } from "next/headers";
import { getSubdomain } from "@/utils/publicFunctions";

export const metadata = {
  title: "Sign In",
};

const SignIn = async () => {
  const headersList = headers();
  const domain = headersList.get("host");
  const subdomain = getSubdomain(domain);
  const defaultSubdomain = ["www", "heasyresource"];
  let companyLogo = null;
  const hasSubdomain = !defaultSubdomain.includes(subdomain);
  if (subdomain && hasSubdomain) {
    const getSubdomain = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/companies/subdomain/${subdomain}`
    );
    const getSubdomainData = await getSubdomain.json();
    companyLogo = getSubdomainData.results.logoUrl;
  }
  return (
    <Box className={classes.wrapper}>
      {subdomain && hasSubdomain ? (
        ""
      ) : (
        <Box className={classes.wrapper_img}>
          <Box className={classes.wrapper_imgOverlay} />
          <Box className={classes.logo_wrapper}>
            <Image src="/assets/images/HRlogo.png" alt="hr-logo" />
          </Box>
        </Box>
      )}
      <Box className={classes.form_wrapper}>
        <Container className={classes.form_container}>
          {companyLogo ? (
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image src={companyLogo} alt="company-logo" h={100} w={100} />
            </Box>
          ) : (
            ""
          )}
          <Stack>
            <Title order={2} tt="capitalize" c="#3377FF" fw="bold">
              sign in
            </Title>
            <Text c={"#8692A6"} fs="18px">
              Sign in to continue
            </Text>
          </Stack>
          <SignInForm></SignInForm>
          {subdomain && hasSubdomain ? (
            <Text ta={"center"} size="sm" fw={"500"} c={"#8692A6"}>
              POWERED BY{" "}
              <a
                href="https://heasyresource.com/"
                style={{
                  color: "#3377FF",
                  textDecoration: "none",
                }}
              >
                HEASYRESOURCE
              </a>
            </Text>
          ) : (
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
          )}
        </Container>
      </Box>
    </Box>
  );
};

export default SignIn;
