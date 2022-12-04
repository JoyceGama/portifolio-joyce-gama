import styled from 'styled-components';

export const ContainerIcons = styled.div`
background-color: transparent;
width: 60%;
height: 50%;
margin-left: 17px;
display: flex;
align-items: center;
flex-direction: column;

.title{
    font-size: 40px;
    width: 40%;
    color: white;
    font-family: 'Jura',sans-serif;
    font-weight: normal;
    display: flex;
    justify-content: center;
}

@media (max-width: 288px){
    .title{
    font-size: 30px;
    }
}

.icons{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
    align-items: center;
}

.html{
    width:15%;
}

.css{
    width: 16%; 
}

.javascript{
    width:12%;
}

.typescript{
    width: 13%;
    border-radius: 10px;
}

.python{
    width:13%;
}

.reacticon{
    width:16%;
}

.django{
    width:15%;
}

.style{
    width:15%;
}

.postgres{
    width:15%;
}

.sqlite{
    width:20%;
}

.crud{
    width:20%;
}

.docker{
    width:15%;
}

.frame{
    width:15%;
}

.jest{
    width: 20%;
    height: 30%;
}

.rest{
    width: 15%;
    height: 20%;

}

.heroku{
    width: 12%;
}
`