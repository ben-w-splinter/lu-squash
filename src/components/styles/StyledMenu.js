import styled from 'styled-components'

export const StyledMenu = styled.div`
    width: 50vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin: 1rem;
    border: 2px solid red;
    border-radius: 25px;
    background-color: #9EA0A0;
    padding: 1rem;
    max-height: 50vh;
    color: black;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);

    button{
        text-decoration: none;
        width: fit-content;
        font-size: medium;
        border: 2px solid red;
        background-color: red;
        color: wheat;
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
        padding: 0.5rem;
    }

    button:hover{
        cursor: pointer;
    }
`