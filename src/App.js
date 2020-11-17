//import './App.css';
import Home from './Pages/Home-Page/index'
import NavBar from './Components/Navigation-Bar/index'

import './main.css';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Home />
      </header>
    </div>
  );
}

export default App;
