import MusicPlayer from "../musicplayer"
import { ContainerImg, Head, ImagemMe, ImagemStar } from "./style"
import Whats from "../../assets/whats.png"
import Github from "../../assets/github.png";
import Linkedin from "../../assets/linkedin.png";
import { userData } from "../../utils/projects";
import { useHistory } from "react-router-dom";
import MenuBlue from "../../assets/menu.png"
import { useState } from 'react';
import MenuMobile from "../menuMobile";
import Nota from "../../assets/nota.png";

const Header = () =>{
    const[openMenu, setOpenMenu] = useState(false)

    const history = useHistory()
    
    function home(){
        history.push("/")
    }

    function menuMobile(){
        if(openMenu === false){
            setOpenMenu(true)
        } else{
            setOpenMenu(false)
        }
    }

    function musicplayerOn(){
       history.push("/playlist")
    }

    return(
        <Head height={"70px"}>
            <div className="container-imagens">
            <ImagemMe onClick={home} />
            <ImagemStar />
            </div> 
            <p className="name-header">Joyce Gama</p>
            <MusicPlayer />
            <img onClick={musicplayerOn} className="nota" src={Nota} alt="menu"></img>
            <ContainerImg>
            <img onClick={menuMobile} className="menu-blue" src={MenuBlue} alt="menu"></img>
            {openMenu === true ? <MenuMobile /> : false}
            
            <div className="container-icons">
            <a className="img-whats" href={`https://api.whatsapp.com/send?phone=+55${userData.whatsappNumber}&text=Ol%C3%A1%2C%20venho%20por%20meio%20do%20seu%20portf%C3%B3lio%20na%20internet%2C%20gostaria%20de%20conhecer%20melhor%20seus%20servi%C3%A7os`} target="blank"><img className="img-linkedin" src={Whats} alt="linkedin" /></a>
            <p>WhatsApp</p>
            </div>

            <div className="container-icons">
            <a className="img-git" href={`https://github.com/${userData.githubUser}`} target="blank"><img className="img-linkedin" src={Github} alt="linkedin" /></a>
            <p className="git-p">Github</p>
            </div>

            <div className="container-icons">
            <a className="img-linkedin" href={`https://www.linkedin.com/in/${userData.linkedinUser}`} target="blank"><img className="img-linkedin" src={Linkedin} alt="linkedin" /></a>
            <p>Linkedin</p>
            </div>

            </ContainerImg>
            
        </Head>
    )
}

export default Header