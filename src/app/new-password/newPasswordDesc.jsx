"use client"
import React from 'react'
import { useMediaQuery } from "@mantine/hooks";
import { Text } from '@mantine/core';

export default function NewPasswordDesc() {
    const isMobile = useMediaQuery("(max-width: 500px)");
    return (
        <Text c="dimmed" fz="md" ta="left" mt={"20px"}>
            Set the new password for your account so you can login{" "}
            <br style={{ display: isMobile ? "none" : "block" }} /> and access
            all features
        </Text>
    )
}