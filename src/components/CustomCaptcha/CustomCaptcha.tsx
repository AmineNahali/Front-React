import { useState } from "react";
import CaptchaElement from "./CaptchaElement";
import "./CustomCaptcha.css"


const CustomCaptcha = () =>{
    
    const [captchaSize, setCaptchaSize] = useState(0);
    const [captchaOpacity, setCaptchaOpacity] = useState(0);
    const [showAll, setShowAll] = useState(false);
    setTimeout(()=>{setShowAll(true)},1000);
    
    var y:number = setInterval(()=>{
        if(showAll){
            if(captchaSize <= 0.9){
                setCaptchaSize(captchaSize+0.1);
            }
            if(captchaOpacity < 1){
                setCaptchaOpacity(captchaOpacity+0.05);
            }
        } 
        clearInterval(y);
    },30);
    return(
        <div className="CustomCaptcha" style={{transform:"scale("+captchaSize+")",opacity:captchaOpacity}}>
            <div className="captchaBox">
                <CaptchaElement />
            </div>
        </div>
    );
}

export default CustomCaptcha;