import styles from './css/NavBar.module.css'
import Link from 'next/link'
import { Badge } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail';
import MenuDropDown from './MenuDropDown';
import { navLinks } from '../../lib/navLinks'

export default function NavBar() {

    return (
        <div className={styles.NavBar + ' ShadowContainer'}>
            <div className={styles.Left}>
                <div className={styles.Brand + ' H1'}>CRINGE.IO</div>
                    {
                        navLinks.map((link, index) => {
                            return (
                                <Link id = {link.name} className={styles.NavElement + ' H3'} href={link.path} key={index}>
                                    {link.name}
                                </Link>
                            )
                        })
                    }
            </div>
            <div className={styles.Right}>
                <Badge badgeContent={4} color="primary">
                    <MailIcon color="action" />
                </Badge>
                <MenuDropDown></MenuDropDown>
            </div>
        </div>





    )
}
