"use client";

import {
  Avatar,
  Badge,
  Button,
  Card,
  CardSection,
  Group,
  Text,
} from "@mantine/core";
import classes from "../../../../components/CompensationLayout/Compensation.module.css";
import React, { useState } from "react";
import CompensationNav from "@/components/CompensationLayout/CompensationNav";
import { IconPrinter, IconTrash } from "@tabler/icons-react";
import PaySLipTable from "@/components/CompensationLayout/PaySlipTable";

const EmployeeSlip = () => {
  return (
    <>
      <Card
        style={{
          backgroundColor: "#ffff",
          borderRadius: "15px",
          borderBottom: "1px solid #DDDDDD",
          paddingBottom: "45px",
          margin: "0px",
        }}
      >
        <CardSection py="25px" style={{ borderBottom: "1px solid #DDDDDD" }}>
          <CompensationNav tabTitle={"Compensation"} />
        </CardSection>
        <Text ta={{ base: "center", md: "left" }} p={40} fz={24} fw={700}>
          Employee Slip
        </Text>
        <Group px={40} justify="space-between">
          <Group justify="center">
            <div
              style={{
                border: "3px solid #3377ff",
                borderRadius: "50%",
                padding: "5px",
              }}
            >
              <Avatar
                src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
                radius="10rem"
                size={"120"}
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
              className={classes.align}
            >
              <Text
                ta={{ base: "center", md: "left" }}
                fz={16}
                size="sm"
                fw={500}
                style={{ marginBottom: "8px" }}
              >
                Mohammed Afolabi
              </Text>

              <Text c="dimmed" size="xs" style={{ marginBottom: "4px" }}>
                afolabi@heasyresource.com
              </Text>

              <Badge fw={500} tt={"capitalize"} color={"blue"} variant="light">
                Product Designer
              </Badge>
            </div>
          </Group>
          <div className={classes.payroll} style={{ flex: "0 1 0%" }}>
            <Badge
              fw={500}
              fz={12}
              tt={"capitalize"}
              color={"blue"}
              variant="light"
              radius={"5px"}
              mb={10}
              w={292}
              py={15}
            >
              Payroll Period: From 01/01/2023 to 01/15/2023
            </Badge>
            <Group>
              <Button
                p={0}
                color="black"
                tt={"capitalize"}
                fz={16}
                fw={400}
                variant="transparent"
                radius="lg"
                rightSection={
                  <IconPrinter
                    size={35}
                    style={{ color: "#84ADFF", width: "70%", height: "70%" }}
                    stroke={1.5}
                  />
                }
              >
                print
              </Button>
              <Button
                p={0}
                color="black"
                tt={"capitalize"}
                fz={16}
                fw={400}
                variant="transparent"
                radius="lg"
                rightSection={
                  <IconTrash
                    size={35}
                    style={{ color: "#84ADFF", width: "70%", height: "70%" }}
                    stroke={1.5}
                  />
                }
              >
                Email
              </Button>
            </Group>
          </div>
        </Group>
      </Card>
      <PaySLipTable />
      <Group justify="space-between" className={classes.controlBtn} my={"3rem"}>
        <Button
          style={{ fontSize: "16px", textTransform: "capitalize" }}
          size="md"
          variant="filled"
          className={classes.control}
          color="#84ADFF"
          px={"40px"}
          type="submit"
        >
          print
        </Button>
        <Group>
          <Button
            style={{ fontSize: "16px", textTransform: "capitalize" }}
            size="md"
            variant="outline"
            color="#3377FF"
            className={classes.control}
            px={"40px"}
            type="submit"
          >
            cancel
          </Button>
          <Button
            style={{ fontSize: "16px", textTransform: "capitalize" }}
            size="md"
            variant="filled"
            className={classes.control}
            color="#3377FF"
            px={"40px"}
            type="submit"
          >
            save
          </Button>
        </Group>
      </Group>
    </>
  );
};

export default EmployeeSlip;
