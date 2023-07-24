import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "../../App";
import loading from "../../assets/robot/loading.gif";
import "./CustomCaptcha.css"

const CaptchaElement = () => {

    const [image1, setImage1] = useState(loading);

    const getCaptcha = () => {
        const timer = setTimeout(() => {
            fetch('http://localhost:3000/captcha/image/' + randomString(),{method:'POST'})
                .then(res => res.blob())
                .then(data => {
                    setImage1(URL.createObjectURL(data));
                    clearTimeout(timer);
                })
                .catch((e) => {
                    toast("Connection error", "warning");
                    clearTimeout(timer);
                })
        }, 2000)
    }
    
    useEffect(() => {
        getCaptcha();
    }, [])
    

    return (
        <div className="captchaContainer">
            <table className="loadingTable">
                <tbody>
                    <tr>
                        <td style={{width:'100%'}}><img className="loading" src={image1}/></td>
                    </tr>
                    <tr style={{ color: "black" }}><td>Security check, please wait ...</td></tr>
                </tbody>
            </table>
        </div>
    )
}
export default CaptchaElement;

export function randomString() { // provides a random string composed of 10 chars.
    let result = '';
    const characters = 'o3x4v8w0Op1MBGyXHnUZ9T2PzSAIF6Nqrstui7jQRmVWabcdJKLCYDEelfgh5';
    let counter = 0;
    while (counter < 10) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
        counter += 1;
    }
    return result;
}