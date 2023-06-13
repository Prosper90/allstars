import React, {useState, useEffect} from 'react';
import Home from '../components/admin/Home';
import Projects from '../components/admin/Projects';
import Addproject from '../components/admin/Addproject';
import Extra from '../components/admin/Extra';
import Nav from '../components/admin/Nav';
import Topnav from '../components/admin/Topnav';
import Moredetail from '../components/admin/Moredetail';

function Admin() {

    const [selected, setSelected] = useState("home");
    const [allProjects, SetAllProjects] = useState(
      [
    {
        "_id": "62faacc0eaea1813b72720f8",
        "tokenName": "Rabbit",
        "tokenDescription": "Just another token, I need more data to see what happens when the letters over pass",
        "chain": "BNB",
        "votes": 1,
        "dateandtime": "2022-08-15T20:29:52.492Z",
        "__v": 0,
        "img_url": "https://live.staticflickr.com/65535/52288275731_707705abeb_m.jpg",
        "unique": "lorem ipsum dolor sit",
        "extraDetails": "lorem ipsum dolor sit",
        "upcomingPlans": "lorem ipsum dolor sit",
        "launchPlans": "lorem ipsum dolor sit",
        "fun_Fact": "lorem ipsum",
        "planet_url": "http://192.168.8.100:8000/uploads",
        "website": "sample.com",
        "tg": "sample Tg",
        "Dapp": " Sample Dapp",
        "twitter": "Sample",
        "Contract_address": "0xsample",
        "audit": "audited",
        "clicks": 20,
        "approved": true,
        "rings": false,
        "subscription": false
    },
    {
        "_id": "64808838d435f4eddac9d547",
        "tokenName": "Anon Token",
        "tokenDescription": "Just testing things out first off",
        "chain": "BNB",
        "votes": 1,
        "dateandtime": "2022-08-15T20:29:52.492Z",
        "__v": 0,
        "img_url": "https://live.staticflickr.com/65535/52278944605_27f5acca60_m.jpg",
        "unique": "lorem ipsum dolor sit",
        "extraDetails": "lorem ipsum dolor sit",
        "upcomingPlans": "lorem ipsum dolor sit",
        "launchPlans": "lorem ipsum dolor sit",
        "fun_Fact": "lorem ipsum",
        "planet_url": "http://192.168.8.100:8000/uploads",
        "website": "sample.com",
        "tg": "sample Tg",
        "Dapp": " Sample Dapp",
        "twitter": "Sample",
        "Contract_address": "0xsample",
        "audit": "audited",
        "clicks": 20,
        "approved": true,
        "rings": false,
        "subscription": false
    },
    {
        "_id": "648088ced435f4eddac9d548",
        "tokenName": "Horris",
        "tokenDescription": "Still checking",
        "chain": "BNB",
        "votes": 1,
        "dateandtime": "2022-08-15T20:29:52.492Z",
        "__v": 0,
        "img_url": "https://live.staticflickr.com/65535/52288320141_70c50c5b89_m.jpg",
        "unique": "lorem ipsum dolor sit",
        "extraDetails": "lorem ipsum dolor sit",
        "upcomingPlans": "lorem ipsum dolor sit",
        "launchPlans": "lorem ipsum dolor sit",
        "fun_Fact": "lorem ipsum",
        "planet_url": "http://192.168.8.100:8000/uploads",
        "website": "sample.com",
        "tg": "sample Tg",
        "Dapp": " Sample Dapp",
        "twitter": "Sample",
        "Contract_address": "0xsample",
        "audit": "audited",
        "clicks": 20,
        "approved": true,
        "rings": false,
        "subscription": false
    }
]
    );
    const [stats, setStats] = useState(
      {
    "visitors": 0,
    "totalProjects": 3,
    "projectClicks": 0,
    "subscribers": [
        {
            "_id": "62faacc0eaea1813b72720f8",
            "tokenName": "Rabbit",
            "tokenDescription": "Just another token, I need more data to see what happens when the letters over pass",
            "chain": "BNB",
            "votes": 1,
            "dateandtime": "2022-08-15T20:29:52.492Z",
            "__v": 0,
            "img_url": "https://live.staticflickr.com/65535/52288275731_707705abeb_m.jpg",
            "unique": "lorem ipsum dolor sit",
            "extraDetails": "lorem ipsum dolor sit",
            "upcomingPlans": "lorem ipsum dolor sit",
            "launchPlans": "lorem ipsum dolor sit",
            "fun_Fact": "lorem ipsum",
            "planet_url": "http://192.168.8.100:8000/uploads",
            "website": "sample.com",
            "tg": "sample Tg",
            "Dapp": " Sample Dapp",
            "twitter": "Sample",
            "Contract_address": "0xsample",
            "audit": "audited",
            "clicks": 20,
            "approved": true,
            "rings": false,
            "subscription": false
        },
        {
            "_id": "64808838d435f4eddac9d547",
            "tokenName": "Anon Token",
            "tokenDescription": "Just testing things out first off",
            "chain": "BNB",
            "votes": 1,
            "dateandtime": "2022-08-15T20:29:52.492Z",
            "__v": 0,
            "img_url": "https://live.staticflickr.com/65535/52278944605_27f5acca60_m.jpg",
            "unique": "lorem ipsum dolor sit",
            "extraDetails": "lorem ipsum dolor sit",
            "upcomingPlans": "lorem ipsum dolor sit",
            "launchPlans": "lorem ipsum dolor sit",
            "fun_Fact": "lorem ipsum",
            "planet_url": "http://192.168.8.100:8000/uploads",
            "website": "sample.com",
            "tg": "sample Tg",
            "Dapp": " Sample Dapp",
            "twitter": "Sample",
            "Contract_address": "0xsample",
            "audit": "audited",
            "clicks": 20,
            "approved": true,
            "rings": false,
            "subscription": false
        },
        {
            "_id": "648088ced435f4eddac9d548",
            "tokenName": "Horris",
            "tokenDescription": "Still checking",
            "chain": "BNB",
            "votes": 1,
            "dateandtime": "2022-08-15T20:29:52.492Z",
            "__v": 0,
            "img_url": "https://live.staticflickr.com/65535/52288320141_70c50c5b89_m.jpg",
            "unique": "lorem ipsum dolor sit",
            "extraDetails": "lorem ipsum dolor sit",
            "upcomingPlans": "lorem ipsum dolor sit",
            "launchPlans": "lorem ipsum dolor sit",
            "fun_Fact": "lorem ipsum",
            "planet_url": "http://192.168.8.100:8000/uploads",
            "website": "sample.com",
            "tg": "sample Tg",
            "Dapp": " Sample Dapp",
            "twitter": "Sample",
            "Contract_address": "0xsample",
            "audit": "audited",
            "clicks": 20,
            "approved": true,
            "rings": false,
            "subscription": false
        }
    ]
}
    );
    const [inComing, setIncoming] = useState([
              {
            "_id": "648088ced435f4eddac9d548",
            "tokenName": "Horris",
            "tokenDescription": "Still checking",
            "chain": "BNB",
            "votes": 1,
            "dateandtime": "2022-08-15T20:29:52.492Z",
            "__v": 0,
            "img_url": "https://live.staticflickr.com/65535/52288320141_70c50c5b89_m.jpg",
            "unique": "lorem ipsum dolor sit",
            "extraDetails": "lorem ipsum dolor sit",
            "upcomingPlans": "lorem ipsum dolor sit",
            "launchPlans": "lorem ipsum dolor sit",
            "fun_Fact": "lorem ipsum",
            "planet_url": "http://192.168.8.100:8000/uploads",
            "website": "sample.com",
            "tg": "sample Tg",
            "Dapp": " Sample Dapp",
            "twitter": "Sample",
            "Contract_address": "0xsample",
            "audit": "audited",
            "clicks": 20,
            "approved": true,
            "rings": false,
            "subscription": false
        }
    ]);
    const [seeMore, setSeeMore] = useState()

    
    //test url : http://192.168.8.101:8000/
    // main url :
    /*
    const getData = async () => {
      const allProjectsget = await fetch('http://192.168.8.100:8000/projects', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      //console.log(await allProjectsget.json(), "all projectsget")
      const statsget = await fetch('http://192.168.8.100:8000/stats', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      //console.log(await statsget.json(), "statsget");
       const incomingget = await fetch('http://192.168.8.100:8000/incoming-projects', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      //console.log(await incomingget.json(), "incomingGet")
      SetAllProjects( await allProjectsget.json());
      setStats(await statsget.json());
      setIncoming(await incomingget.json());
    }
    */

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
        />;
      case "addproject":
        return <Addproject  />;
      case "extra":
        return <Extra />;
      case "moredetails":
        return <Moredetail
          seeMore={seeMore}
          />;
      default:
        return <h1>Hi there nothing</h1>;
    };
  }


  useEffect(() => {
   //getData();
  }, [])
  


  return (
    <div className='  m-0 flex font-sans antialiased font-normal text-base leading-default bg-gray-50 text-slate-500  w-full h-[100dvh] gap-2'>
        <div className=" max-w-62.5 ease-nav-brand z-990  inset-y-0 my-4  ml-4 block w-1/4  flex-wrap items-center justify-between overflow-y-auto rounded-2xl border-0 bg-white p-0 antialiased shadow-none transition-transform duration-200 xl:left-0 xl:translate-x-0 xl:bg-transparent" >
            <Nav setSelected={setSelected} selected={selected} />
        </div>
        
        <div className={`col-span-2  ease-soft-in-out xl:ml-68.5 relative  max-h-screen rounded-xl transition-all duration-200 overflow-y-auto w-[70%] ${selected == "projects" && "justify-center items-center"}`}>
            <Topnav />
            {getView()}            

        </div>
        
    </div>
  )
}

export default Admin