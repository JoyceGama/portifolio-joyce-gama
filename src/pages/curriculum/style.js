import styled from 'styled-components';

export const DivContainer = styled.div`
width: 70%;
height: 100%;
background-color: transparent;
display: flex;
flex-direction: column;
align-items: center;
align-content: center;


.title-curriculum{
    font-size: 35px;
    color: white;
    font-family: "Jura";
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: normal;
}


.box-text{
    width: 90%;
    height: 80%;
    background: rgba(0, 32, 143, 0.59);
    border-radius: 15px;
}

.title-box{
    font-size: 30px;
    color:white;
    font-family: "Jura";
    font-weight: normal;
    margin-left: 15px;
}
.text-box-1{
    font-family: "Jura";
    font-weight: normal;
    margin-left: 15px;
    color: white;
    font-size: 15px;
    width: 35%;
    margin-bottom: 0;
}

.text-box-2{
    font-family: "Jura";
    font-weight: normal;
    margin-left: 15px;
    color: white;
    font-size: 15px;
    width: 20%;
    margin-bottom: 0;
}

.text-box-3{
    width: 80%;
    font-family: "Jura";
    font-weight: normal;
    margin-left: 15px;
    color: white;
    font-size: 15px;
    margin-bottom: 0;
}

@media (max-width: 1185px){
    .title-curriculum{
        font-size: 30px;
    }
    .title-box{
        font-size:20px;
    }
    .text-box-1, .text-box-2, .text-box-3{
        font-size: 12px;
    }
}

@media (max-width: 735px){
    .title-curriculum{
        font-size: 25px;
    }
    .title-box{
        font-size:15px;
    }
    .text-box-1, .text-box-2, .text-box-3{
        font-size: 10px;
    }
}
}
`