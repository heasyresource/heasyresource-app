import React from 'react'
import NextImage from 'next/image'
import { Image } from '@mantine/core'
import logo from '../../public/HRlogo.svg'


const Logo = () => {
    return (
        <Image
            component={NextImage}
            src={logo}
            h={50}
            w="auto"
            fit="contain"
            alt="HeasyResource Logo"
        />
    )
}

export default Logo;