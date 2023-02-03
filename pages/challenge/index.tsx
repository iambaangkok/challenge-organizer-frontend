import Head from "next/head";
import Image from "next/image";

import styles from "./css/style.module.scss";

import TaskDashboard from "../../components/homepage/TaskDashboard";

import bannerImage from "../../public/pingpong.jpg";
import { Box, Button, makeStyles, styled, Tab, Tabs } from "@mui/material";
import { CSSProperties, useCallback, useEffect, useState } from "react";

import { testPostListsByTabs } from "../../lib/postListByTabs";
import { Star, StarBorder, StarHalf } from "@mui/icons-material";

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
        <div className={styles["main-container"]}>
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
                <div className={styles["posts-container"]}>
                    {tabData?.tabName}
                </div>
                <div className={styles["rightsidebar-container"]}>
                    <div className={styles["rightsideitem-container"]}>
                        <div className={styles["header-text"] + " H3"}>
                            Challenge Starts In
                        </div>
                        <div className={styles["divider"]}></div>
                        <div className={styles["content"]}></div>
                    </div>
                    <div className={styles["rightsideitem-container"]}>
                        <div className={styles["header-text"] + " H3"}>
                            About Challenge
                        </div>
                        <div className={styles["divider"]}></div>
                        <div className={styles["body"]}>
                            <div className={styles["description-container"]}>
                                <div
                                    className={
                                        styles["description"] + " S1Medium"
                                    }>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Commodi aliquam suscipit
                                    a, odit doloremque assumenda veniam, eos
                                    voluptas soluta esse accusamus deleniti.
                                    Voluptas provident ea aspernatur hic sequi,
                                    error iure.
                                </div>
                                <div
                                    className={
                                        styles["creationdate"] + " S2Regular"
                                    }>
                                    Created Jan 13, 2013 by BOBOZ
                                </div>
                            </div>
                            <div className={styles["info-container"]}>
                                <div className={styles["infotexts-container"]}>
                                    <div
                                        className={
                                            styles["field"] + " S1Medium"
                                        }>
                                        10000
                                    </div>
                                    <div
                                        className={
                                            styles["value"] + " S2Regular"
                                        }>
                                        Prize Pool
                                    </div>
                                </div>
                            </div>
                            <div className={styles["info-container"]}>
                                <div className={styles["infotexts-container"]}>
                                    <div
                                        className={
                                            styles["field"] + " S1Medium"
                                        }>
                                        Duo
                                    </div>
                                    <div
                                        className={
                                            styles["value"] + " S2Regular"
                                        }>
                                        Type
                                    </div>
                                </div>
                                <div className={styles["infotexts-container"]}>
                                    <div
                                        className={
                                            styles["field"] + " S1Medium"
                                        }>
                                        Tournament
                                    </div>
                                    <div
                                        className={
                                            styles["value"] + " S2Regular"
                                        }>
                                        Format
                                    </div>
                                </div>
                            </div>
                            <div className={styles["info-container"]}>
                                <div className={styles["infotexts-container"]}>
                                    <div
                                        className={
                                            styles["field"] + " S1Medium"
                                        }>
                                        Dec 25, 2023
                                    </div>
                                    <div
                                        className={
                                            styles["value"] + " S2Regular"
                                        }>
                                        Start Date
                                    </div>
                                </div>
                                <div className={styles["infotexts-container"]}>
                                    <div
                                        className={
                                            styles["field"] + " S1Medium"
                                        }>
                                        Dec 31, 2023
                                    </div>
                                    <div
                                        className={
                                            styles["value"] + " S2Regular"
                                        }>
                                        End Date
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles["divider"]}></div>
                        <div className={styles["footer"]}>
                            <div className={styles["info-container"]}>
                                <div className={styles["infotexts-container"]}>
                                    <div
                                        className={
                                            styles["field"] + " S1Medium"
                                        }>
                                        92 / 100
                                    </div>
                                    <div
                                        className={
                                            styles["value"] + " S2Regular"
                                        }>
                                        Participants
                                    </div>
                                </div>
                                <div className={styles["infotexts-container"]}>
                                    <div className={styles["icons-container"]}>
                                        <Star className={styles["icon"]} />
                                        <Star className={styles["icon"]} />
                                        <Star className={styles["icon"]} />
                                        <StarHalf className={styles["icon"]} />
                                        <StarBorder
                                            className={styles["icon"]}
                                        />
                                    </div>
                                    <div
                                        className={
                                            styles["value"] + " S2Regular"
                                        }>
                                        Rating
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
