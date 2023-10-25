'use client'
import { Icon2fa, IconBellRinging, IconBriefcase, IconBriefcase2, IconBriefcaseFilled, IconCalendar, IconCalendarBolt, IconDatabaseImport, IconEyeDollar, IconFingerprint, IconGraph, IconHome, IconHome2, IconKey, IconReceipt2, IconSettings, IconTrophy, IconUser, IconUserDollar, IconUsers } from '@tabler/icons-react';
import React, { useState } from 'react'
import classes from './dashboard.module.css';


const data = [
    { link: '', label: 'Dashboard', icon: IconHome },
    { link: '', label: 'Employee', icon: IconUsers },
    { link: '', label: 'Hiring', icon: IconBriefcase2 },
    { link: '', label: 'Performance', icon: IconGraph },
    { link: '', label: 'Absence', icon: IconCalendarBolt },
    { link: '', label: 'Compensation', icon: IconUserDollar },
    { link: '', label: 'Settings', icon: IconSettings },
];

const Links = () => {
    const [active, setActive] = useState('Billing');

    const links = data.map((item) => (
        <a
            className={classes.link}
            data-active={item.label === active || undefined}
            href={item.link}
            key={item.label}
            onClick={(event) => {
                event.preventDefault();
                setActive(item.label);
            }}
        >
            <item.icon className={classes.linkIcon} stroke={1.5} />
            <span>{item.label}</span>
        </a>
    ));
    return (
        <>
            {links}
        </>
    )
}

export default Links;