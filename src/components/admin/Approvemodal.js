import React, { useEffect, useRef, useState } from 'react';

const Approvemodal = ({ onClose, projectSelected, setLoading, loading, setNotify, setNotifyType, setNotifyMsg }) => {

    const modalRef = useRef(null);
    const [isChecked, setIschecked] = useState(false);
    const [planetname, setPlanetName] = useState();
    const [img_url, setImg_url] = useState();


    const submitData = async (e) => {
        e.preventDefault();
        setLoading(true);
        console.log(img_url, "checking state");
        console.log("check Running");
        const formdata = new FormData();
        formdata.append("ring", isChecked);
        //formdata.append("img_url", img_url);
        console.log(planetname, "getting planet name");
        formdata.append("planetname", planetname);

      
        console.log(formdata, "formdata check");
        console.log(projectSelected._id, "id");
        //64918bbc84ae4f50988dbf44
        //projectSelected._id
        
        try {
          const upload = await fetch(`https://web3planet.bintfinance.org/add-new-planet/${projectSelected._id}/${planetname}`, {
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
            setNotifyMsg("Project Approved");
          }
          setLoading(false);
        } catch (error) {
          console.error(error);
        }
      }

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
          onClose();
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [onClose]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-gray-900 z-[99]">
      <form ref={modalRef} className="bg-white rounded-lg p-6 flex flex-col gap-6">
         <h3 className='text-center text-[#000]'>Project to approve</h3>
          {/*  drop down to select planet type */}
          <div class="relative">
            <select class="block appearance-none w-full py-2 pl-3 pr-10 leading-tight bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" value={planetname} onChange={(e) => setPlanetName(e.target.value)}>
              <option>Select a Planet</option>
              <option>earth</option>
              <option>mecury</option>
              <option>venus</option>
              <option>jupiter</option>
              <option>mars</option>
              <option>saturn</option>
              <option>uranus</option>
              <option>naptune</option>
            </select>
            <div class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <svg class="w-5 h-5 text-gray-400" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                <path d="M7 7l3-3 3 3M7 13l3 3 3-3" />
              </svg>
            </div>
        </div>
        {/*  drop down to select planet type */}
         <div class="min-h-6 mb-0.5 flex items-center">
            <input id="remember" class="rounded-10 duration-300 ease-soft-in-out after:rounded-circle after:shadow-soft-2xl after:duration-300 checked:after:translate-x-5.3 h-5 mt-0.5 relative float-left w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-slate-800/95 checked:bg-slate-800/95 checked:bg-none checked:bg-right" 
            type="checkbox"
            checked={isChecked}
            onChange={(e) => setIschecked(e.target.checked)} 
            />
            <label for="remember" class="inline-block pl-3 mb-0 ml-0 font-normal cursor-pointer select-none text-sm text-slate-700">Planet rings ?</label>
         </div>
         <button type="button" class="inline-block px-6 py-3 font-bold text-center text-white uppercase align-middle transition-all rounded-lg cursor-pointer bg-gradient-to-tl from-purple-700 to-pink-500 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85 hover:shadow-soft-xs" onClick={(e) => submitData(e)}>Approve</button>
      </form>
    </div>
  );
};

export default Approvemodal;