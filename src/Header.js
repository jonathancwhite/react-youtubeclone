import React from 'react'
import YouTubeIcon from '@mui/icons-material/YouTube';
import MicIcon from '@mui/icons-material/Mic';
import SearchIcon from '@mui/icons-material/Search';
import AppsIcon from '@mui/icons-material/Apps';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './Header.css'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

function Header() {

    return (
        <div className="mainHeader">
            <div className="mainHeader__left">
                <div className="mainHeader__hamburger">

                </div>
                <div className="mainHeader__logo">
                    <a href="/">
                        <YouTubeIcon className="youtubeLogo"/>
                        <h3>YouTube</h3>
                    </a>
                </div>
            </div>
            <div className="mainHeader__middle">
                <form>
                    <input type="text" placeholder="Search"/>
                    <a href="/" className="mainHeader__search"><SearchIcon/></a>
                </form>
                <MicIcon className="mainHeader__search--voice"/>
            </div>
            <div className="mainHeader__right">
                <AppsIcon className="mainHeader__right--icon" />
                <MoreVertIcon className="mainHeader__right--icon" />
                <a href="/" className="mainHeader__right--signIn">
                    <AccountCircleOutlinedIcon className="mainHeader__right--userIcon"/>
                    SIGN IN
                </a>
            </div>
        </div>
    )
}

export default Header
