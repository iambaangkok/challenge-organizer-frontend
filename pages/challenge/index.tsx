import Head from "next/head";
import Image from "next/image";

import styles from "./css/style.module.scss";

import TaskDashboard from "../../components/homepage/TaskDashboard";

import bannerImage from "../../public/pingpong.jpg";
import { Box, Button, makeStyles, styled, Tab, Tabs } from "@mui/material";
import { CSSProperties, useCallback, useEffect, useState } from "react";

import { testPostListsByTabs } from "../../lib/postListByTabs";

export interface TabData {
    index: number;
    tabName: string;
    posts: [
        {
            author: {
                displayName: string;
                isHost: boolean;
            };
            contentMarkdown: boolean;
        }
    ];
}

export default function Challenge() {
    // Variables
    const [tabValue, setTabValue] = useState<number>(0);
    const [tabData, setTabData] = useState<TabData>();

    const [loading, setLoading] = useState(false);

    // Functions

    async function handleTabChange(
        _event: React.ChangeEvent<{}>,
        newTabValue: number
    ) {
        setLoading(true);

        setTabValue(newTabValue);

        setLoading(false);
    }

    // useCallbacks

    const fetchTabData = useCallback(async () => {
        // const tabsData = JSON.parse(testPostListsByTabs);
        const newTabData = testPostListsByTabs.find((x) => {
            return x.index == tabValue;
        }) as unknown as TabData;

        // console.log("challengePage.testPostListsByTabs : ")
        // console.log(testPostListsByTabs)
        // console.log("challengePage . fetchTabData()");
        // console.log(newTabData)

        setTabData(newTabData);
    }, [tabValue]);

    // useEffects

    useEffect(() => {
        fetchTabData();
    }, [fetchTabData]);

    useEffect(() => {}, [loading]);

    if (loading) {
        // return (
        //     <div>
        //         {/* <Skeleton variant="rectangular" width={1000} height={800} /> */}
        //     </div>
        // );
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
                    className={styles["tabs-container"]}
                    TabIndicatorProps={{ className: styles["tab-indicator"] }}>
                    {testPostListsByTabs.map((x, index) => (
                        <Tab
                            key={index}
                            label={x.tabName}
                            value={index}
                            className={styles["tab-button"] + " TextBold"}
                            disableRipple
                        />
                    ))}
                </Tabs>
            </div>
            <div className={styles["content-container"]}>
                {tabData?.tabName}
            </div>
        </>
    );
}
