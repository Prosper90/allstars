import React, {useState, useEffect} from 'react';
import Addapprove from './Addapprove';

export default function Addproject({setLoading, loading, setNotify, setNotifyType, setNotifyMsg}) {


const [tokenDescription, setTokenDescription] = useState('');
const [unique, setUnique] = useState('');
const [extraDetails, setExtraDetails] = useState('');
const [upcomingPlans, setUpcomingPlans] = useState('');
const [launchPlans, setLaunchPlans] = useState('');
const [fun_Fact, setFun_Fact] = useState('');
const [chain, setChain] = useState('');
const [img_url, setImg_url] = useState([]);
// const [planet_url, setPlanet_url] = useState('');
const [website, setWebsite] = useState('');
const [tg, setTg] = useState('');
const [dapp, setDapp] = useState('');
const [twitter, setTwitter] = useState('');
const [contract_address, setContract_address] = useState('');
const [audit, setAudit] = useState('');
const [tokenName, setTokenName] = useState();
const [rings, setRings] = useState(false);
const [approve, setApprove] = useState(false);
const [planetname, setPlanetName] = useState();

const [isModalOpen, setIsModalOpen] = useState(false);

const handleOpenModal = () => {
  setIsModalOpen(true);
};

const handleCloseModal = () => {
  setIsModalOpen(false);
};




//filter files
  const fileFilter = (file) => {
    // Reject a file 
    if (file.type === 'image/jpeg' || file.type === 'image/png') {
        return true;
    } else {
        return false;
    }
  };


  const submitData = async (e) => {
    e.preventDefault();
    //setLoading(true);
    /*

    const check = fileFilter(e.target.files[0]);
    if(!check) {
      console.log("Error here");
      return ;
    }

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
    formdata.append("website", website);
    formdata.append("tg", tg);
    formdata.append("dapp", dapp);
    formdata.append("twitter", twitter)
    formdata.append("contract_address", contract_address)
    formdata.append("audit", audit);
    formdata.append("rings", rings);
    formdata.append("approved", approve);
    formdata.append("planetname", planetname);
    formdata.append("img_url", img_url);

  
    console.log(formdata, "formdata check");
    */
    
    try {
      /*
      const upload = await fetch('https://web3planet.bintfinance.org/project/admin', {
        method: 'POST',
        body: formdata,
      });
      */
      const upload = false;
      console.log(upload, setNotifyType, "upload");
      if(!upload) {
        console.log("called Notifier");
        setNotify(true);
        setNotifyType("warn");
        setNotifyMsg("Problems uploading data");
      } else {
        setNotify(true);
        setNotifyType("success");
        setNotifyMsg("Project Approved");
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }
  
  
  
  
  useEffect(() => {
  
  }, [])


  return (
    <div className='mx-[35px] flex justify-start w-100'>
      {isModalOpen && (
        <Addapprove
          img_url={img_url}
          setImg_url={setImg_url}
          onClose={handleCloseModal}
          setRings={setRings}
          rings={rings}
          setApprove={setApprove}
          approve={approve}
          submitData={submitData}
          planetname={planetname}
          setPlanetName={setPlanetName}
          />
      )}
      <div className='w-100'>
         {/* <input type="text" placeholder="Project name" class="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"></input> */}

         <div className={`w-full grid md:grid-cols-1 p-5 py-14 md:px-16 gap-8 rounded-md`}>
          <div className="bg-[00ff00]">
            <label className='font-medium text-xs md:text-sm' htmlFor="">WHAT IS YOUR PROJECTS NAME</label>
            <input className='focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none' type="text" placeholder='Enter project name here' 
             name="tokenName"
             defaultValue={tokenName}
             onChange={(e) => setTokenName(e.target.value)}
             />
          </div>
          <div className="">
            <label className='font-medium text-xs md:text-sm' htmlFor="">WHAT CHAIN IS YOUR PROJECT ON</label>
            <input className='focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none' type="text" placeholder='Enter chain Address' 
             name='chain'
             defaultValue={chain}
             onChange={(e) => setChain(e.target.value)}
            />
          </div>
          <div className="">
            <label className='font-medium text-xs md:text-sm' htmlFor="">TELL US A BIT ABOUT YOUR PROJECT</label>
            <textarea name="tokenDescription" defaultValue={tokenDescription} onChange={(e) => setTokenDescription(e.target.value)} id="" className='focus:shadow-soft-primary-outline min-h-unset text-sm leading-5.6 ease-soft block h-auto w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none' placeholder='' cols="10" rows="3"></textarea>
          </div>

        </div>

        <div className={` w-full grid md:grid-cols-1 p-5 py-14 md:px-16 gap-8 rounded-md`}>

          <div className="">
            <label className='font-medium text-xs md:text-sm' htmlFor="">WHAT MAKES IT DIFFERENT/UNIQUE? </label>
            <textarea name="unique" defaultValue={unique} onChange={(e) => setUnique(e.target.value)} id="" className='focus:shadow-soft-primary-outline min-h-unset text-sm leading-5.6 ease-soft block h-auto w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none' placeholder='' cols="10" rows="3"></textarea>
          </div>
          <div className="">
            <label className='font-medium text-xs md:text-sm' htmlFor="">WHAT HAS HAPPENED SO FAR? </label>
            <textarea name="extraDetails" defaultValue={extraDetails} onChange={(e) => setExtraDetails(e.target.value)} id="" className='focus:shadow-soft-primary-outline min-h-unset text-sm leading-5.6 ease-soft block h-auto w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none' placeholder='' cols="10" rows="3"></textarea>
          </div>
          <div className="">
            <label className='font-medium text-xs md:text-sm' htmlFor="">WHAT’S ARE THE UPCOMING PLANS?</label>
            <textarea name="upcomingPlans" defaultValue={upcomingPlans} onChange={(e) => setUpcomingPlans(e.target.value)} id="" className='focus:shadow-soft-primary-outline min-h-unset text-sm leading-5.6 ease-soft block h-auto w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none' placeholder='' cols="10" rows="3"></textarea>
          </div>


        </div>


        <div className={` w-full grid md:grid-cols-1 p-5 py-14 md:px-16 gap-8 rounded-md`}>

          <div className="">
            <label className='font-medium text-xs md:text-sm' htmlFor="">WHAT WAS/WILL BE READY UPON LAUNCH? </label>
            <textarea name="launchPlans" defaultValue={launchPlans} onChange={(e) => setLaunchPlans(e.target.value)} id="" className='focus:shadow-soft-primary-outline min-h-unset text-sm leading-5.6 ease-soft block h-auto w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none' placeholder='' cols="10" rows="3"></textarea>
          </div>
          <div className="">
            <label className='font-medium  text-xs md:text-sm' htmlFor="">FUN FACT </label>
            <textarea name="fun_Fact" defaultValue={fun_Fact} onChange={(e) => setFun_Fact(e.target.value)} id="" className='focus:shadow-soft-primary-outline min-h-unset text-sm leading-5.6 ease-soft block h-auto w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none' placeholder='' cols="10" rows="3"></textarea>
          </div>
           <div className="">
            <label className='font-medium text-xs md:text-sm' htmlFor="">WEBSITE: </label>
            <input className='focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none' type="text" placeholder='Enter site Address' 
             name='website'
             defaultValue={website}
             onChange={(e) => setWebsite(e.target.value)}
            />
          </div>

        </div>




        <div className={` w-full grid md:grid-cols-1 p-5 py-14 md:px-16 gap-8 rounded-md`}>

      
          <div className="">
            <label className='font-medium text-xs md:text-sm' htmlFor="">TG: </label>
            <input className='focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none' type="text" placeholder='Enter tg link' 
             name='tg'
             defaultValue={tg}
             onChange={(e) => setTg(e.target.value)}
            />
          </div>
          <div className="">
            <label className='font-medium text-lg md:text-xl' htmlFor="">TWITTER</label>
            <input className='focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none' type="text" placeholder='Enter twitter link' 
             name='twitter'
             defaultValue={twitter}
             onChange={(e) => setTwitter(e.target.value)}
            />
          </div>

          <div className="">
            <label className='font-medium text-xs md:text-sm' htmlFor="">DApp </label>
            <input className='focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none' type="text" placeholder='Enter dapp' 
             name='Dapp'
             defaultValue={dapp}
             onChange={(e) => setDapp(e.target.value)}
            />
          </div>

        </div>



        <div className={` w-full grid md:grid-cols-1 p-5 py-14 md:px-16 gap-8 rounded-md`}>

          <div className="">
            <label className='font-medium text-xs md:text-sm' htmlFor="">CONTRACT</label>
            <input className='focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none' type="text" placeholder='Enter contract' 
             name='Contract_address'
             defaultValue={contract_address}
             onChange={(e) => setContract_address(e.target.value)}
            />
          </div>
          <div className="">
            <label className='font-medium text-xs md:text-sm' htmlFor="">AUDIT</label>
            <input className='focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none' type="text" placeholder='Enter audit' 
             name='audit'
             defaultValue={audit}
             onChange={(e) => setAudit(e.target.value)}
            />
          </div>

          <div className="">
            <label className='font-medium text-xs md:text-sm' htmlFor="">Project Logo</label>
            <input onChange={(e) => setImg_url(e.target.files[0])} className='focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none' type="file" placeholder='Enter audit' 
             name='img_url'
             defaultValue={img_url}
            />
          </div>

          <div className="flex gap-6 justify-end">
            <div
              className=' bg-gradient-to-tl border border-white from-purple-700 to-pink-500 px-8 py-2 rounded-md font-medium text-white text-sm md:text-md ' type="submit" onClick={handleOpenModal} >Submit 🚀</div>
          </div>

        </div>
         
      </div>
    </div>
  )
}
