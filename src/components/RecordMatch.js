import React from 'react'
import { useState } from 'react';
import { StyledInputForm } from './styles/StyledInputForm'
import { getDatabase, ref, update } from "firebase/database";

export const RecordMatch = ({players}) => {

  const [myName, setMyName] = useState("");
  const [myScore, setMyScore] = useState(0);
  const [opName, setOpName] = useState("");
  const [opScore, setOpScore] = useState(0);

  const getPlayer = (name) => {
      for (let index = 1; index < players.length; index++) {
          if(players[index].name === name){
            return players[index]
          }
      }
  }

  const derankPlayers = (topRank, bottomRank) => 
  {
    console.log(topRank, bottomRank);
    //Move the winning player into the position of the person they beat 
    let topPosition = players[topRank].rank;

    //Loops through from bottom, reducing rank (up the table)
    for (let index = bottomRank - 1; index >= topRank; index--) 
    {
      console.log("Changing " + (players[index].name) + " to " + (index + 1));
      players[index].rank = (index + 1);

      const database = 'Players/' + index;

      console.log(database);

      update(ref(getDatabase(), database), 
      {
        rank: (index + 1)
      });
    }

    //Moves winning player into position of original top position
    const database = 'Players/' + bottomRank;

    update(ref(getDatabase(), database), 
    {
        rank: topPosition
    });
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Ran with", myScore, opScore)

      //If I won
      if (myScore > opScore)
      {
          console.log("Getting Ranks")
          const myRank = getPlayer(myName).rank;
          const opRank = getPlayer(opName).rank;

          //If i won and have a lower rank, swap
          //Move everyone else down
          if (myRank > opRank) 
          {
            derankPlayers(Math.min(myRank, opRank), Math.max(myRank, opRank)) 
          }
      }
      else
      {
        const myRank = getPlayer(myName).rank;
        const opRank = getPlayer(opName).rank;

        //If i lost and have a better rank, swap
        if (myRank < opRank)
        {
          derankPlayers(Math.min(myRank, opRank), Math.max(myRank, opRank)) 
        }
      }

      console.log(players)
  }
  return (
    <StyledInputForm>
      <form>
        <div className='namescore'>
          <input type="text" placeholder="Your Name" onChange={(v) => setMyName(v.target.value)}/>
          <input type="text" placeholder="Score" onChange={(v) => setMyScore(parseInt(v.target.value))}/>
        </div>
        <div className='namescore'>
          <input type="text" placeholder='Oponent Name' onChange={(v) => setOpName(v.target.value)}/>
          <input type="text" placeholder="Score" onChange={(v) => setOpScore(parseInt(v.target.value))}/>
        </div>
        <button className='formbutton' onClick={handleSubmit}>Submit</button>
      </form>
    </StyledInputForm>
  )
}
