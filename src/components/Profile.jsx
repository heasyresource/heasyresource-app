'use client'
import { forwardRef } from 'react';
import { IconChevronDown, IconExternalLink, IconMan } from '@tabler/icons-react';
import { Group, Avatar, Text, Menu, UnstyledButton, rem } from '@mantine/core';
import {
    IconSettings,
} from '@tabler/icons-react';



const UserButton = forwardRef(
    ({ image, name, position, icon, ...others }, ref) => (
        <UnstyledButton
            ref={ref}
            style={{
                padding: 'var(--mantine-spacing-md)',
                color: 'var(--mantine-color-text)',
                borderRadius: 'var(--mantine-radius-sm)',
                backgroundColor: 'var(--mantine-color-white)'
            }}
            {...others}
        >
            <Group>
                <div style={{ border: '2px #3377FF solid', borderRadius: '50%', padding: '3px', zIndex: '1' }}
                >
                    <Avatar
                        variant="outline"
                        size="lg"
                        color="blue"
                        src={image} radius="xl" />
                </div>

                <div>
                    <Text style={{ color: '#2A004C' }} size="sm" fw={500}>
                        {name}
                    </Text>

                    <Text
                        style={{ color: '#696969' }}
                        size="xs"
                    >
                        {position}
                    </Text>
                </div>

                {icon ||
                    <IconChevronDown
                        size="1.3rem"
                        color='#3377FF'
                    />}
            </Group>
        </UnstyledButton>
    )
);

export default function Profile() {
    return (
        <Menu position='bottom-end' offset={10}>
            <Menu.Target>
                <UserButton
                    image="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
                    name="Modupe Ojo"
                    position="HR Admin"
                />
            </Menu.Target>
            <Menu.Dropdown w={150}>
                <Menu.Item leftSection={<IconMan style={{ width: rem(14), height: rem(14) }} />}>
                    Profile
                </Menu.Item>
                <Menu.Item leftSection={<IconSettings style={{ width: rem(14), height: rem(14) }} />}>
                    Settings
                </Menu.Item>
                <Menu.Item leftSection={<IconExternalLink style={{ width: rem(14), height: rem(14) }} />}>
                    Sign Out
                </Menu.Item>
            </Menu.Dropdown>
        </Menu>
    );
}

UserButton.displayName = "UserButton";