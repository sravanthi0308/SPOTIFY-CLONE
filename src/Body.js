import React from 'react';
import Header from './Header';
import "./Body.css";
import { useDataLayerValue } from './DataLayer';
 import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
 //import FavoriteIcon from '@mui/icons-materialFavorite';
 import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
 import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SongRow from './SongRow';

function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();
  return (
    <div className='body'>
      {/* <h1>I AM THE BODY</h1> */}
      <Header spotify={spotify} />
      <div className='body__info'>
        <img src='https://repository-images.githubusercontent.com/442166270/37a80e61-2cbe-4175-b966-dedc24168418' alt=''/>
        <div className='body__infoText'>
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>

        </div>
      </div>
      <div className='body__songs'>
        <div className='body__icons'>
          <PlayCircleFilledIcon className='body__shuffle' />
          <FavoriteBorderIcon fontSize='large' />
          <MoreHorizIcon />

        </div>
        {discover_weekly?.tracks.items.map((item => 
          <SongRow track={item.track} />
          ))}

      </div>


    </div>
  );
}

export default Body;
