import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SettingsIcon from '@mui/icons-material/Settings';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PersonIcon from '@mui/icons-material/Person';

import Link from 'next/link';
import axios from 'axios';
import router from 'next/router';

export default function ProfileDropdown({ loginStatus, fullName }: any) {

	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	function signOut() {
		//Call sign out api without caring what is the result
		//It will fail only in case of client cannot connect to server
		//This is left as an exercise for you. Good luck.
		setAnchorEl(null);
		axios.post("/api/signOut").finally(() => {
			router.reload()
		});
	}

	const CMUOAuthCallback = process.env.NEXT_PUBLIC_CMU_OAUTH_URL

	return (
		<div>
			{/* Profile */}
			<Button
				id="ProfileDropDown"
				onClick={handleClick}
				className='TextBold text-white'
			>
				<PersonIcon sx={{ fontSize: 26 }} /> <span className='text-lg text-white'>{Username}</span> <KeyboardArrowDownIcon sx={{ fontSize: 26 }} />
			</Button>

			{/* Profile DropDown */}
			{
				loginStatus &&
				<Menu
					anchorEl={anchorEl}
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
					<MenuItem onClick={handleClose} className='TextRegular'>
						<Link id="Profile" href='/profile' className='no-underline flex space-x-2 text-black'>
							<AccountBoxIcon></AccountBoxIcon> <div>My Profile</div>
						</Link>
					</MenuItem>

					<MenuItem onClick={handleClose} className='TextRegular'>
						<Link href='/settings' className='no-underline flex space-x-2 text-black'>
							<SettingsIcon></SettingsIcon> <div>Settings</div>
						</Link>
					</MenuItem>

					<MenuItem onClick={signOut} className='TextRegular'>
						<Link href='/' className='no-underline flex space-x-2 text-black'>
							<LogoutIcon></LogoutIcon> <div>Log Out</div>
						</Link>
					</MenuItem>
				</Menu>
			}

			{
				!loginStatus &&
				<Menu
					anchorEl={anchorEl}
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
					<MenuItem onClick={handleClose} className='TextRegular'>
						<Link href='/settings' className='no-underline flex space-x-2 text-black'>
							<SettingsIcon></SettingsIcon> <div>Settings</div>
						</Link>
					</MenuItem>

					<MenuItem onClick={handleClose} className='TextRegular'>
						<Link href={CMUOAuthCallback} className='no-underline flex space-x-2 text-black'>
							<LoginIcon></LoginIcon> <div>Log In</div>
						</Link>
					</MenuItem>
				</Menu>
			}

		</div>
	);
}