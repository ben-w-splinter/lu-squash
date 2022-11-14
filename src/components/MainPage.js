import React from 'react'
import { Ladder } from './Ladder'
import { Menu } from './Menu'
import { StyledMainPage } from './styles/StyledMainPage'
import { DatabaseConnection } from '../Firebase.js';
import { useState, useEffect } from 'react'
import { getDatabase, ref, onValue, query } from "firebase/database";

export const MainPage = () => {
  DatabaseConnection();
  const db = getDatabase();

  //Create a use state hook. Players is the variable, setPlayers is the function to set the value of players
  const [players, setPlayers] = useState([]);

  //Create a state to check if this is the first render
  //Prevents infinite update loop.
  const [isInitialRender, setIsInitialRender] = useState(true);

  //Get the reference to the database
  const dbRef = query(ref(db, '/Players'));

  //Here we use the useEffect hook to only call this function when the website has loaded
  //We have to do this because onValue is an async function and will be loaded after the DOM 
  //has loaded
  useEffect(()=>{
    if(isInitialRender)
    {
      onValue(dbRef, (snapshot) => 
      {
        const data = snapshot.val();
        setPlayers(sorted(data));
        setIsInitialRender(false);
      });
    }
  })

  const sorted = (data) => {
    let sortedPlayers = []
    Object.values(data).forEach(element => 
    {
        sortedPlayers[element.rank] = element
    });

    return sortedPlayers;
  }
  return (
    <StyledMainPage>
        <Menu players = {players}/>
        <Ladder players = {players}/>
    </StyledMainPage>
  )
}
