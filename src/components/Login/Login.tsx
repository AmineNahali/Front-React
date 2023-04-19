import './Login.css';
import React, { useState } from 'react';
import pwdLogo from "../../assets/lock-circle-svgrepo-com.svg";
import usrLogo from '../../assets/user-circle-svgrepo-com.svg';
import visibleYes from "../../assets/nothiddenpw.svg";
import visibleNo from "../../assets/hiddenpw.svg";
import { useNavigate } from 'react-router-dom';
import { snack, sleep } from "../../App";
import { } from '@reduxjs/toolkit';
import Footer from '../misc/Footer';


var visibility = visibleNo;

const Login = () => {

  const loginNavigator = useNavigate();
  const [username, setUserName] = useState('');
  const [password, setPassWord] = useState('');
  const [borderInput, setBorderInput] = useState('');
  const [passwordShown, setPasswordShown] = useState(false);
  const [positionLeft, setPositionLeft] = useState('0');
  const [wrongCreds, setwrongCreds] = useState('0');
  const [buttonEnabled, setButtonEnabled] = useState(false);

  const date = new Date();
  let year = date.getFullYear();

  const login = (u: string, p: string) => {
    if (u == "123" && p == "123") {
      return true;
    }
    return false;
  }

  const nav = (r: string) => {
    document.querySelector(".Login")?.classList.remove("loaded");
    setTimeout(() => {
      document.querySelector(".Login")?.classList.add("hidden");
      loginNavigator(r);
    }, 300);
  }

  const authenticate = async () => {
    if (login(username, password)) { //1: successful login
      snack();
      nav('/');
    }
    else { //2: failed login
      setwrongCreds('1');//show : "check your credentials" warning 
      setBorderInput('2px solid #D21312');
      setUserName(''); setPassWord('');
      var offset: number = 0;
      var rightOff: number = 15;
      var leftOff: number = -15;
      var i = 0;
      while (i < 3) {
        while (offset < rightOff) {
          offset += 2;
          await sleep(1);
          setPositionLeft(`${offset}px`);
        }
        while (offset > leftOff) {
          offset -= 2;
          await sleep(1);
          setPositionLeft(`${offset}px`);
        }
        while (offset < 0) {
          offset += 2;
          await sleep(1);
          setPositionLeft(`${offset}px`);
        }
        i++;
      }
    }
  }

  return (
    <>
      <div id='Login' className="Login" onLoad={() => { document.querySelector(".Login")?.classList.add("loaded"); }}>
        <div style={{ 'paddingBottom':'10px','opacity': wrongCreds, 'color': '#D21312' }}>please check your credentials</div>
        <div className="login" style={{ 'position': 'relative', 'left': positionLeft }}>
          <form id='loginForm' autoComplete='off'>
            <h2 className='titleLogin'>Login</h2>
            <table id='loginTable'>
              <tbody>
                <tr>
                  <td className="nilll">
                    <img id='usernameLogo' src={usrLogo} />
                  </td>
                  <td className="filll">
                    <input itemID='username' id='username' type='text' placeholder='username' value={username}
                      style={{ 'border': borderInput }}
                      onChange={event => setUserName(event.target.value)}
                      onInput={() => { setwrongCreds('0'); setBorderInput(''); }}
                      onMouseOver={() => { setBorderInput(''); }}
                      onKeyDown={(event: React.KeyboardEvent) => {
                        if (event.key == "Enter") {
                          document.getElementById('password')?.focus();
                        }
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="nilll">
                    <img id='passwordLogo' src={pwdLogo} />
                  </td>
                  <td className="filll">
                    <input itemID='password' id='password' placeholder='password' type={passwordShown ? "text" : "password"} value={password}
                      style={{ 'border': borderInput }}
                      onChange={event => setPassWord(event.target.value)}
                      onInput={() => { setwrongCreds('0') }}
                      onMouseOver={() => { setBorderInput(''); }}
                      onKeyDown={(event: React.KeyboardEvent) => {
                        if (event.key == "Enter") {
                          setButtonEnabled(true);
                          document.getElementById('authenticate')?.focus();
                          setButtonEnabled(false);
                        }
                      }}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <div className='zero'>
              <img id='pwdVisiblityLogo' src={visibility} onClick={() => { if (passwordShown) { setPasswordShown(false); visibility = visibleNo; } else { setPasswordShown(true); visibility = visibleYes; } }} />
            </div>
            <a className='forgot' onClick={() => { nav('/recover'); }}>Forgot password</a>
            <br></br>
            <input className='button' type="button" id='authenticate' value='Authenticate' disabled={buttonEnabled} 
              onClick={()=>{
                setButtonEnabled(true);
                authenticate();
                setButtonEnabled(false);
              }} />
          </form>

          <div className='register'>
            Need an account ? <a onClick={() => { nav('/register') }} >Register now</a><br />
          </div>
        </div>
        <h6>Hard2Hire - {year}</h6>
      </div>
      <Footer />
    </>
  )
}
export default Login;



