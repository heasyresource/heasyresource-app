import React from 'react'
import { Grid } from './components/mantine'
import { GridCol, Space, Text } from '@mantine/core'

const page = () => {
    return (
        <div>
            <Grid>
                <GridCol bg="#" span={8} style={{ minHeight: '80px' }}>
                    <Text c='#9C9C9C' fz='20px'>Hi Modupe,</Text>
                    <Space h="2px" />
                    <Text fz='32px' fw={700}>Welcome to your Dashboard</Text>
                </GridCol>
                <GridCol span={4} style={{ minHeight: '20px' }}>2</GridCol>
            </Grid>
        </div>
    )
}

export default page