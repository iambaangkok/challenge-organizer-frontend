import Achievement from "../../components/profile/Achievement";
import InfoDashboard from "../../components/profile/InfoDashboard";
import Inventory from "../../components/profile/Inventory";
import styles from './index.module.css'

export default function Profile() {
    return (
        <>
            <div className='flex mt-8 space-x-4 justify-center'>
                <div className = {styles.Left}>
                    <InfoDashboard />
                </div>
                <div className= {styles.Right + ' flex flex-col space-y-4'} >
                    <Achievement />
                    <Inventory />
                </div>
            </div>
        </>

    )
}