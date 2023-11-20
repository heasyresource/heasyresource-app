import React from 'react'
import NextImage from 'next/image'
import { Image } from '@mantine/core'
import logo from '../../public/HRlogo.svg'


const Logo = ({h}) => {
    return (
        <Image
            component={NextImage}
            src={logo}
            h={h}
            w="auto"
            fit="contain"
            alt="HeasyResource Logo"
        />
    )
}

export default Logo;