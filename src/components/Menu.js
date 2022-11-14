import React, { useState } from 'react'
import { StyledMenu } from './styles/StyledMenu'
import { RecordMatch } from './RecordMatch'
import { AddPlayer } from './AddPlayer'

export const Menu = ({players}) => {
    const [showRecord, setRecordShown] = useState(false);
    const [showAdd, setAddShown] = useState(false);

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

    return (
        <StyledMenu>
            <h1>Menu</h1>
            <button onClick={handleRecordClick}>Record Match</button>
            {showRecord && (<RecordMatch players = {players}/>)}
            <button onClick={handleAddClick}>Add Player</button>
            {showAdd && (<AddPlayer players = {players}/>)}
        </StyledMenu>
    )
}
