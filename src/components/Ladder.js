import React from 'react'

export const Ladder = () => {

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
      {players.map((p) => {
        return(
          <tr>
            <td>{p.name}</td>
            <td>{p.rank}</td>
          </tr>
        )
      })}
    </table>
  )
}
