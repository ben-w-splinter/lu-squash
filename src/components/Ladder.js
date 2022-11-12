import React from 'react'
import { DatabaseConnection } from '../Firebase.js';
import { getDatabase, ref, child, get } from "firebase/database";

export const Ladder = () => 
{
  DatabaseConnection();
  const dbRef = ref(getDatabase());

  get(child(dbRef, `Players`)).then((snapshot) => 
  {
    if (snapshot.exists()) 
    {
      let databaseData = snapshot.val();

      console.log(databaseData);

      const players = [
        {name: "Louis Fisher", rank: 1},
        {name: "Gassman", rank: 2},
        {name: "Bob", rank: 3},
        {name: "Robert", rank: 4},
      ];

      return (
        <table>
          <tr>
            <th>Name</th>
            <th>Rank</th>
          </tr>
          {
            //No idea how to loop through the object
            databaseData.forEach(data => 
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
    else 
    {
      console.log("No data available");
    }
  }).catch((error) => 
  {
    console.error(error);
  });

  return null;
}
