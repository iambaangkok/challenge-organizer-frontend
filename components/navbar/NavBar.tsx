import styles from './css/NavBar.module.css'
import Link from 'next/link'

import ProfileDropdown from './ProfileDropdown';
import { navLinks } from '../../lib/navLinks'
import { useRouter } from 'next/router';
import { useState } from 'react';
import Notification from './Notification';

export default function NavBar() {

    const router = useRouter()

    return (
        <div className={styles.NavBar + ' flex justify-between ShadowContainer '}>
            {/* Left */}
            <div className={styles.Left + ' h-full flex items-center'}>
                {/* Website Name, Logo */}
                <div className={styles.Brand + ' H1 h-full flex flex-col justify-center'}>CHAL.ORG</div>
                {/* Navigation Menu */}
                {
                    navLinks.map((link, index) => {
                        if (router.asPath.includes(link.path))
                            return (
                                <Link key={index} href={link.path} className=' text-white h-full flex flex-col justify-center px-4 no-underline bg-orange-500'>
                                    <div className='TextBold' >
                                        {link.name}
                                    </div>
                                </Link>

                            )
                        else
                            return (
                                <Link key={index} href={link.path} className='text-white h-full flex flex-col justify-center px-4 no-underline hover:bg-orange-500 ease-out duration-150'>
                                    <div id={link.name} className='TextBold'>
                                        {link.name}
                                    </div>
                                </Link>
                            )
                    })
                }
            </div>
            {/* Right */}
            <div className={styles.Right}>
                <Notification
                    badgeContent={2}
                />
                <ProfileDropdown></ProfileDropdown>
            </div>

        </div>





    )
}
