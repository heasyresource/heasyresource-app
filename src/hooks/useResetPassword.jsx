import { Box, Button, Image, Stack, Text, Title } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { modals } from "@mantine/modals";
import React, { useState } from "react";

const useResetPassword = () => {
  const [loading, setLoading] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);
  const [popoverOpened, setPopoverOpened] = useState(false);
  const isMobile = useMediaQuery("(max-width: 500px)");
  const form = useForm({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validate: {
      confirmPassword: (value, values) =>
        value !== values.password ? "Password did not match" : null,
    },
  });
  const openModal = () =>
    modals.open({
      radius: "md",
      centered: true,
      children: (
        <Stack
          gap={"20px"}
          justify={"center"}
          align={"center"}
          pb={15}
          pt="2rem"
          px={isMobile ? 0 : 46}
        >
          <Box w={"50px"} h={"auto"}>
            <Image src={"/assets/svgs/verified.svg"} alt="verified" />
          </Box>
          <Box ta={"center"}>
            <Title order={isMobile ? 4 : 3} c="#000000">
              Password Reset Successful
            </Title>
            <Text c="#1E1E1E" size="13px" mt="5px">
              Your Password has been Successfully Updated!
            </Text>
          </Box>
          <Button
            onClick={() => modals.closeAll()}
            tt="capitalize"
            fullWidth
            size="md"
          >
            done
          </Button>
        </Stack>
      ),
    });

  const handleFormSubmit = async (data) => {
    setLoading(true);
    try {
      console.log(data, "signin");
      openModal();
      setLoading(true);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };
  return {
    loading,
    form,
    handleFormSubmit,
    opened,
    open,
    close,
    popoverOpened,
    setPopoverOpened,
  };
};

export default useResetPassword;
