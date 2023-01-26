import {Menu , MenuItem} from '@mui/material';
import { NotificationList } from '../../types/Request';

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
                notificationList.map((item: NotificationList , index: any) => {
                    return <MenuItem onClick={handleClose} key={index}> {item.description} </MenuItem>
                })
            }
        </Menu >
    )
}

export default NotificationList
