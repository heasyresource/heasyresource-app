import { EmployeeNav } from "@/components";
import {
  ActionIcon,
  Box,
  Button,
  Card,
  CardSection,
  FileInput,
  Group,
  List,
  ListItem,
  Text,
} from "@mantine/core";
import classes from "../../employee.module.css";
import React from "react";
import { IconArrowUp } from "@tabler/icons-react";

const page = () => {
  return (
    <Card
      style={{
        backgroundColor: "#ffff",
        borderRadius: "15px",
        borderBottom: "1px solid #DDDDDD",
        minHeight: "390px",
        margin: "0px",
      }}
    >
      <CardSection
        pt="25px"
        pb="55px"
        style={{ borderBottom: "1px solid #DDDDDD" }}
        className={classes.cardSection}
      >
        <EmployeeNav tabTitle={"data import"} />
      </CardSection>
      <Box
        style={{
          marginTop: "2rem",
          backgroundColor: "#EEF9FF",
          borderRadius: "15px",
          padding: "25px",
        }}
      >
        <Text tt="capitalize" style={{ fontSize: "18px", fontWeight: 600 }}>
          important guidelines for data import:
        </Text>
        <List type="ordered" mt="lg" withPadding>
          <ListItem tt={"capitalize"}>
            Column order must remain unchanged.
          </ListItem>
          <ListItem tt={"capitalize"}>
            First Name and Last Name are mandatory.
          </ListItem>
          <ListItem tt={"capitalize"}>
            Dates must follow the YYYY-MM-DD format.
          </ListItem>
          <ListItem tt={"capitalize"}>
            If specifying gender, choose Male or Female.
          </ListItem>
          <ListItem tt={"capitalize"}>
            Each import file should contain a maximum of 100 records
          </ListItem>
          <ListItem tt={"capitalize"}>
            You may need to use multiple import files.
          </ListItem>
          <ListItem tt={"capitalize"}>
            Refer to the provided sample CSV file for guidance{" "}
            <a
              href="#"
              download
              style={{ textDecoration: "underline", color: "#3377FF" }}
            >
              download
            </a>
          </ListItem>
        </List>
      </Box>
      <Box className={classes.fileInput}>
        <FileInput
          label="Select File"
          withAsterisk
          placeholder="No file selected"
          variant="filled"
          size="xl"
          leftSectionWidth={140}
          leftSection={
            <Button
              disabled
              style={{ textTransform: "capitalize", backgroundColor: "#fff" }}
            >
              browse file
            </Button>
          }
          rightSection={
            <ActionIcon
              disabled
              size={"lg"}
              color="#fff"
              style={{ backgroundColor: "#fff" }}
            >
              <IconArrowUp color="#817F7F" />
            </ActionIcon>
          }
        />
        <Box mt="1rem">
          <Text
            style={{
              fontSize: "14px",
              color: "#565656",
              textTransform: "capitalize",
            }}
          >
            File must not be larger than 2mb
          </Text>
          <Text
            style={{
              fontSize: "14px",
              color: "#565656",
              textTransform: "capitalize",
            }}
          >
            File format must be in .csv or .xls extensions
          </Text>
        </Box>
      </Box>
      <Group
        justify="flex-end"
        className={classes.btnWrap}
        align="center"
        mt={"auto"}
      >
        <Button
          variant="outline"
          size="md"
          color="#3377FF"
          style={{ borderColor: "#3377FF" }}
          tt="capitalize"
          px="50px"
          w={{ lg: "auto", md: "auto", sm: "auto" }}
          className={classes.btn}
        >
          cancel
        </Button>
        <Button
          variant="contained"
          size="md"
          color="#3377FF"
          tt="capitalize"
          px="50px"
          w={{ lg: "auto", md: "auto", sm: "auto" }}
          className={classes.btn}
          type="submit"
          style={{
            backgroundColor: "#3377FF",
          }}
        >
          upload
        </Button>
      </Group>
    </Card>
  );
};

export default page;
