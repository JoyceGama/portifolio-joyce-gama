import "./style.css"
import Marquee from "react-fast-marquee";
import Playlist from "../../assets/listplayer.png";
import { songsData } from "../../utils/projects";
import { useHistory } from "react-router-dom";


const MusicPlayer = () => {

const history = useHistory()

const playRoute = () => {
    history.push("/playlist")
}

    return( 
        <div className="container-player">
        <div className="container-letras">
            <Marquee gradientColor="fcfcfc00" pauseOnHover="true" direction="right" speed="40" delay="2">{songsData[0].title}</Marquee> 
        </div>
        {

        }
        <audio controls loop>
            <source src={songsData[0].song} type="audio/mp3"></source>
            seu navegador não suporta!
        </audio>
        <div>
            <img onClick={playRoute} className="lista-musicas" src={Playlist} alt="lista" ></img>
        </div>
        </div>
        

    )

}

export default MusicPlayer