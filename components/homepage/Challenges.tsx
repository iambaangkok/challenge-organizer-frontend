import { challengeList } from '../../lib/challengeList'
import ChallengeCard from './ChallengeCard'
import styles from './css/Challenges.module.css'

export default function Challenges() {
    return (
        <div className={styles.Challenges}>
            <div className='flex justify-between'>
                <div>Challenges</div>
                <div>Create Challenges</div>
            </div>
            <div></div>
            <div className='flex flex-col space-y-2'>
                {challengeList.map((challenge, index) => {
                    return (
                        <ChallengeCard key={index} {...challenge} />
                    )
                }
                )}
            </div>
        </div>
    )
}