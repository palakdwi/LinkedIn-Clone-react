import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './Components/HeaderOption'
import HomeIcon from '@material-ui/icons/Home';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import WorkIcon from '@material-ui/icons/Work';
import { useDispatch } from 'react-redux';
import {logout} from './features/counter/userSlice'
import {auth} from './firebase'


const Header = () => {

    const dispatch = useDispatch()

    const logoutofApp = () => {
            dispatch(logout())
            auth.signOut()
    }

    return (
        <div className="header">
                <div className="header-left">
                    <img src='https://image.flaticon.com/icons/png/512/174/174857.png' alt=""/>

                    <div className="search">
                        <SearchIcon/>
                        <input type="text"/>
                    </div>
                </div>
                <div className="header-right">
                    <HeaderOption Icon={HomeIcon} title="Home"/>
                    <HeaderOption Icon={PeopleAltIcon} title="My Network"/>
                    <HeaderOption Icon={WorkIcon} title="Jobs"/>
                    <HeaderOption Icon={MessageIcon} title="Messaging"/>
                    <HeaderOption Icon={NotificationsActiveIcon} title="Notifications"/>
                    <HeaderOption onClick={logoutofApp} avatar={true} title="Me"/>
                </div>
        </div>
    )
}

export default Header
