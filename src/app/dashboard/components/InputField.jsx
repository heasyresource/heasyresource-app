import { Group, TextInput } from '@mantine/core'
import classes from '../dashboard.module.css'
import React from 'react'
import { IconChevronDown } from '@tabler/icons-react'

const InputField = () => {
    const icon = <IconChevronDown size="1.3rem" color='#3377FF' />
    return (
        <Group grow justify='space-between' px='40px' pt='45px'>
            <TextInput
                size='md'
                label="Employee Name"
                placeholder="Name"
                classNames={{ label: classes.label, error: classes.error, placeholder: classes.placeholder }}
            />
            <TextInput
                size='md'
                label="Employee ID"
                placeholder="ID"
                classNames={{ label: classes.label, error: classes.error, placeholder: classes.placeholder }}

            />
            <TextInput
                size='md'
                label="Employee Status"
                placeholder="Working"
                rightSectionPointerEvents="none"
                rightSection={icon}
                classNames={{ label: classes.label, error: classes.error, placeholder: classes.placeholder }}

            />
            <TextInput
                size='md'
                label="Employee Department"
                placeholder="Software Development"
                rightSectionPointerEvents="none"
                rightSection={icon}
                classNames={{ label: classes.label, error: classes.error, placeholder: classes.placeholder }}

            />
        </Group>
    )
}

export default InputField