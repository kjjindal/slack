import { Avatar } from '@material-ui/core';
import { AccessTime,HelpOutlined,Search } from '@material-ui/icons';
import React, { useState } from 'react';
import './Header.css';
import { useStateValue } from './StateProvider';



function Header(){
    const [{user}]=useStateValue();
    console.log(user);
    return (
        <>
        <div className="header">
        <div className="header__left">
            <Avatar className="header__avatar" src={user?.photoURL} alt={user?.displayName} />
            <AccessTime  />
        </div>
        <div className="header__search">
            <Search />
            <input type="text"  placeholder="search" />
        </div>
        <div className="header__right">
            <HelpOutlined />
        </div>


        </div>



        </>
    )
}


export default Header