import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Homepage.css';
import { InView } from 'react-intersection-observer';

const Dashboard = () => {
    //STATES
    const dashboardNavigator = useNavigate();

    const [opacityScreen1, setOpacityScreen1] = useState('0');
    const [transScreen1, setTransScreen1] = useState(400);
    const [opacityScreen2, setOpacityScreen2] = useState('0');
    const [transScreen2, setTransScreen2] = useState(400);
    const [opacityScreen3, setOpacityScreen3] = useState('0');
    const [transScreen3, setTransScreen3] = useState(400);

    //METHODS (NO EXPORT)
    const checkLogin = () => {
        return true;
    }

    //RENDER
    if (checkLogin()) {
        return (
            <div className='homepage'>
                <div className='home'>
                    <InView onChange={(inView, entry) => {
                        if (entry.isIntersecting) {
                            setOpacityScreen1('1'); setTransScreen1(0);
                        }
                    }}>
                        <div className='screen1' style={{ transform: "translateX(" + (-transScreen1) + "px)", opacity: opacityScreen1 }}>
                            <table className='t1' style={{ opacity: opacityScreen1 }}>
                                <tbody>
                                    <tr>
                                        <td className='s1Left'>
                                            <h3 className='perfec'>Hire perfectionists !</h3>
                                            <h3 className='perfec'>not just freelancers</h3>
                                            <br></br>
                                            <br></br>
                                            <h4 className='perfec2'>Discover the IT talents for your projects</h4>
                                            <h4 className='perfec2'>in the most secure freelancing platform !</h4>

                                            <br></br>

                                            <input type='button' className="getStarted" value="GET STARTED"
                                                onClick={() => { dashboardNavigator("/login") }}>
                                            </input>

                                        </td>
                                        <td className='s1Right'>
                                            <div className='screen1Table'>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </InView>

                    <InView onChange={(inView, entry) => {
                        if (entry.isIntersecting) {
                            setOpacityScreen2('1'); setTransScreen2(0);
                        }
                    }}>
                        <div className='screen2' style={{ transform: "translateX(" + (-transScreen2) + "px)", opacity: opacityScreen2 }}>
                            <table className='t2' style={{ opacity: opacityScreen2 }}>
                                <tbody>
                                    <tr>
                                        <td className='t2L'></td>
                                        <td className='t2R'>
                                            <div className='TextContainer' style={{ float: 'right' }}>
                                                LUREM ipsum LUREM ipsum LUREM ipsum LUREM ipsum LUREM ipsum LUREM ipsum
                                                LUREM ipsum LUREM ipsum LUREM ipsum LUREM ipsum LUREM ipsum LUREM ipsum
                                                LUREM ipsum LUREM ipsum LUREM ipsum LUREM ipsum LUREM ipsum LUREM ipsum
                                                LUREM ipsum LUREM ipsum LUREM ipsum LUREM ipsum LUREM ipsum LUREM ipsum
                                                LUREM ipsum LUREM ipsum LUREM ipsum LUREM ipsum LUREM ipsum LUREM ipsum
                                                LUREM ipsum LUREM ipsum LUREM ipsum LUREM ipsum LUREM ipsum LUREM ipsum
                                                LUREM ipsum LUREM ipsum LUREM ipsum LUREM ipsum LUREM ipsum LUREM ipsum
                                                LUREM ipsum LUREM ipsum LUREM ipsum LUREM ipsum LUREM ipsum LUREM ipsum
                                                LUREM ipsum LUREM ipsum LUREM ipsum LUREM ipsum LUREM ipsum LUREM ipsum
                                                LUREM ipsum LUREM ipsum LUREM ipsum LUREM ipsum LUREM ipsum LUREM ipsum
                                                LUREM ipsum LUREM ipsum LUREM ipsum LUREM ipsum LUREM ipsum LUREM ipsum
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div></InView>
                    <br></br>


                    <InView onChange={(inView, entry) => {
                        if (entry.isIntersecting) {
                            setOpacityScreen3('1'); setTransScreen3(0);
                        }
                    }}>
                        <div className='screen3' style={{ transform: "translateX(" + (-transScreen3) + "px)", opacity: opacityScreen3 }}>
                            <table className='t3' style={{ opacity: opacityScreen3 }}>
                                <tbody>
                                    <tr>
                                        <td className='t3L'>
                                            <div className='TextContainer' style={{ float: 'left' }}>
                                                LUREM ipsum LUREM ipsum LUREM ipsum LUREM ipsum LUREM ipsum LUREM ipsum
                                                LUREM ipsum LUREM ipsum LUREM ipsum LUREM ipsum LUREM ipsum LUREM ipsum
                                                LUREM ipsum LUREM ipsum LUREM ipsum LUREM ipsum LUREM ipsum LUREM ipsum
                                                LUREM ipsum LUREM ipsum LUREM ipsum LUREM ipsum LUREM ipsum LUREM ipsum
                                                LUREM ipsum LUREM ipsum LUREM ipsum LUREM ipsum LUREM ipsum LUREM ipsum
                                                LUREM ipsum LUREM ipsum LUREM ipsum LUREM ipsum LUREM ipsum LUREM ipsum
                                                LUREM ipsum LUREM ipsum LUREM ipsum LUREM ipsum LUREM ipsum LUREM ipsum
                                                LUREM ipsum LUREM ipsum LUREM ipsum LUREM ipsum LUREM ipsum LUREM ipsum
                                                LUREM ipsum LUREM ipsum LUREM ipsum LUREM ipsum LUREM ipsum LUREM ipsum
                                                LUREM ipsum LUREM ipsum LUREM ipsum LUREM ipsum LUREM ipsum LUREM ipsum
                                                LUREM ipsum LUREM ipsum LUREM ipsum LUREM ipsum LUREM ipsum LUREM ipsum
                                            </div>
                                        </td>
                                        <td className='t3R'></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </InView>
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