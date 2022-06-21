import React from 'react';
import { FaBookOpen } from "react-icons/fa";
import style from './Header.module.scss'

class Header extends React.Component {
    render() {
        return (
            <div className={style.HeaderContainer}>
                <FaBookOpen className={style.HeaderLogoIcon} size='2em' color='#fff'/>
                <h1 className={style.HeaderTitle}>BOOKS SEARCH</h1>
            </div>
        )
    }
}

export default Header;
