import Logo from '@/components/Image';
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
} from '@mantine/core';
import classes from './forgotPassword.module.css'

export default function ForgotPassword() {
    return (
        <Container size={590} style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        }}>
            <Box>
                <Center>
                    <Logo />
                </Center>
                <Title
                    ta="left"
                    order={2}
                    mt={100}>
                    Forgot password?
                </Title>
                <Text c="dimmed" fz="md" ta="left" mt={29}>
                    Submit your email address for the verification process; <br /> we will send a four-digit code to your inbox
                </Text>

                <Paper radius="md" mt={15}>
                    <TextInput
                        fz="md"
                        label="Email address"
                        type="email"
                        classNames={{ label: classes.label, error: classes.error }}
                        size="md" placeholder="johndoe@email.com" required />
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
                        >
                            <Text>Continue</Text>
                        </Button>
                    </Group>
                    <Text fw={700} size='sm' ta="left" mt="xl">
                        Remember your password?{' '}
                        <Anchor href="#">
                            Login
                        </Anchor>
                    </Text>
                </Paper>
            </Box>
        </Container>
    );
}