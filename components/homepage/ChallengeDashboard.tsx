import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { testChallengeList } from '../../lib/challengeList'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ChallengeCard from './ChallengeCard'
import styles from './css/ChallengeDashboard.module.css'
import { useEffect, useState } from 'react'
import Skeleton from '@mui/material/Skeleton';

const theme = createTheme({
    palette: {
        primary: {
            light: '#FFDDAE',
            main: '#FA9C1D',
            dark: '#DB8D23',
            contrastText: '#FFFFFF'
        },
    },
    typography: {
        fontFamily: 'Inter',
        fontWeightMedium: 600,
        fontSize: 15
    }
})



export default function ChallengeDashboard() {

    const [loading, setLoading] = useState(false)
    const [challengeList, setChallengeList] = useState(null)
    const [filterState, setFilterState] = useState(0)
    const [sortState, setSortState] = useState(0)

    useEffect(() => {
        setLoading(false) // Set this before deploy
        fetch('/api/profile-data')
            .then((res) => res.json())
            .then((data) => {
                setLoading(false)
            })
    }, [])

    if (loading) {
        return (
            <div>
                <Skeleton variant="rectangular" width={1000} height={800} />
            </div>
        )
    }

    return (
        <div className={styles.Challenges + ' ShadowContainer'}>
            <div className='flex justify-between mb-3'>
                <div className='flex space-x-4 '>
                    <div className='H1'>Challenges</div>
                    <div className='flex space-x-2 items-center'>
                        <div className='H3'>
                            Filter:
                        </div>
                        <FormControl size="small">
                            {/* <InputLabel>All</InputLabel> */}
                            <Select
                            // value={}
                            // onChange={handleChange}
                            >
                                <MenuItem >Type</MenuItem>
                                <MenuItem >Format</MenuItem>
                                <MenuItem >Date</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className='flex space-x-2 items-center'>
                        <div className='H3'>
                            A-Z:
                        </div>
                        <FormControl size="small">
                            {/* <InputLabel>Ascending</InputLabel> */}
                            <Select
                            // value={2}
                            // onChange={handleChange}
                            >
                                <MenuItem >Ascending</MenuItem>
                                <MenuItem >Descending</MenuItem>
                                {/* <MenuItem value={30}>Thirty</MenuItem> */}
                            </Select>
                        </FormControl>
                    </div>
                </div>
                <div>
                    <ThemeProvider theme={theme}>
                        <Button variant='contained'>
                            Create Challenges
                        </Button>
                    </ThemeProvider>

                </div>
            </div>
            <hr />
            <div className='flex flex-col space-y-2'>
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