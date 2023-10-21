'use client'
// import Logo from '@/components/Image';
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
    PasswordInput,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import NextImage from 'next/image'
import classes from './newPassword.module.css'

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
                    <PasswordInput
                        fz="md"
                        classNames={{ label: classes.label, error: classes.error }}
                        label="Enter New Password"
                        size="md" my={20} placeholder="Your password" required />
                    <PasswordInput
                        fz="md"
                        classNames={{ label: classes.label, error: classes.error }}
                        label="Confirm Password"
                        size="md" placeholder="Your password" required />
                    <Group justify="space-between" mt={20}>
                    <Button
                            fullWidth
                            size="md"
                            variant="filled"
                            tt="capitalize"
                            fs="1rem"
                            fw="bold"
                            c={"white"}
                            type="submit"
                            bg="#3377FF"
                            mt={"1rem"}
                            onClick={open}
                        >
                            <Text>Update Password</Text>
                        </Button>
                    </Group>
                </Paper>
            </Box>
        </Container>
    );
}