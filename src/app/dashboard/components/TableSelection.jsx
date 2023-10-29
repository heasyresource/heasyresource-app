'use client'
import cx from 'clsx';
import { useState } from '../components/mantine'
import { Table, Checkbox, ScrollArea, Group, Avatar, rem, Space } from '@mantine/core';
import classes from '../dashboard.module.css';

const data = [
    {
        id: '1',
        avatar:
            'https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
        firstName: 'Robert',
        lastName: 'Wolfkisser',
        employeeEmail: 'rob_wolf@gmail.com',
        department: 'Engineering',
        role: 'Engineer',
        moreDetails: 'Link to More Details',
    },
    {
        id: '2',
        avatar:
            'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
        firstName: 'Jill',
        lastName: 'Jailbreaker',
        employeeEmail: 'jj@breaker.com',
        department: 'Engineering',
        role: 'Engineer',
        moreDetails: 'Link to More Details',
    },
    {
        id: '3',
        avatar:
            'https://images.unsplash.com/photo-1632922267756-9b71242b1592?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
        firstName: 'Henry',
        lastName: 'Silkeater',
        employeeEmail: 'henry@silkeater.io',
        department: 'Design',
        role: 'Designer',
        moreDetails: 'Link to More Details',
    },
    {
        id: '4',
        avatar:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
        firstName: 'Bill',
        lastName: 'Horsefighter',
        employeeEmail: 'bhorsefighter@gmail.com',
        department: 'Design',
        role: 'Designer',
        moreDetails: 'Link to More Details',
    },
    {
        id: '5',
        avatar:
            'https://images.unsplash.com/photo-1630841539293-bd20634c5d72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto.format&fit=crop&w=250&q=80',
        firstName: 'Jeremy',
        lastName: 'Footviewer',
        employeeEmail: 'jeremy@foot.dev',
        department: 'Management',
        role: 'Manager',
        moreDetails: 'Link to More Details',
    },
];


export function TableSelection() {
    const [scrolled, setScrolled] = useState(false);
    const [selection, setSelection] = useState(['1']);
    const toggleRow = (id) =>
        setSelection((current) =>
            current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
        );
    const toggleAll = () =>
        setSelection((current) => (current.length === data.length ? [] : data.map((item) => item.id)));

    const rows = data.map((item) => {
        const selected = selection.includes(item.id);
        return (
            <>
                <Table.Tr
                    key={item.id}
                    className={cx({ [classes.rowSelected]: selected })}
                    bg='#ffff'
                    py='32px'
                >
                    <Table.Td>
                        <Checkbox checked={selection.includes(item.id)} onChange={() => toggleRow(item.id)} />
                    </Table.Td>
                    <Table.Td>
                        <Group gap="sm">
                            <Avatar size={26} src={item.avatar} radius={26} />
                        </Group>
                    </Table.Td >
                    <Table.Td>{item.firstName}</Table.Td>
                    <Table.Td>{item.lastName}</Table.Td>
                    <Table.Td>{item.employeeEmail}</Table.Td>
                    <Table.Td>{item.department}</Table.Td>
                    <Table.Td>{item.role}</Table.Td>
                    <Table.Td>{item.moreDetails}</Table.Td>
                </Table.Tr>
                <Space h='20px' />
            </>
        );
    });

    return (
        <ScrollArea px='25px' mt='50px'>
            <Table miw='200px' verticalSpacing="sm" withRowBorders={false}>
                <Table.Thead c='#2F2F2F'>
                    <Table.Tr>
                        <Table.Th style={{ width: rem(40) }}>
                            <Checkbox
                                onChange={toggleAll}
                                checked={selection.length === data.length}
                                indeterminate={selection.length > 0 && selection.length !== data.length}
                            />
                        </Table.Th>
                        <Table.Th></Table.Th>
                        <Table.Th>First Name</Table.Th>
                        <Table.Th>Last Name</Table.Th>
                        <Table.Th>Employee Email</Table.Th>
                        <Table.Th>Department</Table.Th>
                        <Table.Th>Role</Table.Th>
                        <Table.Th>More Details</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>{rows}</Table.Tbody>
            </Table>
        </ScrollArea>
    );
}