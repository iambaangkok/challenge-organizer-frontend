import Head from "next/head";
import Image from "next/image";

import styles from "./css/style.module.scss";

import TaskDashboard from "../../components/homepage/TaskDashboard";

import bannerImage from "../../public/pingpong.jpg";
import { Box, Button, Tab, Tabs } from "@mui/material";
import { useEffect, useState } from "react";

export default function Home() {

    const [tabValue, setTabValue] = useState<number>(0);

    function handleTabChange(_event: React.ChangeEvent<{}>, newTabValue:number) {
        setTabValue(newTabValue);
    }

    return (
        <>
            <Head>
                <title>Challenge</title>
            </Head>
            <div className={styles["banner-container"]}>
                <Image src={bannerImage} alt="" className={styles["banner"]} />
            </div>
            <div
                className={
                    styles["challengemenu-container"] + " ShadowContainer"
                }>
                <div className={styles["title-container"]}>
                    <div className={styles["title-left"]}>
                        <div className={styles[""] + " H3"}>Challenges/</div>
                        <div className={styles["title-text-container"]}>
                            <div className={styles["title-text"] + " H1"}>
                                {"TitleText"}
                            </div>
                            <Button
                                id="StatusButton"
                                variant="contained"
                                className={
                                    styles["status-button"] +
                                    " button-primary H3"
                                }
                                disableElevation>
                                {"Join"}
                            </Button>
                        </div>
                    </div>
                    <div className={styles["title-right"]}>
                        <Button
                            id="EditChallengeButton"
                            variant="contained"
                            className={
                                styles["editchallenge-button"] +
                                " button-primary H3"
                            }
                            disableElevation>
                            {"Edit Challenge"}
                        </Button>
                    </div>
                </div>
                <Tabs
                    value={tabValue}
                    onChange={handleTabChange}
                    aria-label="Tabs"
                    className={styles["tabs-container"] + " TextBold"}>
                    <Tab label="Item One" value={0}/>
                    <Tab label="Item Two" value={1}/>
                    <Tab label="Item Three" value={2}/>
                </Tabs>
            </div>
            <div className={styles["content-container"]}>Content</div>
        </>
    );
}
