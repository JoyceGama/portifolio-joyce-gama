import { ButtonStyle, MenuStyled } from "./style"
import { useHistory } from "react-router-dom"


const Menu = () => {

    const history = useHistory()

    function click(router){
        history.push(router)
    }

    return(
        <MenuStyled>
            <ButtonStyle onClick={()=> click("/")}>Home</ButtonStyle>
            <ButtonStyle onClick={()=> click("/tecnhologies")} >Technologies</ButtonStyle>
            <ButtonStyle onClick={()=> click("/projects")} >Projects</ButtonStyle>
            <ButtonStyle onClick={()=> click("/curriculum")} >Curriculum</ButtonStyle>
        </MenuStyled>
    )
}

export default Menu