import Head from "next/head";
import Image from "next/image";

import styles from "./css/style.module.scss";

import TaskDashboard from "../../components/homepage/TaskDashboard";

import bannerImage from "../../public/pingpong.jpg";

export default function Home() {
    return (
        <>
            <Head>
                <title>Challenge</title>
            </Head>
            <div
                className={
                    "main-container flex justify-center items-start space-x-4 mt-6"
                }>
                {/* placeholder image */}
                <div className={styles["banner-container"]}>
                    <Image
                        src={bannerImage}
                        alt=""
                        className={styles['banner']}
                    />
                </div>
                <div className={styles["title-container"]}>
                    <div className={styles["title-left"]}>
                        <div className={styles[""]}></div>
                        <div className={styles["title-text-container"]}>
                            <div className={styles["title-text"]}></div>
                            <button className={styles["status"]}></button>
                        </div>
                    </div>
                    <div className={styles["title-right"]}>
                        <button className={styles[""]}></button>
                    </div>
                </div>
                <div className={styles["tabs-container"]}>
                    <button className={styles["tab-button"]}>
                        Announcement
                    </button>
                    <button className={styles["tab-button"]}>Rules</button>
                    <button className={styles["tab-button"]}>Rewards</button>
                    <button className={styles["tab-button"]}>
                        Leaderboard
                    </button>
                </div>
                <div className={styles["content-container"]}></div>
            </div>
        </>
    );
}
