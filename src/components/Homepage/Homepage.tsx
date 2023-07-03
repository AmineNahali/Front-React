import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Homepage.css';
import pic1 from "../../assets/pic1.png"

const Dashboard = () => {

    const nav = useNavigate()

    //STATES
    const dashboardNavigator = useNavigate();
    const [opacity, setOpacity] = useState('0');
    const [transH3, setTransH3] = useState('translate(0px,-100px)')

    //METHODS (NO EXPORT)
    const checkLogin = () => {
        return true;
    }

    //MAIN
    setTimeout(() => {
        setOpacity('1'); setTransH3('translate(0px,0px)');
    }, 200);

    //RENDER
    if (checkLogin()) {
        return (
            <div className='homepage' style={{ 'opacity': opacity }}>
                <div className='home'>
                    <div className='screen1'>
                        <table className='t1' style={{ transform: transH3 }}>
                            <tbody>
                                <td className='s1Left'>
                                    <h3 className='perfec'>Hire perfectionists !</h3>
                                    <h3 className='perfec'>not just freelancers</h3>
                                    <br></br>
                                    <br></br>
                                    <h4 className='perfec2'>Discover the IT talents for your projects</h4>
                                    <h4 className='perfec2'>in the most secure freelancing platform !</h4>
                                    
                                    <br></br>
                                    <br></br>
                                    <input type='button' className="getStarted" value="GET STARTED" 
                                    onClick={()=>{nav("/login")}}></input>
                                    
                                </td>
                                <td className='s1Right'>
                                    <div className='screen1Table'>
                                    </div>
                                </td>
                            </tbody>
                        </table>
                    </div>
                    <div className='screen2' style={{ transform: transH3 }}>
                        <table className='t2' >
                            <tbody>
                                <tr>
                                    <td className='t2L'><img className='pic1' src={pic1}></img></td>
                                    <td className='t2R' ></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
    else {
        dashboardNavigator("/login");
        return (<></>);
    }
}

export default Dashboard;