import Header from "../../components/header"
import { DivContainer } from "./style"
import FooterComponent from './../../components/footer/index';
import Background from "../../components/background";
import Menu from "../../components/menu";


const Curriculum = () => {

    return(
        <>
        <Header />
        <Background>
        <Menu />
        <DivContainer>
        <h1 className="title-curriculum">Joyce Pereira da Gama</h1>
        <div className="box-text">
            <div className="box-text-1">
        <p className="title-box">Formação:</p>
        <p className="text-box-1">-Kenzie Academy - Desenvolvimento web Full-stack</p>
            </div>

            <div className="box-text-2">
            <p className="title-box">Qualificações:</p>
        <p className="text-box-2">-Scrum
            -Kanban
            -Inglês intermediário
            -Clean code
            -gitHub</p>
            </div>

            <div className="box-text-3">
                <p className="title-box">Experiência</p>
                <p className="text-box-3">Responsável por prestar assistência aos novos alunos dos primeiros módulos Principais atividades: - Contato ativo com os alunos; - Correção das entregas; Assistência no canal de dúvidas - Relatórios sobre os alunos; - Aplicação de testes.</p>
            </div>
        </div>
        </DivContainer>
        </Background>
        <FooterComponent />
        </>
    )
}

export default Curriculum