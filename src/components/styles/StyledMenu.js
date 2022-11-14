import styled from 'styled-components'

export const StyledMenu = styled.div`
    width: 50vw;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin: 1rem;
    border: 2px solid red;
    border-radius: 25px;
    background-color: #9EA0A0;
    padding: 1rem;
    color: black;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);

    h1{
        padding: 0;
        margin: 0;
    }
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

    @media(max-width: 1000px){
        width: calc(100% - 4rem);
    }
`