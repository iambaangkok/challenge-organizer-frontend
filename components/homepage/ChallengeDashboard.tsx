import { testChallengeList } from '../../lib/challengeList'
import ChallengeCard from './ChallengeCard'
import styles from './css/ChallengeDashboard.module.css'

import { Button, FormControl, MenuItem, Select } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useEffect, useState } from 'react'
import Skeleton from '@mui/material/Skeleton';
import { HiArrowNarrowDown, HiArrowNarrowUp } from 'react-icons/hi'
import { ChallengeCardData } from '../../types/DataType';
import axios from 'axios';
import Link from 'next/link';

// Theme for Select Components
const theme = createTheme({
    palette: {
        primary: {
            light: '#FFDDAE',
            main: '#FA9C1D',
            dark: '#DB8D23',
            contrastText: '#FFFFFF',
        },
    },
    typography: {
        fontFamily: 'Inter',
        fontWeightMedium: 600,
        fontSize: 15
    },
})

export default function ChallengeDashboard() {

    const [loading, setLoading] = useState(false)
    const [challengeList, setChallengeList] = useState<[ChallengeCardData]>()
    const [filterState, setFilterState] = useState<string>('all')
    const [sortState, setSortState] = useState<string>('a-z')

    // Fetching Data from API
    const getChallengeList = () => {
        setLoading(true)
        axios
            .get('api/challenges', {
                params: {
                    sort: sortState,
                    filter: filterState
                }
            })
            .then((resp) => {
                // setChallengeList(resp.data)
            }).catch((err) => {

            }).finally(() => {
                setLoading(false)
            })
    }

    useEffect(getChallengeList, [filterState, sortState])

    return (
        <div className={styles['ChallengeDashboard'] + ' ShadowContainer'}>
            {/* Top */}
            <div className={styles['Top']}>

                {/* Filter and Sort */}
                <div className={styles['FilterAndSort']}>

                    {/* Title */}
                    <div className='H1'>Challenges</div>

                    {/* Filter */}
                    <div className={styles['Select']}>
                        <div className='TextRegular'>
                            Filter:
                        </div>
                        <FormControl size="small">
                            <ThemeProvider theme={theme}>
                                {/* <InputLabel>All</InputLabel> */}
                                <Select
                                    sx={{
                                        '.MuiOutlinedInput-notchedOutline': {
                                            borderColor: '#FA9C1D',
                                        },
                                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                            borderColor: '#DB8D23',
                                        },
                                        '&:hover .MuiOutlinedInput-notchedOutline': {
                                            borderColor: '#DB8D23',
                                        },
                                    }}
                                    value={filterState}
                                    onChange={(event) => {
                                        setFilterState(event.target.value)
                                    }}
                                >
                                    <MenuItem value={'all'}>All</MenuItem>
                                    <MenuItem value={'ongoing'}>Ongoing</MenuItem>
                                    <MenuItem value={'upcoming'}>Upcoming</MenuItem>
                                    <MenuItem value={'past'}>Past</MenuItem>
                                </Select>
                            </ThemeProvider>
                        </FormControl>
                    </div>

                    {/* Sort By */}
                    <div className={styles['Select']}>
                        <div className='TextRegular'>
                            Sort By:
                        </div>
                        <FormControl size="small">
                            <ThemeProvider theme={theme}>
                                <Select
                                    sx={{
                                        '.MuiOutlinedInput-notchedOutline': {
                                            borderColor: '#FA9C1D',
                                        },
                                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                            borderColor: '#FA9C1D',
                                        },
                                        '&:hover .MuiOutlinedInput-notchedOutline': {
                                            borderColor: '#FA9C1D',
                                        },
                                    }}
                                    value={sortState}
                                    onChange={(event) => {
                                        setSortState(event.target.value)
                                    }}
                                >
                                    <MenuItem value={'a-z'}>A-Z</MenuItem>
                                    <MenuItem value={'z-a'}>Z-A</MenuItem>
                                    <MenuItem value={'recent-asc'}> Recent <HiArrowNarrowUp /></MenuItem>
                                    <MenuItem value={'recent-desc'}>Recent <HiArrowNarrowDown /></MenuItem>
                                    <MenuItem value={'rating-asc'}>Rating <HiArrowNarrowUp /></MenuItem>
                                    <MenuItem value={'rating-desc'}>Rating <HiArrowNarrowDown /></MenuItem>
                                </Select>
                            </ThemeProvider>
                        </FormControl>
                    </div>
                </div>

                {/* Create Challenge Button */}
                <div>
                    <Link href='/challenges/create' className='no-underline'>
                        <ThemeProvider theme={theme}>
                            <Button variant='contained'>
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
                {
                    loading &&
                    <div>
                        <Skeleton variant="rectangular" width={1000} height={800} />
                    </div>
                }
                {
                    !loading &&
                    testChallengeList.map((challenge: ChallengeCardData, index) => {
                        return (
                            <ChallengeCard key={index} {...challenge} />
                        )
                    }
                )}
            </div>
        </div>
    )
}