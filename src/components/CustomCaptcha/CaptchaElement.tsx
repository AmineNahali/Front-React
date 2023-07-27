import { useEffect, useState } from "react";
import { toast } from "../../App";
import loading from "../../assets/robot/loading.gif";
import "./CustomCaptcha.css"
import submit from "../../assets/ok.svg"
import reload from "../../assets/reload.svg"

const CaptchaElement = () => {

    const [captchaCode, setCaptchaCode] = useState("")
    const [image1, setImage1] = useState(loading);
    const [imageWidth, setImageWidth] = useState("48px");
    const [imageHeight, setImageHeight] = useState("48px");

    const [showText, setShowText] = useState("block");
    const [showInput, setShowInput] = useState("none");

    const getCaptcha = () => {
        const timer = setTimeout(() => {
            fetch('http://localhost:3000/captcha/image/' + randomString(), { method: 'POST' })
                .then(res => res.blob())
                .then(data => {
                    setImageHeight("100px");
                    setImageWidth("200px");
                    setShowText("none");
                    setShowInput("block");
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
                        <td style={{ width: '100%' }}><img style={{ width: imageWidth, height: imageHeight, margin: "10px" }} className="loading" src={image1} /></td>
                    </tr>

                    <tr style={{ display: showText, color: "black" }}><td>Security check, please wait ...</td></tr>

                    <tr style={{ display: showInput , transform:"scale(0.8)"}}>
                        <td style={{ height: "32px" }}>
                            <input type="text" className="captchaInput" placeholder="type the code" value={captchaCode}
                                onChange={(event) => {
                                    setCaptchaCode(event.target.value);
                                }}
                            />
                        </td>
                        <td style={{ height: "32px", width: "32px" }}>
                            <img className="captchaButton" src={submit} />
                        </td>
                        <td style={{ height: "32px", width: "32px" }}>
                            <img className="captchaButton" src={reload} />
                        </td>
                    </tr>

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