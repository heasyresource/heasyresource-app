"use client";
import { Button, Group, Text } from "@mantine/core";
import { usePathname } from "next/navigation";
import classes from "./HiringLayout/HiringLayout.module.css";
import React from "react";

const HiringNav = ({ tabTitle }) => {
  const pathname = usePathname();
  return (
    <Group justify="space-between" mx="40px">
      <Text fz="24px" fw="700" tt={"capitalize"}>
        {tabTitle}
      </Text>
      <Group>
        <Button
          w="125px"
          component="a"
          href="/dashboard/hiring"
          data-active={
            "/dashboard/hiring" === pathname ||
            "/dashboard/hiring/add-candidate" === pathname ||
            "/dashboard/hiring/application-phase" === pathname ||
            "/dashboard/hiring/shortlist" === pathname ||
            undefined
          }
          className={classes.btnLink}
          variant="filled"
        >
          Applicants
        </Button>
        <Button
          component="a"
          href="/dashboard/hiring/vacancies"
          w="125px"
          variant="filled"
          className={classes.btnLink}
          data-active={
            "/dashboard/hiring/vacancies" === pathname ||
            "/dashboard/hiring/add-vacancy" === pathname ||
            undefined
          }
        >
          Vacancies
        </Button>
      </Group>
    </Group>
  );
};

export default HiringNav;
