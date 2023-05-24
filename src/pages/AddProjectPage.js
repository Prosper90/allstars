import React, { useState } from 'react'
import { Stars } from '../components/planets-utils/maincanvas'
import { Canvas } from '@react-three/fiber'
import { Link } from 'react-router-dom'

export default function AddProjectPage() {
  const [formSwitch, setFormSwitch] = useState(0)


  return (
    <div className='h-screen relative'>
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
      <div className=" flex justify-center flex-col items-center gap-6 absolute top-0 md:w-full h-[100dvh]" style={{ height: "100vh" }}>
        {/* <h1 className='text-white font-bold text-3xl md:text-4xl'>ALL-STARS INTRODUCES YOU TO THE ALL-STARSVERSE</h1> */}
        <div className={` md:w-2/5 grid md:grid-cols-1 p-5 py-14 md:px-16 gap-8 rounded-md ${formSwitch === 0 ? "grid" : "hidden"}`}>
          <div className="">
            <label className='font-medium text-white text-lg md:text-xl' htmlFor="">WHAT IS YOUR PROJECTS NAME</label>
            <input className='bg-transparent border outline-none rounded-md w-full  p-2 text-white px-4 mt-3' type="text" placeholder='Enter project name here' />
          </div>
          <div className="">
            <label className='font-medium text-white text-lg md:text-xl' htmlFor="">WHAT IS YOUR CHAIN ADDRESS</label>
            <input className='bg-transparent border outline-none rounded-md w-full  p-2 text-white px-4 mt-3' type="text" placeholder='Enter chain Address' />
          </div>
          <div className="">
            <label className='font-medium text-white text-lg md:text-xl' htmlFor="">TELL US A BIT ABOUT YOUR PROJECT</label>
            <textarea name="" id="" className='bg-transparent border outline-none rounded-md w-full  p-2 text-white px-4 mt-3' placeholder='' cols="10" rows="3"></textarea>
          </div>
          <div className="flex gap-6 justify-end">
            <Link to="/"
              className='bg-transparent border-white border px-8 py-2 rounded-md font-medium text-white text-lg md:text-xl ' >Back</Link>
            <button onClick={() => setFormSwitch(1)}
              className='bg-[#ff9000] px-8 py-2 rounded-md font-medium text-white text-lg md:text-xl ' >Next 🚀</button>
          </div>

        </div>

        <div className={` md:w-2/5 grid md:grid-cols-1 p-5 py-14 md:px-16 gap-8 rounded-md ${formSwitch === 1 ? "grid" : "hidden"}`}>

          <div className="">
            <label className='font-medium text-white text-lg md:text-xl' htmlFor="">WHAT MAKES IT DIFFERENT/UNIQUE? </label>
            <textarea name="" id="" className='bg-transparent border outline-none rounded-md w-full  p-2 text-white px-4 mt-3' placeholder='' cols="10" rows="3"></textarea>
          </div>
          <div className="">
            <label className='font-medium text-white text-lg md:text-xl' htmlFor="">WHAT HAS HAPPENED SO FAR? </label>
            <textarea name="" id="" className='bg-transparent border outline-none rounded-md w-full  p-2 text-white px-4 mt-3' placeholder='' cols="10" rows="3"></textarea>
          </div>
          <div className="">
            <label className='font-medium text-white text-lg md:text-xl' htmlFor="">WHAT’S ARE THE UPCOMING PLANS?</label>
            <textarea name="" id="" className='bg-transparent border outline-none rounded-md w-full  p-2 text-white px-4 mt-3' placeholder='' cols="10" rows="3"></textarea>
          </div>
          <div className="flex gap-6 justify-end">
            <button onClick={() => setFormSwitch(0)}
              className='bg-transparent border-white border px-8 py-2 rounded-md font-medium text-white text-lg md:text-xl ' >Back</button>
            <button onClick={() => setFormSwitch(2)}
              className='bg-[#ff9000] px-8 py-2 rounded-md font-medium text-white text-lg md:text-xl ' >Next 🚀</button>
          </div>

        </div>


        <div className={` md:w-2/5 grid md:grid-cols-1 p-5 py-14 md:px-16 gap-8 rounded-md ${formSwitch === 2 ? "grid" : "hidden"}`}>

          <div className="">
            <label className='font-medium text-white text-lg md:text-xl' htmlFor="">WHAT WAS/WILL BE READY UPON LAUNCH? </label>
            <textarea name="" id="" className='bg-transparent border outline-none rounded-md w-full  p-2 text-white px-4 mt-3' placeholder='' cols="10" rows="3"></textarea>
          </div>
          <div className="">
            <label className='font-medium text-white text-lg md:text-xl' htmlFor="">FUN FACT </label>
            <textarea name="" id="" className='bg-transparent border outline-none rounded-md w-full  p-2 text-white px-4 mt-3' placeholder='' cols="10" rows="3"></textarea>
          </div>
           <div className="">
            <label className='font-medium text-white text-lg md:text-xl' htmlFor="">WEBSITE: </label>
            <input className='bg-transparent border outline-none rounded-md w-full  p-2 text-white px-4 mt-3' type="text" placeholder='Enter site Address' />
          </div>
          <div className="flex gap-6 justify-end">
            <button onClick={() => setFormSwitch(1)}
              className='bg-transparent border-white border px-8 py-2 rounded-md font-medium text-white text-lg md:text-xl ' >Back</button>
            <button onClick={() => setFormSwitch(3)}
              className='bg-[#ff9000] px-8 py-2 rounded-md font-medium text-white text-lg md:text-xl ' >Next 🚀</button>
          </div>

        </div>




        <div className={` md:w-2/5 grid md:grid-cols-1 p-5 py-14 md:px-16 gap-8 rounded-md ${formSwitch === 3 ? "grid" : "hidden"}`}>

      
          <div className="">
            <label className='font-medium text-white text-lg md:text-xl' htmlFor="">TG: </label>
            <input className='bg-transparent border outline-none rounded-md w-full  p-2 text-white px-4 mt-3' type="text" placeholder='Enter tg link' />
          </div>
          <div className="">
            <label className='font-medium text-white text-lg md:text-xl' htmlFor="">TWITTER</label>
            <input className='bg-transparent border outline-none rounded-md w-full  p-2 text-white px-4 mt-3' type="text" placeholder='Enter twitter link' />
          </div>

          <div className="">
            <label className='font-medium text-white text-lg md:text-xl' htmlFor="">DApp </label>
            <input className='bg-transparent border outline-none rounded-md w-full  p-2 text-white px-4 mt-3' type="text" placeholder='Enter dapp' />
          </div>
          <div className="flex gap-6 justify-end">
            <button onClick={() => setFormSwitch(2)}
              className='bg-transparent border-white border px-8 py-2 rounded-md font-medium text-white text-lg md:text-xl ' >Back</button>
            <button onClick={() => setFormSwitch(4)}
              className='bg-[#ff9000] px-8 py-2 rounded-md font-medium text-white text-lg md:text-xl ' >Next 🚀</button>
          </div>

        </div>



        <div className={` md:w-2/5 grid md:grid-cols-1 p-5 py-14 md:px-16 gap-8 rounded-md ${formSwitch === 4 ? "grid" : "hidden"}`}>

          <div className="">
            <label className='font-medium text-white text-lg md:text-xl' htmlFor="">CONTRACT</label>
            <input className='bg-transparent border outline-none rounded-md w-full  p-2 text-white px-4 mt-3' type="text" placeholder='Enter contract' />
          </div>
          <div className="">
            <label className='font-medium text-white text-lg md:text-xl' htmlFor="">AUDIT</label>
            <input className='bg-transparent border outline-none rounded-md w-full  p-2 text-white px-4 mt-3' type="text" placeholder='Enter audit' />
          </div>

          <div className="flex gap-6 justify-end">
            <button onClick={() => setFormSwitch(3)}
              className='bg-transparent border-white border px-8 py-2 rounded-md font-medium text-white text-lg md:text-xl ' >Back</button>
            <button
              className='bg-[#ff9000] px-8 py-2 rounded-md font-medium text-white text-lg md:text-xl ' >Submit 🚀</button>
          </div>

        </div>

      </div>
    </div>
  )
}
