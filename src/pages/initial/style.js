import styled from 'styled-components';

export const ContainerDiv = styled.div`
width: 70%;
height: 100%;
display:flex;
background-color:transparent;
flex-direction: column;
align-items: center;
justify-content: center;

.container-div{
    margin-right: 35px;
    margin-top: 15px;
    width: 90%;
    background: transparent;
    height: 60%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

img{
    width: 45%;
    height: 90%;
    border-radius: 190px;
}

h1{
    font-size: 60px;
    width: 40%;
    color: white;
    font-family: 'Jura',sans-serif;
    font-weight: normal;
}

.container-box{
    width: 86%;
    height: 30%;
    background-color: rgba(0,32,143,0.61);
    box-shadow: 10px 10px 4px #000000;
    border-radius: 10px;
    color: white;
    font-family: "Julee";
    font-size: 30px;
    padding: 20px;
    margin-bottom: 20px;
}

@media (max-width: 1080px){
.container-box{
    font-size:25px;
}
h1{
    font-size: 30px;
}
img{
    height: 80%;
    min-height: 40%;
    max-height:91%;
}
}

@media (max-width: 810px){
    .container-box{
        font-size:20px;
    }
    }

@media (max-width: 485px){
    .container-box{
    font-size:15px;
    }
    h1{
        font-size: 20px;
       }
    }

@media (max-width: 1000px){
    img{
        height: 70%;
    }
}

@media (max-width: 840px){
    img{
        height: 60%;
    }
}

@media (max-width: 700px){
    img{
    max-height: 40%;
    height:100%;
    min-height:30%;    
    max-width: 30%;
    width: 100%;
    min-width: 40%;
    }
}

@media (max-width: 590px){
   h1{
    font-size: 30px;
   }
}

@media (max-width: 415px){
    h1{
        font-size: 15px;
    }
}

@media (max-width: 642px){
    .container-box{
        font-size: 15px;
    }
}

@media (max-width: 366px){
    .container-box{
        font-size: 12px;
    }
}

`