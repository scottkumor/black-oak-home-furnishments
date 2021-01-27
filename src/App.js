//import './App.css';
import Home from './Pages/Home-Page/index'
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
     <Route path="/">
       <Home />
     </Route>
   </Switch>
   </Router>
  );
}

export default App;
