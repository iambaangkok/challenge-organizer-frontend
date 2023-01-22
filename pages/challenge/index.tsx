import Head from "next/head";
import Image from "next/image";
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
                <Image src={bannerImage} alt="" />
                <div className={"title-container"}>
                    <div className={"title-left"}>
                        <div className={""}></div>
                        <div className={"title-text-container"}>
                            <div className={"title-text"}></div>
                            <button className={"status"}></button>
                        </div>
                    </div>
                    <div className={"title-right"}>
                        <button className={""}></button>
                    </div>
                </div>
                <div className={"tabs-container"}>
                    <button className={"tab-button"}>Announcement</button>
                    <button className={"tab-button"}>Rules</button>
                    <button className={"tab-button"}>Rewards</button>
                    <button className={"tab-button"}>Leaderboard</button>
                </div>
                <div className={"content-container"}></div>
            </div>
        </>
    );
}
