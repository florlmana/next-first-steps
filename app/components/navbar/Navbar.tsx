//rafc + tab to create a functional component

import Link from 'next/link'
import React from 'react'
import { HomeIcon } from '@primer/octicons-react'
import { ActiveLink } from '../active-link/ActiveLink'

const navItems = [
    { path: '/about', text: 'About' },
    { path: '/pricing', text: 'Pricing' },
    { path: '/contact', text: 'Contact' },
]

export const Navbar = () => {
    return (
        <nav className="flex bg-blue-800 bg-opacity-30 p-2 rounded">

            <Link href={'/'}>
                <HomeIcon size={24} className="mr-2" />
                <span>Home</span>
            </Link>

            <div className="flex flex-1"></div>

            {
                navItems.map( navItem => (
                    <ActiveLink key={navItem.path} {...navItem} />
                ))
            }

            {/* <Link href="/about" className="ml-2">About</Link>
            <Link href="/pricing" className="ml-2">Pricing</Link>
            <Link href="/contact" className="ml-2">Contact</Link> */}

        </nav>
    )
}
