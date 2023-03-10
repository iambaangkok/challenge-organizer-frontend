import { Tooltip, IconButton, Badge } from '@mui/material';
import { useState } from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationList from './NotificationList';
import { NotificationData } from '../../types/DataType';

interface input {
    badgeContent: number;
    notificationList: NotificationData[];
}

export default function Notification({
    badgeContent,
    notificationList,
}: input) {
    const haveNotification = `You have ${badgeContent} notifications.`;
    const noNotification = 'No new notifications.';

    const [open, setOpen] = useState<Boolean>(false);
    const [anchorE1, setAnchorE1] = useState<any>(null);

    const handleOpen = (event: { currentTarget: any }) => {
        if (badgeContent > 0) {
            setAnchorE1(event.currentTarget);
            setOpen(true);
        }
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Tooltip
                title={badgeContent > 0 ? haveNotification : noNotification}
            >
                <IconButton onClick={handleOpen}>
                    {
                        <Badge badgeContent={badgeContent} color="error">
                            <NotificationsIcon
                                color="action"
                                sx={{
                                    fontSize: 26,
                                    color: 'White',
                                }}
                            />
                        </Badge>
                    }
                </IconButton>
            </Tooltip>
            <NotificationList
                open={open}
                anchorE1={anchorE1}
                handleClose={handleClose}
                data={notificationList}
            />
        </>
    );
}
