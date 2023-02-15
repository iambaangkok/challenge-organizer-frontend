import { testChallengeList } from '../../lib/challengeList';
import ChallengeCard from './ChallengeCard';
import styles from './css/ChallengeDashboard.module.scss';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useCallback, useEffect, useState } from 'react';
import Skeleton from '@mui/material/Skeleton';
import { HiArrowNarrowDown, HiArrowNarrowUp } from 'react-icons/hi';
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

    const [displayName, setDisplayName] = useState('');

    useEffect(() => {
        if (localStorage.getItem('displayName') !== null) {
            setDisplayName(`/${localStorage.getItem('displayName')}`);
        } else {
            setDisplayName(``);
        }
        console.log(displayName);
    }, []);

    // Fetching Data from API
    const getChallengeList = useCallback(async () => {
        setLoading(true);
        const resp = await axios.get(
            `http://localhost:3030/api/challenges/by-user-display-name/${displayName}`,
        );
        console.log(resp.status);
        console.log(resp.data);
        if (resp.status == 200) {
            setChallengeList(resp.data);
        } else {
            setChallengeList([]);
        }
        setLoading(false);
    }, [displayName, filterState, sortState]);

    useEffect(() => {
        getChallengeList();
    }, [getChallengeList]);

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
                                    sx={{
                                        '.MuiOutlinedInput-notchedOutline': {
                                            borderColor: '#FA9C1D',
                                        },
                                        '&.Mui-focused .MuiOutlinedInput-notchedOutline':
                                            {
                                                borderColor: '#DB8D23',
                                            },
                                        '&:hover .MuiOutlinedInput-notchedOutline':
                                            {
                                                borderColor: '#DB8D23',
                                            },
                                    }}
                                    value={filterState}
                                    onChange={(event) => {
                                        setFilterState(event.target.value);
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
                                >
                                    <MenuItem value={'a-z'}>A-Z</MenuItem>
                                    <MenuItem value={'z-a'}>Z-A</MenuItem>
                                    <MenuItem value={'recent-asc'}>
                                        {' '}
                                        Recent <HiArrowNarrowUp />
                                    </MenuItem>
                                    <MenuItem value={'recent-desc'}>
                                        Recent <HiArrowNarrowDown />
                                    </MenuItem>
                                    <MenuItem value={'rating-asc'}>
                                        Rating <HiArrowNarrowUp />
                                    </MenuItem>
                                    <MenuItem value={'rating-desc'}>
                                        Rating <HiArrowNarrowDown />
                                    </MenuItem>
                                </Select>
                            </ThemeProvider>
                        </FormControl>
                    </div>
                </div>

                {/* Create Challenge Button */}
                <div>
                    <Link href="/challenges/create" className="no-underline">
                        <ThemeProvider theme={ButtonTheme}>
                            <Button variant="contained">
                                Create a new Challenge
                            </Button>
                        </ThemeProvider>
                    </Link>
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
