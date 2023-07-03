import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const LoginNavbar = () => {
    const nav2 = useNavigate();
    
    if(window.location.pathname == '/register')
    return (
        <div className="LoginNavbar">
            <table className="navTable">
                <tbody>
                    <tr>
                        <td className="navLogo" style={{filter: "contrast(100%)"}} onClick={()=>{nav2("/")}}></td>
                        <td>
                            <div className="registerOptions">
                                Already have an account ?<a onClick={()=>{nav2("/login")}} className="anchor">  Login here</a>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
    else if(window.location.pathname == '/')
    return (
        <div className="LoginNavbar">
            <table className="navTable">
                <tbody>
                    <tr>
                        <td className="navLogo" onClick={()=>{nav2("/")}}></td>
                        <td>
                            <div className="registerOptions">
                                <div className="btx">
                                    <input type='button' className="bt1" value="Log In" 
                                    onClick={()=>{nav2("/login")}}
                                    />
                                    <input type='button' className="bt2" value="Join"  
                                    onClick={()=>{nav2("/register")}}
                                    />
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
    else
    return (
        <div className="LoginNavbar">
            <table className="navTable">
                <tbody>
                    <tr>
                        <td className="navLogo" onClick={()=>{nav2("/")}}></td>
                        <td>
                            <div className="registerOptions">
                                
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default LoginNavbar;