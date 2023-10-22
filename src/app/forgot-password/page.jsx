import Logo from "@/components/Image";
import { Title, Container, Center, Box } from "@mantine/core";
import ForgotPasswordForm from "./forgotPasswordForm";
import ForgotPasswordOpt from "./forgotPasswordOpt";
import ForgotPasswordDesc from "./forgotPasswordDesc";

export const metadata = {
  title: "Forgot Password",
};
export default function ForgotPassword() {
  return (
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
        <ForgotPasswordDesc></ForgotPasswordDesc>

        <ForgotPasswordForm></ForgotPasswordForm>

        <ForgotPasswordOpt></ForgotPasswordOpt>
      </Box>
    </Container>
  );
}
