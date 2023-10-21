import { Box, Button, Image, Stack, Text, Title } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useMediaQuery } from "@mantine/hooks";
import { modals } from "@mantine/modals";
import React, { useState } from "react";

const useVerification = () => {
  const [loading, setLoading] = useState(false);
  const isMobile = useMediaQuery("(max-width: 500px)");
  const form = useForm({
    initialValues: {
      code: "",
    },
    validate: {
      code: (val) => (val.length < 6 ? "Enter code" : null),
    },
  });
  const handleRouteChange = () => {
    modals.closeAll();
    window.location.replace("/signin");
  };
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
              Verification Successful
            </Title>
            <Text c="#1E1E1E" size="13px" mt="5px">
              Your aacount has been verified successfully
            </Text>
          </Box>
          <Button
            fullWidth
            onClick={() => handleRouteChange()}
            tt="capitalize"
            bg="#3377FF"
            size="md"
          >
            continue
          </Button>
        </Stack>
      ),
    });
  
  const handleSubmit = async (data) => {
    setLoading(true);
    try {
      console.log(data);
      openModal();
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };
  return {
    form,
    loading,
    handleSubmit,
  };
};

export default useVerification;
