import styles from './css/InfoDashboard.module.css'
import Image from 'next/image'
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material';
import { AiFillTrophy } from 'react-icons/ai'

const theme = createTheme({
    palette: {
        primary: {
            main: '#FFDDAE',
            contrastText: '#FA9C1D'
        }
    },
})

const pinfo = ['Global Rank', 'Rating', 'Challenge Completed', 'Challenge Participated']
const hinfo = ['Global Rank', 'Rating', 'Average Challenge Rating', 'Challenge Published', 'Challenge Created']

const mapElement = (value: string, index: any) => {
    if (value === 'Global Rank')
        return <div key={index} className={styles.Info + ' S1Regular flex items-center space-x-1'}><AiFillTrophy /><div>{value}</div></div>
    else
        return <div key={index} className='S1Regular flex items-center space-x-1'><AiFillTrophy /><div>{value}</div></div>
}

export default function InfoDashboard() {
    return (
        <div className={styles.InfoDashboard + ' ShadowContainer flex flex-col'}>
            <div className='flex space-x-4'>
                <Image
                    alt='profilepic'
                    src={'/pingpong.jpg'}
                    width='100'
                    height='100'
                    className={styles.ProfilePic}
                />
                <div className='flex flex-col justify-between'>
                    <div>
                        <div className='TextMedium'>
                            DarkTXYZ
                        </div>
                        <div className={styles.Name + ' S1Regular'}>
                            Pawaret Dilokwuttisit
                        </div>
                    </div>
                    <ThemeProvider theme={theme}>
                        <Button
                            variant='contained'
                            className='TextBold'
                            sx={{
                                width: 190
                            }}
                        >Edit Profile</Button>
                    </ThemeProvider>
                </div>
            </div>
            <hr className={styles.Line} />
            <div className='flex flex-col'>
                <div className='TextMedium'>Participation Info</div>
                <div className='p-2 space-y-2'>
                    {
                        pinfo.map(mapElement)
                    }
                </div>
            </div>

            <hr className={styles.Line} />

            <div className='flex flex-col'>
                <div className='TextMedium'>Host Info</div>
                <div className='p-2 space-y-2'>
                    {
                        hinfo.map(mapElement)
                    }
                </div>
            </div>
        </div>
    )
}