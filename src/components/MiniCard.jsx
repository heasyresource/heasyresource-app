'use client'
import React from 'react';
import NextImage from 'next/image';
import profileIcon from '../../public/profileicon.svg'
import { Card, Center, Group, Image, Text } from '@mantine/core';

const data = [
  { title: 'Total Employees', value: '6789' },
  { title: 'New Employees', value: '6789' },
  { title: 'Job Vacancy', value: '6789' },
  { title: 'Payroll Created', value: '6789' },
];

// Define your custom Card component
function MiniCard({ height }) {
  const cards = data.map((item) => (
    <Card
      style={{ width: '179px', height, borderRadius: '15px' }}
      px="28"
      py="20"
      padding="xl"
      bg="var(--mantine-color-body)"
      key={item.title}
    >
      <Text style={{ color: '#7EA6F4' }} fz="sm" fw={700}>
        {item.title}
      </Text>
      <Group
        mt={8}
        align="center"
        justify="space-between"
      >
        <Text style={{ fontSize: '24px' }} fw={700}>
          {item.value}
        </Text>
        <Image
          component={NextImage}
          h={15}
          w="auto"
          fit="contain"
          src={profileIcon} alt="profile-icon" />
      </Group>
    </Card>
  ))

  return (
    <>
      {cards}
    </>
  );
}

export default MiniCard;
