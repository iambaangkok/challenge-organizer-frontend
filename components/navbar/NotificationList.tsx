import React from 'react'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

interface notification {
    description: string,
    date: string
}

const NotificationList = ({ anchorE1, handleClose, open, notificationList }: any) => {
    return (
        <Menu
            anchorEl={anchorE1}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
        >
            {
                notificationList.map((item: notification, index: any) => {
                    return <MenuItem onClick={handleClose} key={index}> {item.description} </MenuItem>
                })
            }
        </Menu >
    )
}

export default NotificationList
