import styled from "styled-components";

export const StyledLadder = styled.table`
    th{
        background-color: black;
        color: white;
    }
        
    border: 1px solid black;
    width: 50%;
    max-width: 500px;
    border-collapse: collapse;
    text-align: left;
    margin: 1rem;
    th, td{
        padding: 0.5rem;
        border: 1px solid;
    }

    tr:nth-child(even) {
        background-color: #f2f2f2;
    }
    tr:hover{
        background-color: #b5121b;
    }
`