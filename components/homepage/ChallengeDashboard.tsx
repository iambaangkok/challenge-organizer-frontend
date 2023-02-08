import { testChallengeList } from '../../lib/challengeList'
import ChallengeCard from './ChallengeCard'
import styles from './css/ChallengeDashboard.module.css'

import { Button, FormControl, MenuItem, Select } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react'
import Skeleton from '@mui/material/Skeleton';
import { HiArrowNarrowDown, HiArrowNarrowUp } from 'react-icons/hi'
import { ChallengeCardData } from '../../types/DataType';

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
    const [filterState, setFilterState] = useState<string>('All')
    const [sortState, setSortState] = useState<string>('AZ')

    // Fetching Data from API
    // useEffect(() => {
    //     setLoading(false) // Set this before deploy
    //     fetch('/api/profile-data')
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setLoading(false)
    //         })
    // }, [])

    // If the data is not loaded
    if (loading) {
        return (
            <div>
                <Skeleton variant="rectangular" width={1000} height={800} />
            </div>
        )
    }

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
                                            borderColor: '#FA9C1D',
                                        },
                                        '&:hover .MuiOutlinedInput-notchedOutline': {
                                            borderColor: '#FA9C1D',
                                        },
                                    }}
                                    value={filterState}
                                    onChange={(event) => {
                                        setFilterState(event.target.value)
                                    }}
                                >
                                    <MenuItem value={'All'}>All</MenuItem>
                                    <MenuItem value={'Ongoing'}>Ongoing</MenuItem>
                                    <MenuItem value={'Upcoming'}>Upcoming</MenuItem>
                                    <MenuItem value={'Past'}>Past</MenuItem>
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
                                    <MenuItem value={'AZ'}>A-Z</MenuItem>
                                    <MenuItem value={'ZA'}>Z-A</MenuItem>
                                    <MenuItem value={'RecentAsc'}> Recent <HiArrowNarrowUp /></MenuItem>
                                    <MenuItem value={'RecentDesc'}>Recent <HiArrowNarrowDown /></MenuItem>
                                    <MenuItem value={'RatingAsc'}>Rating <HiArrowNarrowUp /></MenuItem>
                                    <MenuItem value={'RatingDesc'}>Rating <HiArrowNarrowDown /></MenuItem>
                                </Select>
                            </ThemeProvider>
                        </FormControl>
                    </div>
                </div>

                {/* Create Challenge Button */}
                <div>
                    <ThemeProvider theme={theme}>
                        <Button variant='contained'>
                            Create a new Challenge
                        </Button>
                    </ThemeProvider>
                </div>
            </div>

            {/* Line Divider */}
            <div>
                <hr />
            </div>

            {/* Challenge List */}
            <div className={styles['ChallengeList']}>
                {testChallengeList.map((challenge: ChallengeCardData, index) => {
                    return (
                        <ChallengeCard key={index} {...challenge} />
                    )
                }
                )}
            </div>
        </div>
    )
}