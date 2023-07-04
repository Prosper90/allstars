import React from 'react'

export default function Topnav({location, setNavbar, navbar}) {
  return (
    <nav
    className="relative flex items-center justify-between px-0 py-2 mx-6 transition-all shadow-none duration-250 ease-soft-in rounded-2xl lg:flex-nowrap lg:justify-start"
    navbar-main=""
    navbar-scroll="true"
    >
    <div className="flex items-center justify-between w-full px-4 py-1 mx-auto flex-wrap-inherit">
        <nav>
        <ol className="flex flex-wrap pt-1 mr-12 bg-transparent rounded-lg sm:mr-16">
            <li className="leading-normal text-sm">
            <a className="opacity-50 text-slate-700" href="javascript:;">
                Pages
            </a>
            </li>
            <li
            className="text-sm pl-2 capitalize leading-normal text-slate-700 before:float-left before:pr-2 before:text-gray-600 before:content-['/']"
            aria-current="page"
            >
            {location == "home" ? "Dashboard" : location == "projects" ? "Projects" : location = "addproject" ? "Add projects" : "MoreDetails"}
            </li>
        </ol>

          <h6 className="mb-0 font-bold capitalize">{location == "home" ? "Dashboard" : location == "projects" ? "Projects" : location = "addproject" ? "Add projects" : location !== "home" || location !== "projects" || location !== "addproject" && "MoreDetails"}</h6>
        </nav>
        

    </div>

      <button onClick={() => setNavbar(!navbar)} className=" font-serif border p-2 rounded-md md:hidden flex items-end text-xs flex-col gap-1.5 outline-none  ">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" >
            <path
              fill="currentColor"
              d="M4 18q-.425 0-.713-.288T3 17q0-.425.288-.713T4 16h16q.425 0 .713.288T21 17q0 .425-.288.713T20 18H4Zm0-5q-.425 0-.713-.288T3 12q0-.425.288-.713T4 11h16q.425 0 .713.288T21 12q0 .425-.288.713T20 13H4Zm0-5q-.425 0-.713-.288T3 7q0-.425.288-.713T4 6h16q.425 0 .713.288T21 7q0 .425-.288.713T20 8H4Z"
            />
        </svg>
      </button>
    </nav>
  )
}
