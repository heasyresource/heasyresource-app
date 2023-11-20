"use client";
import { Image, Container, Center, Text, Flex } from "@mantine/core";
import classes from "../../../../components/JobListingsLayout/JobListings.module.css";
import Logo from "../../../../components/JobListingsLayout/jobLogo.svg";
import NextImage from "next/image";
import useJobApply from "@/hooks/useJobApply";
import PageWrap from "./PageWrap";

export default function JobApply() {
  return (
    <Container size={"100%"} bg={"#F8F9FA"} m={0}>
      <div className={classes.inner}>
        <div className={classes.content}>
          <Center maw={"100%"}>
            <Flex direction={"column"} align={"center"}>
              <Image
                component={NextImage}
                my={30}
                w={80}
                src={Logo}
                alt="Company Logo"
              />
              <Text fw={700} fz={30}>
                Available Jobs
              </Text>
              <Text ta={{ base: "center", sm: "left" }} c={"#5A5A5A"} fz={20}>
                Discover opportunities. Apply now!
              </Text>
            </Flex>
          </Center>
          <PageWrap></PageWrap>
        </div>
      </div>
    </Container>
  );
}
