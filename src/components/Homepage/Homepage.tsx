import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Homepage.css';
import { SearchBar } from './serchbar/SearchBar';

const Dashboard = () => {
    
    //STATES
    const dashboardNavigator = useNavigate();
    const [opacity, setOpacity] = useState('0');
    const [transH3, setTransH3] = useState(-100)

    //METHODS (NO EXPORT)
    const checkLogin = () => {
        return true;
    }

    //MAIN
    setTimeout(() => {
        setOpacity('1'); setTransH3(0);
    }, 200);

    //RENDER
    if (checkLogin()) {
        return (
            <div className='homepage' style={{ 'opacity': opacity }}>
                <div className='home'>
                    <SearchBar />
                    <div className='screen1'>
                        <table className='t1' style={{ transform: "translateY(" + (-transH3) + "px)" }}>
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
                    <div className='screen2' >
                        <table className='t2' style={{ transform: "translateY(" + (-transH3) + "px)" }}>
                            <tbody>
                                <tr>
                                    <td className='t2L'></td>
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