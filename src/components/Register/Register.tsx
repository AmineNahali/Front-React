import { useState } from "react";
import LoginNavbar from "../Login/LoginNavbar";
import Footer from "../misc/Footer";
import "./Register.css"

const Register = () => {
    const [regOpacity, setRegOpacity] = useState('0');
    const [borderInput, setBorderInput] = useState('');
    const [usernameReg, setUserNameReg] = useState('');
    const [emailReg, setEmailReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');
    const [repPasswordReg, setRepPasswordReg] = useState('');

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
                                <td style={{ 'width': '460px' }}>
                                </td>
                                <td style={{ 'width': '340px', 'borderLeft': 'solid 2px #1e1e1e' }}>
                                    <h3 className='titleLogin'>Join us !</h3>
                                    <form autoComplete='off'>
                                        <input className='registerInput' type='text' placeholder='username' value={usernameReg}
                                            style={{ 'border': borderInput }}
                                            onChange={event => setUserNameReg(event.target.value)}
                                            onMouseOver={() => { setBorderInput(''); }}
                                        /><label> *</label>
                                        <h6>username already taken</h6>
                                        <input className='registerInput' type='email' placeholder='email' value={emailReg}
                                            style={{ 'border': borderInput }}
                                            onChange={event => setEmailReg(event.target.value)}
                                            onMouseOver={() => { setBorderInput(''); }}
                                        /><label> *</label>
                                        <h6>please provide a valid email</h6>
                                        <input className='registerInput' type='password' placeholder='password' value={passwordReg}
                                            style={{ 'border': borderInput }}
                                            onChange={event => setPasswordReg(event.target.value)}
                                            onMouseOver={() => { setBorderInput(''); }}
                                        /><label> *</label>
                                        <h6>chose a strong password</h6>
                                        <input className='registerInput' type='password' placeholder='repeat password' value={repPasswordReg}
                                            style={{ 'border': borderInput }}
                                            onChange={event => setRepPasswordReg(event.target.value)}
                                            onMouseOver={() => { setBorderInput(''); }}
                                        /><label> *</label>
                                        <h6>passwords do not match</h6>
                                        <input className='continueReg' type='button' value="Continue" />
                                    </form>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Register;