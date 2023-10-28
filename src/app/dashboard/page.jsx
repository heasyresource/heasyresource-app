import React from 'react'
import { Grid } from './components/mantine'
import { GridCol, Space, Text } from '@mantine/core'
import { getServerSession } from "next-auth";
import { authOptions } from '../api/auth/[...nextauth]/route';
const Dashboard = async() => {
    const session = await getServerSession(authOptions);
    return (
        <div>
            <Grid>
                <GridCol bg="#" span={8} style={{ minHeight: '80px' }}>
                    <Text c='#9C9C9C' fz='20px'>Hi {session && session.user.firstName},</Text>
                    <Space h="2px" />
                    <Text fz='32px' fw={700}>Welcome to your Dashboard</Text>
                    <Text>{JSON.stringify(session)}</Text>
                </GridCol>
                <GridCol span={4} style={{ minHeight: '20px' }}>2</GridCol>
            </Grid>
        </div>
    )
}

export default Dashboard