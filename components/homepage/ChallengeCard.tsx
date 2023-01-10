import styles from './css/ChallengeCard.module.css'
import { Rating } from '@mui/material';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import Link from 'next/link';

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
        // <Link href='/' className='no-underline'>
            <div className={styles.ChallengeCard + ' select-none'}>
                <div className={styles.BottomHalf}>
                    <div className={styles.Top}>
                        <div className={styles.Left}>
                            <div className={styles.ChallengeName + ' H3'}>
                                {data.challengeName}
                            </div>
                            <Rating
                                name="simple-controlled"
                                value={data.rating}
                                readOnly
                            />
                        </div>
                        <div>
                            <div className='flex space-x-4'>
                                <div className={styles.Type + ' TextMedium'}>Type: {data.type}</div>
                                <div className={styles.Type + ' TextMedium'}>Format: {data.format}</div>
                                <div className={styles.Type + ' TextMedium'}>Date: {data.date}</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.Bottom}>
                        <div className={styles.Left2}>
                            <div className={styles.Description + ' TextRegular'}>
                                {data.description}
                            </div>
                        </div>
                        <div className='flex'>
                            {data.joined &&
                                <div className={styles.Join + ' TextBold'}>
                                    Joined!
                                </div>
                            }
                            <AccessibilityIcon className={styles.Icon}></AccessibilityIcon>
                            <div className={styles.numParticipants + ' TextBold'}>
                                {data.numParticipants} / {data.maxParticipants}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        // </Link>

    )
}