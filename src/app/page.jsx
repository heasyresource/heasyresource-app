
import MiniCard from "@/components/MiniCard";
import SecureUser from "@/layout";
import { Box, Flex, Text } from "@mantine/core";
import Link from "next/link";

export default function HomePage() {
    return (
        // <SecureUser>
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
                justify="center"
                mt={32}
            >
            <MiniCard
                width="179px"
                title="Total Employees"
                value={"6,789"}
            />
            </Flex>
        </Box>
        // </SecureUser>
    );
}
