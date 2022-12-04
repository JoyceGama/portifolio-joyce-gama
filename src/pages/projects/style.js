import styled from 'styled-components';

export const Lista = styled.ul`
display:flex;
width:60%;
height: 90%;
list-style: none;
flex-direction: column;
overflow: auto;

@media (max-width: 658px){
    width: 100%;
}

::-webkit-scrollbar {
    width: 5px;
  }

::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px #196DD0; 
    border-radius: 10px;
  }

::-webkit-scrollbar-thumb {
    background: rgb(2 25 103);
    border-radius: 10px;
  }

::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 24, 62, 1);
  }

.lista-projeto{
    display: flex;
    align-items: center;
    width: 100%;
    margin-top: 10px;
}

}

.imagem-projeto{
    width: 30%;
    border-radius: 10px;
}

.container-projeto{
    display: flex;
    flex-direction: column;
    margin-left: 10px;
}

.titulo-projeto{
    color:white;
    font-family:"julee";
    font-size:25px;
}

.descricao-projeto{
    color:white;
    font-family:"julee";
    font-size:15px;
}

a{
    color:white;
    font-family:"julee";
    font-size:15px;
}

a:hover{
    color:#196DD0;
}
`