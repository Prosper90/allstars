import React from 'react'
import { Link } from 'react-router-dom'

function Home() {




    return (
        < >
            <div className="bg-cover relative  h-screen md:h-screen flex flex-col justify-center items-center bg-no-repeat hero-image md:bg-black">
                 <nav>
                   <div className="h-12 absolute top-8 left-8 rounded-2xl">
                     <img src="/photo_6010204748592036652_x.jpg" className='h-full w-full rounded-full' alt="" />
                   </div>
                 </nav>
                <div className="md:w-3/5 px-6 flex flex-col justify-center items-center -mt-16 md:-mt-44">
                    <h1 className='font-bold text-white text-2xl text-center md:text-4xl'>Welcome to  ALL-STARSVERSE</h1>
                    <p className='text-white text-lg md:text-2xl md:font-thin text-center'>Launch the space ship to discover the latest news, insights, and analysis from the different  cryptocurrencies planet in crypto space</p>
                    <div className="flex gap-5 mt-8">
                        <Link to="/planets" className='bg-[#ff9900] text-white rounded-md px-10 py-1 '>LAUNCH</Link>
                        <Link to="/new-project" className='text-[#fff] bg-transparent border relative z-40 border-[#fff] rounded-md px-6 py-1'>ADD Project</Link></div>
                </div>
            </div>
            <section className='overflow-y-scroll h-[68vh]  '>
                <div className="text-white pt-56 ml-6 md:ml-14  ">
                    <h1 className='font-bold text-white text-xl md:text-2xl'>Benefits</h1>
                    <p className='font-bold text-white text-sm mb-3 md:text-lg'>Crypto Space perfect resource for staying informed about</p>
                    <ul className='px-5 list-disc'>

                        <li>The latest trends</li>
                        <li>Market movements</li>
                        <li>Regulatory changes affecting the crypto industry </li>
                        <li>Latest crypto news</li>
                    </ul>
                <div className="flex justify-around absolute -bottom-72 md:right-12 flex-wrap py-2">
                    <img className='h-12' src="/icons8-discord.svg" alt="" />
                    <img className='h-12' src="/icons8-telegram-app.svg" alt="" />
                    <img className='h-12' src="/icons8-twitter.svg" alt="" />


                </div>
              </div>
            </section>

        </>
    )
}

export default Home