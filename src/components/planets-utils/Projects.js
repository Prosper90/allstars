import React from 'react'

function Projects({ details }) {
  return (
    <>
      <div className='text-black flex flex-col justify-start  w-100'>

        <div className="flex justify-center items-center p-2 w-[8rem] bg-gray-200 mb-2 ">
          <img src={details.img_url} alt='img-logo' className='rounded w-28 h-28' />
        </div>

        <div className="flex gap-6  flex-wrap items-center  py-4  pr-6">
          <div className="bg-gray-200 border flex rounded-md py-1 text-sm px-3">
            <img className='h-5' src="/1027.png" alt="" />
            0xdac17...
          </div>
          <div className="bg-gray-200 border flex rounded-md py-1 text-sm px-3">
            <img className='h-5' src="/avatar.svg" alt="" />
            1290
          </div>

        </div>

        <div className="bg-gray-200 p-4 rounded-sm">
          {details.tokenDescription}
        </div>

      </div>
    </>
  )
}

export default Projects