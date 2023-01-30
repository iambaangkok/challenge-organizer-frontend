import styles from './css/NavBar.module.css'
import ProfileDropdown from './ProfileDropdown';
import { navLinks, restrictedLink } from '../../lib/navLinks'
import Notification from './Notification';

import Link from 'next/link'
import { useRouter } from 'next/router';
import { NavLinks } from '../../types/Request';

export default function NavBar({ loginStatus, fullName }: any) {

    const router = useRouter()

    return (
        <div className={styles.NavBar + ' flex justify-between ShadowContainer '}>
            {/* Left */}
            <div className={styles.Left + ' h-full flex items-center'}>
                {/* Website Name, Logo */}
                <div className={styles.Brand + ' H1 h-full flex flex-col justify-center'}>CHAL.ORG</div>
                {/* Navigation Menu */}
                {
                    navLinks.map((link: NavLinks, index) => {
                        if (!loginStatus && restrictedLink.includes(link.name)) {
                            return <div key={index}></div>
                        }
                        if (router.asPath.includes(link.path))
                            return (
                                <Link key={index} href={link.path} className=' text-white h-full flex flex-col justify-center px-4 no-underline bg-orange-500'>
                                    <div className='TextBold flex flex-col justify-center'>
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
                <ProfileDropdown loginStatus={loginStatus} fullName={fullName}></ProfileDropdown>
            </div>
        </div>
    )
}
