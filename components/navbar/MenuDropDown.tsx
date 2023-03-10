import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PersonIcon from '@mui/icons-material/Person';

import styles from '../navbar/css/MenuDropDown.module.css';
import Link from 'next/link';

export default function MenuDropDown() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const Username = 'John Doe';

    return (
        <div>
            <Button
                id="ProfileDropDown"
                onClick={handleClick}
                className={styles.MenuDropDownButton + ' TextBold'}
            >
                <PersonIcon sx={{ fontSize: 26 }} />{' '}
                <span className="text-lg">{Username}</span>{' '}
                <KeyboardArrowDownIcon sx={{ fontSize: 26 }} />
            </Button>

            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                <MenuItem onClick={handleClose} className="TextRegular">
                    <Link
                        id="Profile"
                        href="/profile"
                        className="no-underline flex space-x-2 text-black"
                    >
                        <AccountBoxIcon></AccountBoxIcon> <div>My Profile</div>
                    </Link>
                </MenuItem>

                <MenuItem onClick={handleClose} className="TextRegular">
                    <Link
                        href="/settings"
                        className="no-underline flex space-x-2 text-black"
                    >
                        <SettingsIcon></SettingsIcon> <div>Settings</div>
                    </Link>
                </MenuItem>

                <MenuItem onClick={handleClose} className="TextRegular">
                    <Link
                        href="/logout"
                        className="no-underline flex space-x-2 text-black"
                    >
                        <LogoutIcon></LogoutIcon> <div>Log Out</div>
                    </Link>
                </MenuItem>
            </Menu>
        </div>
    );
}
