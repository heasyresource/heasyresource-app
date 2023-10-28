'use client'
import { Group, AppShell, Container, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
// import { AppShell, Burger } from '@mantine/core';
import Jitto from '../../../public/jitto.svg'
import NavBar from './components/NavBar';
import Main from './components/Main';
import Profile from '@/components/Profile';
import Image from 'next/image';
import NextImage from 'next/image'
import { IconBell } from '@tabler/icons-react';
import { IconMessageDots } from '@tabler/icons-react';
const DashBoardLayout = ({ children }) => {
    const [opened, { toggle }] = useDisclosure();

    return (
        <AppShell
            layout='alt'
            padding="lg"
            header={{ height: 60 }}
            navbar={{ width: '245', breakpoint: 'sm', collapsed: { mobile: !opened } }}
        >
            <AppShell.Header
                style={{ backgroundColor: '#F8F9FA', padding: '20px' }}
                withBorder={false}
            >
                <Group
                    justify='flex-end'
                    gap="28"
                    px={113}
                >
                    <Group>
                        <Image
                            src={Jitto}
                            component={NextImage}
                            alt='Company Logo'
                        />
                        <Text fw={500} c='#616161'>
                            Jitto Consultancy Ltd.
                        </Text>
                    </Group>
                    <div style={{ backgroundColor: 'rgba(126, 166, 244, 0.22)', borderRadius: '50%', padding: '11px', zIndex: '1' }}>
                        <IconBell />
                    </div>
                    <div style={{ backgroundColor: 'rgba(126, 166, 244, 0.22)', borderRadius: '50%', padding: '11px', zIndex: '1' }}>
                        <IconMessageDots />
                    </div>
                    <Profile />
                </Group>
            </AppShell.Header>

            <NavBar />
            <Main>{children}</Main>
        </AppShell>
    );
}

export default DashBoardLayout