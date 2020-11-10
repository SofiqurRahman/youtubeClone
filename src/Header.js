import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';

function Header() {
  const [inputSearch,setInputSearch]=useState('');
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon></MenuIcon>
        <Link to="/">
          <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1280px-Logo_of_YouTube_%282015-2017%29.svg.png" alt=""/>
        </Link>
      </div>

      <div className="header__input">
        <input 
          onChange={e=>setInputSearch(e.target.value)} 
          value={inputSearch} placeholder="Search" type="text"
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className="header__inputButton" />
        </Link>
      </div>

      <div className="header__icons">
        <VideoCallIcon className="header__icon"/>
        <AppsIcon className="header__icon"/>
        <NotificationsIcon className="header__icon"/>
        <Avatar src="https://avatars0.githubusercontent.com/u/67520676?s=400&u=5ce3e4451d58528752aa7c8eabe8b4a652f9ff5b&v=4"/>
      </div>
    </div>
  )
}

export default Header
