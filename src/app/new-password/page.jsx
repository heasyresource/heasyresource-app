'use client'
import Logo from '@/components/Image';
import verified from '../../../public/verified.svg'
import {
    Paper,
    Title,
    Text,
    TextInput,
    Button,
    Container,
    Group,
    Anchor,
    Center,
    Box,
    rem,
    Modal,
    Image,
    Flex,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import NextImage from 'next/image'
import { IconArrowLeft } from '@tabler/icons-react';

export default function NewPassword() {
    const [opened, { open, close }] = useDisclosure(false);


    return (
        <Container size={590} style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
        }}>
            <Modal
                centered
                opened={opened}
                onClose={close}
                withCloseButton={false}
                radius={25}
            >
                <Flex
                    direction={'column'}
                    justify={'center'}
                    align={'center'}
                    py={15}
                    px={46}
                >
                    <Box>
                        <Image
                            h={70}
                            w="auto"
                            py={5}
                            fit="contain"
                            component={NextImage}
                            src={verified} />
                    </Box>
                    <Title order={4}>Password Reset Successful</Title>
                    <Text c="dimmed" size="xs">"Your Password has been Successfully Updated!"</Text>
                    <Button mt={25} onClick={open} fullWidth size="lg">
                        <Text size='sm'>Continue</Text>
                    </Button>
                </Flex>
            </Modal>
            <Box>
                <Center>
                    <Logo />
                </Center>
                <Title
                    ta="left"
                    order={2}
                    mt={100}>
                    New Password
                </Title>
                <Text c="dimmed" fz="md" ta="left" mt={29}>
                    Set the new password for your account so you can login <br /> and access all features
                </Text>

                <Paper radius="md" mt={15}>
                    <TextInput
                        fz="md"
                        label="Enter New Password"
                        size="lg" my={20} placeholder="me@mantine.dev" required />
                    <TextInput
                        fz="md"
                        label="Confirm Password"
                        size="lg" placeholder="me@mantine.dev" required />
                    <Group justify="space-between" mt={20}>
                        <Button onClick={open} fullWidth size="lg">
                            <Text>Update Password</Text>
                        </Button>
                    </Group>
                </Paper>
            </Box>
        </Container>
    );
}