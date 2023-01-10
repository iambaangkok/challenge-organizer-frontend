import styles from './NavBar.module.css'
import Link from 'next/link'
import { Badge } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail';
import MenuDropDown from './MenuDropDown';
import { navLinks } from '../../lib/navLinks'

export default function NavBar() {

    return (
        <div className={styles.NavBar}>
            <div className={styles.Left}>
                <div className={styles.Brand}>RIVALs</div>
                <div className={styles.NavMenu}>
                    {
                        navLinks.map((link, index) => {
                            return (
                                <Link className={styles.NavElement} href={link.path} key={index}>
                                    {link.name}
                                </Link>
                            )
                        })
                    }
                </div>
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
