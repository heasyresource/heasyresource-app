import useResetPassword from "@/hooks/useResetPassword";
import { Box, Button, Flex, Image, Modal, Text, Title } from "@mantine/core";
import React from "react";

const ResetStatus = () => {
  const { opened, close } = useResetPassword();
  return (
    <Modal
      centered
      opened={opened}
      onClose={close}
      withCloseButton={false}
      radius={25}
    >
      <Flex
        direction={"column"}
        justify={"center"}
        align={"center"}
        py={15}
        px={46}
      >
        <Box w={"100px"} h={"auto"}>
          <Image
            src={"/assets/svgs/verified.svg"}
            alt="verified"
          />
        </Box>
        <Title order={3} c="#000000">
          Password Reset Successful
        </Title>
        <Text c="#1E1E1E" size="13px" mt="5px">
          Your Password has been Successfully Updated!
        </Text>
        <Button mt={25} onClick={close} tt="capitalize" fullWidth size="md">
          continue
        </Button>
      </Flex>
    </Modal>
  );
};

export default ResetStatus;
