'use client'
import { IconLogout, IconSwitchHorizontal } from '@tabler/icons-react'
import React from 'react'
import classes from '../dashboard.module.css';
import NavbarFooter from '@/components/NavbarFooter';


const Footer = () => {
  return (
    <div className={classes.footer}>
      <NavbarFooter
        width='198px'
      />
    </div>
  )
}

export default Footer