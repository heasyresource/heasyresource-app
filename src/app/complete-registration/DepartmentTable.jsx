import {
  Table,
  Group,
  Text,
  ActionIcon,
  rem,
  Button,
  TextInput,
  Modal,
  Paper,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { IconTrash } from "@tabler/icons-react";
import { useState } from "react";

export default function DepartmentTable({
  setDepartmentTable,
  departmentTable,
  isDptTableEmpty,
  uploading,
  isSubmitted,
}) {
  const [error, setError] = useState(false);
  const [isExist, setIsExist] = useState(false);
  const departmentForm = useForm({
    initialValues: {
      name: "",
      code: "",
    },
  });
  const [opened, { open, close }] = useDisclosure(false);

  const handleAddRow = () => {
    if (departmentForm.values.name && departmentForm.values.code) {
      // Check if the data already exists in the table
      const dataAlreadyExists = departmentTable.some(
        (row) =>
          row.name === departmentForm.values.name &&
          row.code === departmentForm.values.code
      );

      if (dataAlreadyExists) {
        setIsExist(true);
        setTimeout(() => {
          setIsExist(false);
        }, 2000);
      } else {
        setDepartmentTable([...departmentTable, departmentForm.values]);
        departmentForm.reset();
        close();
      }
    } else {
      setError(true);
    }
  };

  const deleteRow = (name) => {
    // Remove any items id that matches the id
    const updatedData = departmentTable.filter((row) => row.name !== name);
    setDepartmentTable(updatedData);
  };
  const rows = departmentTable.map((item, index) => (
    <Table.Tr key={item.name + index}>
      <Table.Td>{index + 1}</Table.Td>
      <Table.Td style={{ whiteSpace: "nowrap" }}>{item.name}</Table.Td>

      <Table.Td style={{ whiteSpace: "nowrap" }}>{item.code}</Table.Td>

      <Table.Td>
        <Group gap={0} justify="flex-start">
          <ActionIcon
            disabled={uploading || isSubmitted}
            onClick={() => deleteRow(item.name)}
            variant="subtle"
            color="red"
          >
            <IconTrash
              style={{ width: rem(16), height: rem(16) }}
              stroke={1.5}
            />
          </ActionIcon>
        </Group>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <Group justify="flex-start" gap={"20px"}>
        <Text fz={18} fw={700}>
          Department List
        </Text>
        <Button
          disabled={uploading || isSubmitted}
          onClick={open}
          variant="filled"
          tt={"capitalize"}
          style={{ backgroundColor: "#e7f7ff", color: "#000000" }}
        >
          add department +
        </Button>
        <Modal
          closeOnClickOutside={false}
          centered
          overlayProps={{
            backgroundOpacity: 0.55,
            blur: 3,
          }}
          opened={opened}
          onClose={close}
          title="Focus demo"
        >
          <Paper p={20}>
            <TextInput
              withAsterisk
              required
              data-autofocus
              label="Department Name"
              placeholder="Marketing"
              {...departmentForm.getInputProps("name")}
            />
            <TextInput
              withAsterisk
              required
              label="Department Code"
              placeholder="MAR"
              mt="md"
              {...departmentForm.getInputProps("code")}
              maxLength={3}
            />
            {error && (
              <Text style={{ fontSize: "13px", color: "red" }}>
                Please fill in the required fields!
              </Text>
            )}
            {isExist && (
              <Text style={{ fontSize: "13px", color: "red" }}>
                {`${departmentForm.values.name} and ${departmentForm.values.code} already exists`}
              </Text>
            )}
            <Group justify="flex-end" align="center" mt={"xl"}>
              <Button
                variant="outline"
                color="#3377FF"
                style={{ borderColor: "#3377FF" }}
                tt="capitalize"
                px="50px"
                w={{ lg: "auto", md: "auto", sm: "auto" }}
                onClick={close}
              >
                cancel
              </Button>
              <Button
                variant="contained"
                color="#3377FF"
                tt="capitalize"
                px="50px"
                onClick={() => handleAddRow()}
                style={{
                  backgroundColor: "#3377FF",
                }}
              >
                add
              </Button>
            </Group>
          </Paper>
        </Modal>
      </Group>
      {isDptTableEmpty && (
        <Text style={{ fontSize: "13px", color: "red" }}>
          Add atleast one department
        </Text>
      )}

      {departmentTable?.length > 0 && (
        <Table.ScrollContainer mt={"1rem"}>
          <Table verticalSpacing="sm">
            <Table.Thead>
              <Table.Tr bg="#ECF2FF">
                <Table.Th>S/N</Table.Th>
                <Table.Th style={{ whiteSpace: "nowrap" }}>
                  Department Name
                </Table.Th>
                <Table.Th style={{ whiteSpace: "nowrap" }}>
                  Department Code
                </Table.Th>
                <Table.Th style={{ whiteSpace: "nowrap" }}>Actions</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>
        </Table.ScrollContainer>
      )}
    </>
  );
}
