import styles from './css/ChallengeCard.module.css'
import { Rating } from '@mui/material';
import AccessibilityIcon from '@mui/icons-material/Accessibility';

// Fetch from API
// const rating = 3
// const ChallengeName = 'CPE Dicko Choco Challenge'
// const numParticipants = 28
// const Type = 'Single'
// const Format = 'Tournament'
// const Date = 'Jan 5 - Jan 12'
// const Description = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis incidunt unde perferendis commodi nihil ad, odio recusandae laboriosam quos libero modi sed fuga in dolor nesciunt ducimus alias. Unde, odit.'

interface challengeData {
    challengeName: string
    type: string
    format: string
    description: string
    date: string
    numParticipants: number
    maxParticipants: number
    rating: number
    joined: boolean
    closed: boolean
}

export default function ChallengeCard(data: challengeData) {
    return (
        <div className={styles.ChallengeCard}>
            <div className={styles.BottomHalf}>
                <div className={styles.Top}>
                    <div className={styles.Left}>
                        <div className={styles.ChallengeName}>
                            {data.challengeName}
                        </div>
                        <Rating
                            name="simple-controlled"
                            value={data.rating}
                            readOnly
                        />
                    </div>
                    <div className={styles.ChallengeType}>
                        <div className={styles.Sub}>
                            <div className={styles.Type}>Type: {data.type}</div>
                            <div className={styles.Type}>Format: {data.format}</div>
                            <div className={styles.Type}>Date: {data.date}</div>
                        </div>
                    </div>
                </div>
                <div className={styles.Bottom}>
                    <div className={styles.Left2}>
                        <div className={styles.Description}>
                            {data.description}
                        </div>
                    </div>
                    <div className='flex'>
                        {data.joined &&
                            <div className={styles.Join}>
                                Joined!
                            </div>
                        }
                        <AccessibilityIcon className={styles.Icon}></AccessibilityIcon>
                        <div className={styles.numParticipants}>
                            {data.numParticipants} / {data.maxParticipants}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}