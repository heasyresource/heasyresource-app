// 'use client'
import { AppShell, AppShellMain, Space, Text } from '@mantine/core'
import React from 'react'
import classes from './dashboard.module.css';


const Main = () => {
  return (
    <AppShell.Main style={{ backgroundColor : '#F8F9FA', zIndex: "1000"}}>
        <div>
          <Text c='#9C9C9C' fz='20px'>Hi Modupe,</Text>
          <Space h="2px" />
          <Text fz='32px' fw={700}>Welcome to your Dashboard</Text>
        </div>
    </AppShell.Main>
  )
}

export default Main