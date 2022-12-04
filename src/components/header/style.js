import styled from 'styled-components';
import BlueBackground from "../../assets/footer.png";
import Star from "../../assets/star.png";
import Eu from "../../assets/eu.png";

export const Head = styled.div`
background:url(${BlueBackground});
width: 100%;
height:${props => props.height};
background-size: cover;
display:flex;
align-items: center;

.container-imagens{
  display:flex;
  align-items: center;
  justify-content: center;
  margin-left: -30px;
}

.name-header{
font-family: 'Julee', cursive;
color:white;
}

.nota{
  width: 10%;
}

@media (min-width:520px){
  .nota{
    display:none;
  }
}

@media (max-width:520px){
  .container-player{
    display:none;
  }
  justify-content: space-between;
}
`
export const ImagemMe = styled.img`
    width: 50%;
    height: 6%;
    max-height: 40px;
    border-radius: 40px;
    position: absolute;
    max-width: 45px;
    cursor: pointer;
`
ImagemMe.defaultProps = {
    src: Eu,
  };

  export const ImagemStar = styled.img`
  width: 100%;
  height: 100%;
  max-width: 60%;
  `
  ImagemStar.defaultProps = {
    src: Star,
  };

export const ContainerImg = styled.div`
display:flex;
width: 100%;
min-width:20%;
max-width:15%;
align-items: center;
justify-content: center;

.container-icons{
  margin-top:10px;
  display:flex;
  flex-direction: column;
  width:20%;
  align-items: baseline;
  justify-content: center;

}

.img-whats{
  width:100%;
  min-width:60%;
  max-width: 40%;
  cursor: pointer;
}

.img-git{
  min-width: 65%;
  max-width: 45%;
  width:100%;
  cursor: pointer;
}

.img-linkedin{
  width: 100%;
  border-radius: 2px;
  cursor: pointer;
  min-width: 60%;
  max-width: 40%;
}



p{
  font-size: 10px;
  color: white;
  font-family: 'Julee';
  margin:0;
}

.git-p{
  font-size: 10px;
  color: white;
  font-family: 'Julee';
  padding-left: 6px;
  margin:0;
}
.menu-blue{
  width: 35%;
}



@media (max-width:658px){
  .container-icons{
    display:none;
  }
}

  @media (min-width:659px){
    .container-icons{
      display:block;
    }
    .menu-blue, .menu-mobile{
      display:none;

    }

    @media (max-width:880px){
      p, .git-p{
        font-size: 5px;
      }
    }
}
`

