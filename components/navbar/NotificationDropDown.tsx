import React from 'react'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const NotificationDropDown = ({ anchorE1, handleClose, open } : any) => {
    return (
        <Menu
            id="basic-menu"
            anchorEl={anchorE1}
            open={open}
            onClose={handleClose}
        >
            <MenuItem onClick={handleClose} > Profile </MenuItem>
            <MenuItem onClick={handleClose} > My account </MenuItem>
            <MenuItem onClick={handleClose} > Logout </MenuItem>
        </Menu >

    )
}

export default NotificationDropDown
