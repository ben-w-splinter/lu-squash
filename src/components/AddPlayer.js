import React from 'react'
import { StyledInputForm } from './styles/StyledInputForm'

export const AddPlayer = () => {

  const handleClick = (e)=>{
      e.preventDefault();
  }

  return (
    <StyledInputForm>
      <form>
        <div className='namescore'>
          <input type="text" placeholder="Your Name"/>
          <input type="text" placeholder="Rank"/>
        </div>
        <button className='formbutton' onClick={handleClick}>Submit</button>
      </form>
    </StyledInputForm>
  )
}
