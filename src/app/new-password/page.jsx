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
import { IconArrowLeft } from '@tabler/icons-react';

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
                    Forgot your password?
                </Title>
                <Text c="dimmed" fz="md" ta="left" mt={40}>
                    Submit your email address for the verification process; <br /> we will send a four-digit code to your inbox
                </Text>

                <Paper radius="md" mt="xl">
                    <TextInput
                    className='text-xs'
                    fz="md"
                     label="Your email" 
                     size="lg" placeholder="me@mantine.dev" required />
                    <Group justify="space-between" mt={45}>
                        <Button fullWidth size="lg">
                            <Text>Continue</Text>
                        </Button>
                    </Group>
                    <Text ta="left" mt="xl">
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