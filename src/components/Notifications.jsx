'use client'
import { Button, Container, Flex, GridCol, Group, HoverCard, HoverCardDropdown, HoverCardTarget, ScrollArea, Space, Stack, Text } from '@mantine/core';
import { IconInfoTriangle, IconInfoTriangleFilled } from '@tabler/icons-react';
import React from 'react'

const data = [
    '', '', '', '', '', '', ''
];

const Notifications = () => {
    const notification = data.map((item) => (
        <Flex
            direction='column'
            mb='5px'
        >
            <HoverCard width={280} shadow="md">
                <HoverCardTarget >
                    <Group mih={10} gap='sm' wrap='nowrap'>
                        <div
                            style={{
                                backgroundColor: 'rgba(126, 166, 244, 0.22)',
                                padding: '2.6px 9px',
                                borderRadius: '50%',
                                zIndex: '1',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                            <IconInfoTriangle width='15px' color='#0f172a' />
                        </div>
                        <Text fz='sm' lineClamp={1}>
                            Your system has been configured with the necessary settings and
                            parameters to ensure a smooth and tailored interaction
                        </Text>
                    </Group>
                </HoverCardTarget>
                <HoverCardDropdown>
                    <Text size="sm">
                        Your system has been configured with the necessary settings and parameters to ensure a smooth and tailored interaction
                    </Text>
                </HoverCardDropdown>
            </HoverCard>
            <Group justify='flex-start' style={{ paddingLeft: '46px' }}>
                <Text fz='sm' c='rgba(28, 28, 28, 0.4)'>Yesterday</Text>
            </Group>
        </Flex>
    ))
    return (
        <div>
            <Container p='32px'>
                <Text>Notifications</Text>
                <Space h='xl' />
                <Stack
                    h={300}
                    bg="var(--mantine-color-body)"
                    justify="flex-start"
                    gap="xs"
                >
                    {notification}
                </Stack>
            </Container>
        </div>
    )
}

export default Notifications