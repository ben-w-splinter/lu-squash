import React from 'react'
import { useState } from 'react';
import { StyledInputForm } from './styles/StyledInputForm'
import { getDatabase, ref, update } from "firebase/database";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


export const RecordMatch = ({players}) => {

  const [myName, setMyName] = useState("");
  const [myScore, setMyScore] = useState(0);
  const [opName, setOpName] = useState("");
  const [opScore, setOpScore] = useState(0);
  const playerNames = Object.values(players).map((e) => {return e.name})

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

      const database = 'Players/' + players[index].name;

      console.log(database);

      update(ref(getDatabase(), database), 
      {
        rank: (index + 1),
      });
    }

    //Moves winning player into position of original top position
    let database = 'Players/' + players[bottomRank].name;

    //Update bottom rank player
    update(ref(getDatabase(), database), 
    {
        rank: topPosition,
        matches: (players[bottomRank].matches + 1)
    });

    database = 'Players/' + players[topRank].name;
  }

  const getPlayer = (name) => {
    for (let index = 1; index < players.length; index++) {
        if(players[index].name === name){
          return players[index]
        }
    }
  }

  const clearForm = () => {
    document.getElementById('recordmatch').reset()
    setMyName("")
    setOpName("")
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Ran with", myScore, opScore)
      clearForm();
      console.log("Getting Ranks")
      const myRank = getPlayer(myName).rank;
      const opRank = getPlayer(opName).rank;
      //Update my matches
      update(ref(getDatabase(), "Players/" + myName), 
      {
          matches: (players[myRank].matches + 1)
      });
      //Update oponent matches
      update(ref(getDatabase(), "Players/" + opName), 
      {
          matches: (players[opRank].matches + 1)
      });
      //If I won
      if (myScore > opScore)
      {

          //If i won and have a lower rank, swap
          //Move everyone else down
          if (myRank > opRank) 
          {
            derankPlayers(Math.min(myRank, opRank), Math.max(myRank, opRank)) 
            clearForm();
            document.getElementById('alertrm').innerHTML = "Congratulations!"
            document.getElementById('alertrm').style.color = "green"
            setTimeout(() => {document.getElementById('alertrm').innerHTML = "" }, 4000); 
          }
      }
      else
      {
        const myRank = getPlayer(myName).rank;
        const opRank = getPlayer(opName).rank;
        clearForm();

        //If i lost and have a better rank, swap
        if (myRank < opRank)
        {
          derankPlayers(Math.min(myRank, opRank), Math.max(myRank, opRank))
          document.getElementById('alertrm').innerHTML = "Better luck next time!"
          document.getElementById('alertrm').style.color = "red"
          setTimeout(() => {document.getElementById('alertrm').innerHTML = "" }, 4000); 
        }
      }

      console.log(players)
  }
  return (
    <StyledInputForm>
      <div id='alertrm'></div>
      <form id = 'recordmatch'>
        <div className='namescore'>
          {/* <input type="text" placeholder="Your Name" onChange={(v) => setMyName(v.target.value)}/> */}
          <Autocomplete
              disablePortal
              fullWidth
              id="My Name"
              options={playerNames}
              onChange={(_,v) => setMyName(v)}
              value = {myName}
              sx = {{marginY: "1rem",width: 300}}
              renderInput={(params) => <TextField {...params} label="My Name" />}
          />
          <input type="text" placeholder="Score" onChange={(v) => setMyScore(parseInt(v.target.value))}/>
        </div>
        <div className='namescore'>
        <Autocomplete
              disablePortal
              id="My Name"
              options={playerNames}
              sx = {{marginY: "1rem"}}
              onChange={(e,v) => setOpName(v)}
              value={opName}
              renderInput={(params) => <TextField {...params} label="Oponent Name" />}
          />
          <input type="text" placeholder="Score" onChange={(v) => setOpScore(parseInt(v.target.value))}/>
        </div>
        <button className='formButton button-submit' onClick={handleSubmit}>Submit</button>
      </form>
    </StyledInputForm>
  )
}
