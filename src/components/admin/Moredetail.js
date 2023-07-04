import React, {useState, useEffect} from 'react';
import Footer from './Footer';
import Approvemodal from './Approvemodal';

export default function Moredetail({seeMore, setLoading, loading, setNotify, setNotifyType, setNotifyMsg, setSelected}) {


  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };


    
  const handleRemove = async () => {
    setLoading(true);
    console.log(seeMore._id, "checking seemore id");
  
    try {
      
      const upload = await fetch(`https://web3planet.bintfinance.org/remove-project/${seeMore._id}`, {
        method: 'POST',
      });
      
      console.log(upload, "upload");
      if(!upload) {
        setLoading(false); 
        setNotify(true);
        setNotifyType("warn");
        setNotifyMsg("Problems Removing data");
      } else {
        setLoading(false);
        setNotify(true);
        setNotifyType("success");
        setNotifyMsg("Project Removed");
        setSelected("home");
      }
    } catch (error) {
      console.error(error);
    }
  }



  return (
    <>

    {isModalOpen && (
            <Approvemodal 
               onClose={handleCloseModal} 
               setLoading={setLoading} 
               loading={loading} 
               projectSelected={seeMore}
               setNotify={setNotify}
               setNotifyType={setNotifyType}
               setNotifyMsg={setNotifyMsg}
                />

         )}
        <div className="w-full px-6 mx-auto mt-20">
        <div
            className="relative flex items-center p-0 mt-6 overflow-hidden bg-center bg-cover min-h-75 rounded-2xl"
            style={{
            backgroundImage: 'url("../assets/img/curved-images/curved0.jpg")',
            backgroundPositionY: "50%"
            }}
        >
            <span className="absolute inset-y-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-purple-700 to-pink-500 opacity-60" />
        </div>

<div className="relative flex flex-col flex-auto min-w-0 p-4 mx-6 -mt-16 overflow-hidden break-words border-0 shadow-blur rounded-2xl bg-white/80 bg-clip-border backdrop-blur-2xl backdrop-saturate-200">
  <div className="flex flex-wrap -mx-3">
    <div className="flex-none w-auto max-w-full px-3">
      <div className="text-base ease-soft-in-out h-18.5 w-18.5 relative inline-flex items-center justify-center rounded-xl text-white transition-all duration-200">
        <img
          src={seeMore?.img_url}
          alt="profile_image"
          className="shadow-soft-sm rounded-xl w-[15%] h-auto"
        />
      </div>
    </div>
    <div className="flex-none w-auto max-w-full px-3 my-auto">
      <div className="h-full">
        <h5 className="mb-1">{seeMore.tokenName}</h5>
        <p className="mb-0 font-semibold leading-normal text-sm">
          {seeMore.Contract_address}
        </p>
      </div>
    </div>
    <div className="w-full max-w-full px-3 mx-auto mt-4 sm:my-auto sm:mr-0 md:w-1/2 md:flex-none lg:w-4/12">
      <div className="relative right-0 ">
<ul
  className="relative flex flex-wrap gap-5 p-1 list-none bg-transparent rounded-xl"
  nav-pills=""
  role="tablist"
>
  {seeMore.approved ?
   <>
    <li className="z-30 flex-auto text-center">
      <div
        className="z-30 flex flex-col text-xs w-full px-0 py-1 mb-0 transition-all border-0 rounded-lg ease-soft-in-out bg-inherit text-slate-700"
        nav-link=""
        href="javascript:;"
        role="tab"
        aria-selected="true"
        active=""
      >
        <span className="ml-1 font-bold">clicks</span>
        <span>{seeMore.clicks}</span>
      </div>
    </li>
    <li className="z-30 flex-auto text-center">
      <div
        className="z-30 flex flex-col text-xs w-full px-0 py-1 mb-0 transition-all border-0 rounded-lg ease-soft-in-out bg-inherit text-slate-700"
        nav-link=""
        href="javascript:;"
        role="tab"
        aria-selected="false"
      >
        <span className="ml-1 font-bold">website</span>
        <span>{seeMore.website}</span>
      </div>
    </li>
    <li className="z-30 flex-auto text-center">
      <div
        className=" z-30 flex flex-col text-xs w-full px-0 py-1 mb-0 transition-colors border-0 rounded-lg ease-soft-in-out bg-inherit text-slate-700"
        nav-link=""
        href="javascript:;"
        role="tab"
        aria-selected="false"
      >
        <span className="ml-1 font-bold">votes</span>
        <span>{seeMore.votes}</span>
      </div>
    </li>
    <li className="z-30 flex-auto text-center">
      <div
        className=" z-30 flex flex-col text-xs w-full px-0 py-1 mb-0 transition-colors border-0 rounded-lg ease-soft-in-out bg-inherit text-slate-700"
        nav-link=""
        href="javascript:;"
        role="tab"
        aria-selected="false"
      >
        <span className="ml-1 font-bold">TG</span>
        <span>{seeMore.tg}</span>
      </div>
    </li>
    <li className="z-30 flex-auto text-center">
      <div
        className=" z-30 flex flex-col text-xs w-full px-0 py-1 mb-0 transition-colors border-0 rounded-lg ease-soft-in-out bg-inherit text-slate-700"
        nav-link=""
        href="javascript:;"
        role="tab"
        aria-selected="false"
      >
        <span className="ml-1 font-bold">Twitter</span>
        <span>{seeMore.twitter}</span>
      </div>
    </li>
    <li className="z-30 flex-auto text-center">
      <div
        className=" z-30 flex flex-col text-xs  w-full px-0 py-1 mb-0 transition-colors border-0 rounded-lg ease-soft-in-out bg-inherit text-slate-700"
        nav-link=""
        href="javascript:;"
        role="tab"
        aria-selected="false"
      >
        <span className="ml-1 font-bold">Dapp</span>
        <span>{seeMore.Dapp}</span>
      </div>
    </li>   
   </>

   :

   <>
    <li className="z-30 flex-auto text-center">
      <div
        className=" z-30 flex flex-col text-xs w-full px-0 py-1 mb-0 transition-colors border-0 rounded-lg ease-soft-in-out bg-inherit text-slate-700"
        nav-link=""
        href="javascript:;"
        role="tab"
        aria-selected="false"
      >
        <span className="ml-1 font-bold">TG</span>
        <span>{seeMore.tg}</span>
      </div>
    </li>
    <li className="z-30 flex-auto text-center">
      <div
        className=" z-30 flex flex-col text-xs w-full px-0 py-1 mb-0 transition-colors border-0 rounded-lg ease-soft-in-out bg-inherit text-slate-700"
        nav-link=""
        href="javascript:;"
        role="tab"
        aria-selected="false"
      >
        <span className="ml-1 font-bold">Twitter</span>
        <span> {seeMore.twitter} </span>
      </div>
    </li>
    <li className="z-30 flex-auto text-center">
      <div
        className=" z-30 flex flex-col text-xs  w-full px-0 py-1 mb-0 transition-colors border-0 rounded-lg ease-soft-in-out bg-inherit text-slate-700"
        nav-link=""
        href="javascript:;"
        role="tab"
        aria-selected="false"
      >
        <span className="ml-1 font-bold">Dapp</span>
        <span>{seeMore.Dapp}</span>
      </div>
    </li>
    <li className="z-30 flex-auto text-center">
      <div
        className="z-30 flex flex-col text-xs w-full px-0 py-1 mb-0 transition-all border-0 rounded-lg ease-soft-in-out bg-inherit text-slate-700"
        nav-link=""
        href="javascript:;"
        role="tab"
        aria-selected="false"
      >
        <span className="ml-1 font-bold">website</span>
        <span>{seeMore.website}</span>
      </div>
    </li>
   </>
  }

   {seeMore.approved ? 
   <button type="button"  class="inline-block px-6 py-3 mr-3 font-bold text-center uppercase align-middle transition-all bg-transparent border rounded-lg cursor-pointer border-fuchsia-500 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85 hover:shadow-soft-xs text-fuchsia-500" onClick={handleRemove} >Remove</button>
   :
   <div className="flex gap-5">
     <button type="button"  class="inline-block px-6 py-3 mr-3 font-bold text-center uppercase align-middle transition-all bg-transparent border rounded-lg cursor-pointer border-fuchsia-500 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85 hover:shadow-soft-xs text-fuchsia-500" onClick={handleRemove} >Remove</button>
     <button type="button"  class="inline-block px-6 py-3 mr-3 font-bold text-center uppercase align-middle transition-all bg-transparent border rounded-lg cursor-pointer border-fuchsia-500 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85 hover:shadow-soft-xs text-fuchsia-500" onClick={handleOpenModal} >Approve</button>
   </div>
   
   }
   
  <div
    className="z-10 absolute text-slate-700 rounded-lg bg-inherit flex-auto text-center bg-none border-0 block"
    moving-tab=""
    nav-link=""
    style={{
      boxShadow: "rgb(221, 221, 221) 0px 1px 5px 1px",
      padding: 0,
      transition: "all 0.5s ease 0s",
      transform: "translate3d(0px, 0px, 0px)",
      width: 76
    }}
  >
    <a
      className="z-30 block w-full px-0 py-1 mb-0 transition-all border-0 rounded-lg ease-soft-in-out text-slate-700 bg-white text-white shadow-soft-xxs"
      nav-link=""
      active=""
      href="javascript:;"
      role="tab"
      aria-selected="true"
      style={{ animation: "0.2s ease 0s 1 normal none running none" }}
    >
      -
    </a>
  </div>
</ul>

      </div>
    </div>
  </div>
</div>


        </div>


<div class="w-full p-6 mx-auto">
<div class="flex flex-wrap -mx-3">
<div class="w-full max-w-full px-3 xl:w-4/12">
<div class="relative flex flex-col h-full min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
<div class="p-4 pb-0 mb-0 bg-white border-b-0 rounded-t-2xl">
<h6 class="mb-0">Project Details</h6>
</div>
<div class="flex-auto p-4">
<h6 class="font-bold leading-tight uppercase text-xs text-slate-500">Uniqueness</h6>
<div class="flex flex-col pl-0 mb-0 rounded-lg">
  {seeMore?.unique}
</div>
<h6 class="mt-6 font-bold leading-tight uppercase text-xs text-slate-500">Launch plans</h6>
<ul class="flex flex-col pl-0 mb-0 rounded-lg">
 {seeMore?.launchPlans}
</ul>

</div>
</div>
</div>

<div class="w-full max-w-full px-3 lg-max:mt-6 xl:w-4/12">
<div class="relative flex flex-col h-full min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
<div class="p-4 pb-0 mb-0 bg-white border-b-0 rounded-t-2xl">
<div class="flex flex-wrap -mx-3">
<div class="flex items-center w-full max-w-full px-3 shrink-0 md:w-8/12 md:flex-none">
<h6 class="mb-0">Extra details</h6>
</div>
<div class="w-full max-w-full px-3 text-right shrink-0 md:w-4/12 md:flex-none">
<a href="javascript:;" data-target="tooltip_trigger" data-placement="top">
<i class="leading-normal fas fa-user-edit text-sm text-slate-400"></i>
</a>
<div data-target="tooltip" class="hidden px-2 py-1 text-center text-white bg-black rounded-lg text-sm" role="tooltip" data-popper-placement="top" style={{position: 'absolute', inset: 'auto auto 0px 0px', margin: '0px', transform: 'translate3d(989.5px, 40.5px, 0px)'}} data-popper-reference-hidden="" data-popper-escaped="">
Edit Profile
<div class="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']" data-popper-arrow="" style={{position: 'absolute', left: '0px', transform: 'translate3d(0px, 0px, 0px)'}}></div>
</div>
</div>
</div>
</div>
<div class="flex-auto p-4">
<p class="leading-normal text-sm">Extra details</p>
<hr class="h-px my-6 bg-transparent bg-gradient-to-r from-transparent via-white to-transparent" />
<ul class="flex flex-col pl-0 mb-0 rounded-lg">
<li class="relative block px-4 py-2 pt-0 pl-0 leading-normal bg-white border-0 rounded-t-lg text-sm text-inherit"><strong class="text-slate-700">Fun fact:</strong> &nbsp; About project</li>
<li className="">{seeMore?.extraDetails}</li>
</ul>
</div>
</div>
</div>
<div class="w-full max-w-full px-3 lg-max:mt-6 xl:w-4/12">
<div class="relative flex flex-col h-full min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
<div class="p-4 pb-0 mb-0 bg-white border-b-0 rounded-t-2xl">
<h6 class="mb-0">Upcoming Plans</h6>
</div>
<div class="flex-auto p-4">

<div class="flex flex-col pl-0 mb-0 rounded-lg">
  {seeMore?.upcomingPlans}
</div>

</div>
</div>
</div>
<div class="flex-none w-full max-w-full px-3 mt-6">
<div class="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
<div class="p-4 pb-0 mb-0 bg-white rounded-t-2xl">
<h6 class="mb-1">Projects</h6>
<p class="leading-normal text-sm">Token description</p>
</div>
<div class="flex-auto p-4">
<div class="flex flex-wrap -mx-3">
 {seeMore.tokenDescription}
</div>

</div>
</div>
</div>
</div>
<Footer />
</div>
</>
  )
}
