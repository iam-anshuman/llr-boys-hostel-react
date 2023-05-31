import React from 'react';
import { Routes , Route} from 'react-router-dom';
import Home from './components/Home';
import Mess from "./components/Mess";
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Payments from "./components/Payments";
import "./CSS/Index.css";
import "./CSS/Mess.css";
import "./CSS/Gallery.css";
import "./CSS/Contact.css";
import  "./CSS/Login.css";


function App() {
  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Mess' element={<Mess/>} />
            <Route path='/Contact' element={<Contact/>}/>
            <Route path='/Gallery' element={<Gallery/>}/>
            <Route path='/Payments' element={<Payments/>}/>
        </Routes>
    </div>
  );
}

export default App;
