import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { challengeList } from '../../lib/challengeList'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ChallengeCard from './ChallengeCard'
import styles from './css/Challenges.module.css'
import { Divider } from '@mui/material';

const theme = createTheme({
    palette: {
        primary: {
            light: '#FFDDAE',
            main: '#FA9C1D',
            dark: '#DB8D23'
        }
    }
})

const selectBar = createTheme({
    palette: {
        primary: {
            light: '#FFDDAE',
            main: '#FA9C1D',
            dark: '#DB8D23'
        }
    }
})


export default function Challenges() {
    return (
        <div className={styles.Challenges}>
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
                                <MenuItem value={10}>Type</MenuItem>
                                <MenuItem value={20}>Format</MenuItem>
                                <MenuItem value={30}>Date</MenuItem>
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
                                <MenuItem value={1}>Ascending</MenuItem>
                                <MenuItem value={2}>Descending</MenuItem>
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
                {challengeList.map((challenge, index) => {
                    return (
                        <ChallengeCard key={index} {...challenge} />
                    )
                }
                )}
            </div>
        </div>
    )
}