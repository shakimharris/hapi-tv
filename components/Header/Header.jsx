import React from 'react';
import Image from 'next/image';
import MenuIcon from '@mui/icons-material/Menu';
import VideocamIcon from '@mui/icons-material/Videocam';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import styles from '../../styles/Header.module.css';
import SearchIcon from '@mui/icons-material/Search';

function Header() {
    return (
    <div className={styles.header__container}>
        <div className={styles.header__left}>
         <MenuIcon className={styles.header__icon} />
            <Image src="/hapi.png" alt="Hapi Logo" width={72} height={25} className={styles.hapi__logo} />
            </div>
            <div className={styles.input__search}>
            <input type={styles.input__search} placeholder="Search"></input>
            <SearchIcon className={styles.header__search} />
            </div>
            <div className={styles.header__right}>
            <VideocamIcon className={styles.header__icon} />
            <AppsIcon className={styles.header__icon} />
            <NotificationsIcon className={styles.header__icon} />
            <AccountCircleIcon className={styles.header__icon} />
            </div>
        </div>
    )
}

export default Header;
