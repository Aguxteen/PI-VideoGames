import './App.css';
import {BrowserRouter, Route,Switch} from "react-router-dom"
import Landing from './components/Landing';
import Home from './components/Home';
import CreateVideogames from './components/CreateVideogame';
import Detail from './components/Detail';
function App() {
  return (
    <BrowserRouter>
    
    <div className="App">
    <Switch>
        <Route exact path="/">
          <Landing/>
        </Route>
        <Route exact path="/home">
          <Home/>
        </Route>
        <Route exact path="/Create">
          <CreateVideogames/>
        </Route>
        <Route  path="/Game/">
          <Detail/>
        </Route>
    </Switch>  
     
    </div>
    </BrowserRouter>
  );
}

export default App;
