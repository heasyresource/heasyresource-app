import Logo from "@/components/Image";
import {
  Title,
  Container,
  Center,
  Box,
} from "@mantine/core";
import ChangePasswordForm from "./changePasswordForm";

export const metadata = {
  title: 'Change Password',
};

export default function ChangePassword() {
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
          Change Password
        </Title>
       
        <ChangePasswordForm />
      </Box>
    </Container>
  );
}
