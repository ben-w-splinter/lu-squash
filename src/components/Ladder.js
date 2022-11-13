import { StyledLadder } from './styles/StyledLadder.js';

export const Ladder = ({players}) => 
{

  return (
    <StyledLadder>
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
    </StyledLadder>
  )

}
