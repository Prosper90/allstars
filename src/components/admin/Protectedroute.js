import React, {useEffect} from 'react';
import { Route, useNavigate } from 'react-router-dom';
import Admin from '../../pages/Admin';


export default function Protectedroute({component: Component, setLoading, loading, notifyType, notifyMsg, notify, setNotify, setNotifyType, setNotifyMsg }) {


      const navigate = useNavigate();


        const checkfunc = async () => {
            const checkAuth = await fetch('https://web3planet.bintfinance.org/auth', {
            method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                });
                console.log(checkAuth, "check check inside");
                return checkAuth.json();
        }
        const checkCheck = checkfunc();
      const isAuthenticated = JSON.parse(localStorage.getItem("admin"));
      console.log(isAuthenticated, "checking");
      console.log(checkCheck, "Authentication");

      useEffect(() => {

        if(isAuthenticated === null || !checkCheck) {
                navigate('/login');
        }

      }, [])
      
      


                    // Render the protected component if the user is authenticated
   return ( 
   <Admin 
    setLoading={setLoading} 
    loading={loading}
    notify={notify}
    setNotify={setNotify}
    setNotifyType={setNotifyType}
    setNotifyMsg={setNotifyMsg}
    notifyType={notifyType}
    notifyMsg={notifyMsg}
   />
   )

}
