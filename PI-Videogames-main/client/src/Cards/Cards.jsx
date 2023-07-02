import Card from "../Card/Card";

function Cards({videoGames,juegosActual}) {


    const listVideoGames = videoGames


    return <div>
    
     {juegosActual?.map(videoGame=>

    <Card videoGame={videoGame}/> )}
          </div>  

     }
 export default Cards;
 
