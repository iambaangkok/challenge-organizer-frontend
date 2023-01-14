import { Tooltip, IconButton, Badge } from "@mui/material";
import { SetStateAction, useState } from "react";
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationDropDown from "./NotificationDropDown";

export default function Notification({ badgeContent }) {

    const haveNotification = `You have ${badgeContent} notifications.`
    const noNotification = 'No new notifications.'
    const [open, setOpen] = useState(false)
    const [anchorE1, setAnchorE1] = useState(null)

    const handleOpen = (event: { currentTarget: SetStateAction<null>; }) => {
        setAnchorE1(event.currentTarget)
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <>
            <Tooltip title={badgeContent > 0 ? haveNotification : noNotification}>
                <IconButton
                    onClick={handleOpen}
                    anchorE1={anchorE1}
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
            />
        </>
    )
}