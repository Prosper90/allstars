import React from 'react'

export default function Projects({setSeeMore, allProjects, setSelected }) {

  const getDate = (dataDate) => {
    const formatted = new Date(dataDate);
    return formatted.toLocaleDateString;
  }

  console.log(allProjects, "all projects");


  const openMore = (data) => {
    setSeeMore(data);
    setSelected("moredetails");
  }
  
  return (
<div className="flex flex-wrap -mx-3">
  <div className="flex-none w-full max-w-full px-3 mx-[21px]">
    <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border">
      <div className="p-6 pb-0 mb-0 bg-white border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
        <h6>Projects List</h6>
      </div>
      <div className="flex-auto px-0 pt-0 pb-2">
        <div className="p-0 overflow-x-auto">
          <table className="items-center w-full mb-0 align-top border-gray-200 text-slate-500">
            <thead className="align-bottom">
              <tr>
                <th className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                  Name
                </th>
                <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                  Owner
                </th>
                <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                  Subscription
                </th>
                <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                  Date added
                </th>
                <th className="px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-gray-200 border-solid shadow-none tracking-none whitespace-nowrap text-slate-400 opacity-70" />
              </tr>
            </thead>
            <tbody>
              {allProjects?.map((data, index) => (
                <tr key={index}>
                <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                  <div className="flex px-2 py-1">
                    <div>
                      <img
                        src={data?.img_url}
                        className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-soft-in-out h-9 w-9 rounded-xl"
                        alt="user1"
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h6 className="mb-0 text-sm leading-normal">
                        {data?.tokenName}
                      </h6>
                      <p className="mb-0 text-xs leading-tight text-slate-400">
                        {data?.Contract_address}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                  <p className="mb-0 text-xs font-semibold leading-tight">
                    {data?.tg}
                  </p>
                  <p className="mb-0 text-xs leading-tight text-slate-400">
                    {data?.website}
                  </p>
                </td>
                <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                  {
                    data?.subscription ?
                    <span className="bg-gradient-to-tl from-green-600 to-lime-400 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white rounded px-[5px] py-[5px]">
                      Ongoing
                    </span>
                    :
                    <span className="bg-gradient-to-tl from-slate-600 to-slate-300 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white rounded px-[5px] py-[5px]">
                      Ended
                    </span>
                  }

                </td>
                <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                  <span className="text-xs font-semibold leading-tight text-slate-400">
                    {getDate(data.dateandtime)} 
                  </span>
                </td>
                <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                  <div
                    className="text-xs font-semibold leading-tight text-slate-400 cursor-pointer"
                    onClick={() => openMore(data)}
                  >
                    {" "}
                    more{" "}
                  </div>
                </td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}
