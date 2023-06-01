import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Homepage.css';

const Dashboard = () => {

    //STATES
    const dashboardNavigator = useNavigate();
    const [opacity, setOpacity] = useState('0');

    //METHODS (NO EXPORT)
    const checkLogin = () => {
        return true;
    }

    //MAIN
    setTimeout(() => { setOpacity('1'); }, 300);
    if (checkLogin()) {
        return (
            <div className='homepage' style={{ 'opacity': opacity }}>
                <div className='home'>
                    <h3>Identify your valuable talent from</h3>
                    <h3>different available choices</h3>
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