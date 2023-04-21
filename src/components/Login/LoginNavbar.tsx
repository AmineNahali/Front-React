import { useNavigate } from "react-router-dom";
import "./LoginNavbar.css";

const LoginNavbar = () => {
    const nav = useNavigate()
    return (
        <div className="LoginNavbar">
            <table className="navTable">
                <tbody>
                    <tr>
                        <td className="navLogo" onClick={()=>{nav("/")}}></td>
                        <td className="navLinks"></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default LoginNavbar