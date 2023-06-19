import { useState,useEffect } from "react";
import Login from "../Login/Login";
import LoginNavbar from "../Login/Navbar";
import Footer from "../misc/Footer";
import "./Register.css";

import bg0 from "./../../assets/tiles/0.png";
import bg1 from "./../../assets/tiles/1.png";
import bg2 from "./../../assets/tiles/2.png";
import bg3 from "./../../assets/tiles/3.png";
import bg4 from "./../../assets/tiles/4.png";
import bg5 from "./../../assets/tiles/5.png";
import bg6 from "./../../assets/tiles/6.png";
import bg7 from "./../../assets/tiles/7.png";

var bgs:string[] = [bg1,bg2,bg3,bg4,bg5,bg6,bg7,bg0];

var red:string = "#ED2B2A"

const Register = () => {
    
    const date = new Date();
    let year = date.getFullYear();

    const [bg, setBg] = useState(bg2);
    const [bgp, setBgp] = useState(0);
    var bgdist:number = 1200;
    const [bgx, setBgX] = useState(0);
    const [bgy, setBgY] = useState(0);
    const [parodyWidth, setParodyWidth] = useState(0);

    const [regOpacity, setRegOpacity] = useState('0');

    //Input content/state
    const [usernameReg, setUserNameReg] = useState('');
    const [emailReg, setEmailReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');
    const [repPasswordReg, setRepPasswordReg] = useState('');

    //Input border style
    const [borderInputUsername, setBorderInputUsername] = useState('');
    const [borderInputEmail, setBorderInputEmail] = useState('');
    const [borderInputPassword, setBorderInputPassword] = useState('');
    const [borderInputPasswordRepeat, setBorderInputPasswordRepeat] = useState('');
    
    //Warnings opacity (show / hide)
    const [usernameWarningOpcacity, setUsernameWarningOpcacity] = useState('0');
    const [emailWarningOpcacity, setEmailWarningOpcacity] = useState('0');
    const [passWarningOpcacity, setPassWarningOpcacity] = useState('0');
    const [repeatPassWarningOpcacity, setRepeatPassWarningOpcacity] = useState('0');
    
    //Warnings messages
    const [usernameWarningMessage, setUsernameWarningMessage] = useState('');
    const [emailWarningMessage, setEmailWarningMessage] = useState('');
    const [passWarningMessage, setPassWarningMessage] = useState('');
    const [repeatPassWarningMessage, setRepeatPassWarningMessage] = useState('');
    
    //Warning messages colors
    const [colorUsername   , setColorUsername  ] = useState("white");
    const [colorEmail      , setColorEmail     ] = useState("white");
    const [colorPass       , setColorPass      ] = useState("white");
    const [colorPassRepeat , setColorPassRepeat] = useState("white");
    
    setTimeout(() => {
        setRegOpacity('1');
        setParodyWidth(400);
    }, 100);

    var animation1:number = setInterval(()=>{ //Change background animation
        switch(bg){
            case bg2: setBg(bg3);break;
            case bg3: setBg(bg4);break;
            case bg4: setBg(bg5);break;
            case bg5: setBg(bg6);break;
            case bg6: setBg(bg7);break;
            case bg7: setBg(bg2);break;
        }
        clearInterval(animation1);
    },5000);

    var animation2:number = setInterval(()=>{ // Move background animation
        setBgp(bgp+1);
		if(bgp <= (bgdist/6)){setBgX(bgx+1);setBgY(bgy+1);}
		if(bgp >(bgdist/6) && bgp <= (bgdist/6)*2){setBgX(bgx+1);}
		if(bgp >(bgdist/6)*2 && bgp <= (bgdist/6)*3){setBgX(bgx+1);setBgY(bgy-1);}
		if(bgp >(bgdist/6)*3 && bgp <= (bgdist/6)*4){setBgX(bgx-1);setBgY(bgy-1);}
		if(bgp >(bgdist/6)*4 && bgp <= (bgdist/6)*5){setBgX(bgx-1);}
		if(bgp >(bgdist/6)*5 && bgp < bgdist){setBgX(bgx-1);setBgY(bgy+1);}
		if(bgp == bgdist){setBgp(0);}
        clearInterval(animation2);
    },30);

    return (
        <>
        <LoginNavbar />
        <div className="Register" style={{ 'opacity': regOpacity }}>
        <div className="register">
        <table className="tableReg">
        <tbody>
        <tr>
            <td className="parodyleft" style={{width:`${parodyWidth}px`,backgroundImage:"url(" + bg + ")", backgroundPosition:`${bgx}px ${bgy}px`}}>

            </td>
            <td className="parodyright" style={{ 'width': '344px' }}>
                <h3 className='titleLogin'>Join us !</h3> 
            
                {/* USERNAME */}
                <label className="redAsterisk">*</label>
                <input autoComplete="off" className='registerInput' type='text' placeholder='username' value={usernameReg}
                    style={{ 'border': borderInputUsername }}
                    onChange={event => {setUserNameReg(event.target.value);
                        var tmp:string = event.target.value;
                        let reg:RegExp = /\p{P}/gu;
                        setBorderInputUsername("");
                        setUsernameWarningMessage("");
                        setColorUsername("white");
                        setUsernameWarningOpcacity("0");
                        var arr = tmp.split('');
                        var testplus = "$£¤+=|`^~".split('');
                        if((tmp.length < 5 || tmp.length > 50)&& tmp != ""){
                            setBorderInputUsername("2px solid #D21312");
                            setUsernameWarningMessage("username must be between 5-50 characters.");
                            setColorUsername(red);
                            setUsernameWarningOpcacity("1");
                        }
                        testplus.forEach(e => {
                            if (arr.includes(e)) {
                                setBorderInputUsername("2px solid #D21312");
                                setUsernameWarningMessage("username must not contain punctuations");
                                setColorUsername(red);
                                setUsernameWarningOpcacity("1");
                            }
                        });
                        if(reg.test(tmp)){ // check if the username contains punctuation
                            setBorderInputUsername("2px solid #D21312");
                            setUsernameWarningMessage("username must not contain punctuations");
                            setColorUsername(red);
                            setUsernameWarningOpcacity("1");
                        }
                        if(isNumeric(tmp[0])){ // check if the username starts with a number
                            setBorderInputUsername("2px solid #D21312");
                            setUsernameWarningMessage("username must not start with a number");
                            setColorUsername(red);
                            setUsernameWarningOpcacity("1");
                        }
                    }}
                    onMouseOver={() => { setBorderInputUsername(''); }}
                />
                <div className="warningInput" style={{'opacity':usernameWarningOpcacity, 'color':colorUsername}}>{usernameWarningMessage}</div>
                
                {/* EMAIL */}
                <label className="redAsterisk">*</label>
                <input autoComplete='off' className='registerInput' type='email' placeholder='email' value={emailReg}
                    style={{ 'border': borderInputEmail }}
                    onChange={event => setEmailReg(event.target.value)}
                    onMouseOver={() => { setBorderInputEmail(''); }}
                />
                <div className="warningInput" style={{'opacity':emailWarningOpcacity, 'color':colorEmail}}>{emailWarningMessage}</div>
                
                {/* PASSWORD */}
                <label className="redAsterisk">*</label>
                <input autoComplete='off' className='registerInput' type='password' placeholder='password' value={passwordReg}
                    style={{ 'border': borderInputPassword }}
                    onChange={event => setPasswordReg(event.target.value)}
                    onMouseOver={() => { setBorderInputPassword(''); }}
                />
                <div className="warningInput" style={{'opacity':passWarningOpcacity, 'color':colorPass}}>{passWarningMessage}</div>
                
                {/* REPEAT PASSWORD */}
                <label className="redAsterisk">*</label>
                <input autoComplete='off' className='registerInput' type='password' placeholder='repeat password' value={repPasswordReg}
                    style={{ 'border': borderInputPasswordRepeat }}
                    onChange={event => setRepPasswordReg(event.target.value)}
                    onMouseOver={() => { setBorderInputPasswordRepeat(''); }}
                />
                <div className="warningInput" style={{'opacity':repeatPassWarningOpcacity, 'color':colorPassRepeat}}>{repeatPassWarningMessage}</div>
                
                {/* TERMS OF SERVICE */}
                <div className="lineAccept">By clicking 'Continue' you agree to our terms of service which you can read <a className="minilink">here</a>.</div>
                
                {/* CONTINUE BUTTON */}
                <input className='continueReg' type='button' value="Continue" />
            </td>
        </tr>
        </tbody>
        </table>
        </div>
        <div style={{'fontSize':'12px', 'marginTop':'10px'}}>
          X4Hire - {year}
        </div>
        </div>
        </>   
    )
}

export default Register;

function isNumeric(arg0: string) {
    if(arg0.match(/^-?\d+$/) || arg0.match(/^\d+\.\d+$/)){
        return true; // is an integer(1st condition) or float(2nd condition) .. (positive/negative check already included in the regex so don't worry)
      }
    else{
        return false; //not a number
    }
}

function sleep(ms:number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}