import './App.css';
import './Snackbar.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Register from './components/Register/Register';
import { configureStore } from "@reduxjs/toolkit";
import successLogo from './assets/success-filled-svgrepo-com.svg'
import Recover from './components/Recover/Recover';


var snackable = true;
var iter: number = 0;

const App = () => {
  // fix the router
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/"         element={<Dashboard/>  }  />
          <Route path="/login"    element={<Login/>      }  />
          <Route path="/register" element={<Register/>   }  />
          <Route path="/recover"  element={<Recover/>    }  />
          <Route path="/*"        element={<>404 buddy</>}  />
        </Routes>
      </BrowserRouter>

      <div id='snackbar' className='snackbar'>
        <table className='tsnack'>
          <tbody>
            <tr>
              <td className='tdTsnack'><img className='successLogo' src={successLogo} /></td>
              <td className='tdTsnack'>login successful</td>
              <td className='tdTsnack'><span className='closeSnack' onClick={() => { if (document.querySelector(".snackbar")?.classList.contains("show")) { document.querySelector(".snackbar")?.classList.remove("show"); } }}>&times;</span></td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  )
}

export const snack = async () => {

  if (snackable) {
    if (!document.querySelector("#snackbar")?.classList.contains("show")) {
      document.querySelector("#snackbar")?.classList.add("show");
    }
    snackable = false;
    await sleep(3000);//3 seconds is the normal time a snackbar stays displayed then disappears if the user does not manually close it.
    document.querySelector("#snackbar")?.classList.remove("show");
    snackable = true;
  }
}


// A sleep/delay function to help create an event loop
export function sleep(ms: number) {
  return new Promise(resolve => { return setTimeout(resolve, ms); });
}

export default App;