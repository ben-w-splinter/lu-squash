import styled from 'styled-components'

export const StyledMenu = styled.div`
    width: 35rem;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem;
    border: 2px solid red;
    border-radius: 25px;
    background-color: white;
    padding: 1rem;
    color: black;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);

    h1{
        padding: 0;
        margin: 0.5rem;
    }
    p{
        margin: 0;
        padding: 0;
    }

    .formButton{
        margin: 0.5rem;
        text-decoration: none;
        width: 10rem;
        font-size: medium;
        border: 2px solid red;
        background-color: red;
        color: wheat;
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
        padding: 0.5rem;
        border-radius: 8px;
    }

    button:hover{
        cursor: pointer;
    }

    @media(max-width: 1000px){
        width: calc(100% - 4rem);
    }
`