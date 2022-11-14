import React from 'react'
import { StyledInputForm } from './styles/StyledInputForm'
import { useState } from 'react';
import { getDatabase, ref, update } from "firebase/database";

export const MultipleMatches = ({players}) => {
  const [playerName, setPlayerName] = useState("");

  const handleClick = (e)=>
  {
    e.preventDefault();
    document.getElementById('multiplematches').reset();
    console.log("Add player", playerName)
    const player = getPlayer(playerName);

    if (player.rank >= 2) 
    {
        swapPosition(player.rank - 1, player.rank);
        document.getElementById('alertmm').innerHTML = "Congratulations! Enjoy the promotion"
        document.getElementById('alertmm').style.color = "green"
        setTimeout(() => {document.getElementById('alertmm').innerHTML = "" }, 4000); 
    }
  }

  const getPlayer = (name) => {
    for (let index = 1; index < players.length; index++) {
        if(players[index].name === name){
          return players[index]
        }
    }
  }

  const swapPosition = (topRank, bottomRank) => 
  {
    console.log(topRank, bottomRank);
    //Move the winning player into the position of the person they beat 
    let topPosition = players[topRank].rank;

    //Places the lower player in the top position
    let database = 'Players/' + players[bottomRank].name;
    update(ref(getDatabase(), database), 
    {
        rank: topPosition
    });

    //Move top player down a position
    database = 'Players/' + players[topPosition].name;
    topPosition ++;
    update(ref(getDatabase(), database), 
    {
        rank: topPosition
    });
   }

  return (
    <StyledInputForm>
      <form id = 'multiplematches'>
        <div id = 'alertmm'></div>
        <div className='namescore'>
          <input type="text" placeholder="Player Name" onChange={(v) => setPlayerName(v.target.value)}/>
        </div>
        <button className='formbutton' onClick={handleClick}>Submit</button>
      </form>
    </StyledInputForm>
  )
}