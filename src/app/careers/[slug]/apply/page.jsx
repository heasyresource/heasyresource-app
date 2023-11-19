"use client";
import {
  Image,
  Container,
  Center,
  Text,
  Flex,
  Card,
  Group,
  Badge,
  CardSection,
  GridCol,
  Grid,
  Space,
  Button,
  TextInput,

  Box,
  FileInput,
  ActionIcon,
} from "@mantine/core";
import classes from "../../../../components/JobListingsLayout/JobListings.module.css";
import Logo from "../../../../components/JobListingsLayout/jobLogo.svg";
import NextImage from "next/image";
import { IconArrowUp, IconBriefcase2, IconMapPin } from "@tabler/icons-react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { apiClient } from "@/lib/interceptor/apiClient";
import { getSubdomain } from "@/utils/publicFunctions";
import useJobApply from "@/hooks/useJobApply";
import PageWrap from "./PageWrap";

export default function JobApply() {
  const { form, handleSubmit } = useJobApply();
  // const subdomain = getSubdomain();
  // const [jobData, setJobData] = useState([]);
  // const { slug } = useParams();

  // useEffect(() => {
  //   const fetchJobDetail = async () => {
  //     try {
  //       const response = await apiClient.get(`vacancies/slug/${slug}`, {
  //         headers: {
  //           "x-subdomain-name": subdomain,
  //         },
  //       });
  //       const jobDetail = response.result;
  //       setJobData(jobDetail);
  //     } catch (error) {
  //       console.error({ error });
  //     }
  //   };
  //   fetchJobDetail();
  // }, []);

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
