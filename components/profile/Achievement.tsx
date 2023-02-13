import { Button, Pagination } from '@mui/material'
import styles from './css/Achievement.module.css'

export default function Achievement() {
    return (
        <div className={styles.Achievement + ' ShadowContainer p-6 flex flex-col'}>
            {/* title and button*/}
            <div className='flex justify-between items-center'>
                <div className='TextMedium'>
                    Recently Completed Challenge
                </div>
                <Button>
                    See All
                </Button>
            </div>
            {/* some elements */}
            <div>
                
            </div>
            {/* pagination */}
            <div className = 'self-center'>
                <Pagination count={10} color="primary" showFirstButton showLastButton />
            </div>

        </div>
    )
}