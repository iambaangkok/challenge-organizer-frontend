import { Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { testChallengeList } from '../../lib/challengeList'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ChallengeCard from './ChallengeCard'
import styles from './css/ChallengeDashboard.module.css'
import { useEffect, useState } from 'react'
import Skeleton from '@mui/material/Skeleton';
import { HiArrowNarrowDown, HiArrowNarrowUp } from 'react-icons/hi'

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
    const [challengeList, setChallengeList] = useState(null)
    const [filterState, setFilterState] = useState<string>('All')
    const [sortState, setSortState] = useState<string>('AZ')

    // useEffect(() => {
    //     setLoading(false) // Set this before deploy
    //     fetch('/api/profile-data')
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setLoading(false)
    //         })
    // }, [])

    if (loading) {
        return (
            <div>
                <Skeleton variant="rectangular" width={1000} height={800} />
            </div>
        )
    }

    return (
        <div className={styles.ChallengeDashboard + ' flex flex-col ShadowContainer'}>
            <div className='flex justify-between'>
                <div className='flex space-x-4 '>
                    <div className='H1'>Challenges</div>
                    <div className='flex space-x-2 items-center'>
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
                                    onChange={(event: SelectChangeEvent) => {
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
                    <div className='flex space-x-2 items-center'>
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
                                    onChange={(event: SelectChangeEvent) => {
                                        setSortState(event.target.value)
                                    }}
                                >
                                    <MenuItem value={'AZ'}>A-Z</MenuItem>
                                    <MenuItem value={'ZA'}>Z-A</MenuItem>
                                    <MenuItem value={'RecentAsc'}> Recent <HiArrowNarrowUp /></MenuItem>
                                    <MenuItem value={'RecentDesc'}>Recent <HiArrowNarrowDown /></MenuItem>
                                    <MenuItem value={'RatingAsc'}>Rating <HiArrowNarrowUp /></MenuItem>
                                    <MenuItem value={'RatingDesc'}>Rating <HiArrowNarrowDown /></MenuItem>
                                    {/* <MenuItem value={30}>Thirty</MenuItem> */}
                                </Select>
                            </ThemeProvider>
                            {/* <InputLabel>Ascending</InputLabel> */}

                        </FormControl>
                    </div>
                </div>
                <div>
                    <ThemeProvider theme={theme}>
                        <Button variant='contained'>
                            Create a new Challenge
                        </Button>
                    </ThemeProvider>
                </div>
            </div>
            <div>
                <hr />

            </div>
            <div className='flex flex-col space-y-2 py-2'>
                {testChallengeList.map((challenge, index) => {
                    return (
                        <ChallengeCard key={index} {...challenge} />
                    )
                }
                )}
            </div>
        </div>
    )
}