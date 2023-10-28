import React from 'react'
import { Container, Grid, GridCol, Group, ScrollArea, SimpleGrid, Space, Text } from '@mantine/core'
import MiniCard from '@/components/MiniCard'
import Messages from '@/components/Messages'
import Notifications from '@/components/Notifications'

const page = () => {
    return (
        <div style={{ height: '50%', borderRadius: '15px' }}>
            <Grid justify="space-around" align="stretch">
                <GridCol bg="#" span={8.5} style={{ minHeight: '80px' }}>
                    <Container>
                        <div style={{ paddingLeft: '35px' }}>
                            <Text c='#9C9C9C' fz='20px'>Hi Modupe,</Text>
                            <Space h="2px" />
                            <Text fz='32px' fw={700}>Welcome to your Dashboard</Text>
                        </div>
                        <Container mt='39'>
                            <Group justify='space-between'>
                                <MiniCard />
                            </Group>
                        </Container>
                    </Container>
                </GridCol>
                <GridCol pr='xs' span={3.5}>
                    <Space h='45px' />
                    <SimpleGrid style={{ borderRadius: '15px' }} bg='#ffff' cols={1}>
                        <ScrollArea scrollbarSize={4} type='never'>
                            <Notifications />
                        </ScrollArea>
                        <div style={{ borderTop: '3px solid #EFEFEF' }}>
                            <ScrollArea scrollbarSize={4} type='never'>
                                <Messages />
                            </ScrollArea>
                        </div>
                    </SimpleGrid>
                </GridCol>
            </Grid>
        </div>
    )
}

export default page