import styles from './css/AchievementCard.module.scss'
import { AiFillTrophy } from 'react-icons/ai'
import Image from 'next/image'

export default function AchievementCard(data: any) {

    return (
        <div className={styles['Card'] + ' ShadowContainer'}>

            <Image
                src="/pingpong.jpg"
                alt={'test'}
                fill
                className={styles['Img']}
            />

            <div className={styles['Title'] + ' S2Regular'}>
                CPE Monthly Coding Challenge (February 2023)
            </div>
            <div className={styles['Placement'] + ' H3'}>
                <AiFillTrophy className={styles['Badge']}></AiFillTrophy>
                <div>#1 Place!</div>
            </div>
            <div className={styles['Score'] + ' S2Regular'}>
                178 / 200 pts
            </div>
        </div>
    )


}