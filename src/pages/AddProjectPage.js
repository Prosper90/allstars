import React, { useState, useEffect } from 'react'
import { Stars } from '../components/planets-utils/maincanvas'
import { Canvas } from '@react-three/fiber'
import { Link } from 'react-router-dom'
import Notifier from '../components/component-utils/Notifier'
import Miniloader from '../components/component-utils/Miniloader'

export default function AddProjectPage({setLoading, loading, notify, notifyType, notifyMsg, setNotify, setNotifyType, setNotifyMsg}) {
  const [formSwitch, setFormSwitch] = useState(0)
  const [counter, setCounter] = useState(1);

  /*
dateandtime : {type: Date, default: Date.now},
 tokenName: {type: String, required: true},
 tokenDescription: {type: String, required: true},
 unique: {type: String, required: true},
 extraDetails: {type: String},
 upcomingPlans: {type: String, required: true},
 launchPlans: {type: String},
 fun_Fact: {type: String},
 chain: {type: String, required: true},
 img_url: {type: String, required: true},
 planet_url: {type: String},
 subscription: {type: Boolean},
 votes: {type: Number},
 website: {type: String},
 tg: {type: String},
 Dapp: {type: String},
 twitter: {type: String},
 Contract_address: {type: String},
 audit: {type: String},
 clicks: {type: Number}  
   */

const [tokenDescription, setTokenDescription] = useState('');
const [unique, setUnique] = useState('');
const [extraDetails, setExtraDetails] = useState('');
const [upcomingPlans, setUpcomingPlans] = useState('');
const [launchPlans, setLaunchPlans] = useState('');
const [fun_Fact, setFun_Fact] = useState('');
const [chain, setChain] = useState('');
const [img_url, setImg_url] = useState('');
// const [planet_url, setPlanet_url] = useState('');
const [website, setWebsite] = useState('');
const [tg, setTg] = useState('');
const [dapp, setDapp] = useState('');
const [twitter, setTwitter] = useState('');
const [contract_address, setContract_address] = useState('');
const [audit, setAudit] = useState('');
const [tokenName, setTokenName] = useState();
const [projectType, setProjectType] = useState();

  const increment = () => setCounter(counter + 1 );
  const decrement = () => setCounter(counter - 1 );

//filter files
const fileFilter = (file) => {
  // Check file type
  if (file.type === 'image/jpeg' || file.type === 'image/png') {
    // Check file size
    if (file.size < 1000) {
      return false;
    }
    
    // Create an image object
    const img = new Image();
    
    // Read the file using the FileReader API
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function(e) {
      img.src = e.target.result;
      
      // Check image dimensions
      img.onload = function() {
        if (img.width === 500 && img.height === 500) {
          // Accept the file if it meets the criteria
          return true;
        } else {
          // Reject the file if dimensions are not 500x500
          return false;
        }
      };
    };
  }

  // Reject the file if it doesn't match the criteria
  return false;
};



  const handleFileChange = (e) => {
    
    const check = fileFilter(e.target.files[0]);
    if(!check) {
      setNotify(true);
      setNotifyType("warn");
      setNotifyMsg("Image must be png or jpg and must be 500x500 in size");
      return ;
    }

    setImg_url(e.target.files[0]);
  
  };

const submitData = async (e) => {
  e.preventDefault();
  setLoading(true);
  
  const checker = tokenName == "" ? "token name Empty" : tokenDescription == "" ? "token description empty" : unique == "" ? "Unique details are empty" : extraDetails == "" ? "Extra details are empty" : upcomingPlans == "" ? "No data for upcoming plans" : launchPlans == "" ? "Launchplans shouldnt be empty" : chain == "" ? "Add an active chain" : img_url == "" ? "Project logo must be submitted" : tg == "" ? "Your tg must be avaialble" : projectType == "" && "Add a type your project falls into";
  if(checker) {
    setNotify(true);
    setNotifyType("warn");
    setNotifyMsg(`${checker}`);
    return;
  }
  setLoading(true);

  console.log(img_url, "checking state");
  console.log("check Running");
  const formdata = new FormData();
  formdata.append("tokenName", tokenName);
  formdata.append("tokenDescription", tokenDescription);
  formdata.append("unique", unique);
  formdata.append("extraDetails", extraDetails);
  formdata.append("upcomingPlans", upcomingPlans);
  formdata.append("launchPlans", launchPlans);
  formdata.append("fun_Fact", fun_Fact);
  formdata.append("chain", chain);
  formdata.append("img_url", img_url);
  formdata.append("website", website);
  formdata.append("tg", tg);
  formdata.append("dapp", dapp);
  formdata.append("twitter", twitter)
  formdata.append("contract_address", contract_address)
  formdata.append("audit", audit);
  formdata.append("projectType", projectType)

  console.log(formdata, "formdata check");
  
  try {
    const upload = await fetch('https://web3planet.bintfinance.org/project', {
      method: 'POST',
      body: formdata,
    });

    console.log(upload, "upload");
    if(!upload) {
      setNotify(true);
      setNotifyType("warn");
      setNotifyMsg("Problems uploading data");
    } else {
      setNotify(true);
      setNotifyType("success");
      setNotifyMsg("Data Recieved and Would be Reviewed");
    }
    //setLoading(false);
  } catch (error) {
    console.error(error);
    setNotify(true);
    setNotifyType("warning");
    setNotifyMsg("Something went wrong, Please try Again");
  }
  
}



const switching = (index) => {
 
  const checkerOne = tokenName == "" ? "token name Empty" : tokenDescription == "" ? "token description empty" : chain == "" ? "Add an active chain" : projectType == "" && "Add a type your project falls into" ;
  const checkerTwo = unique == "" ? "Unique details are empty" : extraDetails == "" ? "Extra details are empty" : upcomingPlans == "" && "No data for upcoming plans" ; 
  const checkerThree =  launchPlans == "" && "Launchplans shouldnt be empty" ;
  const checkerFour = tg == "" && "Your Telegram community must be submitted";
  const checkerFive =  img_url == "" ? "Project logo must be submitted" : contract_address == "" && "Your contract address must be avaialble" ;
  
  const passedValue = index == 1 ? checkerOne : index === 2 ? checkerTwo : index == 3 ? checkerThree : index == 4 ? checkerFour : index == 5 && checkerFive ;

  if( passedValue ) {
    setNotify(true);
    setNotifyType("warn");
    setNotifyMsg(`${passedValue}`);
    return;
  }
  

  setFormSwitch(index);
  increment();
}




useEffect(() => {
    
  
    if(notify) {
      setTimeout(() => {
        setNotify(false);
        setNotifyType("");
        setNotifyMsg("");
      }, 5000);
     }


}, [notify])




  return (
    <div className='h-screen relative'>

    { notify &&
        <Notifier
          notify={notify}
          notifyType={notifyType}
          notifyMsg={notifyMsg}
        />
      }

      <Canvas
        {...{
          camera: { position: [50, 200, 50] },
        }}
        className="canvas-contain"
        id='canvasHold'
      //onClick={ handleClick }
      //onWheel={handleWheel}
      >
        <Stars />


      </Canvas>
    
      <form 
         className=" flex justify-center flex-col  items-center gap-6 absolute top-0 md:w-full h-[100dvh]" style={{ height: "100vh" }}
         onSubmit={(e) => submitData(e)}
        >
      <div className="absolute text-lg top-16 border-b border-white bg-white px-8 py-2 rounded-md font-medium text-[#000]  right-10">{counter}/5</div>

        {/* <h1 className='text-white font-bold text-3xl md:text-4xl'>ALL-STARS INTRODUCES YOU TO THE ALL-STARSVERSE</h1> */}
        <div className={`md:w-2/5 grid md:grid-cols-1 p-5 py-14 md:px-16 gap-8 rounded-md ${formSwitch === 0 ? "grid" : "hidden"}`}>

        <div className="bg-[00ff00]">
            <label className="font-medium text-white text-lg md:text-xl mb-2" htmlFor="">
              Project type
            </label>
            <select
              className="block appearance-none w-full py-2 pl-3 pr-10 text-white leading-tight bg-[#000] border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              value={projectType}
              onChange={(e) => setProjectType(e.target.value)}
            >
              <option className="bg-transparent" disabled selected>
                Project Type
              </option>
              <option style={{ color: 'white' }}>Utility</option>
              <option style={{ color: 'white' }}>Meme</option>
              <option style={{ color: 'white' }}>Game</option>
              <option style={{ color: 'white' }}>Porn</option>
              <option style={{ color: 'white' }}>Entertainment</option>
              <option style={{ color: 'white' }}>Finance</option>
              <option style={{ color: 'white' }}>Staking</option>
              <option style={{ color: 'white' }}>Tools</option>
            </select>
         </div>

          <div className="bg-[00ff00]">
            <label className='font-medium text-white text-lg md:text-xl' htmlFor="">WHAT IS YOUR PROJECTS NAME</label>
            <input className='bg-transparent  border outline-none rounded-md w-full  p-2 text-white px-4 mt-3' type="text" placeholder='Enter project name here' 
             name="tokenName"
             defaultValue={tokenName}
             onChange={(e) => setTokenName(e.target.value)}
             />
          </div>
          <div className="">
            <label className='font-medium text-white text-lg md:text-xl' htmlFor="">WHAT CHAIN IS YOUR PROJECT ON</label>
            <input className='bg-transparent border outline-none rounded-md w-full  p-2 text-white px-4 mt-3' type="text" placeholder='Enter chain Address' 
             name='chain'
             defaultValue={chain}
             onChange={(e) => setChain(e.target.value)}
            />
          </div>
          <div className="">
            <label className='font-medium text-white text-lg md:text-xl' htmlFor="">TELL US A BIT ABOUT YOUR PROJECT</label>
            <textarea name="tokenDescription" defaultValue={tokenDescription} onChange={(e) => setTokenDescription(e.target.value)} id="" className='bg-transparent border outline-none rounded-md w-full  p-2 text-white px-4 mt-3' placeholder='' cols="10" rows="3"></textarea>
          </div>
          <div className="flex gap-6 justify-end">
            <Link to="/"
              className='bg-transparent border-white border px-8 py-2 rounded-md font-medium text-white text-lg md:text-xl ' >Back</Link>
            <div onClick={()  => {
              switching(1)}
              }
              className=' border border-white bg-white px-8 py-2 rounded-md font-medium text-[#000] text-lg md:text-xl cursor-pointer ' >Next 🚀</div>
          </div>

        </div>

        <div className={` md:w-2/5 grid md:grid-cols-1 p-5 py-14 md:px-16 gap-8 rounded-md ${formSwitch === 1 ? "grid" : "hidden"}`}>

          <div className="">
            <label className='font-medium text-white text-lg md:text-xl' htmlFor="">WHAT MAKES IT DIFFERENT/UNIQUE? </label>
            <textarea name="unique" defaultValue={unique} onChange={(e) => setUnique(e.target.value)} id="" className='bg-transparent border outline-none rounded-md w-full  p-2 text-white px-4 mt-3' placeholder='' cols="10" rows="3"></textarea>
          </div>
          <div className="">
            <label className='font-medium text-white text-lg md:text-xl' htmlFor="">WHAT HAS HAPPENED SO FAR? </label>
            <textarea name="extraDetails" defaultValue={extraDetails} onChange={(e) => setExtraDetails(e.target.value)} id="" className='bg-transparent border outline-none rounded-md w-full  p-2 text-white px-4 mt-3' placeholder='' cols="10" rows="3"></textarea>
          </div>
          <div className="">
            <label className='font-medium text-white text-lg md:text-xl' htmlFor="">WHAT’S ARE THE UPCOMING PLANS?</label>
            <textarea name="upcomingPlans" defaultValue={upcomingPlans} onChange={(e) => setUpcomingPlans(e.target.value)} id="" className='bg-transparent border outline-none rounded-md w-full  p-2 text-white px-4 mt-3' placeholder='' cols="10" rows="3"></textarea>
          </div>
          <div className="flex gap-6 justify-end">
            <div onClick={() => {
              decrement()
              setFormSwitch(0)}}
              className='bg-transparent border-white border px-8 py-2 rounded-md font-medium text-white text-lg md:text-xl ' >Back</div>
            <div onClick={() =>{ switching(2)
            }}
              className=' border border-white bg-white px-8 py-2 rounded-md font-medium text-[#000] text-lg md:text-xl cursor-pointer ' >Next 🚀</div>
          </div>

        </div>


        <div className={` md:w-2/5 grid md:grid-cols-1 p-5 py-14 md:px-16 gap-8 rounded-md ${formSwitch === 2 ? "grid" : "hidden"}`}>

          <div className="">
            <label className='font-medium text-white text-lg md:text-xl' htmlFor="">WHAT WAS/WILL BE READY UPON LAUNCH? </label>
            <textarea name="launchPlans" defaultValue={launchPlans} onChange={(e) => setLaunchPlans(e.target.value)} id="" className='bg-transparent border outline-none rounded-md w-full  p-2 text-white px-4 mt-3' placeholder='' cols="10" rows="3"></textarea>
          </div>
          <div className="">
            <label className='font-medium text-white text-lg md:text-xl' htmlFor="">FUN FACT </label>
            <textarea name="fun_Fact" defaultValue={fun_Fact} onChange={(e) => setFun_Fact(e.target.value)} id="" className='bg-transparent border outline-none rounded-md w-full  p-2 text-white px-4 mt-3' placeholder='' cols="10" rows="3"></textarea>
          </div>
           <div className="">
            <label className='font-medium text-white text-lg md:text-xl' htmlFor="">WEBSITE: </label>
            <input className='bg-transparent border outline-none rounded-md w-full  p-2 text-white px-4 mt-3' type="text" placeholder='Enter site Address' 
             name='website'
             defaultValue={website}
             onChange={(e) => setWebsite(e.target.value)}
            />
          </div>
          <div className="flex gap-6 justify-end">
            <div onClick={() => {
              decrement()
              setFormSwitch(1)}}
              className='bg-transparent border-white border px-8 py-2 rounded-md font-medium text-white text-lg md:text-xl ' >Back</div>
            <div onClick={() =>{
              switching(3)}}
              className=' border border-white bg-white px-8 py-2 rounded-md font-medium text-[#000] text-lg md:text-xl cursor-pointer ' >Next 🚀</div>
          </div>

        </div>




        <div className={` md:w-2/5 grid md:grid-cols-1 p-5 py-14 md:px-16 gap-8 rounded-md ${formSwitch === 3 ? "grid" : "hidden"}`}>

      
          <div className="">
            <label className='font-medium text-white text-lg md:text-xl' htmlFor="">TG: </label>
            <input className='bg-transparent border outline-none rounded-md w-full  p-2 text-white px-4 mt-3' type="text" placeholder='Enter tg link' 
             name='tg'
             defaultValue={tg}
             onChange={(e) => setTg(e.target.value)}
            />
          </div>
          <div className="">
            <label className='font-medium text-white text-lg md:text-xl' htmlFor="">TWITTER</label>
            <input className='bg-transparent border outline-none rounded-md w-full  p-2 text-white px-4 mt-3' type="text" placeholder='Enter twitter link' 
             name='twitter'
             defaultValue={twitter}
             onChange={(e) => setTwitter(e.target.value)}
            />
          </div>

          <div className="">
            <label className='font-medium text-white text-lg md:text-xl' htmlFor="">DApp </label>
            <input className='bg-transparent border outline-none rounded-md w-full  p-2 text-white px-4 mt-3' type="text" placeholder='Enter dapp' 
             name='Dapp'
             defaultValue={dapp}
             onChange={(e) => setDapp(e.target.value)}
            />
          </div>
          <div className="flex gap-6 justify-end">
            <div onClick={() => {
              decrement()
             setFormSwitch(2)}}
              className='bg-transparent border-white border px-8 py-2 rounded-md font-medium text-white text-lg md:text-xl ' >Back</div>
            <div onClick={() => {switching(4)
            }}
              className=' border border-white bg-white px-8 py-2 rounded-md font-medium text-[#000] text-lg md:text-xl cursor-pointer' >Next 🚀</div>
          </div>

        </div>



        <div className={` md:w-2/5 grid md:grid-cols-1 p-5 py-14 md:px-16 gap-8 rounded-md ${formSwitch === 4 ? "grid" : "hidden"}`}>

          <div className="">
            <label className='font-medium text-white text-lg md:text-xl' htmlFor="">CONTRACT</label>
            <input className='bg-transparent border outline-none rounded-md w-full  p-2 text-white px-4 mt-3' type="text" placeholder='Enter contract' 
             name='Contract_address'
             defaultValue={contract_address}
             onChange={(e) => setContract_address(e.target.value)}
            />
          </div>
          <div className="">
            <label className='font-medium text-white text-lg md:text-xl' htmlFor="">AUDIT</label>
            <input className='bg-transparent border outline-none rounded-md w-full  p-2 text-white px-4 mt-3' type="text" placeholder='Enter audit' 
             name='audit'
             defaultValue={audit}
             onChange={(e) => setAudit(e.target.value)}
            />
          </div>

          <div className="">
            <label className='font-medium text-white text-lg md:text-xl' htmlFor="">Project Logo</label>
            <input onChange={(e) => handleFileChange(e)} className='bg-transparent border outline-none rounded-md w-full  p-2 text-white px-4 mt-3' type="file" placeholder='Enter audit' 
             name='img_url'
             defaultValue={img_url}
            />
          </div>

          <div className="flex gap-6 justify-end">
            <div onClick={() => {
              decrement()
              setFormSwitch(3)}}
              className='bg-transparent border-white border px-8 py-2 rounded-md font-medium text-white text-lg md:text-xl ' >Back</div>
            <button
              className='border border-white bg-white  cursor-pointer px-8 py-2 rounded-md font-medium text-[#000] text-lg md:text-xl ' type="submit"  >  {loading ? <Miniloader loading={loading} /> : "Submit 🚀" }</button>
          </div>

        </div>

      </form>
    </div>
  )
}
