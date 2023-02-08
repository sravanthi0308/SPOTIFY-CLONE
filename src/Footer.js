import React from 'react';
import "./Footer.css";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
// import { Grid, Slider } from "@material-ui/core";
import Slider from '@mui/material/Slider';
import Grid from '@mui/material/Grid';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';

function Footer() {
  return (
    <div className='footer'>
        <div className='footer__left'>
            <img className='footer__albumLogo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCwy88yIEml3d10RENb1VLQfkGz2gMeWpCDjO4yRv6&s" alt="" />
              <div className='footer__songInfo'>
                <h4>Wohoo!!!</h4>
                <p>Sid</p>
                </div>

        </div>

        <div className='footer__center'>
            <ShuffleIcon className='footer__green' />
            <SkipPreviousIcon className='footer__icon' />
            <PlayCircleOutlineIcon fontSize='large' className='footer__icon' />
            <SkipNextIcon className='footer__icon' />
            <RepeatIcon className='footer__green' />


        </div>
        <div className='footer__right'>
  
            <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider/>
          </Grid>
        </Grid>

        </div>

      
    </div>
  );
}

export default Footer;
