import Head from "next/head";
import Image from "next/image";

import styles from "./css/style.module.scss";

import TaskDashboard from "../../components/homepage/TaskDashboard";

import bannerImage from "../../public/pingpong.jpg";
import { Box, Button, makeStyles, styled, Tab, Tabs } from "@mui/material";
import { CSSProperties, useEffect, useState } from "react";

export default function Challenge() {
    // Variables
    const [tabValue, setTabValue] = useState<number>(0);

    // Functions

    function fetchTabData() {}

    function handleTabChange(
        _event: React.ChangeEvent<{}>,
        newTabValue: number
    ) {
        setTabValue(newTabValue);
    }

    // Styled Components
    interface StyledTabProps {
        label: string;
        value: number;
        className: string;
    }

    const StyledTab = styled((props: StyledTabProps) => (
        <Tab disableRipple {...props} />
    ))(({ theme }) => ({
        // textTransform: "none",
        // fontWeight: theme.typography.fontWeightRegular,
        // fontSize: theme.typography.pxToRem(15),
        // marginRight: theme.spacing(1),
        // "&.Mui-selected": {
        //     color: "#ea7000",
        // },
        // "&.Mui-focusVisible": {
        //     backgroundColor: "#fa9c1d",
        // },
    }));

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
                    <StyledTab
                        label="Announcement"
                        value={0}
                        className={styles["tab-button"] + " TextBold"}
                    />
                    <StyledTab
                        label="Rules"
                        value={1}
                        className={styles["tab-button"] + " TextBold"}
                    />
                    <StyledTab
                        label="Reward"
                        value={2}
                        className={styles["tab-button"] + " TextBold"}
                    />
                    <StyledTab
                        label="Community"
                        value={3}
                        className={styles["tab-button"] + " TextBold"}
                    />
                    <StyledTab
                        label="Leaderboard"
                        value={4}
                        className={styles["tab-button"] + " TextBold"}
                    />
                </Tabs>
            </div>
            <div className={styles["content-container"]}>Content</div>
        </>
    );
}
