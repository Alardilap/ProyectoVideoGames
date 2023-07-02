import './App.css';
import Home from'./Home/Home.jsx'
import {Route} from "react-router-dom"
import Detail from './DetailGame/Detail';
import Inicio from './Inicio/Inicio';
import CreateGame from './CreateGame/CreateGame';



function App() {
  return (
    <div className="App">
   
      <Route exact path="/"  render={()=> <Inicio/>}  />  
      <Route  path="/detail/:id"  render={() => <Detail/>}/> 
<Route  path="/home" render={()=> <Home/>}/>
<Route path="/create" render={()=> <CreateGame/>}     />

    </div>
  );
}

export default App;
