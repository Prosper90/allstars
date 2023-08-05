import React, {useState, useEffect} from 'react'

function News({details}) {
   
  const [active, setActive] = useState();
  const [previousActive, setPreviousActive] = useState();


  const data = [ 
     "✨ABOUT",
     "✨UNIQUE ATTRIBUTES", 
     "✨WHAT HAS HAPPENED SO FAR", 
     "✨UPCOMING PLANS",
     "✨WHAT WAS/WILL BE DONE AT LAUNCH",
     "✨FUN FACT",
    ]

  const openMore = (index) => {
    if(previousActive === index) {
      setActive()
      setPreviousActive()
    } else {
      setActive(index)
      setPreviousActive(index)
    }


  }

  return (
    <div className='md:w-96 w-full flex flex-col justify-center gap-3 text-[#fff]'>
      {data.map((data, index) => (
          <div className="bg-[#eeeade1f] p-3 w-100 cursor-pointer" key={index} onClick={(e) => openMore(index)}>
            <div className="">{data}</div>

            <div className={`mt-5 ${index !== active && "hidden"}`}>
              {index === 0 ? details.tokenDescription : index === 1 ? details.unique : index === 2 ? details.extraDetails : index === 3 ? details.upcomingPlans : index === 4 ? details.launchPlans : details.fun_Fact }
            </div>

          </div>
      ))}

    </div>
  )
}

export default News