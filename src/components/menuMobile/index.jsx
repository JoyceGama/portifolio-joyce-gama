import "./style.css";
import { userData } from "../../utils/projects";
import Whats  from "../../assets/whats.png";
import Github from "../../assets/github.png";
import Linkedin from "../../assets/linkedin.png";
import { useHistory } from "react-router-dom";

const MenuMobile = () => {

    const history = useHistory()

    function click(router){
        history.push(router)
    }


    return (
       <div className="menu-mobile">
        <p onClick={()=>click("/")} className="buttons">Home</p>
        <p onClick={()=>click("/tecnhologies")} className="buttons">Technologies</p>
        <p onClick={()=>click("/projects")} className="buttons">Projects</p>
        <p onClick={()=>click("/curriculum")} className="buttons">Curriculum</p>

   <div className="icons-container-img">
            <a className="a-whats" href={`https://api.whatsapp.com/send?phone=+55${userData.whatsappNumber}&text=Ol%C3%A1%2C%20venho%20por%20meio%20do%20seu%20portf%C3%B3lio%20na%20internet%2C%20gostaria%20de%20conhecer%20melhor%20seus%20servi%C3%A7os`} target="blank"><img className="whats-img" src={Whats} alt="linkedin" /></a>
            <a className="a-git" href={`https://github.com/${userData.githubUser}`} target="blank"><img className="git-img" src={Github} alt="linkedin" /></a>
            <a className="a-linkedin" href={`https://www.linkedin.com/in/${userData.linkedinUser}`} target="blank"><img className="link-img" src={Linkedin} alt="linkedin" /></a>
</div>
    
       </div>
    )
}

export default MenuMobile