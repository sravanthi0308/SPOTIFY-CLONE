import React, { useState } from 'react';
import "./Sidebar.css";
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useDataLayerValue } from './DataLayer';



function Sidebar() {
    const [{playlists },dispatch] = useDataLayerValue()
  return (
    <div className='sidebar'>
      <img className="sidebar__logo" src="https://preview.redd.it/3aykopsn3xk81.png?width=640&crop=smart&auto=webp&s=4a5b9a55c18e5cb930d2abc390b09b6ebfe91c95" alt="" />
    
      <SidebarOption Icon={HomeIcon} title = "Home" />
      <SidebarOption Icon={SearchIcon} title = "Search" />
      <SidebarOption Icon={LibraryMusicIcon} title = "Your Library" />
      <br />
      <strong className='sidebar__title'>PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlist => (
        <SidebarOption title={playlist.name} />
      )))}


      
      
    </div>
  );
}

export default Sidebar;
