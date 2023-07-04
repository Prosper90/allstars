import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import PlanetsPage from "./pages/PlanetsPage";
import AddProjectPage from "./pages/AddProjectPage";
import Admin from "./pages/Admin";
import Login from "./components/admin/Login";
import ProtectedRoute from "./components/admin/Protectedroute";
import React, {useState, useEffect} from "react";
import Notifier from "./components/component-utils/Notifier";


function App() {

  const [loading, setLoading] = useState(false);
  //motifiers
  const [notify, setNotify] = useState(false);
  const [notifyType, setNotifyType] = useState("");
  const [notifyMsg, setNotifyMsg] = useState("");



  useEffect(() => {
    
    /*
      if(notify) {
        setTimeout(() => {
          setNotify(false);
          setNotifyType("");
          setNotifyMsg("");
        }, 5000);
       }
    */

  }, [notify])
  

  return (
    <Routes>
      <Route path="/" element={<Home setLoading={setLoading} loading={loading} />} />
      <Route path="/new-project" element={<AddProjectPage 
                                           setLoading={setLoading}
                                           loading={loading}
                                           notify={notify}
                                           setNotify={setNotify}
                                           notifyType={notifyType}
                                           notifyMsg={notifyMsg}
                                           setNotifyType={setNotifyType}
                                           setNotifyMsg={setNotifyMsg}
                                           />} />
      <Route path="/planets" element={<PlanetsPage  setLoading={setLoading} loading={loading} />}/>
      <Route path="/login" element={<Login  setLoading={setLoading} loading={loading} />}/> 

        <Route
          path="/admin"
          element={
              <ProtectedRoute 
              setLoading={setLoading} 
              loading={loading} 
              component={<Admin  setLoading={setLoading} loading={loading} />}
              notify={notify}
              setNotify={setNotify}
              notifyType={notifyType}
              notifyMsg={notifyMsg}
              setNotifyType={setNotifyType}
              setNotifyMsg={setNotifyMsg}
              />
          }
        />
    </Routes>
  ); 
}

export default App;
