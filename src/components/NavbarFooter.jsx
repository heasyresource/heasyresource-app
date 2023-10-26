import { Button, Card, Group, Space, Text } from '@mantine/core'
import React from 'react'

const NavbarFooter = ({ width, height }) => {
    return (
        <Group justify='center'>
            <Card
                style={{ width, height, borderRadius: '15px', backgroundColor: 'rgba(51, 119, 255, 0.42)' }}
                px="28"
                py="20"
                withBorder
                padding="xl"
            >
                <Text style={{ color: '#2F2F2F' }} fz="xs" mx="auto" fw={500}>
                    Complete Registration
                </Text>
                <Space h="xs" />
                <Button
                    p={0}
                    fz="9px"
                    bg="#ffff"
                    c="#2D3748"
                    fw={500}
                    style={{ borderRadius: '20px' }}
                >
                    Complete Registration
                </Button>
            </Card>
        </Group>
    )
}

export default NavbarFooter