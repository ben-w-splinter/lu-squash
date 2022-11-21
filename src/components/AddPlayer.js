import React from 'react'
import { StyledInputForm } from './styles/StyledInputForm'
import { useState } from 'react';
import { getDatabase, ref, set } from "firebase/database";

export const AddPlayer = ({players}) => {
  function isEmptyOrSpaces(str)
  {
    return str === null || str.match(/^ *$/) !== null;
  }
  const [playerName, setPlayerName] = useState("");

  const handleClick = (e)=>
  {
    e.preventDefault();
    document.getElementById('addplayer').reset()
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

  if(!(isEmptyOrSpaces(playerName)))
  {
    const db = getDatabase();
    set(ref(db, 'Players/' + playerName), 
    {
      name : playerName,
      rank : rank,
      matches: 0
    });
    document.getElementById('alertap').innerHTML = "Success! Welcome to the Ladder!"
    document.getElementById('alertap').style.color = "green"
    setTimeout(() => {document.getElementById('alertap').innerHTML = ""}, 4000)
  }
}

  return (
    <StyledInputForm>
      <form id = 'addplayer'>
        <div id='alertap'></div>
        <div className='namescore'>
          <input type="text" placeholder="Player Name" onChange={(v) => setPlayerName(v.target.value)}/>
        </div>
        <button className='formButton button-submit' onClick={handleClick}>Submit</button>
      </form>
    </StyledInputForm>
  )
}