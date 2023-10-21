'use client'
import Logo from '../../../src/components/Image';
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
    PinInput,
} from '@mantine/core';


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
                    Verification
                </Title>
                <Text c="dimmed" fz="md" ta="left" mt={29}>
                    An OTP code has been sent to your email address <br /> <span style={{ fontWeight: 'bold' }}>youremail@email.com</span> for verification.
                </Text>

                <Paper radius="md" mt={40}>
                    {/* <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <PinInput length={6} />
                    </div> */}
                    <PinInput
                        style={{ display: 'flex', justifyContent: 'space-between' }}
                        size='xl'
                        placeholder=''
                        length={6}
                    />


                    <Group justify="space-between" mt={30}>
                        <Button fullWidth size="lg">
                            Continue
                        </Button>
                    </Group>
                    <Text size='sm' ta="left" mt="xl">
                        Haven’t received it yet?{' '}
                        <Anchor href="#">
                            Resend
                        </Anchor>
                    </Text>
                </Paper>
            </Box>
        </Container>
    );
}