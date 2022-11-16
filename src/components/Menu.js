import React, { useState } from 'react'
import { StyledMenu } from './styles/StyledMenu'
import { RecordMatch } from './RecordMatch'
import { AddPlayer } from './AddPlayer'
import { MultipleMatches } from './MultipleMatches'

export const Menu = ({players}) => {
    const [showRecord, setRecordShown] = useState(false);
    const [showAdd, setAddShown] = useState(false);
    const [showMatches, setMatchesShow] = useState(false);

    //This is a function to handle the event click
    const handleRecordClick = (e) => {
        e.preventDefault(); //Stops the page from refreshing
        //Toggle the value
        setRecordShown(current => !current)
    }
    
    const handleAddClick = (e) => {
        e.preventDefault();
        setAddShown(current => !current)
    }

    const handleMatchClick = (e) => {
        e.preventDefault();
        setMatchesShow(current => !current)
    }

    return (
        <StyledMenu>
            <h1>Menu</h1>
            <button className='formButton' onClick={handleRecordClick}>Record Match</button>
            {showRecord && (<RecordMatch players = {players}/>)}
            <button className='formButton' onClick={handleMatchClick}>Played 3 Matches?</button>
            {showMatches && (<MultipleMatches players = {players}/>)}
            <button className='formButton' onClick={handleAddClick}>Add Player</button>
            {showAdd && (<AddPlayer players = {players}/>)}
        </StyledMenu>
    )
}
