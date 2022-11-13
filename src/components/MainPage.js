import React from 'react'
import { Ladder } from './Ladder'
import { Menu } from './Menu'
import { StyledMainPage } from './styles/StyledMainPage'

export const MainPage = () => {
  return (
    <StyledMainPage>
        <Menu/>
        <Ladder/>
    </StyledMainPage>
  )
}
