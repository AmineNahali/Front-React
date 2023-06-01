import { useState } from "react";
import Login from "../Login/Login";
import LoginNavbar from "../Login/LoginNavbar";
import Footer from "../misc/Footer";
import "./Register.css"
var red:string = "#ED2B2A"
const Register = () => {

    const date = new Date();
    let year = date.getFullYear();
    
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
    
    let i:number = 10;
    setTimeout(() => {
        setRegOpacity('1');
    }, 100);

    return (
        <>
        <LoginNavbar />
        <div className="Register" style={{ 'opacity': regOpacity }}>
        <div className="register">
        <table className="tableReg">
        <tbody>
        <tr>
            {/*
            <td style={{ 'width': '430px' }}>

            </td>*/}
            <td style={{ 'width': '344px' }}>
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
