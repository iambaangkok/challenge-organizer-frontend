import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import FlagIcon from '@mui/icons-material/Flag';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import styles from '../navbar/MenuDropDown.module.css'

export default function MenuDropDown() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        onClick={handleClick}
        className = {styles.MenuDropDownButton}
      >
        Dashboard <KeyboardArrowDownIcon className={styles.ButtonIcon}></KeyboardArrowDownIcon>
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} className='flex space-x-2'>
          <AccountBoxIcon></AccountBoxIcon> <div>My Account</div>
        </MenuItem>
        <MenuItem onClick={handleClose} className='flex space-x-2'>
          <SettingsIcon></SettingsIcon> <div>Settings</div>
        </MenuItem>
        <MenuItem onClick={handleClose} className='flex space-x-2'>
          <LogoutIcon></LogoutIcon> <div>Log Out</div>
        </MenuItem>
      </Menu>
    </div>
  );
}