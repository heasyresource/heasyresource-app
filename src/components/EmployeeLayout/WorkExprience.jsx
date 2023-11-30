"use client";
import {
  ActionIcon,
  Box,
  Button,
  Flex,
  Image,
  Stack,
  Text,
} from "@mantine/core";

import { IconEdit } from "@tabler/icons-react";
import React, { useEffect } from "react";
import {
  calculateDateDifference,
  formatMonthYear,
} from "@/utils/publicFunctions";
import dynamic from "next/dynamic";

const AddWorkModal = dynamic(() => import("./AddWorkModal"), { ssr: false });
const EditWorkModal = dynamic(() => import("./EditWorkModal"), { ssr: false });
const WorkExprience = ({
  openExp,
  workExp,
  loading,
  experienceForm,
  handleExpSubmit,
  employmentType,
  closeExp,
  openedExp,
  openEditExp,
  closeEditExp,
  openedEditExp,
  setExpId,
  handleEditExp,
}) => {
  const handleEdit = (data) => {
    setExpId(data.id);
    experienceForm?.setValues({
      companyName: data.companyName,
      position: data.position,
      location: data.location,
      isPresent: data.isPresent === 1,
      startDate: new Date(data.startDate),
      endDate: data.endDate !== null ? new Date(data.endDate) : "",
      description: data.description !== null ? data.description : "",
      workMode: data.workMode,
      employmentTypeId: data.employmentType.id,
    });
    openEditExp();
  };

  return (
    <>
      <Box>
        <Flex justify={"flex-start"} gap="10px" align={"center"}>
          <Text
            c="#4D4D4D"
            style={{
              fontWeight: 700,
              fontSize: "19px",
              textAlign: "start",
            }}
          >
            Work Experiences:
          </Text>
          <Button
            onClick={openExp}
            variant="filled"
            tt={"capitalize"}
            style={{ backgroundColor: "#e7f7ff", color: "#000000" }}
          >
            add +
          </Button>
        </Flex>
        {!workExp?.length && (
          <Text size="14px" mt="10px" c="565656">
            No experience added yet!
          </Text>
        )}
        {workExp?.length !== 0 && (
          <Stack mt={"md"}>
            {workExp?.map((item) => (
              <Box key={item.companyName}>
                <Flex justify={"flex-start"} align={"flex-start"} gap={"10px"}>
                  <Box
                    style={{
                      width: "100%",
                      maxWidth: "45px",
                      maxHeight: "45px",
                      height: "100%",
                    }}
                  >
                    <Image
                      src={"/assets/images/workExprience.png"}
                      alt="work"
                    />
                  </Box>
                  <Box>
                    <Flex justify={"flex-start"} align={"flex-start"}>
                      <Text
                        style={{
                          fontWeight: 600,
                          fontSize: "16px",
                          textTransform: "capitalize",
                        }}
                      >
                        {item.position}
                      </Text>
                      <ActionIcon
                        size="sm"
                        color="#3377FF"
                        variant="transparent"
                        onClick={() => handleEdit(item)}
                      >
                        <IconEdit
                          style={{ width: "70%", height: "70%" }}
                          stroke={1.5}
                        />
                      </ActionIcon>
                    </Flex>
                    <Text
                      style={{
                        fontSize: "14px",
                        textTransform: "capitalize",
                      }}
                    >
                      {`${item.companyName} · ${item.employmentType.name}`}
                    </Text>
                    <Text
                      style={{
                        fontSize: "14px",
                        textTransform: "capitalize",
                      }}
                    >{`${formatMonthYear(
                      item.startDate,
                      item.endDate
                    )} ${calculateDateDifference(
                      item.startDate,
                      item.endDate
                    )} ${item.isPresent === 1 ? "· present" : ""}`}</Text>
                    <Text
                      style={{
                        fontSize: "14px",
                        textTransform: "capitalize",
                      }}
                    >
                      {item.location}
                    </Text>
                    {item.description !== null && (
                      <Text
                        style={{
                          fontSize: "14px",
                          marginTop: "10px",
                        }}
                      >
                        {item.description}
                      </Text>
                    )}
                  </Box>
                </Flex>
              </Box>
            ))}
          </Stack>
        )}
      </Box>
      <AddWorkModal
        openedExp={openedExp}
        handleExpSubmit={handleExpSubmit}
        loading={loading}
        employmentType={employmentType}
        closeExp={closeExp}
        experienceForm={experienceForm}
      />
      <EditWorkModal
        openedEditExp={openedEditExp}
        closeEditExp={closeEditExp}
        loading={loading}
        employmentType={employmentType}
        handleEditExp={handleEditExp}
        experienceForm={experienceForm}
      />
    </>
  );
};

export default WorkExprience;
