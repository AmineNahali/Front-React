import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
    
    //STATES
    const dashboardNavigator = useNavigate();
    const [opacity, setOpacity] = useState('0');
    
    //METHODS (NO EXPORT)
    const checkLogin = () => {
        return false;
    }
    
    //MAIN
    setTimeout(() => { setOpacity('1'); }, 300);
    if(checkLogin()){
        return (
            <div className='Dashboard' style={{ 'opacity': opacity }}>
            </div>
        );
    }
    else {
        dashboardNavigator("/login");
        return (<></>);
    }
}

export default Dashboard;