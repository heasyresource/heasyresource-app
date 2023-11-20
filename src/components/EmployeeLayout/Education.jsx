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
import React from "react";
import { IconEdit } from "@tabler/icons-react";
import { formatMonthYear } from "@/utils/publicFunctions";
import dynamic from "next/dynamic";

const AddEduModal = dynamic(() => import("./AddEduModal"), { ssr: false });
const EditEduModal = dynamic(() => import("./EditEduModal"), { ssr: false });
const Education = ({
  educationForm,
  handleEduSubmit,
  loading,
  openEdu,
  openedEdu,
  closeEdu,
  educations,
  handleEditEdu,
  openEditEdu,
  closeEditEdu,
  openedEditEdu,
  setExpId,
}) => {
  const handleEdit = (data) => {
    setExpId(data.id);
    educationForm?.setValues({
      institution: data.institution,
      degree: data.degree,
      fieldOfStudy: data.fieldOfStudy,
      grade: data.grade,
      startDate: new Date(data.startDate),
      endDate: data.endDate !== null ? new Date(data.endDate) : "",
      description: data.description !== null ? data.description : "",
      workMode: data.workMode,
    });
    openEditEdu();
  };
  return (
    <>
      <Box>
        <Flex justify={"flex-start"} gap="10px" align={"center"}>
          <Text
            c="#4D4D4D"
            style={{
              fontWeight: 700,
              fontSize: "23px",
              textAlign: "start",
            }}
          >
            Educations:
          </Text>
          <Button
            onClick={openEdu}
            variant="filled"
            tt={"capitalize"}
            style={{ backgroundColor: "#e7f7ff", color: "#000000" }}
          >
            add +
          </Button>
        </Flex>
        {!educations?.length && (
          <Text size="14px" mt="10px" c="565656">
            No education added yet!
          </Text>
        )}
        {educations?.length !== 0 && (
          <Stack mt={"md"}>
            {educations?.map((item) => (
              <Box key={item.institution}>
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
                      src={"/assets/images/education.png"}
                      alt="education"
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
                        {item.institution}
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
                      {`${item.degree}, ${item.fieldOfStudy}`}
                    </Text>
                    <Text
                      style={{
                        fontSize: "14px",
                        textTransform: "capitalize",
                      }}
                    >{`${formatMonthYear(item.startDate, item.endDate)}`}</Text>
                    <Text
                      style={{
                        fontSize: "14px",
                        textTransform: "capitalize",
                      }}
                    >
                      {`Grade: ${item.grade}`}
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
      <AddEduModal
        handleEduSubmit={handleEduSubmit}
        educationForm={educationForm}
        loading={loading}
        closeEdu={closeEdu}
        openedEdu={openedEdu}
      />
      <EditEduModal
        closeEditEdu={closeEditEdu}
        openedEditEdu={openedEditEdu}
        educationForm={educationForm}
        loading={loading}
        handleEditEdu={handleEditEdu}
      />
    </>
  );
};

export default Education;
