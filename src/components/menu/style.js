import styled from 'styled-components';

export const MenuStyled = styled.aside`
width: 30%;
height: 100%;
background-color: rgba(0, 32, 143, 0.59);
box-shadow: 5px 0px 10px rgba(0, 0, 0, 0.54);
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;

@media (max-width: 658px){
    display:none;
}
` 
export const ButtonStyle = styled.button`
width: 45%;
height: 8%;
border-radius: 10px;
border: none;
background-color: rgba(0,24,62,1);
box-shadow: 0px 4px 4px #196dd0;
color: white;
font-family: "Julee";
font-size: 15px;
cursor: pointer;

&:hover{
    background-color:#2196f3;
    color: black;
    box-shadow: 0px 4px 4px rgba(0,24,62,1);
}


`