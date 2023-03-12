import Head from 'next/head';
import Image from 'next/image';

import styles from './css/style.module.scss';

import bannerImage from '../../public/pingpong.jpg';
import { Button, Tab, Tabs, ThemeProvider } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';

import { testPostListsByTabs } from '../../lib/postListByTabs';
import { testChallengePageData } from '../../lib/challengePageData';
import CountdownTimer from '../../components/challenge/CountdownTimer';
import Link from 'next/link';
import StarRating from '../../components/challenge/StarRating';
import { useRouter } from 'next/router';
import axios from 'axios';
import { ButtonTheme } from '../../theme/Button';
import {
    fetchChallengeData,
    joinChallenge,
    leaveChallenge,
} from '../../services/challenge.services';
import { getFormattedDate } from '../../utils/utils';

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
        },
    ];
}

export interface ChallengePageData {
    challengeId: string;
    challengeTitle: string;
    description: string;

    type: string;
    format: string;

    participants: string[];
    numParticipants: number;
    host: string;
    banckImg: string;

    maxParticipants: number;
    banUser: object[];
    publishedStatus: boolean;

    timeStamp: string;
    startDate: string;
    endDate: string;
    closed: boolean;

    file: {
        user: object;
        path: string;
    };
    rewards: [
        {
            rankMin: number;
            rankMax: number;
            rewardAbsolute: number;
        },
    ];
    teams: {
        team_id: number;
        menubar: object[];
    };
    maxTeams: number;
    rating: number;

    schema_v: string;
    join: boolean;
}

