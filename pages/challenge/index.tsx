import Head from 'next/head';
import Image from 'next/image';

import styles from './css/style.module.scss';

import bannerImage from '../../public/pingpong.jpg';
import { Button, Tab, Tabs, ThemeProvider } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';

import { testPostListsByTabs } from '../../lib/postListByTabs';
import CountdownTimer from '../../components/challenge/CountdownTimer';
import Link from 'next/link';
import StarRating from '../../components/challenge/StarRating';
import { useRouter } from 'next/router';
import { ButtonTheme } from '../../theme/Button';
import {
    fetchChallengeData,
    joinChallenge,
    leaveChallenge,
} from '../../services/challenge.services';
import { getFormattedDate } from '../../utils/utils';
import PostModule from '../../components/challenge/PostModule';
import PostEditor from '../../components/challenge/PostEditor';
import { TabData, ChallengePageData } from '../../types/DataType';

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

    const [displayName, setDisplayName] = useState<string | null>('');

    // Functions

    const handleTabChange = (
        _event: React.ChangeEvent<{}>,
        newTabValue: number,
    ) => {
        setTabValue(newTabValue);
    };

    const getChallengeData = useCallback(async () => {
        setLoading(true);
        if (challengeTitle) {
            setChallengePageData(
                await fetchChallengeData(challengeTitle as string),
            );
        }
        setLoading(false);
    }, [challengeTitle]);

    const handleJoin = useCallback(
        async (challengeTitle: string, displayName: string | null) => {
            if (displayName !== null) {
                setLoading(true);
                await joinChallenge(challengeTitle, displayName);
                await getChallengeData();
                setLoading(false);
            }
        },
        [getChallengeData],
    );

    const handleLeave = useCallback(
        async (challengeTitle: string, displayName: string | null) => {
            if (displayName !== null) {
                setLoading(true);
                await leaveChallenge(challengeTitle, displayName);
                await getChallengeData();
                setLoading(false);
            }
        },
        [getChallengeData],
    );

    // useCallbacks
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
            setDisplayName(null);
        }
    }, []);

    const userIsJoined =
        displayName !== null
            ? challengePageData?.participants
                  .map((x, index) => x.displayName)
                  .includes(displayName)
            : false;

    const userIsHost =
        displayName !== null
            ? challengePageData?.host.displayName === displayName ||
              challengePageData?.collaborators
                  .map((x, index) => x.displayName)
                  .includes(displayName)
            : false;

    const userIsMaxed =
        !(challengePageData?.maxParticipants === 0) &&
        challengePageData?.maxParticipants ===
            challengePageData?.numParticipants;

    return (
        <ThemeProvider theme={ButtonTheme}>
            <div className={styles['main-container']}>
                <Head>
                    <title>
                        {'Challenge | ' +
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

                {/* Title and Tabs */}
                <div
                    className={
                        styles['challengemenu-container'] + ' ShadowContainer'
                    }
                >
                    {/* Title */}
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
                                ) : !userIsMaxed ? (
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
                                ) : (
                                    <Button
                                        id="StatusButton"
                                        variant="contained"
                                        className={
                                            styles['status-button'] +
                                            ' button-primary H3'
                                        }
                                        disableElevation
                                        disabled
                                    >
                                        {'Max'}
                                    </Button>
                                )}
                            </div>
                        </div>
                        <div className={styles['title-right']}>
                            {userIsHost ? (
                                <Link
                                    id={'EditChallengeButton'}
                                    href={{
                                        pathname: '/managechallenge',
                                        query: { id: 'CHALLENGEID' },
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
                                        {'Manage Challenge'}
                                    </Button>
                                </Link>
                            ) : (
                                ''
                            )}
                        </div>
                    </div>

                    {/* Tabs */}
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
                    <div className={styles['posts-container'] + ' TextRegular'}>
                        {/* Post Editor */}
                        {userIsHost && <PostEditor />}
                        {/* Post List */}
                        {testPostListsByTabs.map((x) => {
                            if (x.index === tabValue) {
                                return (
                                    <>
                                        {x.posts.map((post, index) => {
                                            return (
                                                <PostModule
                                                    data={post}
                                                    key={index}
                                                />
                                            );
                                        })}
                                    </>
                                );
                            } else return <></>;
                        })}
                    </div>

                    {/* Timer and Challenge Info */}
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
                                                      .displayName
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
                                                ? challengePageData.maxParticipants !==
                                                  0
                                                    ? `${challengePageData.numParticipants} / ${challengePageData.maxParticipants}`
                                                    : `${challengePageData.numParticipants}`
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
