import Background from "../../components/background"
import FooterComponent from "../../components/footer"
import Header from "../../components/header"
import Menu from "../../components/menu"
import Foto from "../../assets/eu.png"
import { ContainerDiv } from "./style"

const InitialPage = () => {

    return (
        <>
        <Header />
        <Background>
          <Menu />
          <ContainerDiv>
            <div className="container-div">
              <h1>Joyce Pereira da Gama</h1>
              <img src={Foto} alt="minha foto" />
            </div>
            <div className="container-box">
            Sempre fui apaixonada pelo mundo da tecnologia e meu primeiro contato foi com o universo dos games, foi o gatilho que me fez querer estudar e aprender sobre as tecnologias e suas linguagens. Atualmente estou finalizando os estudos na Kenzie Academy, onde estou aprendendo e me desenvolvimento a cada dia mais.

            </div>
          </ContainerDiv>
        </Background>
        <FooterComponent />
        </>
    )
}

export default InitialPage