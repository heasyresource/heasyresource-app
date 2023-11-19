"use client";
import { Button, Group, Text } from "@mantine/core";
import { usePathname } from "next/navigation";
import classes from "./HiringLayout/HiringLayout.module.css";
import React from "react";
import Link from "next/link";

const HiringNav = ({ tabTitle }) => {
  const pathname = usePathname();
  return (
    <Group justify="space-between" mx="40px">
      <Text fz="24px" fw="700" tt={"capitalize"}>
        {tabTitle}
      </Text>
      <Group>
        <Link href="/dashboard/hiring">
          <Button
            w="125px"
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
        </Link>
        <Link href="/dashboard/hiring/vacancies">
          <Button
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
        </Link>
      </Group>
    </Group>
  );
};

export default HiringNav;
