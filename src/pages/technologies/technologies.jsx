import Background from "../../components/background"
import FooterComponent from "../../components/footer"
import Header from "../../components/header"
import Menu from "../../components/menu"
import Html from "../../assets/html.png"
import Css from "../../assets/css.png"
import Javascript from "../../assets/javascript.png"
import Typescript from "../../assets/types.png"
import Python from "../../assets/python.png"
import ReactIcon from "../../assets/react.png"
import Django from "../../assets/django.png"
import StyledComp from "../../assets/components.png"
import Postgres from "../../assets/postgres.png"
import Sqlite from "../../assets/sqlite3.png"
import Crud from "../../assets/crud.png"
import Docker from "../../assets/docker.png"
import Frame from "../../assets/frameemotion.png"
import Jest from "../../assets/jest.png"
import Rest from "../../assets/restapi.png"
import Heroku from "../../assets/heroku.png"
import { ContainerIcons } from "./style"

const Technologies = () => {

    return(
        <>
        <Header />
        <Background>
        <Menu />
        <ContainerIcons>
            <h1 className="title">Technologies</h1>
            <div className="icons">
            <img className="html" src={Html} alt="html" />
            <img className="css" src={Css} alt="html" />
            <img className="javascript" src={Javascript} alt="html" />
            <img className="typescript" src={Typescript} alt="html" />
            <img className="python" src={Python} alt="html" />
            <img className="reacticon" src={ReactIcon} alt="html" />
            <img className="django" src={Django} alt="html" />
            <img className="style" src={StyledComp} alt="html" />
            <img className="postgres" src={Postgres} alt="html" />
            <img className="frame" src={Frame} alt="html" />
            <img className="sqlite" src={Sqlite} alt="html" />
            <img className="crud" src={Crud} alt="html" />
            <img className="jest" src={Jest} alt="html" />
            <img className="docker" src={Docker} alt="html" />
            <img className="rest" src={Rest} alt="html" />
            <img className="heroku" src={Heroku} alt="html" />
            </div>
        </ContainerIcons>
        </Background>
        <FooterComponent />
        </>
    )

}

export default Technologies