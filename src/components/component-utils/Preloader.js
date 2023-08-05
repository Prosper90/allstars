import React from 'react'

export default function Preloader() {
  return (
    <div className=" fixed w-[100%] h-[100%] top-[0] left-[0] bg-[rgb(0,0,0)] z-[9999999999] flex justify-center items-center" style={{
        background: 'rgb(0,0,0)'
    }} >
      <svg className="loader" viewBox="0 0 100 100">
        <circle className="moon moon-back" />
        <circle className="planet" />
        <circle className="moon moon-front" />
      </svg>
    </div>
  )
}
