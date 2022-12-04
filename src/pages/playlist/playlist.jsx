import FooterComponent from "../../components/footer"
import Header from "../../components/header"
import Background from './../../components/background/index';
import "./style.css"
import { songsData } from "../../utils/projects";

const Playlist = ()=> {

    return(
        <>
        <Header />
        <Background>
            <div className="container-musics">
                {songsData?.map((element)=>(
                    <>
            <p className="name-music">{element.title}</p>
            <audio controls>
        <source src={element.song}></source>
            </audio> 
            </>
                ))}
           
            
            </div>
        </Background>
        <FooterComponent />
        </>
    )

}

export default Playlist