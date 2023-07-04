import React, {useState, useEffect} from 'react';
import Home from '../components/admin/Home';
import Projects from '../components/admin/Projects';
import Addproject from '../components/admin/Addproject';
import Extra from '../components/admin/Extra';
import Nav from '../components/admin/Nav';
import Topnav from '../components/admin/Topnav';
import Moredetail from '../components/admin/Moredetail';
import Preloader from '../components/component-utils/Preloader';
import Notifier from '../components/component-utils/Notifier';

function Admin({setLoading, loading, notify, notifyType, notifyMsg, setNotify, setNotifyType, setNotifyMsg}) {

    const [selected, setSelected] = useState("home");
    const [allProjects, SetAllProjects] = useState();
    const [navbar, setNavbar] = useState(false)
    const [stats, setStats] = useState();
    const [inComing, setIncoming] = useState([]);
    const [seeMore, setSeeMore] = useState()

    
    //test url : http://192.168.8.101:8000/
    //main url :
    
    const getData = async () => {
      setLoading(true);
      const allProjectsget = await fetch('https://web3planet.bintfinance.org/projects', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      //console.log(await allProjectsget.json(), "all projectsget")
      const statsget = await fetch('https://web3planet.bintfinance.org/stats', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      //console.log(await statsget.json(), "statsget");
       const incomingget = await fetch('https://web3planet.bintfinance.org/incoming-projects', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      //console.log(await incomingget.json(), "incomingGet")
      SetAllProjects( await allProjectsget.json());
      setStats(await statsget.json());
      setIncoming(await incomingget.json());
      setLoading(false);
    }
    

    const getView = () => {
    switch (selected) {
      case "home":
        return <Home  
             inComing={inComing}
             stats={stats}
             setSeeMore={setSeeMore}
             setSelected={setSelected}
             />;
      case "projects":
        return <Projects  
         allProjects={allProjects}
         setSeeMore={setSeeMore}
         setSelected={setSelected}
        />;
      case "addproject":
        return <Addproject 
        setLoading={setLoading} 
        loading={loading}
        setNotify={setNotify}
        setNotifyType={setNotifyType}
        setNotifyMsg={setNotifyMsg}
        />;

      case "extra":
        return <Extra />;
      case "moredetails":
        return <Moredetail
           setLoading={setLoading} 
           loading={loading}
           setNotify={setNotify}
           setNotifyType={setNotifyType}
           setNotifyMsg={setNotifyMsg} 
           seeMore={seeMore}
           setSelected={setSelected}
          />;
      default:
        return <h1>Hi there nothing</h1>;
    };
  }

  console.log(loading);


  useEffect(() => {
   getData();

  
   if(notify) {
    setTimeout(() => {
      setNotify(false);
      setNotifyType("");
      setNotifyMsg("");
    }, 5000);
   }
   
  
  }, [notify])
  

//${navbar ? "flex" : "hidden "}
  return (
    <>
    
     { loading ? 
     
      <Preloader />
    
    :
    <>

      { notify &&
        <Notifier
          notify={notify}
          notifyType={notifyType}
          notifyMsg={notifyMsg}
        />
      }

      <div className='  m-0 flex font-sans antialiased font-normal text-base leading-default bg-gray-50 text-slate-500  w-full h-[100dvh] gap-2'>
          <div className={`max-w-62.5 ease-nav-brand z-[999999] ${navbar ? "fixed" : "hidden"} md:block  md:relative inset-y-0 my-4  ml-4 block w-[300px] md:w-1/4  flex-wrap items-center justify-between overflow-y-auto rounded-2xl border-0 bg-white p-0 antialiased shadow-none transition-transform duration-200 md:left-0 md:translate-x-0 md:bg-transparent`} >
              <Nav setSelected={setSelected} setNavbar={setNavbar} selected={selected} />
          </div>
          
          <div className={` col-span-full md:col-span-2  ease-soft-in-out xl:ml-68.5 relative  max-h-screen rounded-xl transition-all duration-200 overflow-y-auto w-full md:w-[100%]  ${selected == "projects" && "justify-center items-center"}`}>
              <Topnav location={selected} setNavbar={setNavbar} navbar={navbar} />
              {getView()}            

          </div>
          
      </div>
   </>
    }


    </>
  )
}

export default Admin
