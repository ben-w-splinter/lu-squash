import React from 'react'
import { useState } from 'react';
import { StyledInputForm } from './styles/StyledInputForm'


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

  const derankPlayers = (topRank, bottomRank) => {
      for (let index = bottomRank+1; index < topRank+1; index++) {
          let player = players[index];
          player.rank --;
          players[index] = player;
      }
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Ran with", myScore, opScore)
      //Find who won
      if (myScore > opScore)
      {
          console.log("Getting Ranks")
          const myRank = getPlayer(myName).rank;
          const opRank = getPlayer(opName).rank;
          //Move everyone else down
          derankPlayers(Math.max(myRank, opRank), Math.min(myRank, opRank))
          //Get my player
          const myPlayer = getPlayer(myName);
          const newPlayer = myPlayer;
          //Change my rank
          newPlayer.rank = opRank;
          players[players.indexOf(myPlayer)] = newPlayer;
          console.log(players)
      }
      else{

      }
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
