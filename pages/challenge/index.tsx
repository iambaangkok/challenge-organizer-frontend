import Head from "next/head";
import Image from "next/image";

import styles from "./css/style.module.scss";

import bannerImage from "../../public/pingpong.jpg";
import { Box, Button, makeStyles, styled, Tab, Tabs } from "@mui/material";
import { CSSProperties, useCallback, useEffect, useState } from "react";

import { testPostListsByTabs } from "../../lib/postListByTabs";
import { testChallengePageData } from "../../lib/challengePageData";
import { Star, StarBorder, StarHalf } from "@mui/icons-material";
import CountdownTimer from "../../components/challenge/CountdownTimer";
import Link from "next/link";

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

export interface ChallengePageData {
    title: string;
    description: string;
    host: string;
    creationDate: string;
    prizePool: number;
    type: string;
    format: string;
    startDate: string;
    endDate: string;
    maxParticipantCount: number;
    participantCount: number;
    rating: number;
}

export default function Challenge() {
    // Variables
    const [tabValue, setTabValue] = useState<number>(0);
    const [tabData, setTabData] = useState<TabData>();
    const [challengePageData, setChallengePageData] =
        useState<ChallengePageData>();

    // Functions

    async function handleTabChange(
        _event: React.ChangeEvent<{}>,
        newTabValue: number
    ) {
        setTabValue(newTabValue);
    }

    // useCallbacks

    const fetchTabData = useCallback(async () => {
        const newTabData = testPostListsByTabs.find((x) => {
            return x.index == tabValue;
        }) as unknown as TabData;

        setTabData(newTabData);
        console.log(typeof newTabData);
    }, [tabValue]);

    // useEffects

    useEffect(() => {
        // fetchChallengeData will later be changed to useCallback
        const fetchChallengeData = () => {
            const newChallengePageData =
                testChallengePageData as unknown as ChallengePageData;

            console.log(newChallengePageData);
            console.log(typeof newChallengePageData);

            setChallengePageData(newChallengePageData);
        };

        fetchChallengeData();

        return () => {};
    }, []);

    useEffect(() => {
        fetchTabData();
    }, [fetchTabData]);

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
                                {challengePageData
                                    ? challengePageData.title
                                    : "TitleText"}
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
                <div
                    className={
                        styles["posts-container"] +
                        " TextRegular" +
                        " ShadowContainer"
                    }>
                    {tabData?.tabName + " tab posts"}
                </div>
                <div className={styles["rightsidebar-container"]}>
                    <div
                        className={
                            styles["rightsideitem-container"] +
                            " ShadowContainer"
                        }>
                        <div className={styles["header-text"] + " H3"}>
                            Challenge Starts In
                        </div>
                        <div className={styles["divider"]}></div>
                        <CountdownTimer
                            dateTime={
                                challengePageData
                                    ? challengePageData.startDate
                                    : "1970-01-01"
                            }
                            dateTimeFormat={
                                "YYYY-MM-DDTHH:mm:ss.sssZ"
                            }></CountdownTimer>
                    </div>
                    <div
                        className={
                            styles["rightsideitem-container"] +
                            " ShadowContainer"
                        }>
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
                                    {challengePageData
                                        ? challengePageData.description
                                        : "description"}
                                </div>
                                <div
                                    className={
                                        styles["creationdate"] + " S2Regular"
                                    }>
                                    Created Jan 13, 2013 by{" "}
                                    <Link
                                        id={"HostName"}
                                        href={{
                                            pathname: "/user",
                                            query: { id: "USERID" },
                                        }}
                                        className={styles["hostname"]}>
                                        {challengePageData
                                            ? challengePageData.host
                                            : "HOSTNAME"}
                                    </Link>
                                </div>
                            </div>
                            <div className={styles["info-container"]}>
                                <div className={styles["infotexts-container"]}>
                                    <div className={styles["value"] + " H3"}>
                                        {challengePageData
                                            ? challengePageData.prizePool
                                            : "N/A"}
                                    </div>
                                    <div
                                        className={
                                            styles["field"] + " S2Regular"
                                        }>
                                        Prize Pool
                                    </div>
                                </div>
                            </div>
                            <div className={styles["info-container"]}>
                                <div className={styles["infotexts-container"]}>
                                    <div
                                        className={
                                            styles["value"] + " S1Medium"
                                        }>
                                        {challengePageData
                                            ? challengePageData.type
                                            : "N/A"}
                                    </div>
                                    <div
                                        className={
                                            styles["field"] + " S2Regular"
                                        }>
                                        Type
                                    </div>
                                </div>
                                <div className={styles["infotexts-container"]}>
                                    <div
                                        className={
                                            styles["value"] + " S1Medium"
                                        }>
                                        {challengePageData
                                            ? challengePageData.format
                                            : "N/A"}
                                    </div>
                                    <div
                                        className={
                                            styles["field"] + " S2Regular"
                                        }>
                                        Format
                                    </div>
                                </div>
                            </div>
                            <div className={styles["info-container"]}>
                                <div className={styles["infotexts-container"]}>
                                    <div
                                        className={
                                            styles["value"] + " S1Medium"
                                        }>
                                        {challengePageData
                                            ? challengePageData.startDate
                                            : "N/A"}
                                    </div>
                                    <div
                                        className={
                                            styles["field"] + " S2Regular"
                                        }>
                                        Start Date
                                    </div>
                                </div>
                                <div className={styles["infotexts-container"]}>
                                    <div
                                        className={
                                            styles["value"] + " S1Medium"
                                        }>
                                        {challengePageData
                                            ? challengePageData.endDate
                                            : "N/A"}
                                    </div>
                                    <div
                                        className={
                                            styles["field"] + " S2Regular"
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
                                            styles["value"] + " S1Medium"
                                        }>
                                        {challengePageData
                                            ? `${challengePageData.participantCount} / ${challengePageData.maxParticipantCount}`
                                            : "N/A"}
                                    </div>
                                    <div
                                        className={
                                            styles["field"] + " S2Regular"
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
                                            styles["field"] + " S2Regular"
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
