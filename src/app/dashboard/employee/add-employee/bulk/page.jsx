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
      <CardSection py="25px" style={{ borderBottom: "1px solid #DDDDDD" }}>
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
        <Text style={{ fontSize: "18px", fontWeight: 600 }}>
          Important guidelines for data import:
        </Text>
        <List type="ordered" mt="lg" withPadding>
          <ListItem style={{ fontSize: "15px" }}>
            Column order must remain unchanged.
          </ListItem>
          <ListItem style={{ fontSize: "15px" }}>
            First Name and Last Name are mandatory.
          </ListItem>
          <ListItem style={{ fontSize: "15px" }}>
            Dates must follow the YYYY-MM-DD format.
          </ListItem>
          <ListItem style={{ fontSize: "15px" }}>
            If specifying gender, choose Male or Female.
          </ListItem>
          <ListItem style={{ fontSize: "15px" }}>
            Each import file should contain a maximum of 100 records
          </ListItem>
          <ListItem style={{ fontSize: "15px" }}>
            You may need to use multiple import files.
          </ListItem>
          <ListItem style={{ fontSize: "15px" }}>
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
            File format must be in .doc or .pdf extensions
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
          px="30px"
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
          px="30px"
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
