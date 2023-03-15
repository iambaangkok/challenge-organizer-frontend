import { Button, Pagination } from '@mui/material'
import AchievementCard from './AchievementCard';
import styles from './css/Achievement.module.css'

export default function Achievement() {
    return (
        <div
            className={
                styles['Achievement'] + ' ShadowContainer p-6'
            }
        >
            {/* title and button*/}
            <div className="flex justify-between items-center">
                <div className="H3">Recently Completed Challenge</div>
                <Button>See All</Button>
            </div>
            {/* some elements */}
            <div className={styles['AchievementCardList']}>
                <AchievementCard></AchievementCard>
                <AchievementCard></AchievementCard>
            </div>
            {/* pagination */}
            <div className="self-center">
                <Pagination
                    count={10}
                    color="primary"
                    showFirstButton
                    showLastButton
                />
            </div>
        </div>
    );
}
