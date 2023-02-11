import { style } from '@mui/system'
import styles from './css/CreationPage.module.css'

export default function ParticipantList (){
    return(
        <div>
        <div className = {styles.cr_ActivePartipant}>ActiveParticipants</div>
        <div>
            <div className = {styles.cr_TableHead}>
                <div className = {styles.cr_TableHeadText}>#</div>
                <div className = {styles.cr_TableHeadText}>Participant ID</div>
                <div className = {styles.cr_TableHeadText}>Participant Name</div>
                <div className = {styles.cr_TableHeadText}>Action</div>
            </div>
        </div>
        </div>

    )
}