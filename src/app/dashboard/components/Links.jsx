'use client'
import { IconBriefcase2, IconCalendarBolt, IconGraph, IconHome, IconSettings, IconUserDollar, IconUsers } from '@tabler/icons-react';
import React, { useEffect, useState } from 'react'
import classes from '../dashboard.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const data = [
    { link: '/dashboard', label: 'Dashboard', icon: IconHome },
    { link: '/dashboard/employee', label: 'Employee', icon: IconUsers },
    { link: '/dashboard/hiring', label: 'Hiring', icon: IconBriefcase2 },
    { link: '/dashboard/performance', label: 'Performance', icon: IconGraph },
    { link: '/dashboard/absence', label: 'Absence', icon: IconCalendarBolt },
    { link: '/dashboard/compensation', label: 'Compensation', icon: IconUserDollar },
    { link: '/dashboard/settings', label: 'Settings', icon: IconSettings },
];

const Links = () => {
    const [active, setActive] = useState('');
    const currentPath = usePathname();
// console.log(currentPath, data.link);
//     if (currentPath === data.link) {
//         setActive(data.label)
//     }
// useEffect(()=>{
//     data.map((item) => {
//         if (item.link === currentPath) {
//            setActive(item.label) 
//         }
//     })
// }, [currentPath])
    const links = data.map((item) => (
        <Link
            className={classes.link}
            // data-active={ item.label === active || undefined}  
            // data-active={ item.label === active || currentPath === item.link ? true : undefined}  
            data-active={ currentPath === item.link  || undefined}  

            href={item.link}
            key={item.label}
            onClick={(event) => {
                // event.preventDefault();
                // setActive(item.label);
                console.log(currentPath);
            }}
        >
            <item.icon className={classes.linkIcon} stroke={1.5} />
            <span>{item.label}</span>
        </Link>
    ));
    return (
        <>
            {links}
        </>
    )
}

export default Links;