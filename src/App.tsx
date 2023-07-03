import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login/Login';
import Dashboard from './components/Homepage/Homepage';
import Register from './components/Register/Register';
//import { configureStore } from "@reduxjs/toolkit";
import Recover from './components/Recover/Recover';
import Footer from './components/misc/Footer';
import LoginNavbar from './components/Login/Navbar';


var snackable = true;
var iter: number = 0;

const App = () => {
  // fix the router
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/"         element={<><LoginNavbar />   <Dashboard/>           </>}  />
          <Route path="/login"    element={<><LoginNavbar />   <Login/>    <Footer/>  </>}  />
          <Route path="/register" element={<><LoginNavbar />   <Register/> <Footer/>  </>}  />
          <Route path="/recover"  element={<><LoginNavbar />   <Recover/>  <Footer/>  </>}  />
          <Route path="/*"        element={<>404 buddy</>}  />
        </Routes>
      </BrowserRouter>      
    </div>
  )
}

// A sleep/delay function to help create an event loop
export function sleep(ms: number) {
  return new Promise(resolve => { return setTimeout(resolve, ms); });
}

export default App;