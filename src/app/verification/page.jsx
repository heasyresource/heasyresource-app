import Logo from "../../../src/components/Image";
import { Title, Container, Center, Box } from "@mantine/core";
import VerificationDesc from "./verificationDesc";
import VerificationForm from "./verificationForm";
import VerificationOpt from "./verificationOpt";

export const metadata = {
  title: "Verification",
};
export default function Verification() {
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
          Verification
        </Title>
        <VerificationDesc></VerificationDesc>
        <VerificationForm></VerificationForm>
        <VerificationOpt></VerificationOpt>
      </Box>
    </Container>
  );
}
