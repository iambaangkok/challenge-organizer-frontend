import { Pagination } from '@mui/material'
import styles from './css/Inventory.module.css'

export default function Inventory() {
    return (
        <div className={styles.Inventory + ' ShadowContainer p-6 flex flex-col'}>
            <div className = 'TextMedium'>
                Inventory
            </div>

            <div className = 'self-center'>
                <Pagination count={10} color="primary" showFirstButton showLastButton />
            </div>
        </div>
    )
}