import styles from './css/InfoDashboard.module.css';
import Image from 'next/image';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { ButtonTheme } from '../../theme/Button';
import EditIcon from '@mui/icons-material/Edit';

const personalInfo = {
    'Global Rank': 3,
    Rating: 44,
    'Challenge Completed': 16,
    'Challenge Participated': 32,
};

const hostInfo = {
    'Global Rank': 3,
    Rating: 44,
    'Average Challenge Rating': 16,
    'Challenge Published': 32,
    'Challenge Created': 33,
};

const mapElement = (value: any, index: any) => {
    if (value[0] === 'Global Rank')
        return (
            <div
                key={index}
                className={
                    styles.Info + ' S1Regular flex items-center space-x-1'
                }
            >
                <EmojiEventsIcon />
                <div>{value[0]}</div>
                <div>{value[1]}</div>
            </div>
        );
    else
        return (
            <div key={index} className="S1Regular flex items-center space-x-1">
                <EmojiEventsIcon />
                <div>{value[0]}</div>
                <div>{value[1]}</div>
            </div>
        );
};

export default function InfoDashboard() {
    // const userDisplayName = localStorage.getItem('displayName')
    // const [displayName , setDisplayName] = useState<string|null>("")
    const [fullName, setFullName] = useState<string | null>('');
    const [loading, setLoading] = useState<boolean>(false);

    const [displayName, setDisplayName] = useState<string>('');

    const getInfo = () => {

        setLoading(true);

        console.log('Retrieving Info')

        if (localStorage.getItem('displayName') !== null) {
            setDisplayName(`${localStorage.getItem('displayName')}`);
            axios
                .get(`http://localhost:3030/api/users/${localStorage.getItem('displayName')}`)
                .then((resp) => {
                    setFullName(resp.data.firstName + ' ' + resp.data.lastName);
                })
                .catch((err) => { })
                .finally(() => {
                    setLoading(false);
                });
        } else {
            setDisplayName(`Not found`);
            setLoading(false);
        }
    };

    useEffect(getInfo, []);

    if (loading) {
        return (
            <div
                className={
                    styles.InfoDashboard + ' ShadowContainer flex flex-col'
                }
            >
                <div className="flex space-x-4">
                    <Skeleton variant="circular" width={100} height={100} />
                    <Skeleton variant="rectangular" width={190} height={100} />
                </div>
                <hr className={styles.Line} />
                <Skeleton variant="rectangular" width={306} height={128} />
                <hr className={styles.Line} />
                <Skeleton variant="rectangular" width={306} height={153} />
            </div>
        );
    }

    return (
        <div
            className={styles.InfoDashboard + ' ShadowContainer flex flex-col'}
        >
            <div className="flex space-x-4">
                <Image
                    alt="profilepic"
                    src={'/pingpong.jpg'}
                    width="100"
                    height="100"
                    className={styles.ProfilePic}
                />
                <div className="flex flex-col justify-between w-48">
                    <div>
                        <div className="TextMedium">{displayName}</div>
                        <div className={styles.Name + ' S1Regular'}>
                            {fullName}
                        </div>
                    </div>
                    <ThemeProvider theme={ButtonTheme}>
                        <Button
                            id="EditProfileButton"
                            variant="contained"
                            size="small"
                            startIcon={<EditIcon/>}
                        >
                            Edit Profile
                        </Button>
                    </ThemeProvider>
                </div>
            </div>
            <hr className={styles.Line} />
            <div className="flex flex-col">
                <div className="TextMedium">Participation Info</div>
                <div className="p-2 space-y-2">
                    {Object.entries(personalInfo).map(mapElement)}
                </div>
            </div>

            <hr className={styles.Line} />

            <div className="flex flex-col">
                <div className="TextMedium">Host Info</div>
                <div className="p-2 space-y-2">
                    {Object.entries(hostInfo).map(mapElement)}
                </div>
            </div>
        </div>
    );
}
