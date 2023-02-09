import styles from './css/NavBar.module.scss'

import Link from 'next/link'
import { useRouter } from 'next/router';

import ProfileDropdown from './ProfileDropdown';
import Notification from './Notification';

import { navLinks, restrictedLink } from '../../lib/navLinks'
import { notificationList } from "../../lib/notificationList"

import { NavLinks } from '../../types/Request';

export default function NavBar({ loginStatus, fullName }: any) {

    const router = useRouter()

    // fetch notification list
    // axios.get()

    return (
        <div className={styles.NavBar + ' ShadowContainer'}>
            {/* Left */}
            <div className={styles.Left}>
                {/* Website Name, Logo */}
                <div className={styles.Brand + ' H1'}>CHAL.ORG</div>
                {/* Navigation Menu */}
                {
                    navLinks.map((link: NavLinks, index) => {
                        if (!loginStatus && restrictedLink.includes(link.name)) {
                            return <div key={index}></div>
                        }
                        if (router.asPath.includes(link.path))
                            return (
                                <Link key={index} href={link.path} className={styles.LinkSelected}>
                                    <div className='TextBold'>
                                        {link.name}
                                    </div>
                                </Link>

                            )
                        else
                            return (
                                <Link key={index} href={link.path} className={styles.LinkNotSelected}>
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
                    badgeContent={notificationList.length} notificationList={notificationList} />
                <ProfileDropdown loginStatus={loginStatus} fullName={fullName}></ProfileDropdown>
            </div>
        </div>
    )
}
