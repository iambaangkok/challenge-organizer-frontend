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
        <div className={styles.NavBar + ' flex justify-between ShadowContainer '}>
            <div className={styles.Left + ' h-full flex items-center'}>
                <div className={styles.Brand + ' H1 h-full flex flex-col justify-center'}>CRINGE.IO</div>
                {
                    navLinks.map((link, index) => {
                        if (router.asPath.includes(link.path))
                            return (
                                <Link href={link.path} className=' text-white h-full flex flex-col justify-center px-4 hover:bg-orange-500 ease-out duration-150'>

                                    <div id={link.name} className='TextBold flex flex-col justify-center' key={index}>
                                        {link.name}
                                    </div>
                                </Link>

                            )
                        else
                            return (
                                <Link href={link.path} className='text-white h-full flex flex-col justify-center px-4 no-underline hover:bg-orange-500 ease-out duration-150'>
                                    <div id={link.name} className='TextBold' key={index}>
                                        {link.name}
                                    </div>
                                </Link>
                            )
                    })
                }
            </div>
            <div className={styles.Right}>
                {
                    notiNum > 0 ?
                        <Badge badgeContent={notiNum} color="error">
                            <NotificationsIcon color="action" sx={{
                                fontSize: 26,
                                color: 'White'
                            }} />
                        </Badge>
                        :
                        <NotificationsIcon color="action" sx={{
                            fontSize: 26,
                            color: 'White'
                        }} />
                }

                <MenuDropDown></MenuDropDown>
            </div>
        </div>





    )
}
