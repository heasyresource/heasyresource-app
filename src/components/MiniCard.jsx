'use client'
import React from 'react';
import NextImage from 'next/image';
import profileIcon from '../../public/profileicon.svg'
import { Card, Center, Group, Image, Text } from '@mantine/core';

// Define your custom Card component
function MiniCard({ width, height, borderColor, title, value }) {
  return (
    <Card
      style={{ width, height, borderRadius: '15px', borderColor }}
      px="28"
      py="20"
      withBorder
      padding="xl"
      bg="var(--mantine-color-body)"
    >
      <Text style={{ color: '#7EA6F4' }} fz="sm" fw={700}>
        {title}
      </Text>
      <Group
        mt={8}
        align="center"
        justify="space-between"
      >
        <Text style={{fontSize: '24px'}} fw={700}>
          {value}
        </Text>
        <Image
          component={NextImage}
          h={15}
          w="auto"
          fit="contain"
          src={profileIcon} alt="profile-icon" />
      </Group>
    </Card>
  );
}

export default MiniCard;
