import styles from './css/ChallengeCard.module.scss';
import Rating from '@mui/material/Rating';
import Link from 'next/link';
import Image from 'next/image';
import { BiUser } from 'react-icons/bi/';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { ChallengeData } from '../../types/DataType';   
import Img from '../../../challenge-organizer-backend/uploads/bannerimages/1678876233226-177237919.jpg';
import { useEffect } from 'react';

export default function ChallengeCard(data: ChallengeData) {
    const startDate = data.startDate
        ? new Date(data.startDate).toLocaleDateString()
        : 'TBD';
    const endDate = data.endDate
        ? new Date(data.endDate).toLocaleDateString()
        : 'TBD';

    // const srcPath = data.bannerImg
    //     ? '../../../challenge-organizer-backend/' + data.bannerImg.replaceAll('\\', '/')
    //     : '/pingpong.jpg';

    // const srcPath = 'D:/Study/3rd Year Term 2-2565/Software Engineer/Project/challenge-organizer-backend/uploads/bannerimages/1678877826672-497272490.jpg'
    const srcPath = 'http://localhost:3030/' + data.bannerImg?.replaceAll('\\' , '/');

    // const url = require(srcPath);

    // useEffect(() => {
    //     import(srcPath).then((resp) => {
    //         console.log(resp);
    //     });
    // } , []);
    // const srcPath = '/pingpong.jpg'

    console.log(srcPath);
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
                <Image src={srcPath} alt={'test'} fill className={styles['Img']} />
                {/* <img src={Img} alt={'test'} className={styles['Img']} /> */}
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
                                {data.numParticipants}
                                {data.maxParticipants !== 0 && (
                                    <>/{data.maxParticipants}</>
                                )}
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
