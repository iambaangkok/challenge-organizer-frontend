import ChallengeCard from './ChallengeCard';
import styles from './css/ChallengeDashboard.module.scss';

import { ThemeProvider } from '@mui/material/styles';
import { useEffect, useState, useCallback } from 'react';
import Skeleton from '@mui/material/Skeleton';
import { HiArrowNarrowDown, HiArrowNarrowUp } from 'react-icons/hi';
import NorthIcon from '@mui/icons-material/North';
import SouthIcon from '@mui/icons-material/South';
import { ChallengeCardData } from '../../types/DataType';
import axios from 'axios';
import Link from 'next/link';
import { Button, FormControl, MenuItem, Select } from '@mui/material';
import { ButtonTheme } from '../../theme/Button';
import { SelectTheme } from '../../theme/Select';

export default function ChallengeDashboard() {
    const [loading, setLoading] = useState(false);
    const [challengeList, setChallengeList] = useState<ChallengeCardData[]>([]);

    const [filterState, setFilterState] = useState<string>('all');
    const [sortState, setSortState] = useState<string>('a-z');

    const [displayName, setDisplayName] = useState<string>('');
    const [route, setRoute] = useState<string>('');

    const CMUOAuthCallback = process.env.NEXT_PUBLIC_CMU_OAUTH_URL;

    var PrimaryLight = '#FFDDAE';

    // Fetching Data from API
    const getChallengeList = useCallback(() => {
        setLoading(true);

        axios
            .get(`http://localhost:3030/api/challenges${route}${displayName}`, {
                params: {
                    filter: filterState,
                    sort: sortState,
                },
            })
            .then((resp) => {
                setChallengeList(resp.data);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false);
            });
    },[displayName, filterState, route, sortState])

    useEffect(() => {
        if (localStorage.getItem('displayName') !== null) {
            setDisplayName(`/${localStorage.getItem('displayName')}`);
            setRoute('/by-user-display-name');
        } else {
            setDisplayName(``);
            setRoute('');
        }
        console.log('/GET' + route + displayName);
        getChallengeList();
    }, [displayName, filterState, route, sortState, getChallengeList]);

    return (
        <div className={styles['ChallengeDashboard'] + ' ShadowContainer'}>
            {/* Top */}
            <div className={styles['Top']}>
                {/* Filter and Sort */}
                <div className={styles['FilterAndSort']}>
                    {/* Title */}
                    <div className="H1">Challenges</div>

                    {/* Filter */}
                    <div className={styles['Select']}>
                        <div className="TextRegular">Filter:</div>
                        <FormControl size="small">
                            <ThemeProvider theme={SelectTheme}>
                                <Select
                                    value={filterState}
                                    onChange={(event) => {
                                        setFilterState(event.target.value);
                                    }}
                                    MenuProps={{
                                        sx: {
                                            '&& .Mui-selected': {
                                                backgroundColor: PrimaryLight,
                                            },
                                        },
                                    }}
                                >
                                    <MenuItem value={'all'}>All</MenuItem>
                                    <MenuItem value={'ongoing'}>
                                        Ongoing
                                    </MenuItem>
                                    <MenuItem value={'upcoming'}>
                                        Upcoming
                                    </MenuItem>
                                    <MenuItem value={'past'}>Past</MenuItem>
                                </Select>
                            </ThemeProvider>
                        </FormControl>
                    </div>

                    {/* Sort By */}
                    <div className={styles['Select']}>
                        <div className="TextRegular">Sort By:</div>
                        <FormControl size="small">
                            <ThemeProvider theme={SelectTheme}>
                                <Select
                                    value={sortState}
                                    onChange={(event) => {
                                        setSortState(event.target.value);
                                    }}
                                    MenuProps={{
                                        sx: {
                                            '&& .Mui-selected': {
                                                backgroundColor: PrimaryLight,
                                            },
                                        },
                                    }}
                                >
                                    <MenuItem value={'a-z'}>A-Z</MenuItem>
                                    <MenuItem value={'z-a'}>Z-A</MenuItem>
                                    <MenuItem value={'recent-asc'}>
                                        Recent <NorthIcon />
                                    </MenuItem>
                                    <MenuItem value={'recent-desc'}>
                                        Recent <SouthIcon />
                                    </MenuItem>
                                    <MenuItem value={'rating-asc'}>
                                        Rating <NorthIcon />
                                    </MenuItem>
                                    <MenuItem value={'rating-desc'}>
                                        Rating <SouthIcon />
                                    </MenuItem>
                                </Select>
                            </ThemeProvider>
                        </FormControl>
                    </div>
                </div>

                {/* Create Challenge Button */}
                <div>
                    {displayName === '' ? (
                        <Link href={CMUOAuthCallback} className="no-underline">
                            <ThemeProvider theme={ButtonTheme}>
                                <Button variant="contained" size="medium">
                                    create challenge
                                </Button>
                            </ThemeProvider>
                        </Link>
                    ) : (
                        <Link href="/createchallenge" className="no-underline">
                            <ThemeProvider theme={ButtonTheme}>
                                <Button variant="contained" size="medium">
                                    create challenge
                                </Button>
                            </ThemeProvider>
                        </Link>
                    )}
                </div>
            </div>

            {/* Line Divider */}
            <div>
                <hr />
            </div>

            {/* Challenge List */}
            <div className={styles['ChallengeList']}>
                {loading ? (
                    <div className="flex flex-col space-y-2">
                        <Skeleton variant="rectangular" height={154} />
                        <Skeleton variant="rectangular" height={154} />
                        <Skeleton variant="rectangular" height={154} />
                        <Skeleton variant="rectangular" height={154} />
                        <Skeleton variant="rectangular" height={154} />
                    </div>
                ) : (
                    challengeList.map((challenge: ChallengeCardData, index) => {
                        return <ChallengeCard key={index} {...challenge} />;
                    })
                )}
            </div>
        </div>
    );
}
