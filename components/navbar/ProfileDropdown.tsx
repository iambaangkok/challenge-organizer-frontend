import styles from './css/ProfileDropdown.module.scss'

import {Button , Menu , MenuItem} from '@mui/material';
import {AccountBox , Settings , Login , Logout , KeyboardArrowDown , Person} from '@mui/icons-material';

import Link from 'next/link';
import axios from 'axios';
import router from 'next/router';
import { useState } from 'react';

export default function ProfileDropdown({ loginStatus, fullName }: any) {

	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const signOut = () => {
		//Call sign out api without caring what is the result
		//It will fail only in case of client cannot connect to server
		//This is left as an exercise for you. Good luck.
		setAnchorEl(null);
		localStorage.removeItem('displayName')
		axios
			.post("/api/signOut")
			.catch((err) => {

			})
			.finally(() => {
			});
		router.push('/home')
		
	}

	const CMUOAuthCallback = process.env.NEXT_PUBLIC_CMU_OAUTH_URL

	return (
		<div>
			{/* Profile */}
			<Button
				id="ProfileDropdown"
				onClick={handleClick}
				className={'text-white TextBold'}
			>
				<Person sx={{ fontSize: 26 }} />
				{
					loginStatus &&
					<span className='text-lg'>{fullName}</span>
				}
				<KeyboardArrowDown sx={{ fontSize: 26 }} />

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
						<Link id="Profile" href='/profile' className={styles['Menu']}>
							<AccountBox></AccountBox> <div>My Profile</div>
						</Link>
					</MenuItem>

					<MenuItem onClick={signOut} className='TextRegular'>
						<Link href='/' className={styles['Menu']}>
							<Logout></Logout> <div>Log Out</div>
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
						<Link id="Login" href={CMUOAuthCallback} className={styles['Menu']}>
							<Login></Login> <div>Log In</div>
						</Link>
					</MenuItem>
				</Menu>
			}

		</div>
	);
}