import React from 'react'
import { StyledInputForm } from './styles/StyledInputForm'
import { useState } from 'react';
import { getDatabase, ref, set } from "firebase/database";

export const AddPlayer = ({players}) => {
  const [playerName, setPlayerName] = useState("");

  const handleClick = (e)=>
  {
    e.preventDefault();
    console.log("Add player", playerName)
  
    const rank = players.length;

    const db = getDatabase();
    set(ref(db, 'Players/' + playerName), 
    {
      name : playerName,
      rank : rank
    });

  }

  return (
    <StyledInputForm>
      <form>
        <div className='namescore'>
          <input type="text" placeholder="Player Name" onChange={(v) => setPlayerName(v.target.value)}/>
        </div>
        <button className='formbutton' onClick={handleClick}>Submit</button>
      </form>
    </StyledInputForm>
  )
}
