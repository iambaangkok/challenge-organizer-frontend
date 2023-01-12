import styles from './css/NavBar.module.css'
import Link from 'next/link'
import { Badge } from '@mui/material'
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuDropDown from './MenuDropDown';
import { navLinks } from '../../lib/navLinks'
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function NavBar() {

    const router = useRouter()

    const [notiNum, setNotiNum] = useState<number>(1)

    return (
        <div className={styles.NavBar + ' ShadowContainer'}>
            <div className={styles.Left}>
                <div className={styles.Brand + ' H1'}>CRINGE.IO</div>
                {
                    navLinks.map((link, index) => {
                        if (router.asPath.includes(link.path))
                            return (
                                <Link id={link.name} className={styles.NavElementUnderline + ' TextBold'} href={link.path} key={index}>
                                    {link.name}
                                </Link>
                            )
                        else
                            return (
                                <Link id={link.name} className={styles.NavElement + ' TextBold'} href={link.path} key={index}>
                                    {link.name}
                                </Link>
                            )
                    })
                }
            </div>
            <div className={styles.Right}>
                {
                    notiNum > 0 ?
                        <Badge badgeContent={notiNum} color="error">
                            <NotificationsIcon color="action" sx = {{
                                fontSize: 26
                            }}/>
                        </Badge>
                        :
                        <NotificationsIcon color="action" sx = {{
                            fontSize: 26
                        }} />
                }

                <MenuDropDown></MenuDropDown>
            </div>
        </div>





    )
}
