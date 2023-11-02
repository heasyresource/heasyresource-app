import Logo from "@/components/Image";
import { Title, Container, Center, Box, Text } from "@mantine/core";
import ForgotPasswordForm from "./forgotPasswordForm";
import Link from "next/link";
import classes from "./forgotPassword.module.css";

export const metadata = {
  title: "Forgot Password",
};
export default function ForgotPassword() {
  return (
    <Box className={classes.form_wrapper}>
      <Container
        size={500}
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "relative",
          zIndex: 10,
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

          <ForgotPasswordForm></ForgotPasswordForm>

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
    </Box>
  );
}
