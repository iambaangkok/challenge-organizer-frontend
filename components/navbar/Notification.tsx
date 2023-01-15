import { Tooltip, IconButton, Badge, Button } from "@mui/material";
import { SetStateAction, useState } from "react";
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationDropDown from "./NotificationDropDown";

interface input {
    badgeContent: number
}

export default function Notification({ badgeContent }: input) {

    const haveNotification = `You have ${badgeContent} notifications.`
    const noNotification = 'No new notifications.'
    const [open, setOpen] = useState<Boolean>(false)
    const [anchorE1, setAnchorE1] = useState<any>(null)

    const handleOpen = (event: { currentTarget: any; }) => {
        if (badgeContent > 0) {
            setAnchorE1(event.currentTarget)
            setOpen(true)
        }
    }

    const handleClose = () => {
        setOpen(false)
    }

    const notificationList = [
        {
            description: 'aaa bbb',
            date: '21 dec 2000'
        },
        {
            description: 'thsi qqwe 22',
            date: '21 we 20111'
        },
        {
            description: 'adrtghjdb',
            date: '234 dec 2000'
        },
    ]

    return (
        <>
            <Tooltip title={badgeContent > 0 ? haveNotification : noNotification}>
                <IconButton
                    onClick={handleOpen}
                >
                    {
                        <Badge badgeContent={badgeContent} color="error">
                            <NotificationsIcon color="action" sx={{
                                fontSize: 26,
                                color: 'White'
                            }} />
                        </Badge>
                    }
                </IconButton>
            </Tooltip>
            <NotificationDropDown
                open={open}
                anchorE1={anchorE1}
                handleClose={handleClose}
                notificationList={notificationList}
            />
        </>
    )
}