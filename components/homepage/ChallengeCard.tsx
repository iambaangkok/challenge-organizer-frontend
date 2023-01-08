import styles from './ChallengeCard.module.css'
import { Rating } from '@mui/material';
import AccessibilityIcon from '@mui/icons-material/Accessibility';

// Fetch from API
const rating = 3
const ChallengeName = 'CPE Dicko Choco Challenge'
const numParticipants = 28
const Type = 'Single'
const Format = 'Tournament'
const Date = 'Jan 5 - Jan 12'
const Description = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis incidunt unde perferendis commodi nihil ad, odio recusandae laboriosam quos libero modi sed fuga in dolor nesciunt ducimus alias. Unde, odit.'

export default function ChallengeCard() {
    return (
        <div className={styles.ChallengeCard}>
            <div className={styles.BottomHalf}>
                <div className={styles.Top}>
                    <div className={styles.Left}>
                        <div className={styles.ChallengeName}>
                            {ChallengeName}
                        </div>
                        <Rating
                            name="simple-controlled"
                            value={rating}
                            readOnly
                        />
                    </div>
                    <div className={styles.ChallengeType}>
                        <div className={styles.Sub}>
                            <div className={styles.Type}>Type: {Type}</div>
                            <div className={styles.Type}>Format: {Format}</div>
                            <div className={styles.Type}>Date: {Date}</div>
                        </div>
                    </div>
                </div>
                <div className={styles.Bottom}>
                    <div className={styles.Left2}>
                        <div className={styles.Description}>
                            {Description}
                        </div>
                    </div>
                    <div className={styles.Right}>
                        <div className={styles.Join}>
                            Joined!
                        </div>
                        <AccessibilityIcon className={styles.Icon}></AccessibilityIcon>
                        <div className={styles.numParticipants}>
                            {numParticipants}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}