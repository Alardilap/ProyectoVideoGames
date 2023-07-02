import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { getVideoGamesDetail } from "../redux/actions";
import {Link} from 'react-router-dom'
import { useParams } from 'react-router-dom';
import Styles from '../DetailGame/Detail.module.css'

function Detail() {

    const dispatch = useDispatch();
    const {id} =useParams();

    useEffect(()=>{
    dispatch(getVideoGamesDetail(id));
    },[dispatch,id]);

    const videoGames = useSelector((state =>state.videoGames))

    return <div>
    {videoGames?.map((videoGame) => {
  return (
    <div className={Styles.contenedordetail}key={videoGame.id}>
   <h1 className={Styles.name}>{videoGame?.name}</h1>
   <p className={Styles.description}>{videoGame?.description}</p>
  <p className={Styles.released}>{videoGame?.released}</p> 
  <p className={Styles.ratingn}>{videoGame?.rating}</p> 
  <img className={Styles.imagen}src={videoGame?.background_image} alt="imagen videogame"/>
  <h2 className={Styles.genres}>{videoGame?.genres.join(" ")}</h2>
<p className={Styles.platforms}>{videoGame?.platforms}</p>
    </div>
  );
})}
<Link to="/home"> 
             <button className={Styles.button}>Home</button>
            </Link>
          </div> 
}

 export default Detail;
 
