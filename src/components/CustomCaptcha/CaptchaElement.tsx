import loading from "../../assets/robot/loading.gif";
import "./CustomCaptcha.css"

const CaptchaElement = ()=>{
    return(
    <>
        <table className="loadingTable">
            <tbody>
                <tr><td><div className="loading" style={{backgroundImage:"url("+loading+")"}}></div></td></tr>
                <tr style={{color:"black"}}><td>Security check, please wait ...</td></tr>
            </tbody>
        </table>
    </>
    )
}
export default CaptchaElement;