export default function Challenge() {
    const router = useRouter();
    const { challengeTitle } = router.query;
    const CMUOAuthCallback = process.env.NEXT_PUBLIC_CMU_OAUTH_URL;

    // useStates

    const [loading, setLoading] = useState<boolean>(false);
    const [tabValue, setTabValue] = useState<number>(0);
    const [tabData, setTabData] = useState<TabData>();
    const [challengePageData, setChallengePageData] =
        useState<ChallengePageData>();

    const [displayName, setDisplayName] = useState('');

    // Functions

    const handleTabChange = (
        _event: React.ChangeEvent<{}>,
        newTabValue: number,
    ) => {
        setTabValue(newTabValue);
    };

    const handleJoin = useCallback(
        async (challengeTitle: string, displayName: string) => {
            setLoading(true);
            await joinChallenge(challengeTitle, displayName);
            setLoading(false);
        },
        [],
    );

    const handleLeave = useCallback(
        async (challengeTitle: string, displayName: string) => {
            setLoading(true);
            await leaveChallenge(challengeTitle, displayName);
            setLoading(false);
        },
        [],
    );

    // useCallbacks

    const getChallengeData = useCallback(async () => {
        setLoading(true);
        if (challengeTitle) {
            setChallengePageData(
                await fetchChallengeData(challengeTitle as string),
            );
        }
        setLoading(false);
    }, [challengeTitle]);

    const getTabData = useCallback(async () => {
        const newTabData = testPostListsByTabs.find((x) => {
            return x.index == tabValue;
        }) as unknown as TabData;

        setTabData(newTabData);
    }, [tabValue]);

    // useEffects

    useEffect(() => {
        getChallengeData();
        getTabData();
    }, [getChallengeData, getTabData, handleJoin, handleLeave]);

    useEffect(() => {
        if (localStorage.getItem('displayName') !== null) {
            setDisplayName(`${localStorage.getItem('displayName')}`);
        } else {
            setDisplayName(``);
        }
        console.log(displayName);
    }, [displayName]);

    const userIsJoined = challengePageData?.participants.includes(displayName);

    return (
        <ThemeProvider theme={ButtonTheme}>
            <div className={styles['main-container']}>
                <Head>
                    <title>
                        {'Challenge |' +
                            (challengePageData
                                ? challengePageData.challengeTitle
                                : 'TitleText')}
                    </title>
                </Head>
                <div className={styles['banner-container']}>
                    <Image
                        src={bannerImage}
                        alt=""
                        className={styles['banner']}
                    />
                </div>
                <div
                    className={
                        styles['challengemenu-container'] + ' ShadowContainer'
                    }
                >
                    <div className={styles['title-container']}>
                        <div className={styles['title-left']}>
                            <div className={styles[''] + ' H3'}>
                                Challenges/
                            </div>
                            <div className={styles['title-text-container']}>
                                <div className={styles['title-text'] + ' H1'}>
                                    {challengePageData
                                        ? challengePageData.challengeTitle
                                        : 'TitleText'}
                                </div>

                                {displayName === '' ? (
                                    <Link
                                        id="Login"
                                        href={CMUOAuthCallback}
                                        className="no-underline"
                                    >
                                        <Button
                                            id="StatusButton"
                                            variant="contained"
                                            className={
                                                styles['status-button'] +
                                                ' button-primary H3'
                                            }
                                            disableElevation
                                        >
                                            {'Join'}
                                        </Button>
                                    </Link>
                                ) : userIsJoined ? (
                                    <Button
                                        onClick={() => {
                                            handleLeave(
                                                challengeTitle as string,
                                                displayName,
                                            );
                                        }}
                                        id="StatusButton"
                                        variant="contained"
                                        className={
                                            styles['status-button'] +
                                            ' button-primary H3'
                                        }
                                        disableElevation
                                    >
                                        {'Leave'}
                                    </Button>
                                ) : (
                                    <Button
                                        onClick={() => {
                                            handleJoin(
                                                challengeTitle as string,
                                                displayName,
                                            );
                                        }}
                                        id="StatusButton"
                                        variant="contained"
                                        className={
                                            styles['status-button'] +
                                            ' button-primary H3'
                                        }
                                        disableElevation
                                    >
                                        {'Join'}
                                    </Button>
                                )}
                            </div>
                        </div>
                        <div className={styles['title-right']}>
                            {displayName &&
                            challengePageData?.host &&
                            displayName == challengePageData.host ? (
                                <Link
                                    id={'EditChallengeButton'}
                                    href={{
                                        pathname: '/managechallenge',
                                        query: { challengeTitle: challengeTitle },
                                    }}
                                    style={{
                                        textDecoration: 'none',
                                    }}
                                >
                                    <Button
                                        variant="contained"
                                        className={
                                            styles['editchallenge-button'] +
                                            ' button-primary H3'
                                        }
                                        disableElevation
                                    >
                                        {'manage Challenge'}
                                    </Button>
                                </Link>
                            ) : (
                                ''
                            )}
                        </div>
                    </div>
                    <Tabs
                        value={tabValue}
                        onChange={handleTabChange}
                        aria-label="Tabs"
                        className={styles['tabs-container']}
                        TabIndicatorProps={{
                            className: styles['tab-indicator'],
                        }}
                    >
                        {testPostListsByTabs.map((x, index) => (
                            <Tab
                                key={index}
                                label={x.tabName}
                                value={index}
                                className={styles['tab-button'] + ' TextBold'}
                                disableRipple
                            />
                        ))}
                    </Tabs>
                </div>
                <div className={styles['content-container']}>
                    <div
                        className={
                            styles['posts-container'] +
                            ' TextRegular' +
                            ' ShadowContainer'
                        }
                    >
                        {tabData?.tabName + ' tab posts'}
                    </div>
                    <div className={styles['rightsidebar-container']}>
                        <div
                            className={
                                styles['rightsideitem-container'] +
                                ' ShadowContainer'
                            }
                        >
                            <div className={styles['header-text'] + ' H3'}>
                                Challenge Starts In
                            </div>
                            <div className={styles['divider']}></div>
                            <CountdownTimer
                                dateTime={
                                    challengePageData
                                        ? challengePageData.startDate
                                        : '1970-01-01'
                                }
                                dateTimeFormat={'YYYY-MM-DDTHH:mm:ss.sssZ'}
                            ></CountdownTimer>
                        </div>
                        <div
                            className={
                                styles['rightsideitem-container'] +
                                ' ShadowContainer'
                            }
                        >
                            <div className={styles['header-text'] + ' H3'}>
                                About Challenge
                            </div>
                            <div className={styles['divider']}></div>
                            <div className={styles['body']}>
                                <div
                                    className={styles['description-container']}
                                >
                                    <div
                                        className={
                                            styles['description'] + ' S1Medium'
                                        }
                                    >
                                        {challengePageData
                                            ? challengePageData.description
                                            : 'description'}
                                    </div>
                                    <div
                                        className={
                                            styles['creationdate'] +
                                            ' S2Regular'
                                        }
                                    >
                                        Last modified{' '}
                                        {challengePageData
                                            ? getFormattedDate(
                                                  challengePageData.timeStamp,
                                              )
                                            : 'N/A'}{' '}
                                        by{' '}
                                        <Link
                                            id={'HostName'}
                                            href={{
                                                pathname: '/user',
                                                query: { id: 'USERID' },
                                            }}
                                            className={styles['hostname']}
                                        >
                                            {challengePageData
                                                ? challengePageData.host
                                                : 'N/A'}
                                        </Link>
                                    </div>
                                </div>
                                <div className={styles['info-container']}>
                                    <div
                                        className={
                                            styles['infotexts-container']
                                        }
                                    >
                                        <div
                                            className={styles['value'] + ' H3'}
                                        >
                                            {challengePageData
                                                ? 'N/A'
                                                : // ? challengePageData.prizePool
                                                  'N/A'}
                                        </div>
                                        <div
                                            className={
                                                styles['field'] + ' S2Regular'
                                            }
                                        >
                                            Prize Pool
                                        </div>
                                    </div>
                                </div>
                                <div className={styles['info-container']}>
                                    <div
                                        className={
                                            styles['infotexts-container']
                                        }
                                    >
                                        <div
                                            className={
                                                styles['value'] + ' S1Medium'
                                            }
                                        >
                                            {challengePageData
                                                ? challengePageData.type
                                                : 'N/A'}
                                        </div>
                                        <div
                                            className={
                                                styles['field'] + ' S2Regular'
                                            }
                                        >
                                            Type
                                        </div>
                                    </div>
                                    <div
                                        className={
                                            styles['infotexts-container']
                                        }
                                    >
                                        <div
                                            className={
                                                styles['value'] + ' S1Medium'
                                            }
                                        >
                                            {challengePageData
                                                ? challengePageData.format
                                                : 'N/A'}
                                        </div>
                                        <div
                                            className={
                                                styles['field'] + ' S2Regular'
                                            }
                                        >
                                            Format
                                        </div>
                                    </div>
                                </div>
                                <div className={styles['info-container']}>
                                    <div
                                        className={
                                            styles['infotexts-container']
                                        }
                                    >
                                        <div
                                            className={
                                                styles['value'] + ' S1Medium'
                                            }
                                        >
                                            {challengePageData
                                                ? getFormattedDate(
                                                      challengePageData.startDate,
                                                  )
                                                : 'N/A'}
                                        </div>
                                        <div
                                            className={
                                                styles['field'] + ' S2Regular'
                                            }
                                        >
                                            Start Date
                                        </div>
                                    </div>
                                    <div
                                        className={
                                            styles['infotexts-container']
                                        }
                                    >
                                        <div
                                            className={
                                                styles['value'] + ' S1Medium'
                                            }
                                        >
                                            {challengePageData
                                                ? getFormattedDate(
                                                      challengePageData.endDate,
                                                  )
                                                : 'N/A'}
                                        </div>
                                        <div
                                            className={
                                                styles['field'] + ' S2Regular'
                                            }
                                        >
                                            End Date
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles['divider']}></div>
                            <div className={styles['footer']}>
                                <div className={styles['info-container']}>
                                    <div
                                        className={
                                            styles['infotexts-container']
                                        }
                                    >
                                        <div
                                            className={
                                                styles['value'] + ' S1Medium'
                                            }
                                        >
                                            {challengePageData
                                                ? `${challengePageData.numParticipants} / ${challengePageData.maxParticipants}`
                                                : 'N/A'}
                                        </div>
                                        <div
                                            className={
                                                styles['field'] + ' S2Regular'
                                            }
                                        >
                                            Participants
                                        </div>
                                    </div>
                                    <div
                                        className={
                                            styles['infotexts-container']
                                        }
                                    >
                                        <StarRating
                                            rating={
                                                challengePageData
                                                    ? challengePageData.rating
                                                    : 0
                                            }
                                        ></StarRating>
                                        <div
                                            className={
                                                styles['field'] + ' S2Regular'
                                            }
                                        >
                                            Rating
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
}
