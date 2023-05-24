
import React, { useState, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import DetailsCanvas from './DetailsCanvas';
import Projects from './Projects';
import News from './News';
import Buy from './Buy';
import Chart from './Chart';
import { useFrame } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';



const Modal = ({ currentDetails, planetsMap, setOpenModal, position }) => {

  const [selected, setSelected] = useState("projects");
  const [divSize, setDivSize] = useState({ width: 500, height: 500 });






  const divRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (divRef.current) {
        const { width, height } = divRef.current.getBoundingClientRect();
        setDivSize({ width, height });
      }

    };

    handleResize(); // Calculate initial size
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const getView = () => {
    switch (selected) {
      case "projects":
        return <Projects details={currentDetails} />;
      case "buy":
        return <Buy details={currentDetails} />;
      case "chart":
        return <Chart details={currentDetails} />;
      case "news":
        return <News details={currentDetails} />;
      default:
        return <h1>Hi there nothing</h1>;
    };
  }


  return (
    <div className='bg-[#00000069] fixed h-screen overflow-y-scroll px-5 w-full top-0 z-30' >
      <div className="absolute text-gray-300 top-5 right-10">
        <button onClick={() => setOpenModal(!true)}>close</button>
      </div>
      <div className='absolute top-[50%] left-[50%] md:border  mt-8 md:mt-auto  border-[#fff] rounded-[3px] grid md:grid-cols-2  justify-center w-3/5 md:w-9/12 z-[99999] ' style={{ transform: 'translate(-50%, -50%)' }} >

        <div className="bg-[#000] md:h-auto h-48 relative flex justify-center items-center p-5" >
        

          <DetailsCanvas details={currentDetails} planetsMap={planetsMap} />
        </div>

        <div className="flex flex-col bg-[#f4f4f4] relative text-black border p-[5px]">
          {/* Top */}
          <div className="flex justify-around flex-wrap py-2 border-b">
            <div className={`${selected === 'projects' && 'border-b'} cursor-pointer`} onClick={() => setSelected("projects")}>Projects</div>
            <div className={`${selected === 'buy' && 'border-b'} cursor-pointer`} onClick={() => setSelected("buy")}>Buy</div>
            <div className={`${selected === 'chart' && 'border-b'} cursor-pointer`} onClick={() => setSelected("chart")}>Chart</div>
            <div className={`${selected === 'news' && 'border-b'} cursor-pointer`} onClick={() => setSelected("news")}>News</div>
          </div>
          {/* Bottom */}
          <div className="p-[5px] w-full md:h-[26rem] pt-4 mb-14  ">

            {getView()}
          </div>
          <div className="flex justify-around  absolute right-5 bottom-0 flex-wrap py-2">
            <img className='h-8' src="/icons8-discord.svg" alt="" />
            <img className='h-8' src="/icons8-telegram-app.svg" alt="" />
            <img className='h-8' src="/icons8-twitter.svg" alt="" />
            <img className='h-8' src="/bsc.svg" alt="" />


          </div>
        </div>


      </div>


    </div>
  );
};

export default Modal;