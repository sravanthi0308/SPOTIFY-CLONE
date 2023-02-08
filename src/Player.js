import React from 'react';
import "./Player.css";
import Sidebar from './Sidebar';
import Body from './Body';
import Footer from './Footer';


function Player({ spotify }) {
  return (
    <div>
      {/* <h1>Welcome to spotify!!!</h1> */}
      <div className='player'>
        <div className='player_body'>
          <Sidebar />
          <Body />
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default Player;
