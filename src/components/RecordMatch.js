import React from 'react'
import { StyledInputForm } from './styles/StyledInputForm'


export const RecordMatch = () => {

  const handleClick = (e) => {
      e.preventDefault();
  }

  return (
    <StyledInputForm>
      <form>
        <div className='namescore'>
          <input type="text" placeholder="Your Name"/>
          <input type="text" placeholder="Score"/>
        </div>
        <div className='namescore'>
          <input type="text" placeholder='Oponent Name'/>
          <input type="text" placeholder="Score"/>
        </div>
        <button className='formbutton' onClick={handleClick}>Submit</button>
      </form>
    </StyledInputForm>
  )
}
