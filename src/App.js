//import './App.css';
import Home from "./Pages/Home/index"
import All from './Pages/All-Furniture/index'
import Executive from './Pages/Set-Pages/Executive/index'
import Modern from './Pages/Set-Pages/Modern/index'
import Ardence from './Pages/Set-Pages/Ardence/index'
import Ascendance from './Pages/Set-Pages/Ascendance/index'
import NavBar from './Components/Navigation-Bar/index'
import Collections from './Pages/Collections Page/index'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './main.css';



function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
      </div>

     <Switch>
     <Route path="/collections">
       <Collections />
     </Route>
     <Route path="/all">
       <All />
     </Route>
     <Route path="/executive collection">
       <Executive />
     </Route>
     <Route path="/modern collection">
       <Modern />
     </Route>
     <Route path="/ardence collection">
       <Ardence />
     </Route>
     <Route path="/ascendance collection">
       <Ascendance />
     </Route>

     <Route path="/">
       <Home />
     </Route>
   </Switch>
   </Router>
  );
}

export default App;
