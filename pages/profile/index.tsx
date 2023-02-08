import Achievement from "../../components/profile/Achievement";
import InfoDashboard from "../../components/profile/InfoDashboard";
import Inventory from "../../components/profile/Inventory";
import styles from './index.module.css'
import Head from 'next/head'

export default function Profile() {
    return (
        <>
            <Head>
                <title>Profile</title>
            </Head>
            <div className='flex w-full mt-8 space-x-4 justify-center'>
                <InfoDashboard />
                <div className={styles.Right + ' flex flex-col justify-between space-y-4'} >
                    <Achievement />
                    <Inventory />
                </div>
            </div>
        </>

    )
}