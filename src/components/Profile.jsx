'use client'
import { forwardRef } from 'react';
import { IconChevronDown, IconExternalLink, IconHelpOctagon, IconLockOpen, IconMan, IconUser } from '@tabler/icons-react';
import { Group, Avatar, Text, Menu, UnstyledButton, rem } from '@mantine/core';
import { useSession } from "next-auth/react"
import useSignOut from '../hooks/useSignOut';

const UserButton = forwardRef(
    ({ image, name, position, icon, ...others }, ref) => (
        <UnstyledButton
            ref={ref}
            style={{
                color: 'var(--mantine-color-text)',
                borderRadius: 'var(--mantine-radius-sm)',
            }}
            {...others}
        >
            <Group>
                <div style={{ border: '2px #3377FF solid', borderRadius: '50%', padding: '3px', zIndex: '1' }}
                >
                    <Avatar
                        variant="outline"
                        size="md"
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
    const { data: session } = useSession()
    const { handleSignOut } = useSignOut()
    
    const name = session && `${session.user.firstName} ${session.user.lastName}`
    return (
        <Menu position='bottom-end' offset={10}>
            <Menu.Target>
                <UserButton
                    image="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
                    name={name}
                    position="HR Admin"
                />
            </Menu.Target>
            <Menu.Dropdown>
                <Menu.Item fz="xs" leftSection={<IconUser style={{ width: rem(14), height: rem(14), color: 'rgba(126, 166, 244, 1)' }} />}>
                    Profile
                </Menu.Item>
                <Menu.Item fz="xs" leftSection={<IconHelpOctagon style={{ width: rem(14), height: rem(14), color: 'rgba(126, 166, 244, 1)' }} />}>
                    Support
                </Menu.Item>
                <Menu.Item fz="xs" leftSection={<IconLockOpen style={{ width: rem(14), height: rem(14), color: 'rgba(126, 166, 244, 1)' }} />}>
                    Change Password
                </Menu.Item>
                <Menu.Item onClick={() => handleSignOut()} c="#FF3D00" fz="xs" leftSection={<IconExternalLink style={{ width: rem(14), height: rem(14) }} />}>
                    Logout
                </Menu.Item>
            </Menu.Dropdown>
        </Menu>
    );
}

UserButton.displayName = "UserButton";