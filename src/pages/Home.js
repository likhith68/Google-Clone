import React from 'react';
import './Home.css';
import { Link } from "react-router-dom";
import AppsIcon from "@mui/icons-material/Apps";
import { Avatar } from "@material-ui/core";
import Search from './Search';

function Home() {
  return (
    <div className='home'>
      <div className='home__header'>
        <div className='home__headerLeft'>
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>

        <div className='home__headerRight'>
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          <AppsIcon />
          <Avatar />
        </div>

      </div>
      <div className='home__body'>
        <img src="http://www.google.com/logos/doodles/2015/googles-new-logo-5078286822539264.3-hp2x.gif"></img>
        <div className='home__inputContainer'>
          <Search />
        </div>
      </div>

    </div>

  )
}

export default Home