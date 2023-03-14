import styles from './css/ChallengeCard.module.scss';
import Rating from '@mui/material/Rating';
import Link from 'next/link';
import Image from 'next/image';
import { BiUser } from 'react-icons/bi/';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { ChallengeData } from '../../types/DataType';

export default function ChallengeCard(data: ChallengeData) {
    const startDate = data.startDate ? new Date(data.startDate).toLocaleDateString() : 'TBD';
    const endDate = data.endDate ? new Date(data.endDate).toLocaleDateString() : 'TBD';

    return (
        // Each challenge card routes to its own challenge page
        <Link
            id={'ChallengeCard'}
            href={{
                pathname: '/challenge',
                query: { challengeTitle: data.challengeTitle },
            }}
            className="no-underline"
        >
            {/* Challenge Card */}
            <div className={styles['ChallengeCard']}>
                {/* Background Image */}
                <Image
                    src="/pingpong.jpg"
                    alt={'test'}
                    fill
                    className={styles['Img']}
                />
                {/* Challenge Info */}
                <div className={styles['BottomHalf']}>
                    <div className={styles['Top']}>
                        <div className={styles['Left']}>
                            <div className={styles['ChallengeName'] + ' H3'}>
                                {data.challengeTitle}
                            </div>
                            <Rating
                                name="simple-controlled"
                                value={data.ratings}
                                readOnly
                                precision={0.1}
                            />
                        </div>
                        <div>
                            <div className="flex space-x-4">
                                <div className={styles['Type'] + ' TextMedium'}>
                                    Type: {data.type}
                                </div>
                                <div className={styles['Type'] + ' TextMedium'}>
                                    Format: {data.format}
                                </div>
                                <div className={styles['Type'] + ' TextMedium'}>
                                    Date: {startDate} - {endDate}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles['Bottom']}>
                        <div className={styles['ChallengeDescription']}>
                            <div
                                className={
                                    styles['Description'] + ' TextRegular'
                                }
                            >
                                {data.description}
                            </div>
                        </div>

                        {/* ChallengeStatus : Number of participants , Open/Closed */}
                        <div className={styles['ChallengeStatus']}>
                            {data.join && (
                                <div className={styles['Joined'] + ' TextBold'}>
                                    <div>Joined</div> <BsFillCheckCircleFill />
                                </div>
                            )}
                            <div
                                className={
                                    styles['NumParticipants'] + ' TextBold'
                                }
                            >
                                <BiUser className={styles['Icon']} />
                                {data.numParticipants}/{data.maxParticipants}
                            </div>
                            {data.closed && (
                                <div className={styles['Closed'] + ' TextBold'}>
                                    Closed
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}
