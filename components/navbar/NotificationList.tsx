import { Menu, MenuItem } from '@mui/material';
import { NotificationData } from '../../types/DataType';

export default function NotificationList( {anchorE1, handleClose, open, data} : any ) {
    
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
                data.map((item: NotificationData , index: any) => {
                    return <MenuItem onClick={handleClose} key={index}> {item.description} </MenuItem>
                })
            }
        </Menu >
    )
}


