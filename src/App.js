import React from 'react';
import { Routes , Route} from 'react-router-dom';
import Home from './components/Home';
import Mess from "./components/Mess";
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Login from "./components/Login";
import "./CSS/Index.css";
import "./CSS/Mess.css";
import "./CSS/Gallery.css";
import "./CSS/Contact.css";
import  "./CSS/Login.css";
import Signup from "./components/Signup";


function App() {
  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Mess' element={<Mess/>} />
            <Route path='/Contact' element={<Contact/>}/>
            <Route path='/Gallery' element={<Gallery/>}/>
            <Route path='/Login' element={<Login/>}/>
            <Route path='/Signup' element={<Signup/>}/>
        </Routes>
    </div>
  );
}

export default App;
