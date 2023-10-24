import MiniCard from "@/components/MiniCard";
import Profile from "@/components/Profile";
import SecureUser from "@/layout";
import { Box, Card, Flex, Group, Text } from "@mantine/core";
import { Calendar, DatePicker } from "@mantine/dates";
import Link from "next/link";

export default function HomePage() {
    return (
        // <SecureUser>
        <>
            <Box
                w={600}
                mx="auto"
                ta="center"
                c="#fff"
                size={"xs"}
                bg="blue.7"
                py="xl"
            >
                <Text tt="capitalize">welcome to Heasyresource</Text>
                <Link href="/signin">Sign In</Link> |<Link href="/signup">Sign Up</Link>
                <Flex
                    style={{ height: '500px' }}
                    direction="column"
                    justify="space-evenly"
                    align="center"
                    mt={32}
                >
                    <MiniCard
                        width="179px"
                        title="Total Employees"
                        value={"6,789"}
                    />
                    <Profile />
                </Flex>
            </Box>
        </>
        // </SecureUser>
    );
}
