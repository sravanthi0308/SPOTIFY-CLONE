
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import React, { useEffect, useState } from "react";
import SpotifyWebApi from 'spotify-web-api-js';//used to connect spotify web api to react
import Player from './Player';
import { useDataLayerValue } from './DataLayer';



const spotify = new SpotifyWebApi();//creating instance of spotify


function Sidebar() {
  //const [token, setToken] = useState(null);
  const [{ user, token }, dispatch] = useDataLayerValue();


  //run code based on given condition
  useEffect(() => {
    //code..
    const hash = getTokenFromUrl();
    window.location.hash = "";
    //console.log("have a token",token);

    const _token = hash.access_token;

    if (_token) {

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      //setToken(_token);

      spotify.setAccessToken(_token);//giving access token to spotify api

      spotify.getMe().then(user => {
        //console.log(1,user);
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
        type: "SET_PLAYLISTS",
        playlists: playlists,
      });
    });

    
    }

    
    spotify.getPlaylist("4yJzNIoNknZHcMRsvjAssJ").then((response) =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
    );
      

    // console.log("have a token", token);


  }, []);

  // console.log("1..",user);
  // console.log("T..",token);


  return (
    <div className="App">
      {/* if there is token it renders h1/player otherwise login comp */}

      {token ? 
      <Player spotify={spotify} />
      : <Login />}
    </div>
  );
}

export default Sidebar;
