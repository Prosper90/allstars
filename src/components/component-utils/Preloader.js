import React from 'react'

export default function Preloader() {
  return (
    <div className=" fixed w-[100%] h-[100%] top-[0] left-[0] bg-[rgb(0,0,0)] z-[9999999999] flex justify-center items-center" style={{
        background: 'rgb(0,0,0)'
    }} >
        <svg className='w-[15%] h-[19%]' viewBox="0 0 301 301" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="preloader">
            <path id="ring-orbit" d="M278.771 171.926C266.854 242.852 199.697 290.688 128.771 278.771C57.8451 266.854 10.0088 199.697 21.9257 128.771C33.8425 57.8452 101 10.0089 171.926 21.9258C242.852 33.8426 290.688 101 278.771 171.926ZM25.1491 129.313C13.5313 198.458 60.1669 263.93 129.313 275.548C198.458 287.165 263.93 240.53 275.548 171.384C287.165 102.239 240.53 36.7669 171.384 25.1492C102.238 13.5314 36.7668 60.167 25.1491 129.313Z" fill="#D9D9D9"/>
            <circle id="mini-planet" cx="26.29" cy="116.29" r="14.29" fill="#E7068C"/>
            </g>
        </svg>
    </div>
  )
}
