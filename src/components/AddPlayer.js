import React from 'react'
import { StyledInputForm } from './styles/StyledInputForm'
import { useState } from 'react';
import { getDatabase, ref, set } from "firebase/database";
import TextField from '@mui/material/TextField';

export const AddPlayer = ({players}) => {
  const [playerName, setPlayerName] = useState("");
  const playerNames = Object.values(players).map((e) => {return e.name})

  const handleClick = (e)=>
  {
    e.preventDefault();
    setPlayerName("")
    console.log("Add player", playerName)
    //Check if the player is in the database
    let playerExists = false;
    let playersArray = Object.values(players);
    for (let index = 0; index < playersArray.length; index++) {
        if (playersArray[index].name === playerName){
          playerExists = true;
          break;

    }
  }
  if (playerExists)
  {
    document.getElementById('alertap').innerHTML = "This player already exists!"
    document.getElementById('alertap').style.color = "red"
    setTimeout(() => {document.getElementById('alertap').innerHTML = ""}, 4000)
    return
  }
  const rank = players.length;

  const db = getDatabase();
  set(ref(db, 'Players/' + playerName), 
  {
    name : playerName,
    rank : rank
  });
  document.getElementById('alertap').innerHTML = "Success! Welcome to the Ladder!"
  document.getElementById('alertap').style.color = "green"
  setTimeout(() => {document.getElementById('alertap').innerHTML = ""}, 4000)
}

  return (
    <StyledInputForm>
      <form id = 'addplayer'>
        <div id='alertap'></div>
        <div className='namescore'>
          <TextField 
              id="My Name"
              options={playerNames}
              onChange={(_,v) => setPlayerName(v)}
              value = {playerName}
              sx = {{marginY: "1rem",width: 300}}
              label="Your Name" />
        </div>
        <button className='formButton button-submit' onClick={handleClick}>Submit</button>
      </form>
    </StyledInputForm>
  )
}
