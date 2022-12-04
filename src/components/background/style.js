import styled from 'styled-components';
import Wall from "../../assets/background.jpg"

export const BackgroundStyled = styled.div`
background:url(${Wall});
width:100%;
height: 83vh;
margin-top: -3px;
background-size: cover;
display:flex;

.container-div{
    display: flex;
    flex-direction: row;
}

h1{
    font-size: 60px;
    width: 40%;
    color: white;
    font-family: 'Jura',sans-serif;
    font-weight: normal;
}

@media (max-width: 658px){
    justify-content: center;
}
`