import React from 'react'
import { useState } from 'react';
import { StyledInputForm } from './styles/StyledInputForm'


export const RecordMatch = ({players}) => {

  const [myName, setMyName] = useState("");
  const [myScore, setMyScore] = useState("");
  const [opName, setOpName] = useState("");
  const [opScore, setOpScore] = useState("");

  const getRank = (name) => {
      for (let index = 1; index < players.length; index++) {
          if(players[index].name === name){
            return players[index].rank
          }
      }
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      //Find who won
      if (myScore > opScore)
      {
          const myRank = getRank(myName);
          const opRank = getRank(opName);
          
      }
      else{

      }
  }
  return (
    <StyledInputForm>
      <form>
        <div className='namescore'>
          <input type="text" placeholder="Your Name" onChange={(v) => setMyName(v)}/>
          <input type="text" placeholder="Score" onChange={(v) => setMyScore(v)}/>
        </div>
        <div className='namescore'>
          <input type="text" placeholder='Oponent Name' onChange={(v) => setOpName(v)}/>
          <input type="text" placeholder="Score" onChange={(v) => setOpScore(v)}/>
        </div>
        <button className='formbutton' onClick={handleSubmit}>Submit</button>
      </form>
    </StyledInputForm>
  )
}
