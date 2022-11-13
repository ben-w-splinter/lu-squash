import React, { useState, useEffect } from 'react'
import { DatabaseConnection } from '../Firebase.js';
import { getDatabase, ref, onValue } from "firebase/database";

export const Ladder = () => 
{
  DatabaseConnection();
  const db = getDatabase();

  //Create a use state hook. Players is the variable, setPlayers is the function to set the value of players
  const [players, setPlayers] = useState([]);

  //Get the reference to the database
  const dbRef = ref(db, '/Players/');

  //Here we use the useEffect hook to only call this function when the website has loaded
  //We have to do this because onValue is an async function and will be loaded after the DOM 
  //has loaded
  useEffect(()=>{
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      setPlayers(data);
    });
  })

  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Rank</th>
      </tr>
      {
        //We use map to loop through the content. This will actually return the object this way
        players.map((data) => 
        {
          return(
            <tr>
              <td>{data.name}</td>
              <td>{data.rank}</td>
            </tr>
          )
        })
      }
    </table>
  )

}
