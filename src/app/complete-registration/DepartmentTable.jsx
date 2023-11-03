import { Table, Group, Text, ActionIcon, rem, Button, Space, TextInput, Modal, Paper } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { notifications } from '@mantine/notifications';
import { IconTrash } from '@tabler/icons-react';
import { useState } from 'react';


export default function DepartmentTable() {


    // Usestate for modal opening
    const [opened, { open, close }] = useDisclosure(false);

    // Department List array
    const [data, setData] = useState([]);

    const [newDepartment, setNewDepartment] = useState({
        departmentName: '',
        departmentCode: ''
    })

    const addRow = () => {
        if (newDepartment.departmentName && newDepartment.departmentCode) {
            setData([...data, newDepartment]);
            setNewDepartment({ departmentName: '', departmentCode: '' });
            return notifications.show({
                title: 'Default notification',
                message: 'Hey there, your code is awesome! 🤥',
              })
        }
    }

    const deleteRow = (departmentName) => {
        // Remove any items id that matches the id
        const updatedData = data.filter((row) => row.departmentName !== departmentName)
        setData(updatedData)
    }

    console.log(typeof data)

    const rows = data.map((item) => (
        <Table.Tr key={item.departmentName}>
            <Table.Td>
                {item.departmentName}
            </Table.Td>

            <Table.Td>
                {item.departmentCode}
            </Table.Td>

            <Table.Td>
                <Group gap={0} justify="flex-start">
                    <ActionIcon onClick={() => deleteRow(item.departmentName)} variant="subtle" color="red">
                        <IconTrash style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
                    </ActionIcon>
                </Group>
            </Table.Td>
        </Table.Tr>
    ));

    return (
        <Table.ScrollContainer w={500}>
            <Group justify='space-between'>
                <Text fz={18} fw={700}>Department List</Text>
                <Modal
                    overlayProps={{
                        backgroundOpacity: 0.55,
                        blur: 3,
                    }} opened={opened} onClose={close} title="Focus demo">
                    <Paper p={20}>
                        <TextInput
                            required
                            data-autofocus
                            label="Department Name"
                            placeholder="Marketing"
                            value={newDepartment.departmentName}
                            onChange={(e) => setNewDepartment({...newDepartment, departmentName: e.target.value})}
                        />
                        <TextInput
                            required
                            label="Department Code"
                            placeholder="MAR"
                            mt="md"
                            value={newDepartment.departmentCode}
                            onChange={(e) => setNewDepartment({...newDepartment, departmentCode: e.target.value})}
                        />
                        <Button onClick={() => addRow()} fullWidth mt="xl">
                            Continue
                        </Button>
                    </Paper>
                </Modal>
                <Button color='rgba(51, 119, 255, 1)' onClick={open} size='sm' variant="filled">
                    Add Department
                </Button>
            </Group>
            <Space h={32} />
            <Table verticalSpacing="sm">
                <Table.Thead>
                    <Table.Tr bg='#ECF2FF'>
                        <Table.Th>Department Name</Table.Th>
                        <Table.Th>Department Code</Table.Th>
                        <Table.Th>Actions</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>{rows}</Table.Tbody>
            </Table>
        </Table.ScrollContainer>
    );
}