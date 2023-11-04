import logo from './aalogo.png';
// import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* this is where I get to add text inside the paragraph tag */}
        <p>
          Welcome to SkyConnect where flights meets connections.
        </p>
        <button>Sign In</button>
                 or
        <button>Sign Up</button>
        <button>Using LinkedIn</button>
        
        {/* <BrowserRouter>  */}
        {/* </BrowserRouter> */}
        
      </header>
    </div>
  );
}

export default App;
