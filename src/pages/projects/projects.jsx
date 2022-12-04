import Header from "../../components/header"
import FooterComponent from './../../components/footer/index';
import Background from './../../components/background/index';
import Menu from "../../components/menu";
import { projectData } from "../../utils/projects";
import { Lista } from "./style";

const Projects = () => {

    return (
        <>
        <Header />
        <Background>
            <Menu />
            <Lista>
                {projectData?.map((element)=>(
                    <li className="lista-projeto">
                    <img className="imagem-projeto" src={element.img} alt="imagem"></img>
                    <div className="container-projeto">
                        <h2 className="titulo-projeto">{element.title}</h2>
                        <p className="descricao-projeto">{element.description}</p>
                        <a className="aplicação-projeto" href={element.aplicacao} target="blank">Aplicação do Projeto</a> 
                    </div>
                </li>
                ))}
                
            </Lista>
        </Background>
        <FooterComponent />
        </>

    )
}

export default Projects