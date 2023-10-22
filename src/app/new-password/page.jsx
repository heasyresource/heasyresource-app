import Logo from "@/components/Image";
import {
  Title,
  Container,
  Center,
  Box,
  Text,
} from "@mantine/core";
import NewPasswordForm from "./newPasswordForm";

export const metadata = {
  title: 'New Password',
};

export default function NewPassword() {
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
        <Title ta="left" order={2} mt={"50px"} c="#000000">
          New Password
        </Title>
        <Text c="dimmed" fz="md" ta="left" mt={"20px"}>
            Set the new password for your account so you can login{" "}
            <br style={{ display: isMobile ? "none" : "block" }} /> and access
            all features
        </Text>
        <NewPasswordForm></NewPasswordForm>
      </Box>
    </Container>
  );
}
