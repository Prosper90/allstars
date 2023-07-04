import React from 'react'; 

export default function Notifier({notifyType, notifyMsg}) {

  console.log(notifyType, "from notifyType in Notifier"); 
  return (
    <div 
         className={`fixed ${notifyType == "warn" ? "text-yellow-800 bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300" : "text-green-800 bg-green-50 dark:bg-gray-800 dark:text-green-400" } rounded-lg p-4 mb-4 text-sm  shadow-lg  flex flex-col justify-center items-start rounded-[5px] z-[999999999999] w-[98%] top-1 left-1 md:left-[35%] md:w-[250px] md:top-2 opacity-100`}>
      <div className="flex justify-start items-center gap-3">
        <span>
          {
            notifyType === "warn" ?
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#F59E0B"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-[#fff]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                  />
                </svg>
              :
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#10B981"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-[#fff]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

          }

        </span>
        <span className={`text-sm font-semibold`}>
          {
            notifyType === "warn" ?
            "Info"
            :
            "Proceed"
          }
        </span>
      </div>
        <div className={`font-light text-sm`}>{notifyMsg}</div> 

    </div>
  )
}
