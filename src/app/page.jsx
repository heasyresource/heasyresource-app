import { Box, Text } from "@mantine/core";
import Link from "next/link";

export default function HomePage() {
  return (
    <Box w={400} mx="auto" ta="center" c="#fff" size={"xs"} bg="blue.7" py="xl">
      <Text tt="capitalize">welcome to Heasyresource</Text>
      <Link href="/signin">Sign In</Link> |<Link href="/signup">Sign Up</Link>
    </Box>
  );
}
